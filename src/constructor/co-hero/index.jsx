import styled from "styled-components"
import { Container, media } from '../../styles/adaptive'

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
    flex-direction: column;
  }

  ${media.md`
    & > div {
      flex-direction: row;
    }
  `}
`
const TextContainer = styled.div`
  text-align: center;
  ${media.md`
    text-align: left;
    padding-right: 80px;
  `}
`
const Title = styled.h1`
  color: ${({ $title }) => $title.color || defaultValues.title.color};
  font-size: ${({ $title }) => {
    const size = ($title.size || defaultValues.title.size) * 0.8
    return size < 20 ? 20 : size
  }}px;
  line-height: 100%;
  margin-bottom: 30px;
  ${media.md`
    font-size: ${({ $title }) => $title.size || defaultValues.title.size}px;
  `}
`
const Text = styled.p`
  color: ${({ $text }) => $text.color || defaultValues.text.color};
  font-size: ${({ $text }) => $text.size || defaultValues.text.size}px;
`
const Image = styled.img`
  width: 100%;
  height: 250px;
  object-fit: contain;
  order: -1;
  margin-bottom: 30px;
  ${media.md`
    order: 1;
    width: 40%;
    height: 400px;
    margin-bottom: 0;
  `}
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