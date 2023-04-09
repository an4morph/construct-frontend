import styled from "styled-components"
import { ProjectSettings } from "../../components/project-settings"
import { useRef, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useSizes } from "../../hooks/useSizes"
import { useDispatch, useSelector } from "react-redux"
import { projectActions } from "../../store/project/slices"

const Wrapper = styled.div`
  display: flex;

  & > *:first-child {
    width: 70%;
  }
  & > *:nth-child(2) {
    width: 30%;
  }
`
const ResultWrapper = styled.div`
  padding-right: 40px;
`
const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
`
const IframeContainer = styled.div`
  border: 1px solid;
  width: 100%;
  height: 500px;
`

export const ProjectPage = () => {
  const data = useSelector(state => state.project.data)
  const { status } = useSelector(state => state.project.getData)
  const dispatch = useDispatch()
  const { id } = useParams()
  const iframeRef = useRef(null)
  
  const sizes = useSizes({
    iframe: iframeRef
  })

  useEffect(() => {
    if (!status) {
      dispatch(projectActions.getData(id))
    }
    return () => {
      projectActions.resetData()
    }
  }, [id, dispatch, status])

  return data && (
    <Wrapper>
      <ResultWrapper>
        <Title>Project "{data.name}"</Title>

      <IframeContainer ref={iframeRef}>
        <iframe
          title="result"
          src={`/project/${id}/fullscreen`}
          style={{ 
            transform: `scale(${sizes.iframe.width ? sizes.iframe.width / window.innerWidth : 1})`,
            transformOrigin: 'top left',
            width: `${window.innerWidth / sizes.iframe.width * 100}%`,
            height: `${window.innerWidth / sizes.iframe.width * 100}%`
          }}
        />
      </IframeContainer>

      </ResultWrapper>
      
      <ProjectSettings data={data.blocks}/>
    </Wrapper>
  )
}