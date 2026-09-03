import StudyLayout from "./StudyLayout";

interface SummaryViewerProps {
  title: string;
  summary: string;
}

const SummaryViewer = ({ title, summary }: SummaryViewerProps) => {
  return (
    <StudyLayout title={title} type="SUMMARY">
      <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5 sm:p-6">
        <h2 className="font-bold text-off-white">{title}</h2>

        <div className="mt-5 border-t border-slate-700 pt-5">
          <div className="whitespace-pre-line leading-7 text-slate-300">
            {summary}
          </div>
        </div>
      </div>
    </StudyLayout>
  );
};

export default SummaryViewer;