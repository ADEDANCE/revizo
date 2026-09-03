import { Card } from "../components/Card";

export const Tools = () => {
  return (
    <section id="tools" className=" w-full px-6 md:px-20 py-6">
      <div className=" mx-auto text-center">
        <h2 className=" text-2xl text-off-white ">
          A study toolkit that adapts to you.
        </h2>
        <p className=" text-slate-300  my-3">
          Every resource stays connected to the material it came from—so your
          study space stays organized and useful.
        </p>
      </div>

      <div className=" flex flex-col md:flex-row gap-4">
        <Card
          title="Explain"
          explanation="Break difficult concepts down clearly."
        />
        <Card
          title="Summarize"
          explanation="Turn long lectures into focused notes."
        />
        <Card
          title="CBT Questions"
          explanation="Practice with relevant multiple-choice questions."
        />
        <Card
          title="Flashcards"
          explanation="Build recall with interactive review car"
        />
      </div>
    </section>
  );
};
