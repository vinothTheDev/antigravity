import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Send, MapPin, Clock, Shield, AlertTriangle } from "lucide-react";
import { categories } from "@/data/mockData";

// Simple extraction of location and time from text
const extractLocation = (text: string): string | undefined => {
  const locationPatterns = [
    /(?:near|at|in|on|from)\s+([A-Z][a-zA-Z\s]+(?:Road|Street|Station|Market|Park|Area|Nagar|Colony|Block|Sector|Lane|Avenue|Bridge|Stop|Mall|Circle|Chowk|Gate|Marg))/g,
    /([A-Z][a-zA-Z]+(?:,\s*[A-Z][a-zA-Z]+)+)/g,
  ];
  for (const pattern of locationPatterns) {
    const match = pattern.exec(text);
    if (match) return match[1]?.trim();
  }
  return undefined;
};

const extractTime = (text: string): string | undefined => {
  const timePatterns = [
    /(\d{1,2}(?::\d{2})?\s*(?:AM|PM|am|pm))/,
    /((?:morning|afternoon|evening|night|midnight|dawn|dusk))/i,
    /(\d{1,2}(?:\/|-)\d{1,2}(?:\/|-)\d{2,4})/,
    /((?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+\d{1,2}(?:,?\s+\d{4})?)/i,
  ];
  for (const pattern of timePatterns) {
    const match = pattern.exec(text);
    if (match) return match[1];
  }
  return undefined;
};

const CreatePostPage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Harassment");
  const [submitted, setSubmitted] = useState(false);

  const detectedLocation = extractLocation(content);
  const detectedTime = extractTime(content);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    setSubmitted(true);
    setTimeout(() => navigate("/forum"), 2000);
  };

  if (submitted) {
    return (
      <div className="container max-w-xl py-20 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <Shield className="w-16 h-16 mx-auto text-accent glow-icon-accent" />
        </motion.div>
        <h2 className="text-2xl font-display font-bold mt-4">Posted Anonymously</h2>
        <p className="text-muted-foreground mt-2">Your identity is completely protected. Redirecting to forum...</p>
      </div>
    );
  }

  return (
    <div className="container max-w-xl py-8">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-display font-bold glow-text">Share Your Experience</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Your post is <span className="text-accent">100% anonymous</span>. No identity, email, or phone linked.
        </p>

        <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground bg-secondary/50 rounded-lg p-3">
          <AlertTriangle className="w-4 h-4 text-accent glow-icon-accent flex-shrink-0" />
          <span>Location & time mentioned in your post will be auto-extracted and shown separately to help authorities.</span>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {/* Category */}
          <div>
            <label className="text-sm font-medium mb-2 block">Category</label>
            <div className="flex flex-wrap gap-2">
              {categories.filter(c => c !== "All").map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
                    category === cat
                      ? "border-primary/40 bg-primary/10 text-primary glow-border"
                      : "border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Title */}
          <div>
            <label className="text-sm font-medium mb-1 block">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Brief description of the incident..."
              className="w-full px-4 py-2.5 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:glow-border transition-all"
              maxLength={150}
            />
          </div>

          {/* Content */}
          <div>
            <label className="text-sm font-medium mb-1 block">Your Experience</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Describe what happened. Mention the location and time if possible — they'll be auto-extracted..."
              rows={6}
              className="w-full px-4 py-2.5 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:glow-border transition-all resize-none"
              maxLength={2000}
            />
            <p className="text-xs text-muted-foreground mt-1 text-right">{content.length}/2000</p>
          </div>

          {/* Auto-detected info */}
          {(detectedLocation || detectedTime) && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="rounded-lg border border-border bg-secondary/30 p-3 space-y-2"
            >
              <p className="text-xs font-medium text-accent">Auto-Detected Information:</p>
              <div className="flex flex-wrap gap-2">
                {detectedLocation && (
                  <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-accent/10 text-accent text-xs">
                    <MapPin className="w-3 h-3 glow-icon-accent" />
                    {detectedLocation}
                  </div>
                )}
                {detectedTime && (
                  <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-primary/10 text-primary text-xs">
                    <Clock className="w-3 h-3 glow-icon" />
                    {detectedTime}
                  </div>
                )}
              </div>
            </motion.div>
          )}

          <button
            type="submit"
            disabled={!title.trim() || !content.trim()}
            className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold glow-box transition-all hover:brightness-110 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" /> Post Anonymously
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default CreatePostPage;
