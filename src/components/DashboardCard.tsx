import type { IconType } from "react-icons";

interface CardProps {
  icon: IconType;
  title: string;
  selected?: boolean;
  onClick?: () => void;
}

export const DashboardCard = ({
  title,
  icon: Icon,
  selected,
  onClick,
}: CardProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full rounded-xl border px-4 py-5 transition
    ${selected ? "border-indigo bg-indigo/20" : "border-slate-500 bg-slate"}
  `}
    >
      {/* Icon  */}
      {Icon && <Icon className="text-indigo mb-3" size={24} />}

      {/* Title */}
      <p className="text-off-white text-xl font-semibold">{title}</p>
    </button>
  );
};
