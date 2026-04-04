import { useInView } from "@/hooks/useInView";

const skills = [
  { name: "HTML5", level: 95 },
  { name: "CSS3", level: 92 },
  { name: "JavaScript", level: 93 },
  { name: "React.js", level: 95 },
  { name: "TypeScript", level: 88 },
  { name: "Next.js", level: 85 },
  { name: "GraphQL", level: 78 },
  { name: "Tailwind CSS", level: 90 },
  { name: "MUI", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Express", level: 78 },
  { name: "MongoDB", level: 75 },
  { name: "Git / GitHub", level: 90 },
  { name: "GoLang", level: 60 },
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

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className={`glass-card rounded-xl p-5 hover-lift ${inView ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="font-medium text-sm">{skill.name}</span>
                <span className="text-xs text-primary font-semibold">{skill.level}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-primary transition-all duration-1000 ease-out"
                  style={{ width: inView ? `${skill.level}%` : "0%" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
