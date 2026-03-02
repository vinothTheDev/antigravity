import { Link, useLocation } from "react-router-dom";
import { Shield, Home, MessageSquare, Phone, PlusCircle } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const location = useLocation();

  const links = [
    { to: "/", icon: Home, label: "Home" },
    { to: "/forum", icon: MessageSquare, label: "Forum" },
    { to: "/post", icon: PlusCircle, label: "Post" },
    { to: "/resources", icon: Phone, label: "Resources" },
  ];

  return (
    <nav className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container flex items-center justify-between h-14">
        <Link to="/" className="flex items-center gap-2 group">
          <Shield className="w-6 h-6 text-primary glow-icon group-hover:scale-110 transition-transform" />
          <span className="font-display font-bold text-lg glow-text hidden sm:inline">Angel Nirbhaya</span>
        </Link>

        <div className="flex items-center gap-1">
          {links.map(({ to, icon: Icon, label }) => {
            const active = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={`relative flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  active ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className={`w-4 h-4 ${active ? "glow-icon" : ""}`} />
                <span className="hidden sm:inline">{label}</span>
                {active && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute inset-0 rounded-lg bg-primary/10 glow-border"
                    style={{ zIndex: -1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        <Link
          to="/sos"
          className="px-4 py-1.5 rounded-full bg-sos text-primary-foreground text-sm font-bold glow-sos"
        >
          SOS
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
