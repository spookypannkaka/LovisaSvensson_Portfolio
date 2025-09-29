import type { DefaultTheme } from "styled-components";
import { ColorPalette, defaultTypeVariants, elevation, families, fonts, fontSizes, fontWeights, lightColors, lineHeights, radii, spacing, staticColors, transitions, TypeSpec, TypeVariant, zIndex } from "./tokens";

type BaseStaticKeys = keyof typeof staticColors;
export type StaticColors = Record<BaseStaticKeys, string> & Record<string, string>;

export interface AppTheme {
  mode: 'light' | 'dark';
  colors: ColorPalette;
  staticColors: StaticColors;
  spacing: typeof spacing;
  radii: typeof radii;
  typography: {
    fonts: typeof fonts;
    fontWeights: typeof fontWeights;
    fontSizes: typeof fontSizes;
    lineHeights: typeof lineHeights;
    variants: Record<TypeVariant, TypeSpec>;
    families?: typeof families;
  };
  elevation: typeof elevation;
  zIndex: typeof zIndex;
  transitions: typeof transitions;
}

export const lightTheme: DefaultTheme = {
  mode: 'light',
  colors: lightColors,
  staticColors,
  spacing,
  radii,
  typography: {
    fonts,
    fontWeights,
    fontSizes,
    lineHeights,
    variants: defaultTypeVariants,
    families,
  },
  elevation,
  zIndex,
  transitions,
};

export type { ColorPalette, TypeVariant, TypeSpec };