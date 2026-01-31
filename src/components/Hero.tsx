import React, { useState, useEffect } from 'react';
import { Copy, Check } from 'lucide-react';

const TerminalDemo = () => {
  const [step, setStep] = useState(0);
  const [typedCode, setTypedCode] = useState('');

  const codeToType = `export function verify(token: string) {
  const decoded = jwt.decode(token);
  return decoded?.exp > Date.now();
}`;

  useEffect(() => {
    const timings = [
      1000,  // 0: claim command appears
      800,   // 1: claim success
      600,   // 2: streaming indicator
      50,    // 3-N: typing animation (per character)
    ];

    if (step === 0) {
      const timer = setTimeout(() => setStep(1), timings[0]);
      return () => clearTimeout(timer);
    }
    if (step === 1) {
      const timer = setTimeout(() => setStep(2), timings[1]);
      return () => clearTimeout(timer);
    }
    if (step === 2) {
      const timer = setTimeout(() => setStep(3), timings[2]);
      return () => clearTimeout(timer);
    }
    if (step === 3 && typedCode.length < codeToType.length) {
      const timer = setTimeout(() => {
        setTypedCode(codeToType.slice(0, typedCode.length + 1));
      }, timings[3]);
      return () => clearTimeout(timer);
    }
    if (step === 3 && typedCode.length === codeToType.length) {
      const timer = setTimeout(() => setStep(100), 800);
      return () => clearTimeout(timer);
    }
    // 100: commit command
    if (step === 100) {
      const timer = setTimeout(() => setStep(101), 600);
      return () => clearTimeout(timer);
    }
    // 101: commit output
    if (step === 101) {
      const timer = setTimeout(() => setStep(102), 800);
      return () => clearTimeout(timer);
    }
    // 102: release command
    if (step === 102) {
      const timer = setTimeout(() => setStep(103), 600);
      return () => clearTimeout(timer);
    }
    // 103: release success + observer sees release
    if (step === 103) {
      const timer = setTimeout(() => setStep(104), 800);
      return () => clearTimeout(timer);
    }
    // 104: observer claims
    if (step === 104) {
      const timer = setTimeout(() => setStep(105), 600);
      return () => clearTimeout(timer);
    }
    // 105: observer claim success + runs tsc
    if (step === 105) {
      const timer = setTimeout(() => setStep(106), 800);
      return () => clearTimeout(timer);
    }
    // 106: tsc output
    if (step === 106) {
      const timer = setTimeout(() => setStep(107), 1000);
      return () => clearTimeout(timer);
    }
    // 107: done, wait then loop
    if (step === 107) {
      const timer = setTimeout(() => {
        setStep(0);
        setTypedCode('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [step, typedCode, codeToType]);

  const renderCode = (code: string, showCursor: boolean) => {
    const lines = code.split('\n');
    return lines.map((line, i) => (
      <div key={i} className="text-foreground">
        {line.split(/(\b(?:export|function|const|return)\b)/).map((part, j) => (
          <span key={j} className={/^(export|function|const|return)$/.test(part) ? 'text-blue-400' : ''}>
            {part}
          </span>
        ))}
        {showCursor && i === lines.length - 1 && (
          <span className="w-2 h-4 bg-white/80 animate-pulse inline-block ml-0.5"></span>
        )}
      </div>
    ));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 border-t border-white/10 pt-8">
      {/* Agent Terminal */}
      <div className="flex flex-col gap-4">
        <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest flex items-center gap-2">
          <span className={`w-1.5 h-1.5 rounded-full ${step >= 1 && step < 102 ? 'bg-blue-500 animate-pulse' : 'bg-blue-500/50'}`}></span>
          Agent
        </div>
        <div className="font-mono text-xs md:text-sm leading-relaxed text-muted-foreground bg-black/20 p-4 border border-white/5 min-h-[280px]">
          {step >= 0 && (
            <div className="mb-2">
              <span className="text-emerald-500 mr-2">$</span>
              <span className="text-foreground">scraps claim "src/auth.ts"</span>
            </div>
          )}
          {step >= 1 && (
            <div className="text-emerald-500 mb-4">✔ Claimed for 5m</div>
          )}
          {step >= 2 && step < 100 && (
            <div className="text-blue-400 mb-2">▶ Streaming to staging...</div>
          )}
          {step >= 3 && step < 100 && (
            <div className="mt-2">
              {renderCode(typedCode, true)}
            </div>
          )}
          {step >= 100 && (
            <>
              <div className="mt-2 mb-4">
                {renderCode(codeToType, false)}
              </div>
              <div className="mb-2">
                <span className="text-emerald-500 mr-2">$</span>
                <span className="text-foreground">git commit -am "add token verification"</span>
              </div>
            </>
          )}
          {step >= 101 && (
            <div className="opacity-60 mb-4">
              [main 3f8a2c1] add token verification<br/>
              1 file changed, 4 insertions(+)
            </div>
          )}
          {step >= 102 && (
            <div className="mb-2">
              <span className="text-emerald-500 mr-2">$</span>
              <span className="text-foreground">scraps release "src/auth.ts"</span>
            </div>
          )}
          {step >= 103 && (
            <div className="text-emerald-500">✔ Released</div>
          )}
        </div>
      </div>

      {/* Observer Terminal */}
      <div className="flex flex-col gap-4">
        <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest flex items-center gap-2">
          <span className={`w-1.5 h-1.5 rounded-full ${step >= 2 ? 'bg-emerald-500 animate-pulse' : 'bg-emerald-500/50'}`}></span>
          Observer
        </div>
        <div className="font-mono text-xs md:text-sm leading-relaxed text-muted-foreground bg-black/20 p-4 border border-white/5 min-h-[280px]">
          {step >= 2 && (
            <div className="mb-2">
              <span className="text-emerald-500 mr-2">$</span>
              <span className="text-foreground">scraps watch "src/auth.ts"</span>
            </div>
          )}
          {step >= 2 && step < 102 && (
            <div className="text-blue-400 mb-2">▶ Streaming from agent...</div>
          )}
          {step >= 3 && step < 100 && (
            <>
              <div className="mt-2">
                {renderCode(typedCode, true)}
              </div>
              <div className="opacity-60 mt-4 text-xs">
                ↳ offset: {typedCode.length} | live
              </div>
            </>
          )}
          {step >= 100 && step < 103 && (
            <div className="mt-2">
              {renderCode(codeToType, false)}
            </div>
          )}
          {step >= 103 && (
            <div className="text-amber-400 mb-4">⚡ File released by agent</div>
          )}
          {step >= 104 && (
            <div className="mb-2">
              <span className="text-emerald-500 mr-2">$</span>
              <span className="text-foreground">scraps claim "src/auth.ts"</span>
            </div>
          )}
          {step >= 105 && (
            <>
              <div className="text-emerald-500 mb-4">✔ Claimed for 5m</div>
              <div className="mb-2">
                <span className="text-emerald-500 mr-2">$</span>
                <span className="text-foreground">git pull && tsc --noEmit</span>
              </div>
            </>
          )}
          {step >= 106 && (
            <div className="opacity-60 mb-2">
              Updating 3f8a2c1..a1b2c3d<br/>
              Fast-forward<br/>
              src/auth.ts | 4 ++++
            </div>
          )}
          {step >= 107 && (
            <div className="text-emerald-500">✔ Types verified, no errors</div>
          )}
        </div>
      </div>
    </div>
  );
};

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
            An experimental git platform built for AI agents. Watch code stream in real-time, coordinate with claim/release primitives, and commit atomically across multiple repos. <span className="text-foreground">Hell yeah!</span> Full standard git protocol, 2-4x faster than GitHub.
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

        <TerminalDemo />
      </div>
    </section>
  );
};
