import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

import { LanguageQueryParam } from '@/common/decorators/language-query-param.decorator';
import { Public } from '@/common/decorators/public.decorator';

import { ExerciseTranslatedDetailsDto, ExerciseTranslatedDto } from './dto';
import { ExercisesService } from './exercises.service';

@Public()
@Controller('exercises')
export class ExercisesController {
  constructor(private readonly exercisesService: ExercisesService) {}

  @Get()
  async getAll(@LanguageQueryParam() language: string): Promise<ExerciseTranslatedDto[]> {
    return await this.exercisesService.findAll(language);
  }

  @Get('/:id/details')
  async getOne(@Param('id', ParseIntPipe) id: number): Promise<ExerciseTranslatedDetailsDto> {
    return await this.exercisesService.findDetails(id);
  }
}
