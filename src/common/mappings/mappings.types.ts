export abstract class WithMappingProfile {
  static map<TSource, TDest>(_: TSource): TDest {
    throw new Error('map method not implemented');
  }
  static mapMany<TSource, TDest>(_: Array<TSource>): Array<TDest> {
    throw new Error('mapMany method not implemented');
  }
}

export type BaseClassType<T> = { new (...args: any[]): T };
