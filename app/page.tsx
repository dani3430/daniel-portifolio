import { About } from "@/components/sections/about";
import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";
import { Navbar } from "@/components/layout/navbar";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Blog } from "@/components/sections/blog";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
         <Projects /> 
         <Experience />
          <Blog />
           <Contact />
      </main>
      
        <Footer />
    </>
  );
}