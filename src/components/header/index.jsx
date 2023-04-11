import { NavLink, useNavigate } from "react-router-dom"
import { Container } from "../../styles/adaptive"
import { Button } from "../button"
import { Logo } from "../logo"
import styled from "styled-components"
import { forwardRef } from "react"
import { useDispatch } from "react-redux"
import { authActions } from "../../store/auth/slices"

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
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(authActions.logout())
    navigate('/auth/login')
  }

  return (
    <HeaderWrapper ref={ref}>
      <Content>
        <Left>
        <LeftLink to="/"><Logo /></LeftLink>
          <LeftLink to="/">Go to Dashboard</LeftLink>
          <LeftLink to="/about">About</LeftLink>
        </Left>
        
        <div>
          <NavLink to="/profile">My Profile</NavLink>
          <LogoutButton
            variant="secondary"
            onClick={handleLogout}
          >
            Log out
          </LogoutButton>
        </div>
      </Content>
    </HeaderWrapper>
  )
})