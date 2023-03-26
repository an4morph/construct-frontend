import styled from "styled-components"

const NakedBtn = styled.button`
  height: 40px;
  font-size: 16px;
  transition: all 250ms;
`

const PrimaryBtn = styled(NakedBtn)`
  background-color: ${({ theme }) => theme.colors.btn.primary.bg};
  color: ${({ theme }) => theme.colors.btn.primary.text};
  padding: 0 40px;
  border-radius: 20px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.btn.primary.bgHover};
  }
`
const SecondaryBtn = styled(NakedBtn)`
  background-color: ${({ theme }) => theme.colors.btn.secondary.bg};
  color: ${({ theme }) => theme.colors.btn.secondary.text};
  border: ${({ theme }) => `1px solid ${theme.colors.btn.secondary.border}`};
  padding: 0 20px;
  border-radius: 20px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.btn.secondary.bgHover};
  }
`

export const Button = ({ children, onClick, className, variant = 'naked' }) => {
  const props = {
    type: 'button',
    onClick,
    className
  }
  
  if (variant === 'primary') {
    return (
      <PrimaryBtn {...props}>
        {children}
      </PrimaryBtn>
    )
  }
  if (variant === 'secondary') {
    return (
      <SecondaryBtn {...props}>
        {children}
      </SecondaryBtn>
    )
  }
  return (
    <NakedBtn {...props}>
      {children}
    </NakedBtn>
  )
}