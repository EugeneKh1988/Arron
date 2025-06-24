import About from "@/components/About";
import Advantages from "@/components/Advantages";
import Gadgets from "@/components/Gadgets";
import Gifts from "@/components/Gifts";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Nav activeMenuName="Other" />
      <Hero />
      <Advantages />
      <Gadgets />
      <About />
      <Reviews />
      <Projects />
      <Services />
      <Gifts />
    </>
  );
}
