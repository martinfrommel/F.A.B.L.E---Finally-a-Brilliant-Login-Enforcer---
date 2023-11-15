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

import PasswordStrengthMeter from './PasswordStrengthMeter'

const meta: Meta<typeof PasswordStrengthMeter> = {
  component: PasswordStrengthMeter,
}

export default meta

type Story = StoryObj<typeof PasswordStrengthMeter>

export const Primary: Story = {}
