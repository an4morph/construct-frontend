import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.about.bg};
  color: ${({ theme }) => theme.colors.about.text};
  border: 2px dashed ${({ theme }) => theme.colors.about.border};
  border-radius: 20px;
  width: 100%;
  height: 100%;
  padding: 30px;
  max-width: 100%;
  margin: 0 auto;
`
const ContainerAboutMain = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: fit-content;

  @media screen and (max-width: 991px) {
    display: flex;
    flex-direction: column-reverse;
  }
`
const Title = styled.h2`
  font-size: 40px;
  line-height: 100%;
  margin-bottom: 30px;

  @media screen and (max-width: 500px) {
    font-size: 32px;
  }
`
const Text = styled.p`
  font-size: 20px;

  @media screen and (max-width: 500px) {
    font-size: 18px;
  }
`
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding-right: 30px;

  @media screen and (max-width: 991px) {
    padding-right: 0;
  }
`
const Image = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;

  @media screen and (max-width: 991px) {
    width: 100%;
    height: 100%;
    margin-bottom: 30px;
  }
`

const DEFAULT_TITLE = 'Create your website in just a few minutes!'
const DEFAULT_TEXT = 'Welcome to our website builder where you can create your own website in just a few minutes! Our intuitive interface allows even beginners in the world of web development to create beautiful and functional websites without any experience.'

export const AboutMain = ({ className, title = DEFAULT_TITLE, text = DEFAULT_TEXT }) => {
  return (
    <Container className={className}>      
      <ContainerAboutMain >
        <TextContainer>
          <Title>{title}</Title>
          <Text>{text}</Text>
        </TextContainer>
        <Image src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80" alt="#"/>
      </ContainerAboutMain>
    </Container>
  )
}