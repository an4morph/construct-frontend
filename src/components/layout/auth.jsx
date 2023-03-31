import { useRef } from "react"
import { Outlet } from "react-router-dom"
import { useSizes } from "../../hooks/useSizes"
import { Footer } from "../footer"
import { AuthContent } from "./styled"

export const AuthLayout = () => {
  const footerRef = useRef()

  const sizes = useSizes({
    footerH: footerRef,
  })

  return (
    <div>      
      <AuthContent $footerH={sizes.footerH}>
        <Outlet />
      </AuthContent>
      
      <Footer ref={footerRef} />
    </div>
  )
}