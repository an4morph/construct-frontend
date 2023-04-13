import { forwardRef } from "react"
import styled from "styled-components"
import { Container } from "../../styles/adaptive"
// import { Button } from "../button"
// import { Link } from "react-router-dom"

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
  margin-left: 6px;
  margin-right: 6px;
`

export const Footer = forwardRef((props, ref) => {
  return (
    <FooterWrapper ref={ref}>
      <Content>
        Polina's <TagA href="https://codifylab.com/" target="_blank">students</TagA> 2023 :&#x29; &copy;
      </Content>
    </FooterWrapper>
  )
})