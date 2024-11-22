import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { ExerciseTranslatedDto } from './dto/exerciseTranslated.dto';
import { ExerciseTranslatedDetailsDto } from './dto/exerciseTranslatedDetails.dto';
import { ExerciseTranslated } from './entities/exerciseTranslated.entity';

@Injectable()
export class ExercisesService {
  constructor(
    @InjectRepository(ExerciseTranslated)
    private readonly exerciseRepository: Repository<ExerciseTranslated>
  ) {}

  async findAll(language: string): Promise<ExerciseTranslatedDto[]> {
    const exercises = await this.exerciseRepository.find({
      select: {
        id: true,
        name: true,
        exerciseId: true,
      },
      where: {
        language,
      },
    });

    return exercises;
  }

  async findDetails(id: number): Promise<ExerciseTranslatedDetailsDto> {
    const details = await this.exerciseRepository.findOne({
      where: {
        id,
      },
      select: {
        id: true,
        description: true,
        exerciseId: true,
      },
    });

    if (!details) {
      throw new NotFoundException();
    }

    return details;
  }
}
