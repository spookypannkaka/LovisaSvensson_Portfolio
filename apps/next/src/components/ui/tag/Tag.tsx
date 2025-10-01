"use client";
import { Logo, TagProps, TagWrapper } from ".";
import Image from "next/image";
import React from "react";
import { ButtonText } from "@ui/text";

export const Tag: React.FC<TagProps> = ({ title, logoUrl, tagColor }) => {
  return (
    <TagWrapper $tagColor={tagColor}>
      {logoUrl && (
        <Logo>
          <Image src={logoUrl} alt={title} width={20} height={20} />
        </Logo>
      )}
      <ButtonText>{title}</ButtonText>
    </TagWrapper>
  );
};