import { cn } from "../../utils/cn";

export const ValueCard = ({ title, description, className }) => {
  return (
    <div 
      className={cn(
        "p-6 bg-bg border border-border rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col gap-3",
        className
      )}
    >
      <h3 className="text-h4 text-text-primary font-semibold">{title}</h3>
      <p className="text-body text-text-secondary">{description}</p>
    </div>
  );
};
