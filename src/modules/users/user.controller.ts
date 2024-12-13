import { Body, Controller, Patch } from '@nestjs/common';

import { ParamUUID } from '@/common/decorators/param-uuid.decorator';

import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Patch(':id')
  async update(@ParamUUID('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<User> {
    return await this.userService.update(id, updateUserDto);
  }
}
