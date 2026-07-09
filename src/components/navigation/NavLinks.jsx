import { cn } from "../../utils/cn";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export const NavLinks = ({ className, onLinkClick }) => {
  return (
    <ul className={cn("flex", className)}>
      {links.map((link) => (
        <li key={link.name}>
          <a
            href={link.href}
            onClick={onLinkClick}
            className="block px-4 py-2 text-body font-medium text-text-secondary hover:text-text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-focus rounded-md"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};
