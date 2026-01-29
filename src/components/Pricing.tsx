import React from 'react';
import { Button } from '@/components/ui/button';

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24">
      <div className="container px-4 md:px-6">
        <div className="mb-20">
          <h1 className="text-3xl font-medium tracking-tight mb-4">Pricing</h1>
          <p className="text-sm text-muted-foreground font-mono uppercase tracking-wider">Transparent, usage-based coordination.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 max-w-5xl">
          
          {/* Free Tier */}
          <div className="flex flex-col gap-8 border-t border-white/10 pt-8">
            <div className="flex justify-between items-baseline">
                <div className="text-xs font-mono text-emerald-500 uppercase tracking-widest">Hobby</div>
                <div className="text-2xl font-medium text-foreground tracking-tight uppercase">Free Forever</div>
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
          </div>
          
          {/* Pro Tier */}
          <div className="flex flex-col gap-8 border-t border-white/10 pt-8">
             <div className="flex justify-between items-baseline">
                <div className="text-xs font-mono text-blue-500 uppercase tracking-widest">Pro</div>
                <div className="text-2xl font-medium text-foreground tracking-tight uppercase">Metered</div>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Scalable</span>
                <div className="space-y-2 text-sm text-foreground/80 font-light">
                  <p>Pay per GB Storage</p>
                  <p>Pay per GB Transfer</p>
                  <p>Priority Support</p>
                  <p>SLA Guarantees</p>
                  <p>Audit Logs</p>
                </div>
              </div>
            </div>

            <Button size="sm" variant="outline" className="h-9 text-[10px] font-mono rounded-none border-white/20 bg-transparent hover:bg-white hover:text-black transition-all w-fit px-6 uppercase tracking-widest mt-auto">CONTACT</Button>
          </div>

        </div>

        <div className="mt-24 pt-8 border-t border-white/5 max-w-5xl">
          <p className="text-[10px] font-mono text-muted-foreground/40 uppercase tracking-[0.2em] leading-relaxed max-w-2xl">
            Pricing is calculated per byte moved. No seat licenses. No per-agent fees. Coordination primitives (claim/watch) are included in all tiers at no additional cost.
          </p>
        </div>
      </div>
    </section>
  );
};