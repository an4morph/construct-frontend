import styled from "styled-components"

const NakedBtn = styled.button`
  height: 40px;
  font-size: 16px;
  transition: all 250ms;
`

const PrimaryBtn = styled(NakedBtn)`
  height: 50px;
  font-size: 20px;
  background-color: ${({ theme }) => theme.colors.btn.primary.bg};
  color: ${({ theme }) => theme.colors.btn.primary.text};
  padding: 0 40px;
  text-transform: uppercase;
  border-radius: 25px;
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

const IconBtn = styled(NakedBtn)`
  background-color: ${({ theme }) => theme.colors.btn.secondary.bg};
  color: ${({ theme }) => theme.colors.btn.secondary.text};
  border: ${({ theme }) => `1px solid ${theme.colors.btn.secondary.border}`};
  width: 40px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: ${({ theme }) => theme.colors.btn.secondary.bgHover};
  }
  & svg {
    width: 24px;
    height: 24px;
  }
`

export const Button = ({ children, icon, onClick, className, variant = 'naked' }) => {
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
  if (variant === 'icon') {
    return (
      <IconBtn {...props}>
        {icon}
      </IconBtn>
    )
  }
  return (
    <NakedBtn {...props}>
      {children}
    </NakedBtn>
  )
}