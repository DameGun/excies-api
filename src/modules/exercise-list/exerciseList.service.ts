import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { CreateExerciseListDto } from './dto/createExerciseList.dto';
import { ExerciseListDto } from './dto/exerciseList.dto';
import { UpdateExerciseListDto } from './dto/updateExerciseList.dto';
import { ExerciseList } from './entities/exerciseList.entity';

@Injectable()
export class ExerciseListService {
  constructor(
    @InjectRepository(ExerciseList)
    private readonly exerciseListRepository: Repository<ExerciseList>
  ) {}

  async findAllByUserId(userId: string): Promise<ExerciseList[]> {
    const exerciseLists = await this.exerciseListRepository.findBy({ userId });
    return exerciseLists;
  }

  async findOneById(id: string): Promise<ExerciseList> {
    const exerciseList = await this.exerciseListRepository.findOneBy({ id });

    if (!exerciseList) {
      throw new NotFoundException();
    }

    return exerciseList;
  }

  async create(
    userId: string,
    createExerciseListDto: CreateExerciseListDto
  ): Promise<ExerciseListDto> {
    const isExerciseListWithThisNameExists = await this.exerciseListRepository.findOneBy({
      name: createExerciseListDto.name,
    });

    if (isExerciseListWithThisNameExists) {
      throw new ConflictException('Exercise List with this name already exists');
    }

    const exerciseList = await this.exerciseListRepository.create({
      userId,
      ...createExerciseListDto,
    });
    const exerciseListEntity = await this.exerciseListRepository.save(exerciseList);
    const mappedExerciseList = new ExerciseListDto(exerciseListEntity);

    return mappedExerciseList;
  }

  async update(id: string, updateExerciseListDto: UpdateExerciseListDto) {
    const currentExerciseList = await this.findOneById(id);

    if (currentExerciseList.name !== updateExerciseListDto.name) {
      const isExerciseListWithThisNameExists = await this.exerciseListRepository.findOneBy({
        name: updateExerciseListDto.name,
      });

      if (isExerciseListWithThisNameExists) {
        throw new ConflictException('Exercise List with this name already exists');
      }
    }

    await this.exerciseListRepository.update(id, updateExerciseListDto);
    return await this.findOneById(id);
  }

  async delete(id: string) {
    await this.exerciseListRepository.delete(id);
  }
}
