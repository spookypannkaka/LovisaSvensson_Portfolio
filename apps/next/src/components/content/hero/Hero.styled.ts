"use client";
import styled from "styled-components";

export const HeroSection = styled.section`
  background-color: ${({ theme }) => theme.colors.primary};
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(90% 65% at 50% 40%, transparent 60%, rgba(0,0,0,.35));
    pointer-events: none;
    z-index: 1;
  }

`;

export const Visual = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;

  -webkit-mask-image: url("/images/splatter-texture.png");
  mask-image: url("/images/splatter-texture.png");

  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;

  -webkit-mask-size: cover;
  mask-size: cover;

  -webkit-mask-position: bottom;
  mask-position: bottom;

  -webkit-mask-mode: luminance;
  mask-mode: luminance;
`;

export const Content = styled.div`
  position: relative;
  z-index: 3;
  text-align: center;
`;

export const ColorWash = styled.div`
  position: absolute; inset: 0;
  background:
    linear-gradient(180deg, rgba(120, 40, 200, .45), rgba(30, 10, 60, .55));
  mix-blend-mode: multiply;
  z-index: 0; pointer-events: none;
`;

export const Halftone = styled.div`
  position: absolute; inset: 0;
  background-image: radial-gradient(currentColor 1px, transparent 1px);
  background-size: 3px 3px;
  color: rgba(0,0,0,.8);
  mix-blend-mode: overlay;
  opacity: .18;
  z-index: 2; pointer-events: none;
`;