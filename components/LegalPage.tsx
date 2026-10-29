import { Fragment } from "react";
import type { LegalSection } from "@/lib/legal";
import { site } from "@/lib/site";

// Подсвечивает плейсхолдеры вида [ЗАПОЛНИТЬ ...], чтобы их нельзя было пропустить.
export function Marked({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\[[^\]]+\])/g).map((part, i) =>
        part.startsWith("[") ? (
          <mark key={i} className="rounded bg-brand-gold/15 px-1 text-brand-gold">{part}</mark>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}

export default function LegalPage({ title, intro, sections }: { title: string; intro: string; sections: LegalSection[] }) {
  return (
    <article className="mx-auto max-w-3xl px-5 py-14 sm:py-20">
      <h1 className="font-display text-3xl font-extrabold text-white sm:text-5xl">{title}</h1>
      <p className="mt-4 text-steel">Редакция от: <Marked text={site.updated} /></p>
      <p className="mt-6 rounded-xl border border-brand-gold/30 bg-brand-gold/5 p-4 text-sm leading-relaxed text-silver">{intro}</p>
      {sections.map((s) => (
        <section key={s.title} className="mt-10">
          <h2 className="font-display text-xl font-bold text-white sm:text-2xl">{s.title}</h2>
          <div className="mt-3 space-y-3 leading-relaxed">
            {s.body.map((p, i) => (<p key={i}><Marked text={p} /></p>))}
          </div>
        </section>
      ))}
    </article>
  );
}
