import { JwtPayload } from './jwtPayload.dto';

export type UserCredentialsDto = JwtPayload & {
  isMetricSystemChoosed: boolean;
};
