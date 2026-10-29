import { faq } from "@/lib/faq";
import { Marked } from "@/components/LegalPage";

export default function FaqList({ limit }: { limit?: number }) {
  const items = limit ? faq.slice(0, limit) : faq;
  return (
    <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-charcoal">
      {items.map((f) => (
        <details key={f.q} className="group px-5 py-4 sm:px-6">
          <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-semibold text-white sm:text-lg [&::-webkit-details-marker]:hidden">
            {f.q}
            <span aria-hidden="true" className="text-xl text-brand-gold transition group-open:rotate-45">+</span>
          </summary>
          <p className="mt-2 max-w-prose leading-relaxed text-silver"><Marked text={f.a} /></p>
        </details>
      ))}
    </div>
  );
}
