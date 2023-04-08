import { useDispatch, useSelector } from "react-redux"
import { projectActions } from "../../store/project/slices"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { CoBlock } from "../../constructor/block"

export const ProjectFullScreenPage = () => {
  const data = useSelector(state => state.project.data)
  const { status } = useSelector(state => state.project.getData)
  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    if (!status) {
      dispatch(projectActions.getData(id))
    }
    return () => {
      projectActions.resetData()
    }
  }, [id, dispatch, status])

  return data && (
    <div>
      {
        data.blocks.map((block) => (
          <CoBlock 
            key={block.id}
            name={block.name}
            data={block.data}
          />
        ))
      }
    </div>
  )
}