import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

import { Public } from '@/common/decorators/public.decorator';

import { ExerciseTranslatedDto } from './dto/exercise-translated.dto';
import { ExerciseTranslatedDetailsDto } from './dto/exercise-translated-details.dto';
import { ExercisesService } from './exercises.service';

@Public()
@Controller('exercises')
export class ExercisesController {
  constructor(private readonly exercisesService: ExercisesService) {}

  @Get(':language')
  async getAll(@Param('language') language: string): Promise<ExerciseTranslatedDto[]> {
    return await this.exercisesService.findAll(language);
  }

  @Get('/details/:id')
  async getOne(@Param('id', ParseIntPipe) id: number): Promise<ExerciseTranslatedDetailsDto> {
    return await this.exercisesService.findDetails(id);
  }
}
