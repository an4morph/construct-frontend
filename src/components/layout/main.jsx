import { Outlet } from "react-router-dom"
import { Header } from "../header"
import { Footer } from "../footer"
import styled from "styled-components"
import { Container } from "../../styles/adaptive"
import { useEffect, useRef, useState } from "react"

const Content = styled(Container)`
  padding-top: 40px;
  padding-bottom: 40px;
  min-height: ${({ $footerH, $headerH }) => `calc(100vh - ${$footerH}px - ${$headerH}px)`};
`

export const MainLayout = () => {
  const [sizes, setHeight] = useState({ footerH: 0, headerH: 0 })
  const headerRef = useRef(null)
  const footerRef = useRef(null)

  useEffect(() => {
    setHeight({
      headerH: headerRef.current.clientHeight,
      footerH: footerRef.current.clientHeight,
    })
  }, [])

  return (
    <div>
      <Header ref={headerRef}/>
      
      <Content 
        $footerH={sizes.footerH}
        $headerH={sizes.headerH}
      >
        <Outlet />
      </Content>
      
      <Footer ref={footerRef}/>
    </div>
  )
}