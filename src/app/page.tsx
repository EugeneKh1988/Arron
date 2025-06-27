import About from "@/components/About";
import Advantages from "@/components/Advantages";
import Contacts from "@/components/Contacts";
import DiagnosticForm from "@/components/DiagnosticForm";
import Gadgets from "@/components/Gadgets";
import Gifts from "@/components/Gifts";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Workers from "@/components/Workers";
import MapCaller from "@/components/MapCaller";

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
      <Workers />
      <DiagnosticForm />
      <Contacts />
      <MapCaller className="w-full min-h-700" />
    </>
  );
}
