import { Search, FileText, Bell, Calendar, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const quickActions = [
  { icon: FileText, label: "View Schemes", color: "from-blue-500 to-blue-600", desc: "Course syllabi" },
  { icon: Bell, label: "Notices", color: "from-amber-500 to-orange-500", desc: "Latest updates" },
  { icon: Calendar, label: "Timetable", color: "from-emerald-500 to-teal-500", desc: "Class schedule" },
  { icon: BarChart3, label: "Results", color: "from-violet-500 to-purple-500", desc: "Exam results" },
];

interface HeroProps {
  onSearch: (q: string) => void;
}

const HeroSection = ({ onSearch }: HeroProps) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center gradient-hero-bg overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container mx-auto px-4 md:px-8 pt-24 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase gradient-bg text-primary-foreground mb-6">
              MITS SMART HUB
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            Everything You Need,{" "}
            <span className="gradient-text">One Place</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            Access courses, updates, and resources easily. Your academic life, simplified.
          </motion.p>

          {/* Smart Search */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSearch}
            className="max-w-xl mx-auto mb-14"
          >
            <div className="glass-card-elevated flex items-center p-2">
              <Search className="w-5 h-5 text-muted-foreground ml-3 shrink-0" />
              <input
                type="text"
                placeholder="Search courses, faculty, notices, resources..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 px-3 py-2.5 bg-transparent text-sm md:text-base focus:outline-none placeholder:text-muted-foreground/60"
              />
              <button
                type="submit"
                className="gradient-bg text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity shrink-0"
              >
                Search
              </button>
            </div>
          </motion.form>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {quickActions.map((action, i) => (
              <motion.button
                key={action.label}
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="glass-card p-5 text-center group cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                  <action.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-sm mb-1">{action.label}</h3>
                <p className="text-xs text-muted-foreground">{action.desc}</p>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
