import { Link } from "react-router-dom"
import styled from "styled-components"
import { CalendarIcon } from '../icons/calendar';

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
  display: flex;
  align-items: center;
`
const StyledCalendarIcon = styled(CalendarIcon)`
  color: ${({ theme }) => theme.colors.dev.icon};
  width: 23px;
  height: 23px
`
export const ProjectListItem = ({ id, name, createdAt }) => {
  return (
    <Link to={`/project/${id}`}>
      <Line>
        <Name>{name}</Name>
        <Date><StyledCalendarIcon /> {createdAt}</Date>
      </Line>
    </Link>
  )
}