import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, Users, BookOpen, FlaskConical } from "lucide-react";

const departments = [
  { name: "Computer Science", code: "CSE", color: "from-blue-500 to-cyan-500", faculty: 35, students: 600, labs: 8 },
  { name: "Electronics & Comm.", code: "ECE", color: "from-purple-500 to-pink-500", faculty: 28, students: 450, labs: 6 },
  { name: "Mechanical", code: "ME", color: "from-orange-500 to-red-500", faculty: 30, students: 500, labs: 10 },
  { name: "Civil", code: "CE", color: "from-emerald-500 to-green-500", faculty: 22, students: 350, labs: 5 },
  { name: "Electrical", code: "EE", color: "from-amber-500 to-yellow-500", faculty: 25, students: 400, labs: 7 },
  { name: "Information Tech.", code: "IT", color: "from-teal-500 to-blue-500", faculty: 20, students: 300, labs: 5 },
];

const DepartmentsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selected, setSelected] = useState<typeof departments[0] | null>(null);

  return (
    <section id="departments" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Our <span className="gradient-text">Departments</span></h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Explore our world-class departments</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {departments.map((dept, i) => (
            <motion.button
              key={dept.code}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelected(dept)}
              className="glass-card p-6 text-left group"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${dept.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <span className="text-lg font-bold text-primary-foreground">{dept.code.slice(0, 2)}</span>
              </div>
              <h3 className="font-display font-semibold text-lg mb-1">{dept.name}</h3>
              <p className="text-xs text-muted-foreground">{dept.code} Department</p>
            </motion.button>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/20 backdrop-blur-sm"
              onClick={() => setSelected(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="glass-card-elevated p-8 max-w-md w-full"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${selected.color} flex items-center justify-center`}>
                    <span className="text-xl font-bold text-primary-foreground">{selected.code.slice(0, 2)}</span>
                  </div>
                  <button onClick={() => setSelected(null)} className="p-2 rounded-lg hover:bg-secondary transition-colors">
                    <X className="w-5 h-5 text-muted-foreground" />
                  </button>
                </div>
                <h3 className="font-display text-2xl font-bold mb-2">{selected.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">Department of {selected.name} at MITS offers comprehensive programs with state-of-the-art facilities.</p>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { icon: Users, label: "Faculty", value: selected.faculty },
                    { icon: BookOpen, label: "Students", value: selected.students },
                    { icon: FlaskConical, label: "Labs", value: selected.labs },
                  ].map((s) => (
                    <div key={s.label} className="bg-secondary rounded-xl p-3 text-center">
                      <s.icon className="w-4 h-4 mx-auto mb-1 text-primary" />
                      <div className="font-bold text-lg">{s.value}</div>
                      <div className="text-xs text-muted-foreground">{s.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default DepartmentsSection;
