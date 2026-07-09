import { useState, useEffect } from "react";
import { cn } from "../../utils/cn";
import { Container } from "../layout/Container";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { MobileMenu } from "./MobileMenu";
import { ThemeSwitcher } from "../ui/ThemeSwitcher";
import { Button } from "../ui/Button";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-40 transition-all duration-300 border-b",
          isScrolled 
            ? "bg-surface/80 backdrop-blur-md border-border shadow-sm py-3" 
            : "bg-transparent border-transparent py-5"
        )}
      >
        <Container>
          <div className="flex items-center justify-between">
            <Logo />
            
            <nav className="hidden md:flex items-center gap-8">
              <NavLinks className="gap-2" />
              
              <div className="flex items-center gap-4 border-l border-border pl-4">
                <ThemeSwitcher />
                <Button variant="primary" size="sm">
                  Download Resume
                </Button>
              </div>
            </nav>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 -mr-2 text-text-secondary hover:text-text-primary rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-focus"
              aria-label="Open menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            </button>
          </div>
        </Container>
      </header>
      
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
};
