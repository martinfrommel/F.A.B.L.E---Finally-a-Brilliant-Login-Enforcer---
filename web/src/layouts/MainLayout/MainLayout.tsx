import { useEffect } from 'react'

import { themeChange } from 'theme-change'

import Header from 'src/components/Header/Header'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  useEffect(() => {
    themeChange(false)
  })
  return (
    <>
      <div id="mainLayout" className="space-y-8 p-3">
        <Header />
        <main>{children}</main>
      </div>
    </>
  )
}

export default MainLayout
