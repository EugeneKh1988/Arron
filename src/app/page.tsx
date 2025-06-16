import Advantages from "@/components/Advantages";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <>
      <Nav activeMenuName="Other" />
      <Hero />
      <Advantages />
    </>
  );
}
