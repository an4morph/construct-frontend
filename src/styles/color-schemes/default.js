const PRIMARY_COLOR = '#6285DF'
const PRIMARY_COLOR_HOVER = '#4e6fc2'
const SECONDARY_COLOR = '#c0d0f8'
const GRAY1 = '#bbbbbb'
const GRAY2 = '#efefef'
const WHITE = '#FFFFFF'
const BLACK = '#2C3343'
const RED = '#c41b1b'

export const defaultColorScheme = {
  primary: PRIMARY_COLOR,
  body: '#EEEEEE',
  text: BLACK,
  error: RED,
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
  },
  project: {
    settings: {
      bg: WHITE,
      itemBg: GRAY2,
      text: BLACK,
      fieldSeparator: GRAY1,
    }
  },
  dev: {
    bg: WHITE,
    text: BLACK,
    icon: GRAY1,
  }
}