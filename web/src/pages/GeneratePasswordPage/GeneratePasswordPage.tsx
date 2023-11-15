import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const GeneratePasswordPage = () => {
  return (
    <>
      <MetaTags title="GeneratePassword" description="GeneratePassword page" />

      <h1>GeneratePasswordPage</h1>
      <p>
        Find me in{' '}
        <code>
          ./web/src/pages/GeneratePasswordPage/GeneratePasswordPage.tsx
        </code>
      </p>
      <p>
        My default route is named <code>generatePassword</code>, link to me with
        `<Link to={routes.generatePassword()}>GeneratePassword</Link>`
      </p>
    </>
  )
}

export default GeneratePasswordPage
