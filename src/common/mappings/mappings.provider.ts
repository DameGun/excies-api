import { Injectable } from '@nestjs/common';

import { isWithMappingProfile } from './mappings.helpers';
import { BaseClassType } from './mappings.types';

@Injectable()
export class MappingService {
  map<TSource, TDest>(source: TSource, dest: BaseClassType<TDest>): TDest {
    if (isWithMappingProfile(dest)) {
      return dest.map(source);
    }

    return new dest(source);
  }

  mapMany<TSource, TDest>(source: Array<TSource>, dest: BaseClassType<TDest>): Array<TDest> {
    if (isWithMappingProfile(dest)) {
      return dest.mapMany(source);
    }

    return source.map((sourceObj) => new dest(sourceObj));
  }
}
