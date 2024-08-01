import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Input, InputProps } from './Input.tsx';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const NormalState: Story = {
  args: {
    name: 'Input-test-storybook',
    label: 'Input',
    placeholder: 'your organisation name',
    type: 'text'
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
      <Input {...args}/>
    </div>)
  }
}

export const InValid: Story = {
  args: {
    name: 'Input-test-storybook',
    label: 'Input',
    placeholder: 'your organisation name',
    type: 'text',
    error: 'some error',
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
      <Input {...args}/>
    </div>)
  }
}

