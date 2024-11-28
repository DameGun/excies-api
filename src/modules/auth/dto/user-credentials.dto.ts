import { PartialType } from '@nestjs/swagger';

import { JwtPayload } from './jwt-payload.dto';

export class UserCredentialsDto extends PartialType(JwtPayload) {
  isMetricSystemChoosed: boolean;
}
