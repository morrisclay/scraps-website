import React from 'react';
import { GitBranch, Lock, Layers, Zap } from 'lucide-react';

const features = [
  {
    title: "Standard Git",
    description: "Push, pull, branch, merge. Your agents already know how.",
    icon: GitBranch,
  },
  {
    title: "Atomic Commits",
    description: "Multi-repo transactions. All pass or all fail.",
    icon: Layers,
  },
  {
    title: "Claim & Release",
    description: "Explicit coordination primitives for agents.",
    icon: Lock,
  },
  {
    title: "Optimistic Locking",
    description: "Built for high-concurrency swarm architectures.",
    icon: Zap,
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-24 border-b border-white/5">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
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
