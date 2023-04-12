import { useNavigate, NavLink } from "react-router-dom"
import { Container } from "../../styles/adaptive"
import { Button } from "../button"
import { Logo } from "../logo"
import styled from "styled-components"
import { forwardRef } from "react"
import { useDispatch } from "react-redux"
import { authActions } from "../../store/auth/slices"
import { LineLink } from "../line-link"

import { media } from "../../styles/adaptive"
import { DevBurgerIcon } from "../icons/dev"

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

  ${media.sm`
  & div {
    display: flex;
    align-items: center;
  }
  `}
`
const Left = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const LogoutButton = styled(Button)`
  margin-left: 40px;

  ${media.xs`
    display: none;
  `}
  ${media.sm`
    display: block;
  `}

`
const LeftLink = styled(LineLink)`
  margin-left: 40px;

  ${media.xs`
    display: none;
  `}
  ${media.sm`
    display: flex;
  `}
`

const BurgerBtn = styled(Button)`
    
  ${media.xs`
    display: flex;
    align-items: center;

    & svg path:hover {
      fill: white;
    }
  `}

  ${media.sm`
    display: none;
  `
  }
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
          <NavLink to="/"><Logo /></NavLink>
          <LeftLink to="/">Go to Dashboard</LeftLink>
          <LeftLink to="/about">About</LeftLink>
        </Left>
        
        <div>
          <LeftLink to="/profile">My Profile</LeftLink>
          <LogoutButton
            variant="secondary"
            onClick={handleLogout}
          >
            Log out
          </LogoutButton>
          
          <BurgerBtn 
            variant="icon" 
            icon={<DevBurgerIcon />}
          />

        </div>
      </Content>
    </HeaderWrapper>
  )
})