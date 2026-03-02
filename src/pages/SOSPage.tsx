import { motion } from "framer-motion";
import { Phone, MapPin, Shield, AlertTriangle, Siren } from "lucide-react";

const SOSPage = () => {
  return (
    <div className="container max-w-md py-12 text-center">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="w-40 h-40 rounded-full bg-sos text-primary-foreground mx-auto flex items-center justify-center glow-sos"
        >
          <div>
            <Siren className="w-12 h-12 mx-auto mb-1" />
            <span className="text-2xl font-display font-extrabold">SOS</span>
          </div>
        </motion.button>

        <h1 className="text-2xl font-display font-bold mt-8">Emergency Alert</h1>
        <p className="text-sm text-muted-foreground mt-2">
          Press the SOS button to send an emergency alert to nearest authorities
        </p>

        <div className="mt-8 space-y-3">
          <a
            href="tel:112"
            className="flex items-center justify-between p-4 rounded-xl border border-border bg-card hover:glow-box transition-all"
          >
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-accent glow-icon-accent" />
              <div className="text-left">
                <p className="font-medium text-sm">Police Emergency</p>
                <p className="text-xs text-muted-foreground">Dial 112</p>
              </div>
            </div>
            <span className="text-accent font-bold">Call</span>
          </a>

          <a
            href="tel:181"
            className="flex items-center justify-between p-4 rounded-xl border border-border bg-card hover:glow-box transition-all"
          >
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-primary glow-icon" />
              <div className="text-left">
                <p className="font-medium text-sm">Women Helpline</p>
                <p className="text-xs text-muted-foreground">Dial 181</p>
              </div>
            </div>
            <span className="text-accent font-bold">Call</span>
          </a>

          <div className="flex items-center justify-between p-4 rounded-xl border border-border bg-card">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-accent glow-icon-accent" />
              <div className="text-left">
                <p className="font-medium text-sm">Share Live Location</p>
                <p className="text-xs text-muted-foreground">Send to emergency contacts</p>
              </div>
            </div>
            <button className="text-xs px-3 py-1.5 rounded-lg bg-primary/15 text-primary font-medium glow-border">
              Share
            </button>
          </div>
        </div>

        <div className="mt-8 p-4 rounded-xl bg-sos/10 border border-sos/20">
          <div className="flex items-center gap-2 justify-center text-sos text-sm font-medium">
            <AlertTriangle className="w-4 h-4" />
            In immediate danger? Call 112 directly.
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SOSPage;
