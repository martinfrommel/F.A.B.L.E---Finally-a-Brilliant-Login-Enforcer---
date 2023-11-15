// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import PasswordGenerator from './PasswordGenerator'

const meta: Meta<typeof PasswordGenerator> = {
  component: PasswordGenerator,
}

export default meta

type Story = StoryObj<typeof PasswordGenerator>

export const Primary: Story = {}
