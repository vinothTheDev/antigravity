import { useState } from "react";
import PostCard from "@/components/PostCard";
import { mockPosts, categories } from "@/data/mockData";
import { motion } from "framer-motion";
import { TrendingUp, Clock, Flame } from "lucide-react";

const sortOptions = [
  { label: "Hot", icon: Flame },
  { label: "New", icon: Clock },
  { label: "Top", icon: TrendingUp },
];

const ForumPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeSort, setActiveSort] = useState("Hot");

  const filtered = activeCategory === "All"
    ? mockPosts
    : mockPosts.filter((p) => p.category === activeCategory);

  return (
    <div className="container py-6 max-w-2xl">
      {/* Sort bar */}
      <div className="flex items-center gap-2 mb-4 p-2 rounded-xl bg-card border border-border">
        {sortOptions.map(({ label, icon: Icon }) => (
          <button
            key={label}
            onClick={() => setActiveSort(label)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              activeSort === label
                ? "bg-primary/15 text-primary glow-border"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary"
            }`}
          >
            <Icon className={`w-4 h-4 ${activeSort === label ? "glow-icon" : ""}`} />
            {label}
          </button>
        ))}
      </div>

      {/* Categories */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-colors border ${
              activeCategory === cat
                ? "border-primary/40 bg-primary/10 text-primary glow-border"
                : "border-border text-muted-foreground hover:text-foreground hover:border-border"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Posts */}
      <div className="space-y-3">
        {filtered.map((post, i) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <PostCard post={post} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ForumPage;
