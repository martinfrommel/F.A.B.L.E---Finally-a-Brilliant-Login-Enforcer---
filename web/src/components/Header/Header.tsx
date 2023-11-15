import Navbar from '../Navbar/Navbar'

const Header = () => {
  return (
    <div className="flex flex-row flex-nowrap items-center justify-between space-x-2">
      <span className="flex-1 font-heading">Logo</span>
      <Navbar />
    </div>
  )
}

export default Header
