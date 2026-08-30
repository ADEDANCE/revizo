interface CardProps {
  number?: string;
  title: string;
  explanation: string;
}

export const Card = ({ number, title, explanation }: CardProps) => {
  return (
    <div className="bg-slate px-3 py-3 rounded-2xl p-6 w-full">
      {/* Number - only rendered if provided */}
      {number && <p className="text-indigo">{number}</p>}

      {/* Title */}
      <p className="text-off-white text-xl font-semibold">{title}</p>

      {/* Explanation */}
      <p className="text-slate-400 mt-2">{explanation}</p>
    </div>
  );
};
