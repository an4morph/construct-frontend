import styled, { css } from "styled-components"

const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
}

const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${breakpoints[label]}px) {
      ${css(...args)}
    }
  `
  return acc;
}, {})

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

  ${media.lg`
    flex-direction: column-reverse;
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
  padding-right: 30px;
  
  ${media.lg`
    padding-right: 0;
  `}
`

const Image = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;

  ${media.lg`
    width: 100%;
    height: auto;
    margin-bottom: 15px;
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