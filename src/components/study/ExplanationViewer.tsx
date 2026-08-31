import StudyLayout from "./StudyLayout";

interface ExplanationViewerProps {
  title: string;
  explanation: string;
}

const ExplanationViewer = ({
  title,
  explanation,
}: ExplanationViewerProps) => {
  return (
    <StudyLayout title="BIO 101 — Cell Division" type="EXPLANATION">
      <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5 sm:p-6">
        <h2 className="font-bold text-off-white">{title}</h2>

        <div className="mt-5 border-t border-slate-700 pt-5">
          <div className="whitespace-pre-line leading-7 text-slate-300">
            {explanation}
          </div>
        </div>
      </div>
    </StudyLayout>
  );
};

export default ExplanationViewer;