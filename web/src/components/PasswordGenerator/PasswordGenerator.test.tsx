import { render } from '@redwoodjs/testing/web'

import PasswordGenerator from './PasswordGenerator'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PasswordGenerator', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PasswordGenerator />)
    }).not.toThrow()
  })
})
