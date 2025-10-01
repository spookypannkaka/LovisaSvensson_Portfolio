import { TagProps } from "@ui/tag";

export interface ProjectCardProps {
    title: string,
    subtitle: string,
    year: number,
    tags?: TagProps[],
    description: string,
    mediaUrl?: string,
}