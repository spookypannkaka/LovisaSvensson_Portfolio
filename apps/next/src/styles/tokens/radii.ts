export const radii = {
  sm: 4,
  md: 8,
  lg: 16,
  pill: 50,
} as const

export type RadiusKey = keyof typeof radii