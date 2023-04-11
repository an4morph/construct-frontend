import { NavLink } from "react-router-dom"
import styled from "styled-components"

const StyledLink = styled(NavLink)`
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
`

export const LineLink = ({ className,children, to}) => {
    return (
        <StyledLink to={to} className={className}>{children}</StyledLink>
    )
}