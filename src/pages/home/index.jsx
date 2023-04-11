import { useDispatch, useSelector } from "react-redux"
import { useEffect} from "react"
import styled from "styled-components"
import { projectListActions } from "../../store/project-list/slices"
import { ProjectListItem } from '../../components/project-list-item'

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
`
const Grid = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
`

export const HomePage = () => {
  const data = useSelector(state => state.projectList.data)
  const { status } = useSelector(state => state.projectList.getData)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!status) {
      dispatch(projectListActions.getData())
    }
  }, [dispatch, status])
  console.log(data)
  
  
  return (
    <>
      <Title>Dashboard {data?.length} </Title>
      <Grid>
        {
          data && data.map((project) => (
            <ProjectListItem key={project.id} {...project}/>
          ))
        }
      </Grid>
    </>
  )
}