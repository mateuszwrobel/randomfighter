import type { Meta, StoryObj } from '@storybook/angular';
import { DetailsComponent } from './details.component';

import { getRandomStarship } from 'modules/starships/api/src/lib/utils/get-random-starship';
import { InputSignal } from '@angular/core';
import { IStarship } from 'modules/starships/api/src/lib/entities/IStarship';

const meta: Meta<DetailsComponent> = {
  component: DetailsComponent,
  title: 'DetailsComponent',
};
export default meta;
type Story = StoryObj<DetailsComponent>;

export const WithAllData: Story = {
  args: {
    starship: getRandomStarship() as unknown as InputSignal<
      Required<IStarship>
    >,
  },
};
