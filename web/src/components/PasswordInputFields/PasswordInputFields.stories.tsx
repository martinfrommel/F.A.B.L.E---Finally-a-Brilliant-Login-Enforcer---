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

import PasswordInputFields from './PasswordInputFields'

const meta: Meta<typeof PasswordInputFields> = {
  component: PasswordInputFields,
}

export default meta

type Story = StoryObj<typeof PasswordInputFields>

export const Primary: Story = {}
