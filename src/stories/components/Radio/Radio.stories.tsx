import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Radio, RadioProps } from './Radio.tsx';

const meta = {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Form: Story = {
  args: {
    name: 'Radio-test-storybook',
    label: 'Radio',
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
      <Radio {...args}/>
    </div>)
  }
}
