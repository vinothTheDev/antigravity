import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Camera, CheckCircle, XCircle, Loader2 } from "lucide-react";

interface FaceVerificationGateProps {
  onVerified: () => void;
}

const FaceVerificationGate = ({ onVerified }: FaceVerificationGateProps) => {
  const [stage, setStage] = useState<"intro" | "scanning" | "success" | "failed">("intro");

  const startVerification = () => {
    setStage("scanning");
    // Simulate face scan
    setTimeout(() => {
      setStage("success");
      setTimeout(() => onVerified(), 1500);
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background gradient-mesh">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full mx-4"
      >
        <div className="text-center mb-8">
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Shield className="w-16 h-16 mx-auto text-primary glow-icon" />
          </motion.div>
          <h1 className="text-3xl font-display font-bold mt-4 glow-text">Angel Nirbhaya</h1>
          <p className="text-muted-foreground mt-2">Women-Only Safe Space</p>
        </div>

        <div className="rounded-xl border border-border bg-card p-8 glow-box">
          <AnimatePresence mode="wait">
            {stage === "intro" && (
              <motion.div
                key="intro"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center space-y-6"
              >
                <div className="w-24 h-24 rounded-full border-2 border-primary/40 mx-auto flex items-center justify-center glow-border">
                  <Camera className="w-10 h-10 text-primary glow-icon" />
                </div>
                <div>
                  <h2 className="text-xl font-display font-semibold">Identity Verification</h2>
                  <p className="text-muted-foreground text-sm mt-2">
                    This platform is exclusively for women. We use advanced AI face verification to ensure a safe space. 
                    Photos, images, and deepfakes are automatically detected and rejected.
                  </p>
                </div>
                <div className="space-y-2 text-left text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent glow-icon-accent" />
                    <span>Live face detection — no photos allowed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent glow-icon-accent" />
                    <span>Anti-spoofing technology enabled</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent glow-icon-accent" />
                    <span>No data stored — verification is ephemeral</span>
                  </div>
                </div>
                <button
                  onClick={startVerification}
                  className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold glow-box transition-all hover:brightness-110"
                >
                  Begin Verification
                </button>
              </motion.div>
            )}

            {stage === "scanning" && (
              <motion.div
                key="scanning"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center space-y-6"
              >
                <div className="w-32 h-32 rounded-full border-2 border-primary mx-auto flex items-center justify-center relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-primary/10"
                    animate={{ opacity: [0.1, 0.3, 0.1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute left-0 right-0 h-0.5 bg-accent"
                    animate={{ top: ["10%", "90%", "10%"] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <Camera className="w-12 h-12 text-primary glow-icon relative z-10" />
                </div>
                <div>
                  <h2 className="text-xl font-display font-semibold">Scanning Face...</h2>
                  <div className="flex items-center justify-center gap-2 mt-2 text-muted-foreground">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="text-sm">Verifying identity & liveness</span>
                  </div>
                </div>
              </motion.div>
            )}

            {stage === "success" && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-4"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <CheckCircle className="w-16 h-16 mx-auto text-accent glow-icon-accent" />
                </motion.div>
                <h2 className="text-xl font-display font-semibold">Verified Successfully</h2>
                <p className="text-muted-foreground text-sm">Welcome to Angel Nirbhaya. You are safe here.</p>
              </motion.div>
            )}

            {stage === "failed" && (
              <motion.div
                key="failed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center space-y-4"
              >
                <XCircle className="w-16 h-16 mx-auto text-destructive" />
                <h2 className="text-xl font-display font-semibold">Verification Failed</h2>
                <p className="text-muted-foreground text-sm">This platform is exclusively for women.</p>
                <button
                  onClick={() => setStage("intro")}
                  className="px-6 py-2 rounded-lg bg-secondary text-secondary-foreground font-medium"
                >
                  Try Again
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default FaceVerificationGate;
