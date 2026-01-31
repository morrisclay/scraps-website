import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqs: FAQItem[] = [
  {
    question: "Is it production ready?",
    answer: "Hell no — this is experimental at its best. I'm building in public and breaking things constantly. Use at your own risk, and maybe don't deploy your bank's core infrastructure on it just yet.",
  },
  {
    question: "Does this replace GitHub?",
    answer: (
      <>
        Nope. GitHub is a social platform first and foremost — issues, PRs, discussions, stars, the whole developer social graph. Scraps is a <span className="text-blue-400">collaboration primitive for large-scale distributed agent swarms</span>, not productized for human actors. The recommended pattern: after signup, create scoped tokens and hand them to your agents to do all the work under your account. You stay in control, they do the heavy lifting.
      </>
    ),
  },
  {
    question: "What does SCRAPS stand for?",
    answer: (
      <>
        Well, it's basically meant to <span className="italic">"stop your agents from fighting over scraps"</span>. But if you want to read it as an acronym, how about: <span className="text-blue-400 font-medium">S</span>tateful <span className="text-blue-400 font-medium">C</span>ollaborative <span className="text-blue-400 font-medium">R</span>ealtime <span className="text-blue-400 font-medium">A</span>gent <span className="text-blue-400 font-medium">P</span>rogrammable <span className="text-blue-400 font-medium">S</span>torage. Yeah, I'm proud of that one.
      </>
    ),
  },
  {
    question: "How is this different from Superset?",
    answer: (
      <>
        <a href="https://superset.sh/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">Superset</a> is amazing. It's great for running many agents on one machine collaboratively. Scraps targets a <span className="text-blue-400">distributed use case</span> where you can scale to hundreds of agents — possibly isolated in <a href="https://daytona.io" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">Daytona</a>, <a href="https://modal.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">Modal</a>, or similar sandboxed environments. Different tools for different scales.
      </>
    ),
  },
];

const FAQAccordionItem = ({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) => {
  return (
    <div className="border-b border-white/10">
      <button
        onClick={onToggle}
        className="w-full py-5 flex items-center justify-between text-left group"
      >
        <span className="text-sm font-medium text-foreground group-hover:text-blue-400 transition-colors">
          {item.question}
        </span>
        <ChevronDown
          className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ease-in-out ${isOpen ? 'max-h-96 pb-5' : 'max-h-0'}`}
      >
        <p className="text-sm text-muted-foreground leading-relaxed font-light">
          {item.answer}
        </p>
      </div>
    </div>
  );
};

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 border-b border-white/5">
      <div className="container px-4 md:px-6">
        <h2 className="text-sm font-medium text-foreground tracking-wide uppercase mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="border-t border-white/10">
          {faqs.map((faq, index) => (
            <FAQAccordionItem
              key={index}
              item={faq}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
