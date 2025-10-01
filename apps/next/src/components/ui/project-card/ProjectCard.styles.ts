"use client"
import styled from "styled-components";

export const Shell = styled.div<{ $offset?: number }>`
  position: relative;
  width: 350px;
  border-radius: ${({ theme }) => theme.radii.lg}px;
  transition: transform 0.35s cubic-bezier(0.25, 1, 0.5, 1);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.25);

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    transform: translate(${({ $offset = 18 }) => $offset}px, ${({ $offset = 18 }) => $offset}px);
    border-radius: inherit;
    z-index: 0;
    pointer-events: none;

    transition: background-color 0.35s ease, transform 0.35s cubic-bezier(0.25, 1, 0.5, 1);

    background-color: ${({ theme }) => theme.colors.primary};
    background-image: url("/images/grunge-halftone-texture-overlay.png");
    background-size: cover;
    background-position: center;
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.25);
  }

  &:hover {
    transform: translateY(-6px);

    &::after {
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }

  &:active {
    transform: translateY(-2px) scale(0.98);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.5);
    transition: transform 0.1s ease, box-shadow 0.1s ease;
  }
`;

export const Card = styled.button`
  width: 350px;
  display: grid;
  grid-template-rows: 220px auto;
  border-radius: ${({ theme }) => theme.radii.lg}px;
  background-color: ${({ theme }) => theme.colors.card};
  overflow: hidden;
  position: relative;
  isolation: isolate;
  z-index: 1;
  border: 0;
  padding: 0;
  cursor: pointer;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.25);

  &:hover svg {
    transform: translateX(4px);
  }
`;

export const Media = styled.div`
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.secondary};
  /* Ensure the video fully covers the area, like an image */
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const Content = styled.div`
  position: relative;
  padding: ${({ theme }) => theme.spacing.lg}px;
  display: grid;
  grid-template-rows: auto auto auto 1fr;
  gap: ${({ theme }) => theme.spacing.md}px;
  text-align: left;
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm}px;
`;

export const Arrow = styled.svg`
  position: absolute;
  right: 20px;
  bottom: 20px;
  width: 32px;
  height: 32px;
  stroke: ${({ theme }) => theme.colors.primary};
  fill: none;
  stroke-width: 2.25;
  transition: transform 160ms ease;
  pointer-events: none;
`;