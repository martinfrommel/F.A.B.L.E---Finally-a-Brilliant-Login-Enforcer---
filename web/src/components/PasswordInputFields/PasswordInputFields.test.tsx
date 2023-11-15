import { render } from '@redwoodjs/testing/web'

import PasswordInputFields from './PasswordInputFields'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PasswordInputFields', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PasswordInputFields />)
    }).not.toThrow()
  })
})
