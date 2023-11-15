import { render } from '@redwoodjs/testing/web'

import PasswordStrengthMeter from './PasswordStrengthMeter'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PasswordStrengthMeter', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PasswordStrengthMeter />)
    }).not.toThrow()
  })
})
