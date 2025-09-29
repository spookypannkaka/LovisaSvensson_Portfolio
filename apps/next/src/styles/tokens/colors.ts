// Static (mode-agnostic) colors:
export const staticColors = {
  black: '#38363E',
  white: '#F6F3FB',
  lightGray: '#E0D8F3',
  gray: '#A9A5B4',
  green: '#32D581',
  purple: '#7139B5',
} as const

// Semantic palette keys per mode:
export type SemanticColorKeys =
  | 'primary'
  | 'secondary'
  | 'background'
  | 'card'
  | 'border'
  | 'text'
  | 'subtext'

// A full color map for a theme:
export type ColorPalette = Record<SemanticColorKeys, string>

// Palette for light mode:
export const lightColors: ColorPalette = {
  primary: staticColors.purple,
  secondary: staticColors.green,
  background: staticColors.white,
  card: staticColors.white,
  border: staticColors.lightGray,
  text: staticColors.black,
  subtext: staticColors.gray,
}