import { JwtPayload } from './jwt-payload.dto';

export type UserCredentialsDto = JwtPayload & {
  isMetricSystemChoosed: boolean;
};
