import { createParamDecorator, ExecutionContext } from '@nestjs/common';

import { DEFAULT_LANGUAGE } from '@/constants/language.constants';

export const LanguageQueryParam = createParamDecorator((_: keyof any, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  const language = request.query.language;
  return language ? language : DEFAULT_LANGUAGE;
});
