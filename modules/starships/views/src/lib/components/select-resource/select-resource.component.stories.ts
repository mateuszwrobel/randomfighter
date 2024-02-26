import {
  applicationConfig,
  argsToTemplate,
  Meta,
  StoryObj,
} from '@storybook/angular';
import { SelectResourceComponent } from './select-resource.component';

import { getRandomStarship } from 'modules/starships/api/src/lib/utils/get-random-starship';
import { withId } from 'modules/starships/api/src/lib/utils/with-id';
import { IStarship } from 'modules/starships/api/src/lib/entities/IStarship';
import { provideAnimations } from '@angular/platform-browser/animations';
import { InputSignal } from '@angular/core';
import { action } from '@storybook/addon-actions';
import { resources, ResourcesKeys } from '../../types/resources';

const actionsData = {
  selectedChange: action('selectedChange'),
};

const meta: Meta<SelectResourceComponent> = {
  component: SelectResourceComponent,
  title: 'SelectResourceComponent',
  decorators: [
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],
  render: (args: SelectResourceComponent) => ({
    props: {
      ...args,
      ...actionsData,
    },

    template: `<randomfighter-select-resource ${argsToTemplate(
      args
    )}></randomfighter-select-resource>`,
  }),
};

export default meta;
type Story = StoryObj<SelectResourceComponent>;

export const SelectedStarship: Story = {
  args: {
    selected: resources[0].value as unknown as InputSignal<ResourcesKeys>,
  },
};

export const NoSelection: Story = {
  args: {
    selected: null as unknown as InputSignal<ResourcesKeys>,
  },
};

export const DisabledWithNoSelection: Story = {
  args: {
    disabled: true as unknown as InputSignal<boolean>,
    selected: null as unknown as InputSignal<ResourcesKeys>,
  },
};
