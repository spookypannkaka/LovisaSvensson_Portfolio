"use client"
import React from "react";
import { 
  ProjectCardProps,
  Shell,
  Card,
  Media,
  Content,
  TagList,
  Arrow
} from ".";
import { Body1, Caption, H2 } from "../text";
import { Tag } from "@ui/tag";

export const ProjectCard: React.FC<ProjectCardProps> = ({ 
    title,
    subtitle,
    year,
    tags = [],
    description,
    mediaUrl,
    ...buttonProps
}) => {
    return (
        <Shell>
        <Card {...buttonProps}>
            <Media aria-hidden="true">
                <iframe
                    src={`${mediaUrl}`}
                    allow="autoplay; fullscreen;"
                    allowFullScreen
                    title={title}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        border: "none",
                        pointerEvents: "none"
                    }}
                />
            </Media>

            <Content>
                <div>
                    <H2>{title}</H2>
                    <Caption>{`${subtitle} (${year})`}</Caption>
                </div>

                {!!tags.length && (
                <TagList>
                    {!!tags?.length && (
                    <TagList>
                        {tags.map((tag) => (
                        <Tag key={tag.title} {...tag} />
                        ))}
                    </TagList>
                    )}
                </TagList>
                )}

                <Body1>{description}</Body1>

                <Arrow aria-hidden="true" viewBox="0 0 24 24">
                    <path d="M8 5l8 7-8 7" />
                </Arrow>
            </Content>
        </Card>
        </Shell>
    );
}