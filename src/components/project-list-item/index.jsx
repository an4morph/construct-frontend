import { Link } from "react-router-dom"
import styled from "styled-components"
import dateFormat, { masks } from "dateformat";

const Line = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-radius: 20px;
  width: 100%;
  margin-bottom: 10px;
  background-color: #fff;
`

const Name = styled.div`
  font-size: 20px;
  font-weight: 700;
`

const Date = styled.div`
  font-size: 18px;
`

export const ProjectListItem = ({ id, name, createdAt }) => {
  const formattedDate = dateFormat(createdAt);
  return (
    <Link to={`/project/${id}`}>
      <Line>
        <Name>{name}</Name>
        <Date>{formattedDate}</Date>
      </Line>
    </Link>
  )
}