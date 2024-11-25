import { UserCredentialsDto } from './user-credentials.dto';

export type AuthPayload = UserCredentialsDto & {
  accessToken: string;
};
