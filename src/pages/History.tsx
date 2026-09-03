import { useEffect, useState } from "react";
import { Link } from "react-router";
import { MdDelete } from "react-icons/md";
import { getStudyHistory } from "../services/studyService";

type StudySession = {
  id: string;
  title: string;
  type: "SUMMARY" | "EXPLANATION" | "CBT" | "FLASHCARDS";
  createdAt: string;
};

export const History = () => {
  const [sessions, setSessions] = useState<StudySession[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const data = await getStudyHistory();

        console.log("Study history:", data);

        setSessions(data.sessions);
      } catch (error: any) {
        console.error("Failed to load study history:", error);

        setError(
          error.response?.data?.message ||
            "Unable to load your study history.",
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchHistory();
  }, []);

  if (isLoading) {
    return (
      <section className="w-full px-6 py-4">
        <div className="mx-auto">
          <h1 className="font-bold text-3xl text-off-white mt-7 mb-1">
            Recent Activity
          </h1>

          <p className="text-slate-300 mb-4">
            What you've been studying lately.
          </p>

          <p className="text-slate-400">Loading your study history...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="w-full px-6 py-4">
        <div className="mx-auto">
          <h1 className="font-bold text-3xl text-off-white mt-7 mb-1">
            Recent Activity
          </h1>

          <p className="text-slate-300 mb-4">
            What you've been studying lately.
          </p>

          <p className="text-red-400">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full px-6 py-4">
      <div className="mx-auto">
        <h1 className="font-bold text-3xl text-off-white mt-7 mb-1">
          Recent Activity
        </h1>

        <p className="text-slate-300 mb-4">
          What you've been studying lately.
        </p>

        {sessions.length === 0 ? (
          <p className="text-slate-400">
            You haven't created any study sessions yet.
          </p>
        ) : (
          <div className="space-y-4">
            {sessions.map((session) => (
              <Link
                key={session.id}
                to={`/study/${session.id}`}
                className="block bg-slate border border-slate-400 px-4 py-4 rounded-2xl"
              >
                <span className="flex justify-between items-center">
                  <p>{session.title}</p>

                  <MdDelete className="text-red-600" />
                </span>

                <span className="flex gap-6">
                  <p>{session.type}</p>

                  <p>
                    uploaded{" "}
                    {new Date(session.createdAt).toLocaleDateString()}
                  </p>
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};