import { useEffect } from 'react'

import { themeChange } from 'theme-change'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  useEffect(() => {
    themeChange(false)
  })
  return (
    <>
      <div id="mainLayout" data-theme={themeChange}>
        {children}
      </div>
    </>
  )
}

export default MainLayout
