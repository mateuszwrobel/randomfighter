import {
  applicationConfig,
  Meta,
  moduleMetadata,
  StoryObj,
} from '@storybook/angular';
import { StarshipViewsComponent } from './starship-views.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { provideAnimations } from '@angular/platform-browser/animations';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';

const meta: Meta<StarshipViewsComponent> = {
  component: StarshipViewsComponent,
  title: 'StarshipViewsComponent',
  decorators: [
    moduleMetadata({
      imports: [ApolloModule, HttpClientModule],
    }),
    applicationConfig({
      providers: [
        importProvidersFrom(HttpClientModule),
        provideAnimations(),
        {
          provide: APOLLO_OPTIONS,
          useFactory(httpLink: HttpLink) {
            return {
              cache: new InMemoryCache(),
              link: httpLink.create({
                uri: 'http://localhost:3000/graphql',
              }),
            };
          },
          deps: [HttpLink],
        },
      ],
    }),
  ],
};
export default meta;
type Story = StoryObj<StarshipViewsComponent>;

export const StartingScreen: Story = {
  args: {},
};

export const SelectingResources: Story = {
  play: async ({ canvasElement }) => {
    const screen = within(canvasElement);
    const resource = screen.getByRole('select');
  },
};
