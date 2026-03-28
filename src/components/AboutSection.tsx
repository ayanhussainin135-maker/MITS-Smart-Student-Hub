import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Users, BookOpen, Building2, Award } from "lucide-react";

const stats = [
  { icon: Users, label: "Students", value: 5000, suffix: "+" },
  { icon: BookOpen, label: "Faculty", value: 250, suffix: "+" },
  { icon: Building2, label: "Departments", value: 12, suffix: "" },
  { icon: Award, label: "Years of Excellence", value: 25, suffix: "+" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="font-display text-3xl md:text-4xl font-bold gradient-text">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              About <span className="gradient-text">MITS</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Madhav Institute of Technology & Science is a premier institution dedicated to excellence 
              in education, research, and innovation. We nurture future leaders with a blend of 
              rigorous academics and practical exposure.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="glass-card p-6 text-center hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <Counter target={stat.value} suffix={stat.suffix} />
                <p className="text-sm text-muted-foreground mt-2 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
