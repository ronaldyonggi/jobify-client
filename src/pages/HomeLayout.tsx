import { Outlet } from "react-router-dom"

const HomeLayout = (): JSX.Element => {
  return (
    <div>
      <nav>navbar</nav>
      <Outlet />
    </div>
  )
}
export default HomeLayout