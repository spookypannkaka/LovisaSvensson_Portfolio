"use client";
import { getContrastingTextColor } from "@/utils";
import styled from "styled-components";

export const TagWrapper = styled.div<{ $tagColor?: string }>`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm}px;
  padding: ${({ theme }) => theme.spacing.sm}px;
  border-radius: ${({ theme }) => theme.radii.md}px;
  background-color: ${({ $tagColor, theme }) => $tagColor ?? theme.colors.primary};

  color: ${({ $tagColor, theme }) =>
    $tagColor
      ? getContrastingTextColor(
          $tagColor,
          theme.staticColors.white,
          theme.staticColors.black
        )
      : theme.staticColors.black};
      
  line-height: 1;
  white-space: nowrap;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  img {
    display: block;
  }
`;