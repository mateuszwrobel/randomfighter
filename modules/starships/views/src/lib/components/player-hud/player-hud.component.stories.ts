import {
  applicationConfig,
  argsToTemplate,
  Meta,
  StoryObj,
} from '@storybook/angular';
import { PlayerHudComponent } from './player-hud.component';

import { getRandomStarship } from 'modules/starships/api/src/lib/utils/get-random-starship';
import { withId } from 'modules/starships/api/src/lib/utils/with-id';
import { IStarship } from 'modules/starships/api/src/lib/entities/IStarship';
import { provideAnimations } from '@angular/platform-browser/animations';
import { InputSignal } from '@angular/core';
import { action } from '@storybook/addon-actions';

const actionsData = {
  selectedChange: action('selectedChange'),
};

const meta: Meta<PlayerHudComponent> = {
  component: PlayerHudComponent,
  title: 'PlayerHudComponent',
  decorators: [
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],
  render: (args: PlayerHudComponent) => ({
    props: {
      ...args,
      ...actionsData,
    },

    template: `<randomfighter-player-hud ${argsToTemplate(
      args
    )}></randomfighter-player-hud>`,
  }),
};

export default meta;
type Story = StoryObj<PlayerHudComponent>;

const starships: Required<IStarship>[] = Array.from(
  { length: 10 },
  withId(getRandomStarship)
);

export const SelectedStarship: Story = {
  args: {
    starships: starships as unknown as InputSignal<
      Required<IStarship>[] | null
    >,
    selected: starships[0].id as unknown as InputSignal<number | null>,
  },
};

export const NoSelection: Story = {
  args: {
    starships: starships as unknown as InputSignal<
      Required<IStarship>[] | null
    >,
    selected: null as unknown as InputSignal<number | null>,
  },
};
