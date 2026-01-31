import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/5">
      <div className="container px-4 md:px-6 flex flex-row justify-between items-center">
        <div className="text-[10px] font-mono text-muted-foreground/50 uppercase tracking-widest">
          Experiment by Morris Clay
        </div>
        <div className="flex gap-6">
          <a href="/pricing" className="text-[10px] font-mono text-muted-foreground/50 hover:text-foreground uppercase tracking-widest transition-colors">Pricing</a>
          <a href="#" className="text-[10px] font-mono text-muted-foreground/50 hover:text-foreground uppercase tracking-widest transition-colors">GitHub</a>
          <a href="#" className="text-[10px] font-mono text-muted-foreground/50 hover:text-foreground uppercase tracking-widest transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
};