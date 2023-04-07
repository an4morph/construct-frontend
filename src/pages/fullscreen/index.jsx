import { useDispatch, useSelector } from "react-redux"
import { DevelopmentPlug } from "../../components/plug"
import { projectActions } from "../../store/project/slices"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

export const ProjectFullScreenPage = () => {
  const data = useSelector(state => state.project)
  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(projectActions.getProjectInfo(id))
  }, [dispatch, id])

  return (
    <DevelopmentPlug title="Project Full Screen Page" />
  )
}