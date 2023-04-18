import { forwardRef } from "react"
import styled from "styled-components"
import { Container } from "../../styles/adaptive"

const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer.bg};
  color: ${({ theme }) => theme.colors.footer.text};
`
const Content = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
`
const TagA = styled.a`
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

export const Footer = forwardRef((props, ref) => {
  return (
    <FooterWrapper ref={ref}>
      <Content>
        Polina's&nbsp;<TagA href="https://codifylab.com/" target="_blank">students</TagA>&nbsp; 2023 :&#x29; &copy;
      </Content>
    </FooterWrapper>
  )
})