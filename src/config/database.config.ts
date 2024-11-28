import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.configService.getOrThrow('POSTGRES_HOST'),
      port: this.configService.getOrThrow('POSTGRES_PORT'),
      database: this.configService.getOrThrow('POSTGRES_DB'),
      username: this.configService.getOrThrow('POSTGRES_USER'),
      password: this.configService.getOrThrow('POSTGRES_PASSWORD'),
      autoLoadEntities: true,
      synchronize: this.configService.getOrThrow('POSTGRES_SYNC'),
      namingStrategy: new SnakeNamingStrategy(),
    };
  }
}
