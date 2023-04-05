import styled from "styled-components"
import { ProjectSettings } from "../../components/project-settings"
import { useState, useRef, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useSizes } from "../../hooks/useSizes"

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
const Iframe = styled.iframe`
  //height: 500px;
`
const IframeContainer = styled.div`
  border: 1px solid;
  width: 100%;
  height: 500px;
`

export const ProjectPage = () => {
  const [data, setData] = useState(null)
  const { id } = useParams()
  const iframeRef = useRef(null)
  
  const sizes = useSizes({
    iframeW: iframeRef
  })

  useEffect(() => {
    fetch(`http://localhost:3789/projects/detail/${id}`)
      .then(res => res.json())
      .then(setData)
  }, [id]) 

  console.log(sizes)

  return data && (
    <Wrapper>
      <ResultWrapper>
        <Title>Project {data.name}: Result</Title>

      <IframeContainer ref={iframeRef}>
        <Iframe
          title="result"
          src={`/project/${id}/settings`}
          style={{ 
            transform: `scale(${sizes.iframeW ? sizes.iframeW / window.innerWidth : 1})`,
            transformOrigin: 'top left',
            width: `${window.innerWidth / sizes.iframeW * 100}%`,
            height: `${window.innerWidth / sizes.iframeW * 100}%`
          }}
        />
      </IframeContainer>

      </ResultWrapper>
      
      <ProjectSettings data={data.blocks}/>
    </Wrapper>
  )
}