import styled from "styled-components"
import { Container } from '../../styles/adaptive'

const defaultValues = {
  bgColor: '#FFFFFF',
  title: {
    content: 'Title',
    color: '#000000',
    size: 24
  },
  text: {
    content: 'Lorem inpsum dolor sit amet',
    color: '#000000',
    size: 18
  }
}

const Wrapper = styled.section`
  background-color: ${({ $bgColor }) => $bgColor || defaultValues.bgColor};
  padding: 120px 0;

  & > div {
    display: flex;
    align-items: center;
  }
`
const TextContainer = styled.div`
  padding-right: 80px;
`
const Title = styled.h1`
  color: ${({ $title }) => $title.color || defaultValues.title.color};
  font-size: ${({ $title }) => $title.size || defaultValues.title.size}px;
  line-height: 100%;
  margin-bottom: 30px;
`
const Text = styled.p`
  color: ${({ $text }) => $text.color || defaultValues.text.color};
  font-size: ${({ $text }) => $text.size || defaultValues.text.size}px;
`
const Image = styled.img`
  width: 40%;
  height: 400px;
  object-fit: contain;
`

export const CoHero = ({ 
  bgColor, text, title, image
}) => {
  return (
    <Wrapper $bgColor={bgColor}>
      <Container>
        <TextContainer>
          <Title $title={title}>
            {title.content}
          </Title>
          <Text $text={text}>
            {text.content}
          </Text>
        </TextContainer>
        {image && <Image src={image} />}
      </Container>
    </Wrapper>
  )
}