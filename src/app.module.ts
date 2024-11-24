import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';

import { DataSource } from 'typeorm';

import { AuthModule } from '@/modules/auth/auth.module';
import { DatabaseModule } from '@/modules/database/database.module';
import { ExercisesModule } from '@/modules/exercises/exercises.module';

import { JWTAuthGuard } from './common/guards/jwt-auth.guard';
import { ExerciseListModule } from './modules/exercise-list/exercise-list.module';
import { ExerciseListItemModule } from './modules/exercise-list-item/exercise-list-item.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    ExercisesModule,
    AuthModule,
    ExerciseListModule,
    ExerciseListItemModule,
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
