import styled, { css } from 'styled-components'

export const Container = styled.div`
  cursor: pointer;
  padding: 8px;
`

export const Input = styled.input`
  cursor: pointer;
`

type InputProps = {
  isCorrect?: boolean
}

export const Label = styled.label<InputProps>`
  cursor: pointer;
  padding: 8px;
  ${({ isCorrect }) =>
    isCorrect &&
    css`
      color: green !important;
    `}
`
