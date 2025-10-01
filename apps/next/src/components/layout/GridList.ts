"use client";
import styled from "styled-components";

export const GridList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, max-content)); 
  justify-items: start;
  align-items: start;
  gap: ${({ theme }) => theme.spacing.lg}px;
  padding-top: ${({ theme }) => theme.spacing.md}px;
  padding-bottom: ${({ theme }) => theme.spacing.md}px;

  > li { min-width: 0; }
`;