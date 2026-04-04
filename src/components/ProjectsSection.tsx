import { useInView } from "@/hooks/useInView";
import { ExternalLink } from "lucide-react";

const projects = [
  { name: "Lebara SA", url: "https://lebara.sa", desc: "Telecom platform — full-stack enhancements, payments, VAS pages" },
  { name: "Red Bull Mobile SA", url: "https://redbullmobile.sa", desc: "Telecom platform — auth system rebuild, multi-SIM support" },
  { name: "SafeRoad", url: "https://track.v6.saferoad.net", desc: "IoT fleet management & cold chain monitoring system" },
  { name: "Dnndon", url: "https://dnndon.com", desc: "Full website design, development, and dashboard" },
  { name: "Frogpool", url: "https://frogpool.ae", desc: "Freelance — complete web development project" },
  { name: "Color Point", url: "https://color-point1.com", desc: "Freelance — website design and development" },
  { name: "A7jiz", url: "https://a7jiz.com", desc: "Freelance — booking and appointment platform" },
  { name: "Natal Beauty", url: "https://natalbeauty.com", desc: "Freelance — beauty industry web application" },
  { name: "Barber Look", url: "https://barberlook-sa.com", desc: "Freelance — salon management platform" },
];

const ProjectsSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="projects" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl md:text-4xl font-heading font-bold text-center mb-4 ${inView ? "animate-fade-up" : "opacity-0"}`}>
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className={`text-muted-foreground text-center max-w-xl mx-auto mb-16 ${inView ? "animate-fade-up animate-fade-up-delay-1" : "opacity-0"}`}>
          A selection of telecom platforms, SaaS dashboards, and freelance projects.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((p, i) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group glass-card rounded-xl p-6 hover-lift block ${inView ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-heading font-semibold group-hover:text-primary transition-colors">{p.name}</h3>
                <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
