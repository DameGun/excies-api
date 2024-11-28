import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const DEFAULT_LANGUAGE = 'en';

export const LanguageQueryParam = createParamDecorator((_: keyof any, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  const language = request.query.language;
  return language ? language : DEFAULT_LANGUAGE;
});
