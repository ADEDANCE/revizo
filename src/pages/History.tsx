import { useEffect, useState } from "react";
import { Link } from "react-router";
import { MdDelete, MdWarning, MdClose } from "react-icons/md";
import {
  getStudyHistory,
  deleteStudySession,
} from "../services/studyService";

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

  // Delete dialog state
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [sessionToDelete, setSessionToDelete] =
    useState<StudySession | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

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

  const handleOpenDeleteDialog = (
    e: React.MouseEvent<HTMLButtonElement>,
    session: StudySession,
  ) => {
    e.preventDefault();
    e.stopPropagation();

    setSessionToDelete(session);
    setIsDeleteDialogOpen(true);
  };

  const handleCloseDeleteDialog = () => {
    if (isDeleting) return;

    setIsDeleteDialogOpen(false);
    setSessionToDelete(null);
  };

  const handleDelete = async () => {
    if (!sessionToDelete) return;

    setIsDeleting(true);
    setError("");

    try {
      await deleteStudySession(sessionToDelete.id);

      // Remove the deleted session from the UI
      setSessions((prev) =>
        prev.filter((session) => session.id !== sessionToDelete.id),
      );

      setIsDeleteDialogOpen(false);
      setSessionToDelete(null);
    } catch (error: any) {
      console.error("Failed to delete study session:", error);

      setError(
        error.response?.data?.message ||
          "Unable to delete this study session.",
      );
    } finally {
      setIsDeleting(false);
    }
  };

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

  if (error && !isDeleteDialogOpen) {
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
    <>
      <section className="w-full px-6 py-4">
        <div className="mx-auto">
          <h1 className="font-bold text-3xl text-off-white mt-7 mb-1">
            Recent Activity
          </h1>

          <p className="text-slate-300 mb-4">
            What you've been studying lately.
          </p>

          {error && (
            <p className="text-red-400 text-sm mb-4">
              {error}
            </p>
          )}

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
                  className="block bg-slate border border-slate-400 px-4 py-4 rounded-2xl hover:border-slate-300 transition"
                >
                  <span className="flex justify-between items-center gap-4">
                    <p className="truncate">{session.title}</p>

                    <button
                      type="button"
                      onClick={(e) =>
                        handleOpenDeleteDialog(e, session)
                      }
                      className="shrink-0 p-2 rounded-lg text-red-600 hover:bg-red-500/10 hover:text-red-400 transition"
                      aria-label={`Delete ${session.title}`}
                    >
                      <MdDelete size={22} />
                    </button>
                  </span>

                  <span className="flex gap-6 text-sm text-slate-300">
                    <p>{session.type}</p>

                    <p>
                      uploaded{" "}
                      {new Date(
                        session.createdAt,
                      ).toLocaleDateString()}
                    </p>
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Delete Confirmation Dialog */}
      {isDeleteDialogOpen && sessionToDelete && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
          onClick={handleCloseDeleteDialog}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="delete-dialog-title"
            className="w-full max-w-md rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-500/10">
                  <MdWarning className="text-red-500" size={24} />
                </div>

                <div>
                  <h2
                    id="delete-dialog-title"
                    className="text-lg font-bold text-off-white"
                  >
                    Delete study session?
                  </h2>

                  <p className="text-sm text-slate-400">
                    This action cannot be undone.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCloseDeleteDialog}
                disabled={isDeleting}
                className="rounded-lg p-1 text-slate-400 hover:bg-slate-800 hover:text-off-white transition"
                aria-label="Close dialog"
              >
                <MdClose size={22} />
              </button>
            </div>

            {/* Message */}
            <div className="mt-5 rounded-xl border border-slate-700 bg-slate-800/50 p-4">
              <p className="text-sm text-slate-300">
                Are you sure you want to delete:
              </p>

              <p className="mt-1 font-semibold text-off-white">
                {sessionToDelete.title}
              </p>
            </div>

            {/* Actions */}
            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={handleCloseDeleteDialog}
                disabled={isDeleting}
                className="rounded-xl border border-slate-600 px-5 py-2.5 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-off-white transition disabled:cursor-not-allowed disabled:opacity-50"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleDelete}
                disabled={isDeleting}
                className="rounded-xl bg-red-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-500 transition disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isDeleting ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};