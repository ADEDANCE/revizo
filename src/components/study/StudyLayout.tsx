import type { ReactNode } from "react";

interface StudyLayoutProps {
  title: string;
  type: string;
  children: ReactNode;
}

const StudyLayout = ({ title, type, children }: StudyLayoutProps) => {
  return (
    <main className="min-h-screen bg-deep-navy px-4 py-8 text-off-white">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">{title}</h1>

          <span className="mt-2 inline-block rounded-full bg-indigo-600/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-400">
            {type}
          </span>
        </div>

        {children}
      </div>
    </main>
  );
};

export default StudyLayout;