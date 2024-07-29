import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Form: Story = {
  args: {
    label: 'Create team',
  },
  parameters: {
    layout: "centered",
  },
  render: (args) => {
    return (<div
      style={{
        height: '400px',
        width: '400px',
        display: "flex",
        alignItems: 'center',
        background: `linear-gradient(90deg, rgb(2 2 3), rgb(218, 97, 255))`,
        padding: "30px",
      }}
    >
      <Button {...args}/>
    </div>)
  }
}
