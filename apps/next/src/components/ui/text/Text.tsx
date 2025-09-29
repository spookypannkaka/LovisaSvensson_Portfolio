"use client"
import React from "react";
import styled, { css } from "styled-components";
import { TypeVariant } from "@/styles/tokens";

// ---------- Props ----------
export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: keyof JSX.IntrinsicElements; // allow overriding tag
  variant?: TypeVariant;            // h1, body1, caption, etc.
  children: React.ReactNode;
}

// ---------- Typography styles ----------
const variantStyles = (variant: TypeVariant) => css`
  ${({ theme }) => {
    const spec = theme.typography.variants[variant];
    const family =
      spec.family && theme.typography.families?.[spec.family]
        ? theme.typography.families[spec.family]
        : theme.typography.families?.body;

    return css`
      font-family: ${family};
      font-size: ${theme.typography.fontSizes[spec.size]}px;
      font-weight: ${theme.typography.fontWeights[spec.weight]};
      font-style: ${spec.fontStyle || "normal"};
      line-height: ${theme.typography.lineHeights[spec.lineHeight]}px;
      text-transform: ${spec.textTransform || "none"};
      margin: 0;
    `;
  }}
`;

// ---------- Base Text ----------
const BaseText = styled.span<TextProps>`
  ${({ variant = "body1" }) => variantStyles(variant)}
`;

// ---------- Reusable component ----------
export const Text: React.FC<TextProps> = ({ as = "span", variant = "body1", children, ...rest }) => {
  return (
    <BaseText as={as} variant={variant} {...rest}>
      {children}
    </BaseText>
  );
};

// ---------- Pre-styled exports ----------
export const H1 = (props: Omit<TextProps, "variant" | "as">) => (
  <Text as="h1" variant="h1" {...props} />
);

export const H2 = (props: Omit<TextProps, "variant" | "as">) => (
  <Text as="h2" variant="h2" {...props} />
);

export const H3 = (props: Omit<TextProps, "variant" | "as">) => (
  <Text as="h3" variant="h3" {...props} />
);

export const Body1 = (props: Omit<TextProps, "variant" | "as">) => (
  <Text as="p" variant="body1" {...props} />
);

export const Body2 = (props: Omit<TextProps, "variant" | "as">) => (
  <Text as="p" variant="body2" {...props} />
);

export const Caption = (props: Omit<TextProps, "variant" | "as">) => (
  <Text as="span" variant="caption" {...props} />
);

export const ButtonText = (props: Omit<TextProps, "variant" | "as">) => (
  <Text as="span" variant="button" {...props} />
);
