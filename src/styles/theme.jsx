import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './global'

const PRIMARY_COLOR = '#6285DF'
const PRIMARY_COLOR_HOVER = '#4e6fc2'
const SECONDARY_COLOR = '#c0d0f8'

const WHITE = '#FFFFFF'
const BLACK = '#2C3343'

const theme = {
  fonts: {
    normal: "'Poppins', sans-serif",
  },
  colors: {
    primary: PRIMARY_COLOR,
    body: '#EEEEEE',
    text: BLACK,
    footer: {
      bg: BLACK,
      text: WHITE,
    },
    btn: {
      primary: {
        bg: PRIMARY_COLOR,
        text: WHITE,
        bgHover: PRIMARY_COLOR_HOVER,
      },
      secondary: {
        bg: WHITE,
        text: BLACK,
        bgHover: SECONDARY_COLOR,
        border: SECONDARY_COLOR,
        borderHover: SECONDARY_COLOR,
      }
    }
  }
}

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
)