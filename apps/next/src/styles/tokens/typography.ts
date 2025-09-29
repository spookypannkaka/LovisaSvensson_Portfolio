export const fonts = {
  display: '"Kanit", system-ui, -apple-system, Segoe UI, Roboto, sans-serif',
  body: '"PT Sans", system-ui, -apple-system, Segoe UI, Roboto, sans-serif',
  mono: '"Menlo", monospace',
} as const;

export const families = {
  display: fonts.display,
  body: fonts.body,
};

export const fontWeights = {
  light:  '300' as const,
  normal: '400' as const,
  medium: '500' as const,
  semibold: '600' as const,
  bold:   '700' as const,
};

export const fontSizes = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 28,
  '2xl': 56,
} as const;

export const lineHeights = {
  xs: 16,
  sm: 18,
  md: 20,
  lg: 24,
  xl: 28,
  '2xl': 40,
} as const;

export type Typography = {
  fonts: typeof fonts;
  fontWeights: typeof fontWeights;
  fontSizes: typeof fontSizes;
  lineHeights: typeof lineHeights;
};

// --- Global semantic variant types (org-wide) ---
export type TypeVariant = 'h1'|'h2'|'h3'|'body1'|'body2'|'caption'|'button';
export type TypeFamily = 'display'|'body';
export type TextTransform = 'none' | 'uppercase' | 'lowercase' | 'capitalize';
export type TextStyle = 'normal' | 'italic' | 'oblique';

export type TypeSpec = {
  size: keyof typeof fontSizes;
  lineHeight: keyof typeof lineHeights;
  weight: keyof typeof fontWeights;
  family?: TypeFamily;
  textTransform?: TextTransform;
  fontStyle?: TextStyle;
};

export const defaultTypeVariants: Record<TypeVariant, TypeSpec> = {
  h1:     { size: '2xl', lineHeight: '2xl', weight: 'bold',     family: 'display' },
  h2:     { size: 'xl',  lineHeight: 'xl',  weight: 'semibold', family: 'display' },
  h3:     { size: 'lg',  lineHeight: 'lg',  weight: 'semibold', family: 'body'    },
  body1:  { size: 'md',  lineHeight: 'lg',  weight: 'normal',   family: 'body'    },
  body2:  { size: 'sm',  lineHeight: 'md',  weight: 'normal',   family: 'body'    },
  caption:{ size: 'xs',  lineHeight: 'sm',  weight: 'semibold', family: 'body', fontStyle: 'italic' },
  button: { size: 'lg',  lineHeight: 'md',  weight: 'bold',     family: 'body', textTransform: 'uppercase' },
};
