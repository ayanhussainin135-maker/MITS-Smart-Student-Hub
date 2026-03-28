import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FileText, ClipboardList, Calendar, FormInput, Link2, Search, BookOpen, Download, GraduationCap } from "lucide-react";

const resources = [
  { icon: FileText, label: "Notes", desc: "Lecture notes & materials", category: "study" },
  { icon: ClipboardList, label: "PYQs", desc: "Previous year questions", category: "study" },
  { icon: Calendar, label: "Timetable", desc: "Class & exam schedules", category: "schedule" },
  { icon: FormInput, label: "Forms", desc: "Application forms", category: "admin" },
  { icon: Link2, label: "Important Links", desc: "Portals & useful links", category: "admin" },
  { icon: BookOpen, label: "E-Library", desc: "Digital book access", category: "study" },
  { icon: Download, label: "Downloads", desc: "Software & tools", category: "tools" },
  { icon: GraduationCap, label: "Scholarships", desc: "Financial aid info", category: "admin" },
];

const categories = ["all", "study", "schedule", "admin", "tools"];

const ResourcesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = resources.filter((r) => {
    const matchCat = filter === "all" || r.category === filter;
    const matchSearch = r.label.toLowerCase().includes(search.toLowerCase()) || r.desc.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <section id="resources" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Student <span className="gradient-text">Resources</span></h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Quick access to everything you need</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Search & Filter */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8 items-center justify-center">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search resources..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 pr-4 py-2 text-sm bg-secondary rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 w-60"
              />
            </div>
            <div className="flex gap-2 flex-wrap justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-all ${
                    filter === cat ? "gradient-bg text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-muted"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {filtered.map((res, i) => (
              <motion.button
                key={res.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -4, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="glass-card p-5 text-center group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                  <res.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-sm mb-1">{res.label}</h3>
                <p className="text-xs text-muted-foreground">{res.desc}</p>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
