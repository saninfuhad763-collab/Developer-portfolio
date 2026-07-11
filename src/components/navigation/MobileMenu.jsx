import { useEffect, useRef } from "react";
import { NavLinks } from "./NavLinks";
import { ThemeSwitcher } from "../ui/ThemeSwitcher";
import { Button } from "../ui/Button";

export const MobileMenu = ({ isOpen, onClose }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Lock scroll
    } else {
      document.body.style.overflow = ''; // Unlock scroll
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen && menuRef.current) {
      // Small delay to allow CSS display to apply before focus
      setTimeout(() => {
        menuRef.current.focus();
      }, 50);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-bg/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Dialog */}
      <div 
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
        tabIndex={-1}
        className="fixed inset-y-0 right-0 w-full max-w-xs bg-surface border-l border-border p-6 shadow-xl animate-in slide-in-from-right duration-300 outline-none flex flex-col"
      >
        <div className="flex items-center justify-end mb-8">
          <button 
            onClick={onClose}
            className="p-2 text-text-secondary hover:text-text-primary rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-focus"
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto flex flex-col gap-8">
          <nav>
            <NavLinks 
              className="flex-col gap-2" 
              onLinkClick={onClose}
            />
          </nav>

          <div className="flex flex-col gap-4 mt-auto">
            <div className="flex justify-center">
              <ThemeSwitcher />
            </div>
            <Button 
              variant="primary" 
              className="w-full"
              as="a"
              href="/assets/Full_Stack_Developer_Resume.pdf"
              download="Full_Stack_Developer_Resume.pdf"
            >
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
