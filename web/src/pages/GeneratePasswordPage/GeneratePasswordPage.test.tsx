import { render } from '@redwoodjs/testing/web'

import GeneratePasswordPage from './GeneratePasswordPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('GeneratePasswordPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GeneratePasswordPage />)
    }).not.toThrow()
  })
})
