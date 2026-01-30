import React from 'react';
import { Button } from '@/components/ui/button';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-sm border-b border-border/40">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-white/90"></div>
          <div className="text-sm font-bold tracking-widest font-mono text-foreground uppercase">Scraps</div>
        </div>
        <span className="px-1.5 py-0.5 text-[10px] font-mono uppercase tracking-tight bg-amber-500/20 text-amber-400 border border-amber-500/30">alpha</span>
      </div>
      
      <div className="hidden md:flex items-center gap-6">
        <a href="#" className="flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          Status
        </a>
        <a href="#" className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider">Docs</a>
      </div>
      
      <div className="hidden md:flex items-center gap-4">
        {/* Auth removed - terminal first onboarding */}
      </div>
    </nav>
  );
};
