import { useEffect, useState } from "react";
import { useParams } from "react-router";
import SummaryViewer from "@/components/study/SummaryViewer";
import ExplanationViewer from "@/components/study/ExplanationViewer";
import CBTViewer from "@/components/study/CBTViewer";
import FlashcardViewer from "@/components/study/FlashcardViewer";
import { getStudySession } from "@/services/studyService";

type StudySessionData = {
  id: string;
  title: string;
  type: "SUMMARY" | "EXPLANATION" | "CBT" | "FLASHCARDS";
  result: {
    summary?: string;
    explanation?: string;
    questions?: {
      question: string;
      options: string[];
      correctAnswer: number;
      explanation: string;
    }[];
    flashcards?: {
      question: string;
      answer: string;
    }[];
  };
};

const StudySession = () => {
  const { id } = useParams();

  const [session, setSession] = useState<StudySessionData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSession = async () => {
      if (!id) {
        setError("Study session ID is missing.");
        setIsLoading(false);
        return;
      }

      try {
        const data = await getStudySession(id);

        console.log("Study session:", data);

        setSession(data.session);
      } catch (error: any) {
        console.error("Failed to load study session:", error);

        setError(
          error.response?.data?.message || "Unable to load this study session.",
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchSession();
  }, [id]);

  if (isLoading) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <p className="text-slate-400">Loading study session...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <p className="text-red-400">{error}</p>
      </section>
    );
  }

  if (!session) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <p className="text-slate-400">Study session not found.</p>
      </section>
    );
  }

  switch (session.type) {
    case "SUMMARY":
      return (
        <SummaryViewer
          title={session.title}
          summary={session.result.summary || ""}
        />
      );

    case "EXPLANATION":
      return (
        <ExplanationViewer
          title={session.title}
          explanation={session.result.explanation || ""}
        />
      );

    case "CBT":
      return (
        <CBTViewer
          title={session.title}
          questions={session.result.questions || []}
        />
      );

    case "FLASHCARDS":
      return (
        <FlashcardViewer
          title={session.title}
          flashcards={session.result.flashcards || []}
        />
      );

    default:
      return (
        <section className="min-h-screen flex items-center justify-center">
          <p className="text-slate-400">Unsupported study type.</p>
        </section>
      );
  }
};

export default StudySession;
