import { About } from "@/components/content/about";
import { Hero } from "@/components/content/hero";
import { GridList } from "@/components/layout/GridList";
import { ProjectCard } from "@/components/ui";
import { Body1, Body2, ButtonText, Caption, H1, H2, H3 } from "@/components/ui/text";
import { TAGS } from "@/data";
import { projects } from "@/data";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <About />

      </main>
      <footer>
      </footer>
    </div>
  );
}
