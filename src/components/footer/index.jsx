import { forwardRef } from "react"
import styled from "styled-components"
import { Container } from "../../styles/adaptive"

const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer.bg};
  color: ${({ theme }) => theme.colors.footer.text};
`
const Content = styled(Container)`
  display:flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
`

export const Footer = forwardRef((props, ref) => {
  return (
    <FooterWrapper ref={ref}>
      <Content>
       <div>Polina's students :&#x29;</div> 
        <div> 2023  &copy;</div>
      </Content>
    </FooterWrapper>
  )
})