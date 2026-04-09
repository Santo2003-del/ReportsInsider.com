import { Hero } from "../sections/Hero";
import { About } from "../sections/About";
import { Services } from "../sections/Services";
import { Trust } from "../sections/Trust";
import { WhyChooseUs } from "../sections/WhyChooseUs";
import { Industries } from "../sections/Industries";
import { Testimonials } from "../sections/Testimonials";
import { Contact } from "../sections/Contact";

export function Home() {
  return (
    <>
      <Hero />
      <Trust />
      <About />
      <Services />
      <WhyChooseUs />
      <Industries />
      <Testimonials />
      <Contact />
    </>
  );
}
