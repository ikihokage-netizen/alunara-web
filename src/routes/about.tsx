import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import portrait from "@/assets/about-portrait.jpg";
import details from "@/assets/details-1.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Alunara" },
      { name: "description", content: "Our story, philosophy, and the Alunara way of crafting timeless wedding celebrations." },
      { property: "og:title", content: "About Alunara" },
      { property: "og:description", content: "Meaningful, intentional, and personal wedding planning." },
    ],
  }),
  component: About,
});

const STEPS = [
  { n: "01", t: "Inquiry", d: "It begins with a conversation — open, unhurried, and rooted in your story." },
  { n: "02", t: "Planning & Concept", d: "We translate emotion into design. Every choice considered, every detail intentional." },
  { n: "03", t: "Coordination", d: "Vendors, timelines, logistics — orchestrated quietly so you feel none of the weight." },
  { n: "04", t: "The Celebration", d: "You arrive present. We hold the day, gently, from first look to last embrace." },
  { n: "05", t: "Beyond The Wedding", d: "What begins as planning often ends as friendship. We stay, long after the candles fade." },
];

function About() {
  return (
    <>
      {/* HERO */}
      <section className="pt-44 pb-24 lg:pt-52 lg:pb-32 bg-ivory">
        <div className="container-editorial">
          <Reveal>
            <p className="eyebrow text-clay mb-8">— About Alunara —</p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-5xl">
              We design weddings the way we'd want to be loved.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* STORY */}
      <section className="py-24 lg:py-32 bg-ivory">
        <div className="container-editorial grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          <Reveal className="lg:col-span-5 lg:sticky lg:top-32">
            <img
              src={portrait}
              alt="Bride in flowing silk"
              width={1280}
              height={1600}
              loading="lazy"
              className="w-full aspect-[4/5] object-cover"
            />
          </Reveal>
          <div className="lg:col-span-7 space-y-16">
            <Reveal>
              <p className="eyebrow mb-6">Our Story</p>
              <h2 className="font-serif text-3xl md:text-5xl leading-tight">
                Alunara was born from a quiet belief — that the most beautiful celebrations are the ones that
                <em className="text-clay"> feel like you.</em>
              </h2>
              <div className="mt-10 space-y-6 text-lg leading-relaxed text-muted-foreground max-w-prose">
                <p>
                  Not borrowed. Not performed. Just deeply, unmistakably yours. We craft meaningful celebrations rooted in personality, place, and presence — moments that don't fade with the candles, but settle into your story as memories that last forever.
                </p>
                <p>
                  We believe in the slow art of planning. In silences as much as in details. In a day that feels less like an event, and more like a love letter unfolded in real time.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <p className="eyebrow mb-6">Philosophy</p>
              <h3 className="font-serif text-2xl md:text-4xl leading-snug">
                Genuine. Intentional. Personal.
              </h3>
              <p className="mt-8 text-lg leading-relaxed text-muted-foreground max-w-prose">
                We will never plan two weddings the same way — because no two loves are the same. Our role is not to impose, but to listen carefully and design quietly around the truth of who you are together.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* THE ALUNARA WAY */}
      <section className="py-28 lg:py-40 bg-sand/40">
        <div className="container-editorial">
          <Reveal>
            <div className="mb-20 max-w-3xl">
              <p className="eyebrow mb-4">— The Alunara Way —</p>
              <h2 className="font-serif text-4xl md:text-6xl leading-tight">
                A process built on presence, not pressure.
              </h2>
            </div>
          </Reveal>

          <div className="border-t border-border">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 80}>
                <div className="grid grid-cols-12 gap-6 py-10 lg:py-14 border-b border-border group hover:bg-ivory/60 transition-colors duration-700 px-2">
                  <div className="col-span-2 md:col-span-1">
                    <p className="font-serif italic text-clay text-2xl md:text-3xl">{s.n}</p>
                  </div>
                  <div className="col-span-10 md:col-span-4">
                    <h3 className="font-serif text-2xl md:text-4xl">{s.t}</h3>
                  </div>
                  <div className="col-span-12 md:col-span-7">
                    <p className="text-lg leading-relaxed text-muted-foreground">{s.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="relative py-32 lg:py-48 bg-charcoal text-ivory overflow-hidden">
        <img src={details} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="container-editorial relative text-center max-w-4xl">
          <Reveal>
            <p className="font-serif italic text-3xl md:text-5xl leading-[1.3]">
              "Long after the music ends, what remains is the way it felt — and that, we promise to protect."
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
