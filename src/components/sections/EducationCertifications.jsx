import { Section } from "../layout/Section";
import { Container } from "../layout/Container";
import { SectionHeading } from "../common/SectionHeading";
import { CertificationCard } from "../common/CertificationCard";
import { Badge } from "../ui/Badge";

export const EducationCertifications = () => {
  const certifications = [
    {
      title: "Python Full-Stack Development with Django",
      status: "Certified",
      description: "Structured training covering Python, Django, backend development, authentication, databases, and full-stack application development.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
    },
    {
      title: "Web Development Training (MERN Stack)",
      status: "Certified",
      description: "Professional training focused on modern web development using MongoDB, Express.js, React, and Node.js, with responsive UI development and REST API integration.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
    },
    {
      title: "Web Development Internship",
      status: "Certified",
      description: "Successfully completed a professional MERN stack web development internship involving collaborative software development, real-world project implementation, structured engineering workflows, iterative code reviews, and production-focused engineering practices.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
    }
  ];

  return (
    <Section id="education" variant="secondary">
      <Container>
        <div className="flex flex-col gap-12 lg:gap-16">
          
          <div className="max-w-3xl animate-fade-in-up">
            <SectionHeading 
              eyebrow="EDUCATION & CERTIFICATIONS"
              title="Academic foundation complemented by practical, industry-focused training."
              description="My academic education and professional training have provided the foundation for building modern full-stack applications, while hands-on projects have transformed that knowledge into practical software engineering experience."
            />
          </div>

          <div className="flex flex-col gap-8">
            
            {/* Education Card */}
            <div className="p-8 lg:p-10 bg-bg border border-border rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in-up delay-100 flex flex-col md:flex-row gap-8 items-start md:items-center">
              <div className="flex-shrink-0 p-4 bg-surface-secondary border border-border rounded-full text-text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              </div>
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-h3 font-bold text-text-primary">Bachelor of Computer Applications (BCA)</h3>
                    <p className="text-body-large font-medium text-text-secondary mt-1">Nasra College of Arts and Science</p>
                  </div>
                  <Badge variant="outline" className="self-start md:self-auto shrink-0 bg-surface">
                    Graduated 2022
                  </Badge>
                </div>
                <p className="text-small text-text-muted mb-4">Affiliated with the University of Calicut</p>
                <p className="text-body text-text-secondary max-w-4xl">
                  Built a strong foundation in computer science fundamentals, programming, databases, software engineering principles, and problem-solving, providing the academic base for my full-stack development journey.
                </p>
              </div>
            </div>

            {/* Certification Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <CertificationCard 
                  key={cert.title}
                  {...cert}
                  className={`animate-fade-in-up delay-${Math.min((index + 2) * 100, 400)}`}
                />
              ))}
            </div>

          </div>
        </div>
      </Container>
    </Section>
  );
};
