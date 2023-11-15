import type { Meta, StoryObj } from '@storybook/react'

import GeneratePasswordPage from './GeneratePasswordPage'

const meta: Meta<typeof GeneratePasswordPage> = {
  component: GeneratePasswordPage,
}

export default meta

type Story = StoryObj<typeof GeneratePasswordPage>

export const Primary: Story = {}
