import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class RegisterDto {
  @IsNotEmpty()
  username: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  isMetricSystemChoosed: boolean;
}
