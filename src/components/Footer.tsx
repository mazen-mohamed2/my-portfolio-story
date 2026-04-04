const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container mx-auto px-6 text-center">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} <span className="text-gradient font-semibold">Mazen Mohamed</span>. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
