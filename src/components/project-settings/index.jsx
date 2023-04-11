import { HeroSettings } from "./hero"
import { FeaturesSettings } from "./features"
import { Wrapper, Title, SettingsBlock, SubTitle } from "./styled"

const SettingsFields = ({ name, data }) => {
  if (name === 'hero') return <HeroSettings data={data} />
  if (name === 'features') return <FeaturesSettings data={data} />
  return null
}

export const ProjectSettings = ({ blocks = [] }) => {
  return (
    <Wrapper>
      <Title>Settings</Title>
      {
        blocks.map(({ id, name, data }, index) => (
          <SettingsBlock key={id}>
            <SubTitle>{index + 1}. {name}</SubTitle>
            <SettingsFields name={name} data={data} />
          </SettingsBlock>
        ))
      }
    </Wrapper>
  )
}