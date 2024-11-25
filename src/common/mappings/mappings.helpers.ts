import { WithMappingProfile } from './mappings.types';

export function isWithMappingProfile(source: any): source is typeof WithMappingProfile {
  return 'map' in source || 'mapMany' in source;
}
