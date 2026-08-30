import type { IconType } from "react-icons";

interface CardProps {
  number?: string;
  title: string;
  explanation?: string;
  icon?: IconType;
}

export const Card = ({
  number,
  title,
  explanation,
  icon: Icon,
}: CardProps) => {
  return (
    <div className="bg-slate px-3 py-3 rounded-2xl p-6 w-full">
      {/* Icon  */}
      {Icon && <Icon className="text-indigo mb-3" size={24} />}

      {/* Number */}
      {number && <p className="text-indigo">{number}</p>}

      {/* Title */}
      <p className="text-off-white text-xl font-semibold">{title}</p>

      {/* Explanation */}
      {explanation && (
        <p className="text-slate-400 mt-2">{explanation}</p>
      )}
    </div>
  );
};