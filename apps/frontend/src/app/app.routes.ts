import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@randomfighter/starship-views').then(
        (m) => m.starshipViewsRoutes
      ),
  },
];
