import { useInView } from "@/hooks/useInView";

const skills = [
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "MUI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GoLang", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
  { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
];

const SkillsSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="skills" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl md:text-4xl font-heading font-bold text-center mb-4 ${inView ? "animate-fade-up" : "opacity-0"}`}>
          Technical <span className="text-gradient">Skills</span>
        </h2>
        <p className={`text-muted-foreground text-center max-w-xl mx-auto mb-16 ${inView ? "animate-fade-up animate-fade-up-delay-1" : "opacity-0"}`}>
          Technologies and tools I work with daily to build modern web applications.
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className={`glass-card rounded-xl p-4 flex flex-col items-center gap-3 hover-lift group ${inView ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="w-12 h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-10 h-10 object-contain"
                  loading="lazy"
                />
              </div>
              <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center leading-tight">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
