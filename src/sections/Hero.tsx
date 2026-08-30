import Button from "../components/Button";
import HeroImage from "../assets/Images/heroImage.png";
import { useNavigate } from "react-router";

export const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className=" w-full px-6 py-7 ">
      <div className=" mx-auto text-center">
        <h1
          className=" text-off-white text-4xl
         md:text-7xl"
        >
          Study smarter with the <br className=" hidden md:block" /> material
          you already have.
        </h1>

        <p className=" text-slate-400 mt-6  md:text-2xl">
          Upload your lecture materials and let Revizo turn them into
          explanations, summaries, practice questions, and flashcards.
        </p>

        <Button className=" bg-indigo mt-5" onClick={() => navigate("/signup")}>
          Start Studying{" "}
        </Button>

        <img
          src={HeroImage}
          alt="Revizo study dashboard"
          className="mt-6 mx-auto"
        />
      </div>
    </section>
  );
};
