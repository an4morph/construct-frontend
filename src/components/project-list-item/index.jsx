import { Link } from "react-router-dom"
import styled from "styled-components"

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

const Date1 = styled.div`
  font-size: 18px;
`

export const ProjectListItem = ({ id, name, createdAt }) => {
  const date = new Date(createdAt);
  const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getUTCFullYear()} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
  return (
    <Link to={`/project/${id}`}>
      <Line>
        <Name>{name}</Name>
        <Date1>{formattedDate}</Date1>
      </Line>
    </Link>
  )
}