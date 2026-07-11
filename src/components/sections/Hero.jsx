import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";

export const Hero = () => {
  return (
    <Section 
      id="home" 
      className="min-h-screen flex items-center pt-24 pb-12 overflow-hidden" 
      spacing="none"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Content */}
          <div className="flex flex-col items-start max-w-2xl">
            
            {/* Eyebrow */}
            <div className="animate-fade-in-up">
              <span className="text-accent-primary font-semibold text-small tracking-widest uppercase">
                FULL STACK DEVELOPER • AI WEB APPLICATIONS
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-display mt-6 animate-fade-in-up delay-100">
              Hi, I'm Fuhad Saneen.<br />
              <span className="text-text-secondary">
                I build modern full-stack and AI-powered web applications.
              </span>
            </h1>

            {/* Description */}
            <p className="text-body-large mt-6 text-text-muted animate-fade-in-up delay-200">
              I'm a Full Stack Developer specializing in React, Node.js, and modern web technologies. I enjoy building production-ready AI-powered web applications with clean architecture and thoughtful user experiences.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mt-8 animate-fade-in-up delay-300">
              <Button 
                variant="primary" 
                size="lg" 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See My Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 animate-fade-in-up delay-400 w-full">
              <p className="text-small font-medium text-text-muted mb-4 uppercase tracking-wider">
                Expertise & Background
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="outline" className="px-3 py-1.5 text-small bg-surface">BCA Graduate</Badge>
                <Badge variant="outline" className="px-3 py-1.5 text-small bg-surface">MERN Stack</Badge>
                <Badge variant="outline" className="px-3 py-1.5 text-small bg-surface">Python Full Stack Certified</Badge>
                <Badge variant="outline" className="px-3 py-1.5 text-small bg-surface">Web Development Internship</Badge>
              </div>
            </div>

          </div>

          {/* Right Column: Photo Placeholder */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up delay-200">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden bg-surface-secondary shadow-lg group">
              <img 
                src="/assets/profile/profile-photo.webp" 
                alt="Fuhad Saneen - Full Stack Developer" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
};
