import { Hero } from "../sections/Hero";
import { HowItWork } from "../sections/HowItWork";
import { Tools } from "../sections/Tools";

export const Landingpage = () => {
  return (
    <div className=" bg-deep-navy w-full">
      <Hero />
      <HowItWork />
      <Tools />
    </div>
  );
};
