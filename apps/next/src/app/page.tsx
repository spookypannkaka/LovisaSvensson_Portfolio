import { GridList } from "@/components/layout/GridList";
import { ProjectCard } from "@/components/ui";
import { Body1, Body2, ButtonText, Caption, H1, H2, H3 } from "@/components/ui/text";
import { TAGS } from "@/data";
import { projects } from "@/data";

export default function Home() {
  return (
    <div>
      <main>
        <H1>Lovisa Svensson</H1>
        <H2>M.Sc. in Media Technology and Engineering</H2>
        <H3>Software engineer from Norrköping</H3>
        <Body1>Hi, I&apos;m a fullstack and game dev.</Body1>
        <Body2>I like creating my own websites and mobile apps.</Body2>
        <Caption>Here you can view my projects.</Caption>
        <ButtonText>Hire me!</ButtonText>

        <GridList>
        {projects.map(project => (
          <ProjectCard
            key={project.title}
            title={project.title}
            subtitle={project.subtitle}
            year={project.year}
            description={project.description}
            tags={project.tags.map(tagKey => TAGS[tagKey])}
            mediaUrl={project.mediaUrl}
          />
        ))}
        </GridList>

      </main>
      <footer>
      </footer>
    </div>
  );
}
