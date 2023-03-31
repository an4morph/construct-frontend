import { useRef } from "react"
import { Outlet } from "react-router-dom"
import { Header } from "../header"
import { Footer } from "../footer"
import { useSizes } from '../../hooks/useSizes'
import { MainContent } from "./styled"

export const MainLayout = () => {
  const headerRef = useRef()
  const footerRef = useRef()

  const sizes = useSizes({
    headerH: headerRef,
    footerH: footerRef,
  })

  return (
    <div>
      <Header ref={headerRef}/>
      
      <MainContent 
        $footerH={sizes.footerH}
        $headerH={sizes.headerH}
      >
        <Outlet />
      </MainContent>
      
      <Footer ref={footerRef}/>
    </div>
  )
}