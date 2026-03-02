import { motion } from "framer-motion";
import { Shield, AlertTriangle, MapPin, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { label: "Anonymous Reports", value: "12,847", icon: Shield },
  { label: "Unsafe Zones Flagged", value: "1,293", icon: AlertTriangle },
  { label: "Cities Covered", value: "156", icon: MapPin },
  { label: "Women Protected", value: "50K+", icon: Users },
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="gradient-mesh absolute inset-0" />
      <div className="container relative py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Shield className="w-20 h-20 mx-auto text-primary glow-icon" />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-display font-extrabold mt-6 glow-text leading-tight">
            Angel Nirbhaya
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-lg mx-auto">
            A safe, anonymous space for women to share experiences, report incidents, and build a safer world — together.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
            <Link
              to="/forum"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold glow-box transition-all hover:brightness-110"
            >
              Enter Forum <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/sos"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-sos text-primary-foreground font-bold glow-sos"
            >
              Emergency SOS
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-3xl mx-auto"
        >
          {stats.map(({ label, value, icon: Icon }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="rounded-xl border border-border bg-card/60 backdrop-blur p-4 text-center glow-box"
            >
              <Icon className="w-5 h-5 mx-auto text-accent glow-icon-accent" />
              <p className="text-2xl font-display font-bold mt-2">{value}</p>
              <p className="text-xs text-muted-foreground mt-1">{label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-xs text-muted-foreground">
            Linked with <span className="text-accent">State Police</span> & <span className="text-accent">National Women's Commission</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
