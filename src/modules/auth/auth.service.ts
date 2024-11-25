import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcrypt';

import { UsersService } from '@/modules/users/users.service';

import { AuthPayload } from './dto/auth-payload.dto';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { UserCredentialsDto } from './dto/user-credentials.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService
  ) {}

  async validateUser({ username, password }: LoginDto): Promise<UserCredentialsDto | null> {
    const user = await this.usersService.findOneByUsername(username);

    if (user) {
      const isPasswordMatch = await bcrypt.compare(password, user.password);

      return isPasswordMatch
        ? {
            username: user.username,
            userId: user.id,
            isMetricSystemChoosed: user.isMetricSystemChoosed,
          }
        : null;
    }

    return null;
  }

  async authenticate(userCredentials: UserCredentialsDto): Promise<AuthPayload> {
    const { isMetricSystemChoosed, ...credentials } = userCredentials;
    const accessToken = await this.jwtService.signAsync(credentials);

    return { accessToken, isMetricSystemChoosed, ...credentials };
  }

  async register({ password, ...rest }: RegisterDto): Promise<AuthPayload> {
    const passwordHash = await bcrypt.hash(
      password,
      Number(this.configService.getOrThrow('SALT_ROUNDS'))
    );

    const { username, id, isMetricSystemChoosed } = await this.usersService.create({
      ...rest,
      password: passwordHash,
    });

    const payload = await this.authenticate({ username, userId: id, isMetricSystemChoosed });

    return payload;
  }
}
