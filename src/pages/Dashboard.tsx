import Button from "@/components/Button";
import { Card } from "@/components/Card";
import { FaBrain } from "react-icons/fa";
import { GiCardPick } from "react-icons/gi";
import { MdComputer, MdDriveFolderUpload, MdOutlineDriveFileMove, MdSummarize } from "react-icons/md";

const Dashboard = () => {
  return (
    <section className=" w-full px-8 md:px-24 py-6">
      <div className=" mx-auto text-center">
        <h1 className=" text-3xl mt-20">Upload study material</h1>
        <p className=" text-slate-400 mt-2">
          Upload lecturevPDFs,then choose exactly how you want to study them.
        </p>

        <div className="mx-14">
          <div className="  mt-7 rounded-2xl border border-dotted border-slate-300 text-center px-7 py-6 flex flex-col items-center">
            <MdDriveFolderUpload className=" text-indigo size-10" />
            <h2 className=" font-bold text-xl">Drop your material here</h2>
          </div>

          <h2 className=" font-bold text-2xl mt-10">
            What would you like to generate?
          </h2>

          <div className=" flex gap-6 mt-3 items-center">
            <Card icon={FaBrain} title="Explain" />
            <Card icon={MdSummarize} title="Summarize" />
          </div>

          <div className=" flex gap-6 justify-between my-3">
            <Card icon={MdComputer} title="CBT Questions" />
            <Card icon={GiCardPick} title="Flashcards" />
          </div>

          <Button className=" mt-7">Generate Resources</Button>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
