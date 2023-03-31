import styled from "styled-components"
import { DevIcon } from '../icons/dev'

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.dev.bg};
  color: ${({ theme }) => theme.colors.dev.text};
  border-radius: 20px;
  width: 100%;
  height: 100%;
  padding: 70px 40px;
  max-width: 700px;
  margin: 0 auto;
`
const Title = styled.h2`
  font-size: 45px;
  margin-bottom: 20px;
`
const Text = styled.p`
  font-size: 18px;
`
const StyledDevIcon = styled(DevIcon)`
  width: 100px;
  height: auto;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.dev.icon};
`

const DEFAULT_TITLE = 'This Page'
const DEFAULT_TEXT = 'Is under construction. We are working hard to bring you something amazing. Stay tuned for what is to come!'

export const DevelopmentPlug = ({ className, title = DEFAULT_TITLE, text = DEFAULT_TEXT }) => {
  return (
    <Container className={className}>
      <StyledDevIcon />
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Container>
  )
}