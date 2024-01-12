import { Outlet } from "react-router-dom"

const HomeLayout = (): JSX.Element => {
  return (
    <div>
      <Outlet />
    </div>
  )
}
export default HomeLayout