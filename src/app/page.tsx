import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Memberships } from "@/components/sections/Memberships";
import { Reviews } from "@/components/sections/Reviews";
import { Process } from "@/components/sections/Process";
import { CallToAction } from "@/components/sections/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Memberships />
      <Reviews />
      <Process />
      <CallToAction />
    </>
  );
}
