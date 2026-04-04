import { useInView } from "@/hooks/useInView";

const experiences = [
  {
    title: "Team Leader FullStack",
    company: "Sigma",
    period: "07/2024 – Present",
    highlights: [
      "Led full-stack enhancements for lebara.sa & redbullmobile.sa telecom platforms, serving millions of users across Saudi Arabia",
      "Rebuilt the entire authentication system including login, OTP verification, and session management — resolving critical security vulnerabilities",
      "Integrated NAFAZ (Saudi National Digital Identity) for seamless SIM activation in compliance with government regulations",
      "Designed and developed custom VAS (Value-Added Services) pages for premium offerings like OSN streaming and Anghami music",
      "Conducted thorough code reviews, enforced coding standards, and mentored junior developers to elevate overall team quality",
      "Integrated Strapi headless CMS enabling marketing teams to manage content independently without developer intervention",
      "Managed sprint planning, task delegation, and cross-team coordination with backend and QA teams",
    ],
  },
  {
    title: "Team Leader Frontend",
    company: "MG Group",
    period: "12/2023 – 06/2024",
    highlights: [
      "Led a team of 6 frontend developers building dashboards and mobile app backends for fashion, cosmetics, and jewelry brands",
      "Architected and built a complete salon booking application with real-time availability, appointment management, and owner dashboards",
      "Established coding conventions, PR review workflows, and component libraries to ensure consistency across projects",
      "Ensured on-time delivery of all projects through effective timeline management and proactive blocker resolution",
    ],
  },
  {
    title: "Senior Frontend Developer",
    company: "Houya For Information Technology",
    period: "11/2023 – 05/2024",
    highlights: [
      "Built the Karaz e-commerce platform from scratch — implementing authentication with token refresh, product catalog, and full order management",
      "Created a merchant portal enabling exhibition organizers to manage booths, vendors, and reservation workflows",
      "Developed both admin and user-facing dashboards using React, Redux Toolkit, and RTK Query for efficient API state management",
      "Implemented responsive designs with pixel-perfect accuracy following Figma mockups",
    ],
  },
  {
    title: "Senior Frontend Developer",
    company: "Euruq Alsahra",
    period: "10/2023",
    highlights: [
      "Designed, developed, and launched dnndon.com — a full e-commerce website with product listings, cart, and checkout flow",
      "Improved Core Web Vitals scores resulting in better SEO rankings and 30% faster page load times",
      "Integrated JWT-based authentication and role-based access control for platform security",
    ],
  },
  {
    title: "Senior Frontend Developer",
    company: "Startup Defenders",
    period: "02/2023",
    highlights: [
      "Built key features for SafeRoad's IoT fleet management system including real-time GPS tracking and push notifications",
      "Developed a cold storage monitoring dashboard with temperature alerts and compliance reporting",
      "Created car fleet management modules with driver assignment, trip logging, and maintenance scheduling",
    ],
  },
  {
    title: "Mid-Level Frontend Developer",
    company: "Shoppex",
    period: "06/2022",
    highlights: [
      "Engineered a comprehensive cart and checkout system using Redux for predictable state management across the platform",
      "Optimized site performance through lazy loading, code splitting, and image optimization — reducing bundle size by 40%",
      "Implemented dashboard authentication with role-based routing and protected admin views",
    ],
  },
  {
    title: "Frontend Instructor",
    company: "X_Team",
    period: "09/2020",
    highlights: [
      "Taught comprehensive web development courses covering HTML5, CSS3, JavaScript ES6+, and React.js fundamentals",
      "Mentored 50+ students on real-world projects including state management patterns, API integration, and deployment workflows",
      "Created structured curriculum and hands-on exercises that improved student job placement rates",
    ],
  },
  {
    title: "Junior Frontend Developer",
    company: "Ooredoo",
    period: "07/2018",
    highlights: [
      "Translated UI/UX mockups into production-ready responsive websites using HTML, CSS, and vanilla JavaScript",
      "Built cross-browser compatible interfaces tested across Chrome, Firefox, Safari, and Edge",
      "Maintained detailed documentation of code changes and participated in agile sprint ceremonies",
    ],
  },
];

const ExperienceSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl md:text-4xl font-heading font-bold text-center mb-4 ${inView ? "animate-fade-up" : "opacity-0"}`}>
          Work <span className="text-gradient">Experience</span>
        </h2>
        <p className={`text-muted-foreground text-center max-w-xl mx-auto mb-16 ${inView ? "animate-fade-up animate-fade-up-delay-1" : "opacity-0"}`}>
          A journey through telecom platforms, team leadership, and scalable web applications.
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={i}
                className={`relative flex flex-col md:flex-row items-start mb-12 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                } ${inView ? (isLeft ? "animate-slide-in-left" : "animate-slide-in-right") : "opacity-0"}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-[5px] md:-translate-x-[6px] mt-6 z-10" />
                <div className="absolute left-0 md:left-1/2 w-5 h-5 rounded-full bg-primary/20 -translate-x-[9px] md:-translate-x-[10px] mt-5 z-0" />

                {/* Card */}
                <div className={`ml-6 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                  <div className="glass-card rounded-xl p-6 hover-lift">
                    <span className="text-xs text-primary font-medium">{exp.period}</span>
                    <h3 className="text-lg font-heading font-semibold mt-1">{exp.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{exp.company}</p>
                    <ul className={`space-y-1.5 text-sm text-muted-foreground ${isLeft ? "md:text-right" : ""}`}>
                      {exp.highlights.map((h, j) => (
                        <li key={j} className="leading-relaxed">• {h}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
