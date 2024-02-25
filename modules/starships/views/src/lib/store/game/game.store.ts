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

type Selected = [number | null, number | null];
type Score = [number, number];
type Resource = keyof IStarship;
type GameInitialState = {
  selected: Selected;
  score: Score;
  winner: null;
  starshipsPlayed: StarshipId[];
  resource: null;
  state: 'initial';
};

type GamePlayingState = {
  selected: Selected;
  score: Score;
  winner: null;
  starshipsPlayed: StarshipId[];
  resource: Resource;
  state: 'playing';
};

type GameOverState = {
  selected: [number, number];
  score: Score;
  winner: 0 | 1;
  starshipsPlayed: StarshipId[];
  resource: keyof IStarship;
  state: 'game-over';
};

type GameState = GameInitialState | GamePlayingState | GameOverState;

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
      console.log(selected);
      patchState(store, { selected });
    },
    updateResource: (resource: Resource) => {
      patchState(store, { resource });
    },
    startGame: rxMethod<Resource | null>(
      pipe(
        filter((resource) => resource !== null),
        tap((resource) => {
          patchState(store, {
            resource: resource as Resource,
            state: 'playing',
          });
        })
      )
    ),
    playGame: rxMethod<Selected>(
      pipe(
        filter((selected) => selected[0] !== null && selected[1] !== null),
        tap((selected) => {
          console.log(starshipStore.starships(), selected);
          const ship1 = starshipStore
            .starships()
            .find((starship) => starship.id === selected[0]) as IStarship;
          const ship2 = starshipStore
            .starships()
            .find((starship) => starship.id === selected[1]) as IStarship;

          const resource = (store.resource() as Resource) || 'cost_in_credits';
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          // const a = 1;
          const winner =
            Number(ship1[resource]) > Number(ship2[resource]) ? 0 : 1;
          console.log(winner, resource, ship1[resource], ship2[resource]);
          patchState(store, {
            state: 'game-over',
            winner,
            starshipsPlayed: [...store.starshipsPlayed(), ...selected],
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
