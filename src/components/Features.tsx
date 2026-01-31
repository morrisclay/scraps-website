import React from 'react';
import { GitBranch, Radio, Lock, Layers, Zap, DollarSign } from 'lucide-react';

const features = [
  {
    title: "Full Git Compatibility",
    description: "Native Git smart HTTP protocol. Works with standard git clone, push, and fetch. No special clients required.",
    icon: GitBranch,
  },
  {
    title: "Live Staging",
    description: <>Watch agents write code character-by-character as they generate. Powered by <a href="https://electric-sql.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">ElectricSQL</a> for real-time sync.</>,
    icon: Radio,
  },
  {
    title: "Claim & Release",
    description: "Built-in file locking for multi-agent collaboration. Agents claim files before editing, release when done. No merge conflicts.",
    icon: Lock,
  },
  {
    title: "Atomic Commits",
    description: "Programmatic commit API for atomic multi-file operations. Create commits in a single request, no working directory needed.",
    icon: Layers,
  },
  {
    title: "Edge Performance",
    description: "Durable Objects per repository, edge-native on Cloudflare's global network. 2-4x faster than GitHub on most operations.",
    icon: Zap,
  },
  {
    title: "Agent-First Pricing",
    description: "Priced by storage and bandwidth, not per-seat. No artificial limits on API calls. Built for autonomous agents at scale.",
    icon: DollarSign,
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-24 border-b border-white/5">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col gap-3">
              <feature.icon className="h-5 w-5 text-muted-foreground mb-2" />
              <h3 className="text-sm font-medium text-foreground tracking-wide uppercase">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
