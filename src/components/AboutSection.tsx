import { useInView } from "@/hooks/useInView";
import { Briefcase, Code, GraduationCap, Users } from "lucide-react";

const stats = [
  { icon: Briefcase, label: "Years Experience", value: "6+" },
  { icon: Code, label: "Projects Delivered", value: "20+" },
  { icon: Users, label: "Teams Led", value: "3+" },
  { icon: GraduationCap, label: "Education", value: "B.Com" },
];

const AboutSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl md:text-4xl font-heading font-bold text-center mb-4 ${inView ? "animate-fade-up" : "opacity-0"}`}>
          About <span className="text-gradient">Me</span>
        </h2>
        <p className={`text-muted-foreground text-center max-w-2xl mx-auto mb-16 ${inView ? "animate-fade-up animate-fade-up-delay-1" : "opacity-0"}`}>
          Respected Front-End Web Developer with 6+ years of experience collaborating with creative and development teams on the execution of ideas and projects.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`glass-card rounded-xl p-6 text-center hover-lift ${inView ? `animate-fade-up animate-fade-up-delay-${i + 1}` : "opacity-0"}`}
            >
              <s.icon size={28} className="mx-auto mb-3 text-primary" />
              <div className="text-2xl font-heading font-bold mb-1">{s.value}</div>
              <div className="text-xs text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>

        <div className={`mt-16 glass-card rounded-xl p-8 md:p-12 ${inView ? "animate-fade-up" : "opacity-0"}`}>
          <h3 className="text-xl font-heading font-semibold mb-4">Education</h3>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
              <GraduationCap size={20} className="text-primary" />
            </div>
            <div>
              <h4 className="font-semibold">Helwan University</h4>
              <p className="text-muted-foreground text-sm">Bachelor of Commerce and Business Administration</p>
              <p className="text-muted-foreground text-sm mt-1">Department of Systems and Information — Data Structure & Microsoft Tools</p>
            </div>
          </div>

          <h3 className="text-xl font-heading font-semibold mb-4 mt-8">Languages</h3>
          <div className="flex gap-4">
            <span className="px-4 py-2 rounded-lg bg-primary/10 text-sm font-medium">Arabic — Native</span>
            <span className="px-4 py-2 rounded-lg bg-accent/10 text-sm font-medium">English — Intermediate</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
