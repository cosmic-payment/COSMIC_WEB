import Hero from "@/components/sections/hero";
import TrustedBy from "@/components/sections/trusted-by";
import CardFeature from "@/components/sections/card-feature";
import Currencies from "@/components/sections/currencies";
import Api from "@/components/sections/api";
import Testimonials from "@/components/sections/testimonials";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <Hero />
      <TrustedBy />
      <CardFeature />
      <Api />
      <Testimonials />
      <Currencies />
    </main>
  );
}
