import Button from "../components/Button";

export const Hero = () => {
  return (
    <section className=" w-full px-6 py-7 bg-deep-navy">
      <div className=" mx-auto text-center">
        <h1 className=" text-off-white text-4xl
         md:text-7xl">
          Study smarter with the <br /> material you already have.
        </h1>

        <p className=" text-slate-400">
          Upload your lecture materials and let Revizo turn them into
          explanations, summaries, practice questions, and flashcards.
        </p>

        <Button className=" bg-indigo">Start Studying </Button>
      </div>
    </section>
  );
};
