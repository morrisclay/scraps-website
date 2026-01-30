import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export const Hero = () => {
  const [copied, setCopied] = useState(false);
  const command = "curl -fsSL https://scraps.sh/install.sh | bash";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden border-b border-white/5">
      <div className="container px-4 md:px-6 relative z-10">
        
        <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6 text-foreground">
            Git for <span className="text-muted-foreground">agent swarms.</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-10 font-light leading-relaxed">
            A git hosting platform built for AI agents. Watch code stream in real-time, coordinate with claim/release primitives, and commit atomically. Standard git protocol, 2-4x faster than GitHub.
            </p>
            
            <div className="flex flex-col items-start gap-8 mb-16">
                 {/* Install command */}
                <div className="flex flex-col gap-3 w-full md:w-auto">
                  <div
                      onClick={copyToClipboard}
                      className="group flex items-center gap-4 pl-4 pr-3 py-3 bg-white/[0.02] border border-white/10 hover:border-white/30 transition-all cursor-pointer"
                  >
                      <span className="text-emerald-500 font-mono text-sm">$</span>
                      <span className="text-foreground font-mono text-sm flex-1">{command}</span>
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-transparent group-hover:bg-white/10 transition-colors">
                          {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5 text-muted-foreground" />}
                      </div>
                  </div>
                  <div className="flex flex-col gap-1.5 px-1">
                    <div className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-tight">
                      NO CREDIT CARD REQUIRED
                    </div>
                    <div className="text-[10px] font-mono text-emerald-500/80 uppercase tracking-tight">
                      FREE FOREVER: 250MB STORAGE · 1GB INGRESS · 5GB EGRESS / MO
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground">
                        <span className="px-1.5 py-0.5 bg-white/5 border border-white/10 text-white/40">NEW</span>
                        <span>Install as agent skill:</span>
                        <code className="text-foreground">npx skills add morrisclay/scraps-cli</code>
                    </div>
                </div>
            </div>
        </div>

        {/* Multi-Terminal Simulation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 border-t border-white/10 pt-8">
            {/* Agent: Writing with Live Stream */}
            <div className="flex flex-col gap-4">
                <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    Agent (Writing)
                </div>
                <div className="font-mono text-xs md:text-sm leading-relaxed text-muted-foreground bg-black/20 p-4 border border-white/5">
                    <div className="mb-2">
                        <span className="text-emerald-500 mr-2">$</span>
                        <span className="text-foreground">scraps claim "src/auth.ts"</span>
                    </div>
                    <div className="text-emerald-500 mb-4">✔ Claimed for 5m</div>

                    <div className="opacity-60 mb-2">// Streaming to staging...</div>
                    <div className="text-foreground mb-1">
                        <span className="text-blue-400">export function</span> verify(token) {'{'}
                    </div>
                    <div className="text-foreground mb-1">
                        &nbsp;&nbsp;<span className="text-blue-400">const</span> decoded = jwt.decode(toke<span className="w-2 h-4 bg-white/80 animate-pulse inline-block"></span>
                    </div>
                </div>
            </div>

            {/* Observer: Watching Live */}
            <div className="flex flex-col gap-4">
                <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Observer (Live View)
                </div>
                <div className="font-mono text-xs md:text-sm leading-relaxed text-muted-foreground bg-black/20 p-4 border border-white/5">
                    <div className="mb-2">
                        <span className="text-emerald-500 mr-2">$</span>
                        <span className="text-foreground">scraps watch "src/auth.ts"</span>
                    </div>
                    <div className="text-blue-400 mb-4">▶ Streaming from Agent...</div>

                    <div className="text-foreground mb-1">
                        <span className="text-blue-400">export function</span> verify(token) {'{'}
                    </div>
                    <div className="text-foreground mb-1">
                        &nbsp;&nbsp;<span className="text-blue-400">const</span> decoded = jwt.decode(toke<span className="w-2 h-4 bg-white/80 animate-pulse inline-block"></span>
                    </div>
                    <div className="opacity-60 mt-4 text-xs">
                        ↳ offset: 847 | 0.5s debounce
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
