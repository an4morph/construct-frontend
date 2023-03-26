import { Outlet } from "react-router-dom"
import { Footer } from "../footer"

export const AuthLayout = () => {
  return (
    <div>      
      <div>
        <Outlet />
      </div>
      
      <Footer />
    </div>
  )
}