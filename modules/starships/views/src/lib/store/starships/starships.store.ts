import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { IStarship } from '@randomfighter/starships-api';
import { Apollo } from 'apollo-angular';
import { inject, InjectionToken } from '@angular/core';
import { GET_STARHIPS_QUERY } from './starships.query';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  pipe,
  switchMap,
  tap,
} from 'rxjs';
import { tapResponse } from '@ngrx/operators';

type StarhsipsInitialState = {
  starships: [];
  state: 'initial';
  error: null;
};

type StarshipsLoadingState = {
  starships: [];
  state: 'loading';
  error: null;
};

type StarshipsLoadedState = {
  starships: Required<IStarship>[];
  state: 'loaded';
  error: null;
};

type StarshipsErrorState = {
  starships: [];
  state: 'error';
  error: any;
};

type StarshipsState =
  | StarhsipsInitialState
  | StarshipsLoadingState
  | StarshipsLoadedState
  | StarshipsErrorState;

const initialState: StarshipsLoadingState = {
  starships: [],
  state: 'loading',
  error: null,
};

const STARSHIPS_STATE = new InjectionToken<StarshipsState>('StarshipsState', {
  factory: () => initialState,
});

export const StarshipsStore = signalStore(
  withState(() => inject(STARSHIPS_STATE)),
  withMethods((store, apollo = inject(Apollo)) => ({
    loadStarships: rxMethod<string>(
      pipe(
        debounceTime(300),
        distinctUntilChanged(),
        filter((state) => {
          return state === 'loading';
        }),
        tap(() => patchState(store, { starships: [], error: null })),
        switchMap(() => {
          return apollo.query({ query: GET_STARHIPS_QUERY }).pipe(
            tapResponse({
              next: (response) =>
                patchState(store, {
                  state: 'loaded',
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-expect-error
                  starships: response.data.getAllStarships,
                  error: null,
                }),
              error: (error) =>
                patchState(store, { state: 'error', starships: [], error }),
            })
          );
        })
      )
    ),
  })),
  withHooks({
    onInit({ loadStarships, state }) {
      loadStarships(state);
    },
  })
);
