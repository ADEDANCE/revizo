interface LoadingOverlayProps {
  message?: string;
}

const LoadingOverlay = ({
  message = "Please wait...",
}: LoadingOverlayProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4 rounded-2xl bg-deep-navy px-8 py-7 shadow-xl">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-400 border-t-indigo"></div>

        <div className="text-center">
          <h3 className="font-semibold text-off-white">
            {message}
          </h3>

          <p className="mt-1 text-sm text-slate-400">
            Please wait...
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingOverlay;