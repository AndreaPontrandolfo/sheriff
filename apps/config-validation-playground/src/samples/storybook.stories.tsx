import type { Meta, StoryObj } from '@storybook/react';
import { InfoButton } from '../mocks/InfoButton';

type Story = StoryObj<typeof InfoButton>;

const meta: Meta<typeof InfoButton> = {
  component: InfoButton,
};

export const Default: Story = {
  args: {
    text: 'This is a popover',
  },
};

export default meta;
