import styled from "styled-components"

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.project.settings.bg};
  color: ${({ theme }) => theme.colors.project.settings.text};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px 0 rgb(0, 0, 0, 0.05);
`
export const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 15px;
`

export const SubTitle = styled.h3`
  font-size: 14px;
  margin-bottom: 10px;
`

export const SettingsBlock = styled.div`
  background-color: ${({ theme }) => theme.colors.project.settings.itemBg};
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
`