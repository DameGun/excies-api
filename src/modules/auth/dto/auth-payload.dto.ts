import { PartialType } from '@nestjs/swagger';

import { UserCredentialsDto } from './user-credentials.dto';

export class AuthPayload extends PartialType(UserCredentialsDto) {
  accessToken: string;
}
