import type { Meta, StoryObj } from '@storybook/angular';
import { DetailsComponent } from './details.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { getRandomStarship } from 'modules/starships/api/src/lib/utils/get-random-starship';

const meta: Meta<DetailsComponent> = {
  component: DetailsComponent,
  title: 'DetailsComponent',
};
export default meta;
type Story = StoryObj<DetailsComponent>;

export const WithAllData: Story = {
  args: {
    starship: getRandomStarship(),
  },
};
