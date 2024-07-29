import type { Meta, StoryObj } from '@storybook/react';

import { TeamForm } from './TeamForm';

const meta = {
  component: TeamForm,
} satisfies Meta<typeof TeamForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSubmit: () => {}
  },
  parameters: {
    layout: 'centered'
  }
};