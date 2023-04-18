import { Link } from "react-router-dom"
import styled from "styled-components"
import {media} from "../../styles/adaptive"

const Line = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-radius: 20px;
  width: 100%;
  margin-bottom: 10px;
  background-color: #fff;
  flex-wrap:wrap;
  height:fit-content;
  ${
    media.md`
      min-height:100px;
    `
  }
`

const Name = styled.div`
  font-size: 20px;
  font-weight: 700;
`

const Links =styled(Link)`
  width:100%;
  
  ${media.md`
width:calc(100% / 2 - 20px);
  `}
  ${media.lg`
  width:calc(100%/3 - 10px);
  `}  
`

const Date = styled.div`
  font-size: 18px;
`

export const ProjectListItem = ({ id, name, createdAt }) => {
  return (
    <Links to={`/project/${id}`}>
      <Line>
        <Name>{name}</Name>
        <Date>{createdAt}</Date>
      </Line>
    </Links>
  )
}