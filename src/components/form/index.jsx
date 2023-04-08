import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { media } from '../../styles/adaptive';
import { Button } from '../button';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 30px;
  border-radius: 30px;
  width: 100%;

  ${media.lg`
    width: 600px;
  `}
`

const SubmitButton = styled(Button)`
  width: 100%;
  &:active {
    cursor: wait;
  }
`

const Title = styled.h1`
  margin-bottom: 30px;
  font-size: 28px;
`

const LinkUnder = styled(Link)`
  font-size: 16px;
  margin-top: 30px;
  color: ${({ theme }) => theme.colors.primary};
`

const Error = styled.div`
  color: ${({ theme }) => theme.colors.error};
  font-size: 16px;
  margin-top: 20px;
`

export const Form = ({ children, error, onSubmit, title, btnText = 'Save', linkUnder }) => {
  return (
    <FormContainer>
      {title && <Title>{title}</Title>}
      {children}
      <SubmitButton
        variant="primary"
        onClick={onSubmit}
      >
        {btnText}
      </SubmitButton>
      {error && <Error>{error}</Error>}
      {linkUnder && (
        <LinkUnder to={linkUnder.path}>{linkUnder.text}</LinkUnder>
      )}
    </FormContainer>
  )
}
