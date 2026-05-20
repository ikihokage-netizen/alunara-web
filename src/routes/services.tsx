import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Alunara" },
      { name: "description", content: "Full Wedding Planning, Intimate Weddings, Coordination, and bespoke private celebrations." },
      { property: "og:title", content: "Services — Alunara" },
      { property: "og:description", content: "Bespoke planning for weddings, proposals, and meaningful private events." },
    ],
  }),
  component: Services,
});

const SERVICES = [
  { t: "Full Wedding Planning", d: "Begin to end. Concept, design, vendors, logistics — every detail held with intention." },
  { t: "Intimate Wedding", d: "Curated celebrations of 30 or fewer. Quiet luxury, deep presence." },
  { t: "On The Day Coordination", d: "You plan the dream; we orchestrate the day so you feel none of its weight." },
  { t: "Private Events & Gatherings", d: "Editorial dinners, milestone soirées, and celebrations of life's quieter moments." },
  { t: "Proposal Planning", d: "The first yes. Designed to feel inevitable, intimate, and entirely yours." },
  { t: "Bridal Shower", d: "Elegant pre-wedding gatherings — soft, feminine, deeply personal." },
  { t: "Anniversary Celebrations", d: "Marking love that has weathered seasons, with the same care we bring to a wedding day." },
  { t: "Birthday Celebrations", d: "Refined, story-led birthdays for those who prefer meaning over spectacle." },
  { t: "Honeymoon Planning", d: "A quiet handoff into your first chapter together — curated with the same intention." },
  { t: "Custom Celebrations", d: "If your vision lives outside a category, we'll meet you there." },
];

function Services() {
  return (
    <>
      <section className="pt-44 pb-20 lg:pt-52 lg:pb-28 bg-ivory">
        <div className="container-editorial">
          <Reveal>
            <p className="eyebrow text-clay mb-8">— What We Offer —</p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-5xl">
              Bespoke services, <em className="text-clay">quietly considered.</em>
            </h1>
            <p className="mt-10 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Every offering is shaped to the couple. The list below is a starting point — not a menu — and the conversation always begins with you.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-28 lg:pb-40 bg-ivory">
        <div className="container-editorial">
          <div className="border-t border-border">
            {SERVICES.map((s, i) => {
              const num = String(i + 1).padStart(2, "0");
              return (
                <Reveal key={s.t} delay={i * 50}>
                  <div className="grid grid-cols-12 gap-4 md:gap-8 py-10 lg:py-14 border-b border-border group hover:bg-sand/30 transition-colors duration-700 px-2">
                    <div className="col-span-2 md:col-span-1">
                      <p className="font-serif italic text-clay text-xl md:text-2xl">{num}</p>
                    </div>
                    <div className="col-span-10 md:col-span-5">
                      <h2 className="font-serif text-2xl md:text-4xl leading-tight transition-transform duration-700 group-hover:translate-x-2">
                        {s.t}
                      </h2>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{s.d}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-32 lg:py-48 bg-sand/50">
        <div className="container-editorial text-center max-w-4xl">
          <Reveal>
            <p className="font-serif italic text-3xl md:text-5xl lg:text-6xl leading-[1.25] text-foreground">
              "More than simply planning events, we create experiences filled with emotion, warmth, and memories that last forever."
            </p>
            <div className="mt-16">
              <Link to="/inquiry" className="btn-line">Begin Your Journey</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
