"use client";
import styled from "styled-components";

export const AboutSection = styled.section`
  background: ${({ theme }) => theme.colors.primary};

  position: relative;
  color: #eee;

  background-image: url("/images/grunge-texture.png");
  background-size: cover;
  mix-blend-mode: soft-light;
    
  /* subtle vignette */
  &::before{
    content:"";
    position:absolute; inset:0;
    pointer-events:none;
    background: radial-gradient(120% 80% at 50% 30%, transparent 55%, rgba(0,0,0,.25) 100%);
    mix-blend-mode: multiply;
    opacity:.6;
  }
`;