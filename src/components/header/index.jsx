import { NavLink } from "react-router-dom"
import { Container } from "../../styles/adaptive"
import { Button } from "../button"
import { Logo } from "../logo"
import styled from "styled-components"
import { forwardRef } from "react"

const HeaderWrapper = styled.header`
  background-color: #fff;
  width: 100%;
  align-items: center;
  height: 70px;
  box-shadow: 0px 4px 10px 0 rgb(0, 0, 0, 0.05);
`
const Content = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`
const Left = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const LogoutButton = styled(Button)`
  margin-left: 40px;
`
const LeftLink = styled(NavLink)`
  margin-left: 40px;
`

export const Header = forwardRef((props, ref) => {
  return (
    <HeaderWrapper ref={ref}>
      <Content>
        <Left>
          <Logo />
          <LeftLink to="/">Go to Dashboard</LeftLink>
          <LeftLink to="/about">About</LeftLink>
        </Left>
        
        <div>
          <NavLink to="/profile">My Profile</NavLink>
          <LogoutButton variant="secondary">Log out</LogoutButton>
        </div>
      </Content>
    </HeaderWrapper>
  )
})