import { cn } from "../../utils/cn";

export const Logo = ({ className }) => {
  return (
    <a 
      href="#"
      className={cn(
        "text-h4 font-bold tracking-tight text-text-primary hover:opacity-80 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-focus rounded",
        className
      )}
      aria-label="Home"
    >
      Portfolio<span className="text-accent-primary">.</span>
    </a>
  );
};
