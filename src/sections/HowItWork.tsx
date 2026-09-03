import { Card } from "../components/Card";

export const HowItWork = () => {
  return (
    <section id="howItWorks" className=" w-full px-6 md:px-20 py-6">
      <div className=" mx-auto text-center">
        <p className=" text-slate-300">YOUR MATERIAL, MADE USEFUL</p>
        <h2 className=" text-2xl text-off-white">
          From upload to understanding in minutes.
        </h2>
        <p className=" text-slate-300">
          Choose only the study help you need today—or combine tools to prepare
          in your own way.
        </p>
        <div className=" flex flex-col md:flex-row gap-4 mt-6">
          <Card
            number="01"
            title="Upload your material"
            explanation="Drop in PDFs, Word docs, slides, or simple notes."
          />
          <Card
            number="02"
            title="Choose what you need"
            explanation="Pick one tool, or select a tailored combination."
          />
          <Card
            number="03"
            title="Study your way"
            explanation="Read, practice, review, and return whenever you need.

"
          />
        </div>
      </div>
    </section>
  );
};
