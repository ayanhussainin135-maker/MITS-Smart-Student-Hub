import { GraduationCap } from "lucide-react";

const Footer = () => (
  <footer className="bg-card border-t border-border">
    <div className="container mx-auto px-4 md:px-8 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-3">
            <div className="bg-white rounded-full p-0.5 shadow-sm border border-border/50">
              <img src="/mits-logo.png" alt="MITS Logo" className="w-6 h-6 object-contain rounded-full" />
            </div>
            <span className="font-display font-bold uppercase tracking-tight">MITS HUB</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">Your smart gateway to academic resources, notices, and campus life.</p>
        </div>
        {[
          { title: "Quick Links", links: ["Home", "Academics", "Departments", "Resources"] },
          { title: "Support", links: ["Contact Us", "FAQs", "Feedback", "Help Desk"] },
          { title: "Connect", links: ["Instagram", "LinkedIn", "Twitter", "YouTube"] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="font-display font-semibold text-sm mb-3">{col.title}</h4>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border pt-6 text-center">
        <p className="text-xs text-muted-foreground">© 2026 MITS Smart Student Hub. Built with ❤️ for students.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
