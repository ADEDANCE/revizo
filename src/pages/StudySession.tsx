import { useParams } from "react-router";
import SummaryViewer from "@/components/study/SummaryViewer";
import ExplanationViewer from "@/components/study/ExplanationViewer";
import CBTViewer from "@/components/study/CBTViewer";
import FlashcardViewer from "@/components/study/FlashcardViewer";

const StudySession = () => {
  const { id } = useParams();

  // Temporary data.
  // Later this will come from your API using the ID.
  const session = {
    id,
    title: "ANN 212 Compiled.pdf",
    type: "SUMMARY",
    result: {
      summary: `This study material covers ANN 202 (Introductory Agricultural Biochemistry), focusing on major nutrients and biochemical components in plant and animal systems.

Water constitutes approximately 50%–60% of adult animal body mass and functions as a solvent, metabolic reactant, transport medium, and body temperature regulator.

Carbohydrates are polyhydroxy aldehydes or ketones composed of carbon, hydrogen, and oxygen.

Proteins are composed of amino acid chains linked by peptide bonds and perform important functions including enzymatic catalysis, structural support, transport, immune protection, and regulation.`,
    },
  };

  if (!session) {
    return <p>Study session not found.</p>;
  }

  switch (session.type) {
    case "SUMMARY":
      return (
        <SummaryViewer title={session.title} summary={session.result.summary} />
      );

    case "EXPLANATION":
      return (
        <ExplanationViewer
          title={session.title}
          explanation=""
          //   {session.result.explanation}
        />
      );

    // case "CBT":
    //   return (
    //     <CBTViewer
    //       title={session.title}
    //       questions=
    //       {session.result.questions}
    //     />
    //   );

    // case "FLASHCARDS":
    //   return (
    //     <FlashcardViewer
    //       title={session.title}
    //       flashcards={session.result.flashcards}
    //     />
    //   );

    default:
      return <p>Unsupported study type.</p>;
  }
};

export default StudySession;
