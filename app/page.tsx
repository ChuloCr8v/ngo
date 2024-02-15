import Image from "next/image";
import Hero from "./components/homepage/Hero";
import About from "./components/homepage/About";
import Objectives from "./components/homepage/Objectives";
import CTO from "./components/homepage/CTO";
import HowCouldYouHelp from "./components/homepage/HowCouldYouHelp";
import Events from "./components/homepage/Events";
import BecomeAVolunteer from "./components/homepage/BecomeAVolunteer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24">
      <Hero />
      <About />
      <Objectives />
      <CTO />
      <HowCouldYouHelp />
      <Events />
      <BecomeAVolunteer />
    </main>
  );
}
