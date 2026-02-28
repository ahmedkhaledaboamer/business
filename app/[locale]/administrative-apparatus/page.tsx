import { CTA } from "@/components/screens/administrative-apparatus/CTA";
import { Hero } from "@/components/screens/administrative-apparatus/Hero";
import { Stats } from "@/components/screens/administrative-apparatus/Stats";
import { Pyramid } from "@/components/screens/administrative-apparatus/Pyramid";
import { Positions } from "@/components/screens/administrative-apparatus/Positions";
import { Process } from "@/components/screens/administrative-apparatus/Process";

export default function administrativeApparatusPage() {
  return (
    <main
      className="overflow-x-hidden"
      style={{
        scrollBehavior: 'smooth'
      }}>

      <Hero />
      <Stats />
      <Pyramid />
      <Positions />
      <Process />
      <CTA />
  </main>
  );
}
