import { Home, BookOpen, Bell, FolderOpen, Phone } from "lucide-react";

const items = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: BookOpen, label: "Academics", href: "#academics" },
  { icon: Bell, label: "Notices", href: "#announcements" },
  { icon: FolderOpen, label: "Resources", href: "#resources" },
  { icon: Phone, label: "Contact", href: "#contact" },
];

const MobileNav = () => (
  <nav className="fixed bottom-0 left-0 right-0 z-50 glass-card-elevated border-t border-border/50 md:hidden">
    <div className="flex justify-around items-center py-2">
      {items.map((item) => (
        <a key={item.label} href={item.href} className="flex flex-col items-center gap-0.5 px-3 py-1.5 text-muted-foreground hover:text-primary transition-colors">
          <item.icon className="w-5 h-5" />
          <span className="text-[10px] font-medium">{item.label}</span>
        </a>
      ))}
    </div>
  </nav>
);

export default MobileNav;
