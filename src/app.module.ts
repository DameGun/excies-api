import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';

import { DataSource } from 'typeorm';

import { JWTAuthGuard } from '@/common/guards/jwt-auth.guard';
import { AuthModule } from '@/modules/auth/auth.module';
import { DatabaseModule } from '@/modules/database/database.module';
import { DetailedExerciseListItemModule } from '@/modules/detailed-exercise-list-item/detailed-exercise-list-item.module';
import { ExerciseListModule } from '@/modules/exercise-list/exercise-list.module';
import { ExerciseListItemModule } from '@/modules/exercise-list-item/exercise-list-item.module';
import { ExercisesModule } from '@/modules/exercises/exercises.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    ExercisesModule,
    AuthModule,
    ExerciseListModule,
    ExerciseListItemModule,
    DetailedExerciseListItemModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JWTAuthGuard,
    },
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
