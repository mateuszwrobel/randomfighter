import { ApplicationConfig, inject } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { Apollo, APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import {
  HttpClientModule,
  provideHttpClient,
  withFetch,
} from '@angular/common/http';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client';
import { HttpLink } from 'apollo-angular/http';
import { provideAnimations } from '@angular/platform-browser/animations';

const uri = 'http://localhost:3000/graphql'; // <-- add the URL of the GraphQL server here
export function apolloOptionsFactory(): ApolloClientOptions<any> {
  const httpLink = inject(HttpLink);
  return {
    link: httpLink.create({ uri }),
    cache: new InMemoryCache(),
    ssrMode: true,
  };
}

export const graphqlProvider: ApplicationConfig['providers'] = [
  Apollo,
  {
    provide: APOLLO_OPTIONS,
    useFactory: apolloOptionsFactory,
  },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideRouter(appRoutes),
    provideHttpClient(withFetch()),
    graphqlProvider,
  ],
};
