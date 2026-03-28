import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { AlertCircle, Calendar, Trophy, Clock } from "lucide-react";

type Category = "all" | "exams" | "events" | "urgent";

const announcements = [
  { id: 1, title: "End Semester Exams Schedule Released", category: "exams" as const, date: "Mar 25, 2026", isNew: true, desc: "Download the complete exam schedule from the portal." },
  { id: 2, title: "Annual Tech Fest — Technoverse 2026", category: "events" as const, date: "Mar 22, 2026", isNew: true, desc: "Register for workshops, hackathons and competitions." },
  { id: 3, title: "Urgent: Fee Payment Deadline Extended", category: "urgent" as const, date: "Mar 20, 2026", isNew: false, desc: "Last date for fee payment has been extended to April 5." },
  { id: 4, title: "Mid-Sem Exam Results Published", category: "exams" as const, date: "Mar 18, 2026", isNew: false, desc: "Check your results on the student portal." },
  { id: 5, title: "Guest Lecture on AI & ML", category: "events" as const, date: "Mar 15, 2026", isNew: false, desc: "Prof. Sharma from IIT Delhi will deliver a special lecture." },
  { id: 6, title: "Library Closure Notice", category: "urgent" as const, date: "Mar 12, 2026", isNew: false, desc: "Library will remain closed on March 14 for maintenance." },
];

const categoryConfig = {
  exams: { icon: Calendar, color: "text-blue-500 bg-blue-500/10" },
  events: { icon: Trophy, color: "text-emerald-500 bg-emerald-500/10" },
  urgent: { icon: AlertCircle, color: "text-red-500 bg-red-500/10" },
};

const AnnouncementsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState<Category>("all");

  const filtered = filter === "all" ? announcements : announcements.filter((a) => a.category === filter);

  return (
    <section id="announcements" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Latest <span className="gradient-text">Announcements</span></h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Stay updated with the latest news and notices</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="flex gap-2 justify-center mb-8 flex-wrap">
            {(["all", "exams", "events", "urgent"] as Category[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all ${
                  filter === cat ? "gradient-bg text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-muted"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {filtered.map((item, i) => {
              const config = categoryConfig[item.category];
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.08 }}
                  className="glass-card p-5 hover-lift cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-2.5 rounded-xl ${config.color} shrink-0`}>
                      <config.icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-sm truncate">{item.title}</h3>
                        {item.isNew && (
                          <span className="shrink-0 px-2 py-0.5 text-[10px] font-bold uppercase rounded-full gradient-bg text-primary-foreground">New</span>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">{item.desc}</p>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {item.date}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnnouncementsSection;
