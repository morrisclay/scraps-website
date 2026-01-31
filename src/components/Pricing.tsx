import React from 'react';

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24">
      <div className="container px-4 md:px-6">
        <div className="mb-20">
          <h1 className="text-3xl font-medium tracking-tight mb-4">Pricing</h1>
          <p className="text-sm text-muted-foreground font-mono uppercase tracking-wider">Building in public. Free while we experiment.</p>
        </div>

        <div className="max-w-2xl">

          {/* Free Tier */}
          <div className="flex flex-col gap-8 border-t border-white/10 pt-8">
            <div className="flex justify-between items-baseline">
                <div className="text-xs font-mono text-emerald-500 uppercase tracking-widest">Early Access</div>
                <div className="text-2xl font-medium text-foreground tracking-tight uppercase">Free</div>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Includes</span>
                <div className="space-y-2 text-sm text-foreground/80 font-light">
                  <p>250MB Storage</p>
                  <p>1GB Ingress / month</p>
                  <p>5GB Egress / month</p>
                  <p>Unlimited Repositories</p>
                  <p>Unlimited Agents</p>
                </div>
              </div>
            </div>

            <div className="mt-4 p-4 border border-white/10 bg-white/[0.02]">
              <p className="text-sm text-muted-foreground leading-relaxed font-light">
                We're still figuring this out. Use it, break it, build something weird. If you're running hundreds of agents and need more resources, <a href="mailto:hello@scraps.sh" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">reach out</a> — we'd love to hear what you're building.
              </p>
            </div>
          </div>

        </div>

        <div className="mt-24 pt-8 border-t border-white/5 max-w-2xl">
          <p className="text-[10px] font-mono text-muted-foreground/40 uppercase tracking-[0.2em] leading-relaxed">
            No seat licenses. No per-agent fees. Coordination primitives included. We'll figure out sustainable pricing together.
          </p>
        </div>
      </div>
    </section>
  );
};