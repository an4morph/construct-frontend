import styled from 'styled-components';
import { media } from '../../styles/adaptive';

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.about.bg};
  color: ${({ theme }) => theme.colors.about.text};
  border: 2px dashed ${({ theme }) => theme.colors.about.border};
  border-radius: 20px;
  width: 100%;
  height: 100%;
  padding: 30px;
  max-width: 100%;
  margin: 0 auto;
  flex-direction: column-reverse;
 
  ${media.lg`
    flex-direction: row;
  `}
`
const Title = styled.h2`
  font-size: 40px;
  line-height: 100%;
  margin-bottom: 30px;
`
const Text = styled.p`
  font-size: 20px;
`
const TextContainer = styled.div`
  padding-right: 0;

  ${media.lg`
    padding-right: 30px;
  `}
`

const Image = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  object-fit: cover;

  ${media.lg`
    width: 400px;
    height: 400px;
    margin-bottom: 0;
  `}
`

export const AboutMain = ({ className }) => {
  return (
    <Container className={className}>
      <TextContainer>
        <Title>Create your website in just a few minutes!</Title>
        <Text>Welcome to our website builder where you can create your own website in just a few minutes! Our intuitive interface allows even beginners in the world of web development to create beautiful and functional websites without any experience.'</Text>
      </TextContainer>
      <Image src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"/>
    </Container>
  )
}