import { motion } from "framer-motion";
import { Phone, ExternalLink, Scale, Shield, Globe, BookOpen } from "lucide-react";

const helplines = [
  { name: "Women Helpline (All India)", number: "181", desc: "24/7 toll-free helpline for women in distress" },
  { name: "Police Emergency", number: "112", desc: "National emergency response number" },
  { name: "Women's Commission", number: "7827-170-170", desc: "National Commission for Women" },
  { name: "Domestic Violence", number: "1091", desc: "Women in distress helpline" },
  { name: "Cybercrime Helpline", number: "1930", desc: "Report online harassment and cyber crimes" },
  { name: "Child Helpline", number: "1098", desc: "For children and young women in danger" },
];

const resources = [
  { title: "Know Your Legal Rights", desc: "Protection of Women from Domestic Violence Act, Sexual Harassment at Workplace Act, and more.", icon: Scale },
  { title: "Cybercrime Portal", desc: "Report online harassment, stalking, and cyber bullying through the national portal.", icon: Globe },
  { title: "Self-Defense Resources", desc: "Free self-defense training programs and workshops in your city.", icon: Shield },
  { title: "Legal Aid Services", desc: "Free legal assistance for women through District Legal Services Authority.", icon: BookOpen },
];

const ResourcesPage = () => {
  return (
    <div className="container max-w-2xl py-8">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-display font-bold glow-text">Safety Resources & Helplines</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Linked with <span className="text-accent">State Police</span> and <span className="text-accent">National Women's Commission</span>
        </p>
      </motion.div>

      {/* Helplines */}
      <section className="mt-8">
        <h2 className="text-lg font-display font-semibold mb-4 flex items-center gap-2">
          <Phone className="w-5 h-5 text-accent glow-icon-accent" /> Emergency Helplines
        </h2>
        <div className="grid gap-3">
          {helplines.map((h, i) => (
            <motion.div
              key={h.number}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center justify-between p-4 rounded-xl border border-border bg-card hover:glow-box transition-all"
            >
              <div>
                <h3 className="font-medium text-sm">{h.name}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">{h.desc}</p>
              </div>
              <a
                href={`tel:${h.number}`}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent/15 text-accent font-bold text-sm hover:bg-accent/25 transition-colors glow-border"
              >
                <Phone className="w-3.5 h-3.5 glow-icon-accent" />
                {h.number}
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Resources */}
      <section className="mt-10">
        <h2 className="text-lg font-display font-semibold mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-primary glow-icon" /> Legal & Safety Resources
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {resources.map(({ title, desc, icon: Icon }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.05 }}
              className="p-4 rounded-xl border border-border bg-card hover:glow-box transition-all group cursor-pointer"
            >
              <Icon className="w-8 h-8 text-primary glow-icon group-hover:scale-110 transition-transform" />
              <h3 className="font-display font-semibold mt-3 text-sm">{title}</h3>
              <p className="text-xs text-muted-foreground mt-1">{desc}</p>
              <span className="flex items-center gap-1 mt-2 text-xs text-accent">
                Learn more <ExternalLink className="w-3 h-3" />
              </span>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;
