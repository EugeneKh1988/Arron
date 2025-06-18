import About from "@/components/About";
import Advantages from "@/components/Advantages";
import Gadgets from "@/components/Gadgets";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <>
      <Nav activeMenuName="Other" />
      <Hero />
      <Advantages />
      <Gadgets />
      <About />
    </>
  );
}
