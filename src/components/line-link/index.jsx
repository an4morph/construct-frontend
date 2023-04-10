import { NavLink } from "react-router-dom"
import styled from "styled-components"

const StyledLink = styled(NavLink)`
  margin-left: 40px;
  text-decoration: none;
  position: relative;
  &.active {
    color: ${({ theme }) => theme.colors.primary};
  }
  &::after {
    transition: all 250ms;
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
  }
  &:hover::after {
    transition: all 250ms;
    width: 100%;
  }
}

`

export const LineLink = ({ children, to}) => {
    return (
        <StyledLink to={to}>{children}</StyledLink>
    )
}