import { ColorWash, Content, Halftone, HeroSection, Visual } from ".";
import Image from "next/image";

export default function Hero() {
  return (
    <HeroSection>
      <Visual>
        <Image
          src="/images/hero-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
            userSelect: "none",
            pointerEvents: "none",
            filter: "grayscale(0.2) contrast(1.1) brightness(0.95)",
          }}
        />
        <ColorWash />
        <Halftone />
      </Visual>


      
      <Content>
        <h1>Hello, I’m Your Name</h1>
        <p>Frontend Developer • UI/UX Enthusiast</p>
      </Content>
    </HeroSection>
  );
}