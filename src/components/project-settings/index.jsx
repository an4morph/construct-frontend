import styled from "styled-components"

const Wrapper = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px 0 rgb(0, 0, 0, 0.05);
`
const Title = styled.h2`
  font-size: 20px;
`

export const ProjectSettings = ({ blocks }) => {
  return (
    <Wrapper>
      <Title>Settings</Title>
    </Wrapper>
  )
}