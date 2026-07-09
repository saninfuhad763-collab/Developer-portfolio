import { cn } from "../../utils/cn";
import { Badge } from "../ui/Badge";

export const CertificationCard = ({ title, status, description, icon, className }) => {
  return (
    <div 
      className={cn(
        "p-6 bg-bg border border-border rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col gap-4 h-full",
        className
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-h4 font-bold text-text-primary flex items-start gap-2">
          {icon && (
            <span className="text-text-secondary shrink-0 mt-0.5" style={{ width: '20px', height: '20px' }}>
              {icon}
            </span>
          )}
          {title}
        </h3>
      </div>
      
      <Badge variant="outline" className="self-start text-caption bg-surface">
        {status}
      </Badge>
      
      <p className="text-body text-text-secondary flex-grow mt-2">
        {description}
      </p>
    </div>
  );
};
