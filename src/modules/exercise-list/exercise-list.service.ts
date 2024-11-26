import { ConflictException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { MappingService } from '@/common/mappings/mappings.provider';

import { CreateExerciseListDto, ExerciseListDto, UpdateExerciseListDto } from './dto';
import { ExerciseList } from './entities/exercise-list.entity';

@Injectable()
export class ExerciseListService {
  constructor(
    @InjectRepository(ExerciseList)
    private readonly exerciseListRepository: Repository<ExerciseList>,
    @Inject()
    private readonly mappingService: MappingService
  ) {}

  async findAllByUserId(userId: string): Promise<ExerciseListDto[]> {
    const exerciseLists = await this.exerciseListRepository.find({
      where: {
        userId,
      },
      relations: {
        listItems: true,
      },
    });

    const mappedExerciseLists = this.mappingService.mapMany(exerciseLists, ExerciseListDto);

    return mappedExerciseLists;
  }

  async findOneById(id: string): Promise<ExerciseListDto> {
    const exerciseList = await this.exerciseListRepository.findOneBy({ id });

    if (!exerciseList) {
      throw new NotFoundException();
    }

    const mappedExerciseList = this.mappingService.map(exerciseList, ExerciseListDto);

    return mappedExerciseList;
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
    const mappedExerciseList = this.mappingService.map(exerciseListEntity, ExerciseListDto);

    return mappedExerciseList;
  }

  async update(id: string, updateExerciseListDto: UpdateExerciseListDto): Promise<ExerciseListDto> {
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

  async delete(id: string): Promise<void> {
    await this.exerciseListRepository.delete(id);
  }
}
