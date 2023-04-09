import styled from "styled-components"

const Label = styled.label`
  font-size: 14px;
  display: block;
  font-weight: 700;
`
const TextInput = styled.input`
  font-size: 14px;
  width: 100%;
  padding: 3px 5px;
`
const Field = styled.div`
  border-top: 1px dashed ${({ theme }) => theme.colors.project.settings.fieldSeparator};;
  padding-top: 10px;
  margin-bottom: 10px;
`
const BgColorField = styled(Field)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > *:first-child {
    padding-right: 20px;
  }
`
const Textarea = styled.textarea`
  width: 100%;
  height: 100px;
`

export const HeroSettings = ({ data }) => {
  const handleChange = (e) => {
    // todo: change by redux logic with async action
    console.log(e.target.value)
  }
  console.log(data)
  return (
    <div>
      <BgColorField>
        <Label htmlFor="bgColor">Background color</Label>
        <input 
          type="color"
          id="bgColor"
          value={data.bgColor}
          onChange={handleChange}
        />
      </BgColorField>
      <Field>
        <Label htmlFor="titleContent">Title content</Label>
        <TextInput 
          type="title"
          id="titleContent"
          value={data.title.content}
          onChange={handleChange}
        />
      </Field>
      <Field>
        <Label htmlFor="textContent">Text content</Label>
        <Textarea 
          type="text"
          id="textContent"
          value={data.text.content}
          onChange={handleChange}
        />
      </Field>
    </div>
  )
}