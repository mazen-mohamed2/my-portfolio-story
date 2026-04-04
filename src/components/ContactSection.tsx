import { useInView } from "@/hooks/useInView";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="contact" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl md:text-4xl font-heading font-bold text-center mb-4 ${inView ? "animate-fade-up" : "opacity-0"}`}>
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <p className={`text-muted-foreground text-center max-w-xl mx-auto mb-16 ${inView ? "animate-fade-up animate-fade-up-delay-1" : "opacity-0"}`}>
          Let's work together! Feel free to reach out for collaborations or opportunities.
        </p>

        <div className="max-w-2xl mx-auto grid sm:grid-cols-2 gap-6">
          <a
            href="mailto:mazen.mohamed.eg12@gmail.com"
            className={`glass-card rounded-xl p-6 hover-lift flex items-center gap-4 ${inView ? "animate-fade-up animate-fade-up-delay-2" : "opacity-0"}`}
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Mail size={22} className="text-primary" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Email</div>
              <div className="font-medium text-sm">mazen.mohamed.eg12@gmail.com</div>
            </div>
          </a>

          <a
            href="tel:+201070679771"
            className={`glass-card rounded-xl p-6 hover-lift flex items-center gap-4 ${inView ? "animate-fade-up animate-fade-up-delay-3" : "opacity-0"}`}
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Phone size={22} className="text-primary" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Phone</div>
              <div className="font-medium text-sm">+20 107 067 9771</div>
            </div>
          </a>

          <div
            className={`glass-card rounded-xl p-6 flex items-center gap-4 ${inView ? "animate-fade-up animate-fade-up-delay-3" : "opacity-0"}`}
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <MapPin size={22} className="text-primary" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Location</div>
              <div className="font-medium text-sm">Giza, Egypt</div>
            </div>
          </div>

          <a
            href="https://linkedin.com/in/mazen-mohamed"
            target="_blank"
            rel="noopener noreferrer"
            className={`glass-card rounded-xl p-6 hover-lift flex items-center gap-4 ${inView ? "animate-fade-up animate-fade-up-delay-4" : "opacity-0"}`}
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Linkedin size={22} className="text-primary" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">LinkedIn</div>
              <div className="font-medium text-sm">Connect with me</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
