import { BadRequestException, createParamDecorator, ExecutionContext } from '@nestjs/common';

import { isUUID } from 'class-validator';

export const ParamUUID = createParamDecorator((paramName: string, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  const param = request.params[paramName];
  const isValid = isUUID(param);

  if (isValid) {
    return param;
  } else {
    throw new BadRequestException('Validation failed (uuid is expected)');
  }
});
