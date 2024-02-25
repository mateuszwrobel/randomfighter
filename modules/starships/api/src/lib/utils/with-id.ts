import { IStarship } from '@randomfighter/starships-api';

export function withId(fun: () => IStarship): () => Required<IStarship> {
  return function () {
    return { ...fun(), id: Math.floor(Math.random() * 1000) };
  };
}
