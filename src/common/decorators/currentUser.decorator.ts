import { createParamDecorator, ExecutionContext } from '@nestjs/common';

import { JwtPayload } from '@/modules/auth/dto/jwtPayload.dto';

export const CurrentUser = createParamDecorator((data: keyof any, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  const user = request.user as JwtPayload;
  return data ? user[data] : user;
});
