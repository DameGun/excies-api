import { UserCredentialsDto } from './userCredentials.dto';

export type AuthPayload = UserCredentialsDto & {
  accessToken: string;
};
