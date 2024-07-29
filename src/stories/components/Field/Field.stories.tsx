import type { Meta, StoryObj } from '@storybook/react';

import { Field } from './Field';
import { Radio } from '../Radio/Radio';
import { Checkbox } from '../Checkbox/Checkbox';

const meta = {
  title: 'Components/Field',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  component: Field,
} satisfies Meta<typeof Field>;

export default meta;

type Story = StoryObj<typeof meta>;

export const RadioField: Story = {
  args: {
    label: "select on fruit you like:"
  },
  render: ({ label }) => {
    return (
    <div
        style={{
          height: '400px',
          width: '400px',
          display: "flex",
          alignItems: 'center',
          justifyContent: 'center',
          background: `linear-gradient(180deg, rgb(2 2 3), rgb(218, 97, 255))`,
          padding: "30px",
        }}
      >
    <Field label={label} >
      <Radio name="fruit" value="apple" label="Apple" />
      <Radio name="fruit" value="pear" label="Pear" />
      <Radio name="fruit" value="banana" label="Banana" />
      <Radio name="fruit" value="orange" label="Orange" />
      <Radio name="fruit" value="pineapple" label="pineapple" />
      <Radio name="fruit" value="papaya" label="papaya" />
    </Field>
    </div>)
  }
};

export const CheckboxField: Story = {
  args: {
    label: "select fruits you like:"
  },
  render: ({ label }) => {
    return (
    <div
        style={{
          height: '400px',
          width: '400px',
          display: "flex",
          alignItems: 'center',
          justifyContent: 'center',
          background: `linear-gradient(180deg, rgb(2 2 3), rgb(218, 97, 255))`,
          padding: "30px",
        }}
      >
    <Field label={label} >
      <Checkbox name="fruit" value="apple" label="Apple" />
      <Checkbox name="fruit" value="pear" label="Pear" />
      <Checkbox name="fruit" value="banana" label="Banana" />
      <Checkbox name="fruit" value="orange" label="Orange" />
    </Field>
    </div>)
  }
};