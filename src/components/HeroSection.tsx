import { ArrowDown, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import mazenPhoto from "@/assets/photo_5938126061973474827_w.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import mazen from "@/assets/Mazen_Mohamed_cv.pdf";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden mt-[4rem] sm:mt-5"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />

      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: "3s" }} />

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <p className="text-primary font-medium mb-3 animate-fade-up text-sm tracking-widest uppercase">
            Hello, I'm
          </p>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-4 animate-fade-up animate-fade-up-delay-1">
            Mazen <span className="text-gradient">Mohamed</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 animate-fade-up animate-fade-up-delay-2">
            Front End Developer & Team Leader
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 animate-fade-up animate-fade-up-delay-3 leading-relaxed">
            6+ years of experience crafting performant, scalable web applications.
            Passionate about clean code, team leadership, and delivering exceptional user experiences.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-up animate-fade-up-delay-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-gradient-primary rounded-lg font-medium text-sm text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </a>
          <a
  href={mazen} // تأكد أن المسار يطابق اسم الملف في مجلد public
  download="Mazen_Mohamed_CV.pdf" // الاسم الذي سيظهر للمستخدم عند التحميل
  className="px-6 py-3 border border-border rounded-lg font-medium text-sm text-foreground hover:border-primary/50 transition-colors flex items-center gap-2"
>
  Download CV 
</a>
          </div>

          <div className="flex flex-wrap gap-6 mt-8 justify-center lg:justify-start animate-fade-up animate-fade-up-delay-4">
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin size={14} className="text-primary" /> Giza, Egypt
            </span>
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone size={14} className="text-primary" /> +20 107 067 9771
            </span>
            <a href="mailto:mazen.mohamed.eg12@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Mail size={14} className="text-primary" /> mazen.mohamed.eg12@gmail.com
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-6 justify-center lg:justify-start animate-fade-up animate-fade-up-delay-4">
            <a
              href="https://www.linkedin.com/in/mazen-mohamed-h/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/mazen-mohamed2"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
            >
              <Github size={18} />
            </a>
          </div>
        </div>

        {/* Photo */}
        <div className="flex-shrink-0 animate-fade-up animate-fade-up-delay-3">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/30 glow">
              <img
                src={mazenPhoto}
                alt="Mazen Mohamed"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-4 rounded-full border border-primary/10 animate-[spin_20s_linear_infinite]" />
            <div className="absolute -inset-8 rounded-full border border-accent/5 animate-[spin_30s_linear_infinite_reverse]" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
};

export default HeroSection;
