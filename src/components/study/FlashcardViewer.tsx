import { useState } from "react";
import StudyLayout from "./StudyLayout";
import Button from "../Button";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface Flashcard {
  question: string;
  answer: string;
}

interface FlashcardViewerProps {
  title: string;
  flashcards: Flashcard[];
}

const FlashcardViewer = ({
  title,
  flashcards,
}: FlashcardViewerProps) => {
  const [currentCard, setCurrentCard] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const card = flashcards[currentCard];

  const handlePrevious = () => {
    if (currentCard === 0) return;

    setCurrentCard((prev) => prev - 1);
    setShowAnswer(false);
  };

  const handleNext = () => {
    if (currentCard === flashcards.length - 1) return;

    setCurrentCard((prev) => prev + 1);
    setShowAnswer(false);
  };

  const handleToggleAnswer = () => {
    setShowAnswer((prev) => !prev);
  };

  return (
    <StudyLayout title="BIO 101 — Cell Division" type="FLASHCARDS">
      <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5 sm:p-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-off-white">{title}</h2>

          <p className="text-sm text-slate-400">
            Card {currentCard + 1} of {flashcards.length}
          </p>
        </div>

        {/* Card */}
        <div className="mt-6 rounded-2xl border border-slate-700 bg-deep-navy p-8 text-center">
          <p className="text-sm font-medium uppercase tracking-wide text-slate-400">
            {showAnswer ? "Answer" : "Question"}
          </p>

          <p className="mt-4 text-lg font-semibold leading-8 text-off-white">
            {showAnswer ? card.answer : card.question}
          </p>
        </div>

        {/* Controls */}
        <div className="mt-5 flex items-center justify-between gap-3">
          <Button
            onClick={handlePrevious}
            disabled={currentCard === 0}
          >
            <span className="flex items-center gap-2">
              <IoIosArrowBack />
              <span>Previous</span>
            </span>
          </Button>

          <Button onClick={handleToggleAnswer}>
            {showAnswer ? "Hide answer" : "Show answer"}
          </Button>

          <Button
            onClick={handleNext}
            disabled={currentCard === flashcards.length - 1}
          >
            <span className="flex items-center gap-2">
              <span>Next</span>
              <IoIosArrowForward />
            </span>
          </Button>
        </div>
      </div>
    </StudyLayout>
  );
};

export default FlashcardViewer;