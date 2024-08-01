import type { Meta, StoryObj } from '@storybook/react';

import { TeamForm } from './TeamForm';
import { fn } from '@storybook/test';

const meta = {
  component: TeamForm,
  args: {
    onSubmit: fn()
  }
} satisfies Meta<typeof TeamForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    layout: 'centered'
  }
};