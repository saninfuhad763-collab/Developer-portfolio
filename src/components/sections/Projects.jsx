import { Section } from "../layout/Section";
import { Container } from "../layout/Container";
import { SectionHeading } from "../common/SectionHeading";
import { FeaturedProjectCard } from "../common/FeaturedProjectCard";
import { ProjectCard } from "../common/ProjectCard";
import { Reveal } from "../ui/Reveal";

export const Projects = () => {
  const featuredProjects = [
    {
      title: "CareerForge Pro",
      status: "Featured Project",
      tagline: "AI-powered Resume Builder and ATS Optimization Platform",
      problem: "Recruiters receive resumes that often fail Applicant Tracking Systems (ATS), while job seekers struggle to tailor resumes efficiently for different roles.",
      solution: "CareerForge Pro helps users create professional resumes, analyze job descriptions, optimize ATS compatibility, and generate AI-assisted resume improvements through an integrated full-stack platform.",
      engineeringFocus: "Production-ready architecture, AI integration, ATS optimization, and scalable React component design.",
      keyFeatures: [
        "AI-powered resume generation",
        "ATS keyword analysis",
        "Resume builder with live preview",
        "PDF export",
        "Authentication",
        "Responsive UI"
      ],
      techStack: [
        "React", "Vite", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "Puppeteer", "AI API Integration", "GitHub"
      ],
      githubUrl: "https://github.com/saninfuhad763-collab/CareerForge-Pro",
      imageUrl: "/assets/projects/careerforge-pro.png"
    },
    {
      title: "OpsMind AI",
      status: "Featured Project",
      tagline: "AI-powered SOP Assistant using Retrieval-Augmented Generation (RAG)",
      problem: "Organizations often struggle to search and retrieve information efficiently from lengthy SOP documents.",
      solution: "OpsMind AI enables users to upload SOP PDFs, process them into searchable knowledge, and interact with the documents through an AI-powered chat interface.",
      engineeringFocus: "Retrieval-Augmented Generation (RAG), document processing, semantic search, and AI-powered knowledge retrieval.",
      keyFeatures: [
        "PDF ingestion",
        "Intelligent chunking",
        "Vector search",
        "AI chat",
        "MongoDB storage"
      ],
      techStack: [
        "React", "Node.js", "Express.js", "MongoDB", "AI APIs", "PDF Processing", "GitHub"
      ],
      githubUrl: "https://github.com/saninfuhad763-collab/OpsMind-AI",
      imageUrl: "/assets/projects/opsmind-ai.png"
    },
    {
      title: "AIVOA Complaint Intelligence",
      status: "Featured Project",
      tagline: "AI-Powered Pharmaceutical Complaint Management",
      problem: "Pharmaceutical quality teams struggle to efficiently extract, validate, and structure critical data from unstructured customer complaint texts and PDF files.",
      solution: "AIVOA Complaint Intelligence transforms unstructured complaint documents into structured quality data with AI-assisted classification, risk assessment, duplicate detection, completeness validation, and CAPA recommendations.",
      engineeringFocus: "Multi-step AI orchestration using LangGraph/LangChain, negation-aware risk assessment, PDF document extraction, and full-stack FastAPI/PostgreSQL persistence.",
      keyFeatures: [
        "AI-powered complaint extraction from text and PDF",
        "LangGraph-based multi-step AI analysis workflow",
        "Negation-aware severity and risk assessment",
        "Interactive AI Copilot for reviewing and updating extracted data",
        "PostgreSQL CRUD persistence and complaint history",
        "Duplicate detection, completeness checking, and CAPA recommendations"
      ],
      techStack: [
        "React 19", "FastAPI", "Python", "LangGraph", "LangChain", "PostgreSQL", "Redux Toolkit", "Pydantic", "Groq API", "GitHub"
      ],
      githubUrl: "https://github.com/saninfuhad763-collab/aivoa-complaint-intelligence",
      imageUrl: "/assets/projects/aivoa-complaint-intelligence.png",
      imageAlt: "AIVOA Complaint Intelligence application interface"
    }
  ];

  const compactProjects = [
    {
      title: "Extensio.ai",
      status: "In Progress",
      tagline: "AI-powered Chrome Extension Generator",
      description: "A platform that generates Chrome extension boilerplate and project structure using AI-assisted workflows. Current implementation demonstrates architecture and foundational engineering while remaining under active development.",
      techStack: ["React", "Node.js", "Express.js", "MongoDB", "GitHub"],
      githubUrl: "https://github.com/saninfuhad763-collab/extensio-ai",
      imageUrl: "/assets/projects/extensio-ai.png"
    },
    {
      title: "Fitness Enhancer",
      status: "Learning Project",
      tagline: "Fitness Tracking Web Application",
      description: "An early full-stack project focused on backend fundamentals including authentication, user profiles, and workout tracking.",
      techStack: ["Python", "Django", "HTML", "CSS", "GitHub"],
      githubUrl: "https://github.com/saninfuhad763-collab/fitness-enhancer",
      imageUrl: "/assets/projects/fitness-enhancer.png"
    }
  ];

  return (
    <Section id="projects" variant="secondary">
      <Container>
        <div className="flex flex-col gap-16">
          
          <Reveal className="max-w-3xl">
            <SectionHeading 
              eyebrow="FEATURED PROJECTS"
              title="Selected work demonstrating full-stack engineering and AI-powered application development."
              description="These projects reflect my experience building complete web applications—from planning and architecture to frontend development, backend services, AI integration, and production-focused engineering practices."
            />
          </Reveal>

          <div className="flex flex-col gap-12">
            {featuredProjects.map((project, index) => (
              <Reveal key={project.title} delay={index * 0.05}>
                <FeaturedProjectCard 
                  {...project}
                />
              </Reveal>
            ))}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
              {compactProjects.map((project, index) => (
                <Reveal key={project.title} delay={0.1 + (index * 0.05)}>
                  <ProjectCard 
                    {...project}
                  />
                </Reveal>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
};
