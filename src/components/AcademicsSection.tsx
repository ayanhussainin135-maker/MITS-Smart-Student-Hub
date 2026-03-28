import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown, Download, Bookmark } from "lucide-react";

const branches = ["CSE", "ECE", "ME", "CE", "EE", "IT"];

const subjectsData: Record<string, Record<string, { name: string; code: string; credits: number }[]>> = {
  CSE: {
    "Sem 1": [
      { name: "Mathematics I", code: "MA101", credits: 4 },
      { name: "Physics", code: "PH101", credits: 3 },
      { name: "Programming in C", code: "CS101", credits: 4 },
      { name: "English", code: "HU101", credits: 2 },
    ],
    "Sem 2": [
      { name: "Mathematics II", code: "MA201", credits: 4 },
      { name: "Data Structures", code: "CS201", credits: 4 },
      { name: "Digital Logic", code: "CS202", credits: 3 },
    ],
    "Sem 3": [
      { name: "DBMS", code: "CS301", credits: 4 },
      { name: "OS", code: "CS302", credits: 4 },
      { name: "Computer Networks", code: "CS303", credits: 3 },
    ],
  },
  ECE: {
    "Sem 1": [
      { name: "Mathematics I", code: "MA101", credits: 4 },
      { name: "Basic Electronics", code: "EC101", credits: 4 },
      { name: "Physics", code: "PH101", credits: 3 },
    ],
  },
  ME: { "Sem 1": [{ name: "Engineering Mechanics", code: "ME101", credits: 4 }] },
  CE: { "Sem 1": [{ name: "Surveying", code: "CE101", credits: 3 }] },
  EE: { "Sem 1": [{ name: "Circuit Theory", code: "EE101", credits: 4 }] },
  IT: { "Sem 1": [{ name: "IT Fundamentals", code: "IT101", credits: 3 }] },
};

const AcademicsSection = () => {
  const [branch, setBranch] = useState("CSE");
  const [semester, setSemester] = useState("Sem 1");
  const [expandedSubject, setExpandedSubject] = useState<string | null>(null);
  const [bookmarked, setBookmarked] = useState<Set<string>>(new Set());
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const semesters = Object.keys(subjectsData[branch] || {});
  const subjects = subjectsData[branch]?.[semester] || [];

  const toggleBookmark = (code: string) => {
    setBookmarked((prev) => {
      const next = new Set(prev);
      next.has(code) ? next.delete(code) : next.add(code);
      return next;
    });
  };

  return (
    <section id="academics" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Academic <span className="gradient-text">Schemes</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Browse course structures by branch and semester
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Branch Select */}
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {branches.map((b) => (
              <button
                key={b}
                onClick={() => { setBranch(b); setSemester(Object.keys(subjectsData[b] || {})[0] || "Sem 1"); }}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  branch === b ? "gradient-bg text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-muted"
                }`}
              >
                {b}
              </button>
            ))}
          </div>

          {/* Semester Tabs */}
          <div className="flex gap-2 justify-center mb-8 overflow-x-auto pb-2">
            {semesters.map((s) => (
              <button
                key={s}
                onClick={() => setSemester(s)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  semester === s ? "bg-primary/10 text-primary border border-primary/20" : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Subject Cards */}
          <div className="space-y-3">
            <AnimatePresence mode="wait">
              {subjects.map((sub, i) => (
                <motion.div
                  key={sub.code}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: i * 0.05 }}
                  className="glass-card overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedSubject(expandedSubject === sub.code ? null : sub.code)}
                    className="w-full flex items-center justify-between p-4 text-left"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-muted-foreground bg-secondary px-2 py-1 rounded">{sub.code}</span>
                      <span className="font-medium text-sm">{sub.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">{sub.credits} credits</span>
                      <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${expandedSubject === sub.code ? "rotate-180" : ""}`} />
                    </div>
                  </button>

                  <AnimatePresence>
                    {expandedSubject === sub.code && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="border-t border-border/50"
                      >
                        <div className="p-4 flex flex-wrap items-center gap-3">
                          <p className="text-sm text-muted-foreground flex-1">
                            Comprehensive course covering fundamental and advanced topics in {sub.name}.
                          </p>
                          <button className="gradient-bg text-primary-foreground px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 hover:opacity-90 transition-opacity">
                            <Download className="w-3.5 h-3.5" /> Syllabus
                          </button>
                          <button
                            onClick={(e) => { e.stopPropagation(); toggleBookmark(sub.code); }}
                            className={`p-2 rounded-lg border transition-colors ${
                              bookmarked.has(sub.code) ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground hover:text-foreground"
                            }`}
                          >
                            <Bookmark className="w-3.5 h-3.5" fill={bookmarked.has(sub.code) ? "currentColor" : "none"} />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicsSection;
