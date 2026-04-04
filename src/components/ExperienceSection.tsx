import { useInView } from "@/hooks/useInView";

const experiences = [
  {
    title: "Team Leader FullStack",
    company: "Sigma",
    period: "07/2024 – Present",
    highlights: [
      "Led full-stack enhancements for lebara.sa & redbullmobile.sa telecom platforms",
      "Rebuilt authentication systems and resolved critical bugs in login/OTP flows",
      "Integrated NAFAZ with Saudi government for SIM activation",
      "Created custom VAS pages for services like OSN and Anghami",
      "Conducted code reviews and mentored team members",
      "Integrated Strapi CMS for dynamic content control",
    ],
  },
  {
    title: "Team Leader Frontend",
    company: "MG Group",
    period: "12/2023 – 06/2024",
    highlights: [
      "Led a team of 6 building dashboards for mobile apps (fashion, cosmetics, jewelry)",
      "Created a salon booking app with owner dashboards",
      "Ensured code quality, timeline adherence, and performance optimization",
    ],
  },
  {
    title: "Senior Frontend Developer",
    company: "Houya For Information Technology",
    period: "11/2023 – 05/2024",
    highlights: [
      "Built Karaz website — authentication, token refresh, order management",
      "Created merchant portal for exhibitions and booth reservations",
      "Developed admin and user dashboards with React & Redux Toolkit",
    ],
  },
  {
    title: "Senior Frontend Developer",
    company: "Euruq Alsahra",
    period: "10/2023",
    highlights: [
      "Designed and launched dnndon.com",
      "Improved website performance and user engagement",
      "Integrated authentication systems for security",
    ],
  },
  {
    title: "Senior Frontend Developer",
    company: "Startup Defenders",
    period: "02/2023",
    highlights: [
      "Worked on IoT management system with real-time notifications (saferoad.com)",
      "Built cold storage management and car fleet systems",
    ],
  },
  {
    title: "Mid-Level Frontend Developer",
    company: "Shoppex",
    period: "06/2022",
    highlights: [
      "Created cart system with Redux state management",
      "Improved site performance and added dashboard authentication",
    ],
  },
  {
    title: "Frontend Instructor",
    company: "X_Team",
    period: "09/2020",
    highlights: [
      "Taught HTML, CSS, JavaScript, React.js",
      "Mentored students on state management and practical projects",
    ],
  },
  {
    title: "Junior Frontend Developer",
    company: "Ooredoo",
    period: "07/2018",
    highlights: [
      "Brought mock-ups to life using HTML, CSS, JavaScript",
      "Built responsive websites and documented code changes",
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
