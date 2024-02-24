import type { Meta, StoryObj } from '@storybook/angular';
import { StarshipViewsComponent } from './starship-views.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<StarshipViewsComponent> = {
  component: StarshipViewsComponent,
  title: 'StarshipViewsComponent',
};
export default meta;
type Story = StoryObj<StarshipViewsComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/starship-views works!/gi)).toBeTruthy();
  },
};
