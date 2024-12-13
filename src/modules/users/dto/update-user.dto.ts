import { IsBoolean, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @IsBoolean()
  @IsOptional()
  isMetricSystemChoosed: boolean;
}
