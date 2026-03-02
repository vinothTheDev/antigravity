import { MapPin, Clock, ArrowBigUp, ArrowBigDown, MessageSquare, Flag, Share2 } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export interface PostData {
  id: string;
  category: string;
  title: string;
  content: string;
  location?: string;
  time?: string;
  upvotes: number;
  comments: number;
  timeAgo: string;
}

const categoryColors: Record<string, string> = {
  "Harassment": "bg-sos/20 text-sos",
  "Unsafe Area": "bg-amber-500/20 text-amber-400",
  "Improvement": "bg-accent/20 text-accent",
  "Experience": "bg-primary/20 text-primary",
  "Workplace": "bg-purple-500/20 text-purple-400",
  "Public Transport": "bg-emerald-500/20 text-emerald-400",
};

const PostCard = ({ post }: { post: PostData }) => {
  const [votes, setVotes] = useState(post.upvotes);
  const [voted, setVoted] = useState<"up" | "down" | null>(null);

  const handleVote = (dir: "up" | "down") => {
    if (voted === dir) {
      setVotes(post.upvotes);
      setVoted(null);
    } else {
      setVotes(post.upvotes + (dir === "up" ? 1 : -1));
      setVoted(dir);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-xl border border-border bg-card hover:glow-box transition-all duration-300 overflow-hidden"
    >
      <div className="flex">
        {/* Vote column */}
        <div className="flex flex-col items-center gap-1 p-3 bg-secondary/30">
          <button
            onClick={() => handleVote("up")}
            className={`p-1 rounded transition-colors ${voted === "up" ? "text-accent" : "text-muted-foreground hover:text-foreground"}`}
          >
            <ArrowBigUp className={`w-5 h-5 ${voted === "up" ? "glow-icon-accent fill-accent" : ""}`} />
          </button>
          <span className="text-sm font-bold">{votes}</span>
          <button
            onClick={() => handleVote("down")}
            className={`p-1 rounded transition-colors ${voted === "down" ? "text-sos" : "text-muted-foreground hover:text-foreground"}`}
          >
            <ArrowBigDown className={`w-5 h-5 ${voted === "down" ? "fill-sos" : ""}`} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 p-4">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${categoryColors[post.category] || "bg-secondary text-secondary-foreground"}`}>
              {post.category}
            </span>
            <span>•</span>
            <span>Anonymous</span>
            <span>•</span>
            <span>{post.timeAgo}</span>
          </div>

          <h3 className="font-display font-semibold text-base leading-snug">{post.title}</h3>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-3">{post.content}</p>

          {/* Extracted location & time */}
          {(post.location || post.time) && (
            <div className="flex flex-wrap gap-3 mt-3 text-xs">
              {post.location && (
                <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-accent/10 text-accent">
                  <MapPin className="w-3 h-3 glow-icon-accent" />
                  <span>{post.location}</span>
                </div>
              )}
              {post.time && (
                <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-primary/10 text-primary">
                  <Clock className="w-3 h-3 glow-icon" />
                  <span>{post.time}</span>
                </div>
              )}
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
            <button className="flex items-center gap-1 hover:text-foreground transition-colors">
              <MessageSquare className="w-3.5 h-3.5" /> {post.comments} Comments
            </button>
            <button className="flex items-center gap-1 hover:text-foreground transition-colors">
              <Share2 className="w-3.5 h-3.5" /> Share
            </button>
            <button className="flex items-center gap-1 hover:text-sos transition-colors">
              <Flag className="w-3.5 h-3.5" /> Report
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PostCard;
