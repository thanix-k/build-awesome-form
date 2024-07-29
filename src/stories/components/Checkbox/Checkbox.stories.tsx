import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Checkbox, CheckboxProps } from './Checkbox.tsx';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Form: Story = {
  args: {
    name: 'Checkbox-test-storybook',
    label: 'Checkbox',
    value: "true",
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
        justifyContent: 'center',
        background: `linear-gradient(90deg, rgb(2 2 3), rgb(218, 97, 255))`,
        padding: "30px",
      }}
    >
      <Checkbox {...args}/>
    </div>)
  }
}
