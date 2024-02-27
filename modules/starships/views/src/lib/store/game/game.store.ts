import {
  patchState,
  signalStore,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { IStarship, StarshipId } from '@randomfighter/starships-api';
import { inject, InjectionToken } from '@angular/core';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { filter, pipe, tap } from 'rxjs';
import { StarshipsStore } from '../starships/starships.store';
import { ResourcesKeys } from '../../types/resources';

type Selected = [number | null, number | null];
type Score = [number, number];
export type GameInitialState = {
  selected: Selected;
  score: Score;
  winner: null;
  starshipsPlayed: StarshipId[];
  resource: null;
  state: 'initial';
};

export type GamePlayingState = {
  selected: Selected;
  score: Score;
  winner: null;
  starshipsPlayed: StarshipId[];
  resource: ResourcesKeys;
  state: 'playing';
};

export type GameOverState = {
  selected: [number, number];
  score: Score;
  winner: 0 | 1;
  starshipsPlayed: StarshipId[];
  resource: ResourcesKeys;
  state: 'game-over';
};

export type GameState = GameInitialState | GamePlayingState | GameOverState;

const initialState: GameState = {
  selected: [null, null],
  score: [0, 0],
  winner: null,
  starshipsPlayed: [],
  resource: null,
  state: 'initial',
};

const GAME_STATE = new InjectionToken<GameState>('GameState', {
  factory: () => initialState,
});

export const GameStore = signalStore(
  withState(() => inject(GAME_STATE)),
  withMethods((store, starshipStore = inject(StarshipsStore)) => ({
    updateSelected: (selected: Selected) => {
      patchState(store, { selected });
    },
    updateResource: (resource: ResourcesKeys) => {
      patchState(store, { resource });
    },
    startGame: rxMethod<ResourcesKeys | null>(
      pipe(
        filter((resource) => resource !== null),
        tap((resource) => {
          patchState(store, {
            resource: resource as ResourcesKeys,
            state: 'playing',
          });
        })
      )
    ),
    playGame: rxMethod<Selected>(
      pipe(
        filter((selected) => selected[0] !== null && selected[1] !== null),
        tap((selected) => {
          const ship1 = starshipStore
            .starships()
            .find((starship) => starship.id === selected[0]) as IStarship;
          const ship2 = starshipStore
            .starships()
            .find((starship) => starship.id === selected[1]) as IStarship;

          const resource = store.resource() as ResourcesKeys;
          const winner =
            Number(ship1[resource]) > Number(ship2[resource]) ? 0 : 1;
          patchState(store, {
            state: 'game-over',
            winner,
            starshipsPlayed: [...store.starshipsPlayed(), ...selected],
            score: [
              store.score()[0] + (winner === 0 ? 1 : 0),
              store.score()[1] + (winner === 1 ? 1 : 0),
            ],
          } as GameOverState);
        })
      )
    ),
    resetGame: () => {
      patchState(store, {
        state: 'initial',
        selected: [null, null],
        resource: null,
        winner: null,
      });
    },
  })),
  withHooks({
    onInit({ playGame, startGame, selected, resource }) {
      playGame(selected);
      startGame(resource);
    },
  })
);
