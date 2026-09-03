import Button from "@/components/Button";
import { DashboardCard } from "@/components/DashboardCard";
import { useState } from "react";
import { FaBrain, FaRegFileAlt } from "react-icons/fa";
import { GiCardPick } from "react-icons/gi";
import { MdComputer, MdDriveFolderUpload, MdSummarize } from "react-icons/md";
import { useNavigate } from "react-router";
import { generateStudyResource } from "../services/studyService";

const Dashboard = () => {
  const navigate = useNavigate();

  const MAX_FILE_SIZE = 10 * 1024 * 1024;

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [selectedType, setSelectedType] = useState("");

  const [isGenerating, setIsGenerating] = useState(false);

  const [error, setError] = useState("");
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setError("");

    if (file.type !== "application/pdf") {
      setSelectedFile(null);
      setError("Please select a PDF file.");
      e.target.value = "";
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setSelectedFile(null);
      setError("PDF file is too large. Maximum file size is 10 MB.");
      e.target.value = "";
      return;
    }

    setSelectedFile(file);
  };

  const handleGenerate = async () => {
    if (!selectedFile) {
      setError("Please upload a study material first.");
      return;
    }

    if (!selectedType) {
      setError("Please select what you want to generate.");
      return;
    }

    setError("");
    setIsGenerating(true);

    try {
      const result = await generateStudyResource(selectedFile, selectedType);

      console.log("Generated study session:", result);

      navigate(`/study/${result.session.id}`);
    } catch (error: any) {
      console.error("Generation error:", error);

      setError(
        error.response?.data?.message ||
          "Something went wrong while generating your resource.",
      );
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section className=" w-full px-8 md:px-24 py-6">
      <div className=" mx-auto text-center">
        <h1 className=" text-3xl mt-20">Upload study material</h1>
        <p className=" text-slate-400 mt-2">
          Upload lecturevPDFs,then choose exactly how you want to study them.
        </p>

        <div className="mx-4">
          <label
            htmlFor="study-material"
            className="mt-7 rounded-2xl border border-dotted border-slate-300 text-center px-7 py-6 flex flex-col items-center cursor-pointer hover:border-indigo transition"
          >
            {selectedFile ? (
              <>
                <FaRegFileAlt className=" text-indigo size-10" />
                <h2 className="font-bold text-xl">{selectedFile.name}</h2>

                <p className="text-slate-300 text-sm mt-1">
                  File selected successfully
                </p>
              </>
            ) : (
              <>
                <MdDriveFolderUpload className="text-indigo size-10" />
                <h2 className="font-bold text-xl">Drop your material here</h2>

                <p className="text-slate-300 text-sm">
                  Click to browse your files
                </p>
              </>
            )}

            <input
              id="study-material"
              type="file"
              accept=".pdf,application/pdf"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>

          <h2 className=" font-bold text-2xl mt-10">
            What would you like to generate?
          </h2>
          <div className="flex gap-6 mt-3 items-center">
            <DashboardCard
              icon={FaBrain}
              title="Explain"
              selected={selectedType === "EXPLANATION"}
              onClick={() => setSelectedType("EXPLANATION")}
            />

            <DashboardCard
              icon={MdSummarize}
              title="Summarize"
              selected={selectedType === "SUMMARY"}
              onClick={() => setSelectedType("SUMMARY")}
            />
          </div>

          <div className="flex gap-6 justify-between my-3">
            <DashboardCard
              icon={MdComputer}
              title="CBT Questions"
              selected={selectedType === "CBT"}
              onClick={() => setSelectedType("CBT")}
            />

            <DashboardCard
              icon={GiCardPick}
              title="Flashcards"
              selected={selectedType === "FLASHCARDS"}
              onClick={() => setSelectedType("FLASHCARDS")}
            />
          </div>

          <Button
            type="button"
            onClick={handleGenerate}
            disabled={!selectedFile || !selectedType || isGenerating}
            className="mt-7"
          >
            {isGenerating ? "Generating..." : "Generate Resources"}
          </Button>

          {error && <p className="text-red-400 text-sm mt-4">{error}</p>}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
