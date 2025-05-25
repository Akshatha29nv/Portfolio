import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Certifications } from "@/components/Certifications";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Helmet } from "react-helmet";

export default function HomePage() {
  return (
    <Layout>
      <Helmet>
        <title>Akshatha Mundrathi | Network Security Engineer</title>
        <meta 
          name="description" 
          content="Akshatha Mundrathi - Network Security Engineer with expertise in Fortinet, Cisco, and Palo Alto security infrastructure" 
        />
      </Helmet>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Certifications />
      <Projects />
      <Contact />
    </Layout>
  );
}
