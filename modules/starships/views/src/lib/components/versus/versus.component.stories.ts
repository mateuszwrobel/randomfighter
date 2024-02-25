import {
  applicationConfig,
  argsToTemplate,
  Meta,
  StoryObj,
} from '@storybook/angular';
import { VersusComponent } from './versus.component';

import { getRandomStarship } from 'modules/starships/api/src/lib/utils/get-random-starship';
import { withId } from 'modules/starships/api/src/lib/utils/with-id';
import { IStarship } from 'modules/starships/api/src/lib/entities/IStarship';
import { provideAnimations } from '@angular/platform-browser/animations';
import { InputSignal } from '@angular/core';
import { action } from '@storybook/addon-actions';

const actionsData = {
  selectedChange: action('selectedChange'),
};

const meta: Meta<VersusComponent> = {
  component: VersusComponent,
  title: 'VersusComponent',
  decorators: [
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],
  render: (args: VersusComponent) => ({
    props: {
      ...args,
      ...actionsData,
    },
    template: `<randomfighter-versus ${argsToTemplate(
      args
    )}></randomfighter-versus>`,
  }),
};

export default meta;
type Story = StoryObj<VersusComponent>;

const starships: Required<IStarship>[] = Array.from(
  { length: 10 },
  withId(getRandomStarship)
);

export const SelectedStarships: Story = {
  args: {
    starships: starships as unknown as InputSignal<Required<IStarship>[]>,
    selected: [starships[0].id, starships[1].id] as unknown as InputSignal<
      [number | null, number | null]
    >,
  },
};

export const NoSelections: Story = {
  args: {
    starships: starships as unknown as InputSignal<Required<IStarship>[]>,
    selected: [null, null] as unknown as InputSignal<
      [number | null, number | null]
    >,
  },
};
