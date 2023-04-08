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

export const Footer = forwardRef((props, ref) => {
  return (
    <FooterWrapper ref={ref}>
      <Content>
        Polina's students 2023 :&#x29; ©
      </Content>
    </FooterWrapper>
  )
})