import { Section } from "../layout/Section";
import { Container } from "../layout/Container";
import { SectionHeading } from "../common/SectionHeading";
import { ValueCard } from "../common/ValueCard";
import { Reveal } from "../ui/Reveal";

export const About = () => {
  const valueCards = [
    {
      title: "Engineering Approach",
      description: "I value clean architecture, reusable components, accessibility, and maintainable code. I enjoy building software that remains reliable as it grows."
    },
    {
      title: "Product Mindset",
      description: "I approach projects as complete products, considering user experience, performance, responsiveness, and long-term maintainability alongside implementation."
    },
    {
      title: "Continuous Learning",
      description: "I continuously improve my skills by building real projects, learning modern technologies, incorporating constructive feedback, and using AI responsibly to support research, debugging, and productivity."
    }
  ];

  return (
    <Section id="about" variant="secondary">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Context */}
          <Reveal className="flex flex-col gap-6">
            <SectionHeading 
              eyebrow="ABOUT ME"
              title="Building software with a focus on quality, usability, and continuous improvement."
            />
            
            <div className="flex flex-col gap-6 text-body-large text-text-secondary mt-2">
              <p>
                I'm a Full Stack Developer who enjoys building modern web applications that solve practical problems. I focus on writing maintainable code, creating intuitive user experiences, and developing solutions that are ready for real-world use rather than just demonstrations.
              </p>
              <p>
                I'm eager to contribute to collaborative teams, continue learning from experienced engineers, and build software that creates meaningful value for users.
              </p>
            </div>
          </Reveal>

          {/* Right Column: Value Cards */}
          <div className="flex flex-col gap-6">
            {valueCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 0.05}>
                <ValueCard 
                  title={card.title}
                  description={card.description}
                />
              </Reveal>
            ))}
          </div>

        </div>
      </Container>
    </Section>
  );
};
