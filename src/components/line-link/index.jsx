import { NavLink } from "react-router-dom"
import styled from "styled-components"

const StyledLink = styled(NavLink)`
  margin-left: 40px;
  color: inherit !important;
  text-decoration: none !important;
  position: relative !important;
  &.active {
    color: ${({ theme }) => theme.colors.primary} !important;
  }
  &::after {
    transition: all 250ms !important;
    content: '' !important;
    position: absolute !important;
    bottom: -4px !important;
    left: 0 !important;
    width: 0 !important;
    height: 2px !important;
    background-color: ${({ theme }) => theme.colors.primary} !important;
  }
  &:hover::after {
    transition: all 250ms !important;
    width: 100% !important;
  }
}

`

export const LineLink = ({ children, to}) => {
    return (
        <StyledLink to={to}>{children}</StyledLink>
    )
}