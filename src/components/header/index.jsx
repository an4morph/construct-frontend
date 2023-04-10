import { NavLink, useNavigate } from "react-router-dom"
import { Container } from "../../styles/adaptive"
import { Button } from "../button"
import { Logo } from "../logo"
import styled from "styled-components"
import { forwardRef } from "react"
import { useDispatch } from "react-redux"
import { authActions } from "../../store/auth/slices"
import { LineLink } from "../line-link"

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
          <Logo />
          <LineLink to="/">Go to Dashboard</LineLink>
          <LineLink to="/about">About</LineLink>
        </Left>
        
        <div>
          <LineLink to="/profile">My Profile</LineLink>
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