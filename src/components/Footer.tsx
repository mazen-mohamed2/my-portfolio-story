import { Github, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} <span className="text-gradient font-semibold">Mazen Mohamed</span>. All rights reserved.
      </p>
      <div className="flex gap-4">
        <a
          href="https://www.linkedin.com/in/mazen-mohamed-h/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Linkedin size={18} />
        </a>
        <a
          href="https://github.com/mazen-mohamed2"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Github size={18} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
