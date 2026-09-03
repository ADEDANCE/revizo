import { useState } from "react";
import StudyLayout from "./StudyLayout";

interface CBTQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface CBTViewerProps {
  title: string;
  questions: CBTQuestion[];
  requestedCount: number;
}

const CBTViewer = ({ title, questions, requestedCount }: CBTViewerProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const question = questions[currentQuestion];

  const generatedCount = questions.length;

  const handleSelectAnswer = (index: number) => {
    if (showAnswer) return;

    setSelectedAnswer(index);
  };

  const handleShowAnswer = () => {
    if (selectedAnswer === null) return;

    setShowAnswer(true);
  };

  const handleNext = () => {
    if (currentQuestion === questions.length - 1) return;

    setCurrentQuestion((prev) => prev + 1);
    setSelectedAnswer(null);
    setShowAnswer(false);
  };

  const handlePrevious = () => {
    if (currentQuestion === 0) return;

    setCurrentQuestion((prev) => prev - 1);
    setSelectedAnswer(null);
    setShowAnswer(false);
  };

  return (
    <StudyLayout title="BIO 101 — Cell Division" type="CBT">
      <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5 sm:p-6">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-off-white">{title}</h2>

          <span className="text-sm text-slate-400">
            {currentQuestion + 1} / {questions.length}
          </span>
        </div>

        <p className=" mt-2 text-xs text-slate-300">
          {generatedCount} of {requestedCount} generated Based on the content
          available in your uploaded material.
        </p>

        <div className="mt-6 border-t border-slate-700 pt-6">
          <p className="text-sm text-slate-400">
            Question {currentQuestion + 1}
          </p>

          <h3 className="mt-2 text-lg font-semibold leading-7 text-off-white">
            {question.question}
          </h3>

          <div className="mt-6 space-y-3">
            {question.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = question.correctAnswer === index;

              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleSelectAnswer(index)}
                  className={`w-full rounded-xl border p-4 text-left transition ${
                    showAnswer && isCorrect
                      ? "border-emerald-500 bg-emerald-500/10"
                      : showAnswer && isSelected && !isCorrect
                        ? "border-red-500 bg-red-500/10"
                        : isSelected
                          ? "border-indigo-500 bg-indigo-500/10"
                          : "border-slate-700 bg-slate-800 hover:border-indigo-500"
                  }`}
                >
                  <span className="flex gap-3">
                    <span className="font-semibold text-slate-400">
                      {String.fromCharCode(65 + index)}.
                    </span>

                    <span className="text-slate-200">{option}</span>
                  </span>
                </button>
              );
            })}
          </div>

          {showAnswer && (
            <div className="mt-6 rounded-xl border border-slate-700 bg-slate-800 p-4">
              <p
                className={`font-semibold ${
                  selectedAnswer === question.correctAnswer
                    ? "text-emerald-400"
                    : "text-red-400"
                }`}
              >
                {selectedAnswer === question.correctAnswer
                  ? "Correct!"
                  : "Incorrect"}
              </p>

              <p className="mt-2 text-slate-300">
                Correct answer:{" "}
                <span className="font-semibold text-off-white">
                  {question.options[question.correctAnswer]}
                </span>
              </p>

              <p className="mt-3 leading-6 text-slate-400">
                {question.explanation}
              </p>
            </div>
          )}

          <div className="mt-6 flex justify-between gap-4">
            <button
              type="button"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="rounded-xl border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:border-slate-500 disabled:cursor-not-allowed disabled:opacity-40"
            >
              ← Previous
            </button>

            {!showAnswer ? (
              <button
                type="button"
                onClick={handleShowAnswer}
                disabled={selectedAnswer === null}
                className="rounded-xl bg-indigo-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Show Answer
              </button>
            ) : (
              <button
                type="button"
                onClick={handleNext}
                disabled={currentQuestion === questions.length - 1}
                className="rounded-xl bg-indigo-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Next →
              </button>
            )}
          </div>
        </div>
      </div>
    </StudyLayout>
  );
};

export default CBTViewer;
