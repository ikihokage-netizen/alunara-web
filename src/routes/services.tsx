import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Alunara" },
      {
        name: "description",
        content:
          "Full Wedding Planning, Intimate Weddings, Coordination, and bespoke private celebrations.",
      },
      { property: "og:title", content: "Services — Alunara" },
      {
        property: "og:description",
        content:
          "Bespoke planning for weddings, proposals, and meaningful private events.",
      },
    ],
  }),
  component: Services,
});

const SERVICES = [
  {
    t: "Full Wedding Planning",
    d: "Comprehensive planning and coordination designed to guide your celebration from the very beginning until the wedding day itself. Perfect for couples seeking a seamless, elegant, and thoughtfully curated wedding experience.",
  },
  {
    t: "Intimate Wedding",
    d: "Beautifully curated celebrations focused on meaningful moments, warm atmospheres, and your closest loved ones. Designed for couples who value intimacy, emotion, and intentional experiences.",
  },
  {
    t: "On The Day Coordination",
    d: "Ensuring every timeline, vendor, and detail flows smoothly so you can fully embrace your once-in-a-lifetime celebration without worry.",
  },
  {
    t: "Private Events & Gatherings",
    d: "Thoughtfully planned celebrations for meaningful occasions — from engagement dinners, anniversaries, birthdays, bridal showers, private parties, to intimate gatherings filled with memorable moments.",
  },
  {
    t: "Proposal Planning",
    d: "Romantic and personalized proposal experiences thoughtfully designed to create unforgettable moments for your special question.",
  },
  {
    t: "Bridal Shower",
    d: "Elegant and personalized bridal shower celebrations designed to create beautiful memories with your closest people.",
  },
  {
    t: "Anniversary Celebrations",
    d: "From romantic dinners to intimate private celebrations, we create anniversary moments that feel warm, personal, and beautifully memorable.",
  },
  {
    t: "Birthday Celebrations",
    d: "From intimate birthday dinners to beautifully styled celebrations, we curate moments filled with joy, warmth, and meaningful memories.",
  },
  {
    t: "Honeymoon Planning",
    d: "Helping couples plan romantic and personalized honeymoon experiences to begin their new chapter beautifully together.",
  },
  {
    t: "Custom Celebrations",
    d: "Every celebration tells a different story. We offer personalized planning and styling tailored to your vision, atmosphere, and meaningful moments. As Alunara, we believe every celebration deserves to feel personal, intentional, and beautifully unforgettable. More than simply planning events, we create experiences filled with emotion, warmth, and memories that last forever.",
  },
];

function Services() {
  return (
    <>
      <section className="pt-44 pb-20 lg:pt-52 lg:pb-28 bg-ivory">
        <div className="container-editorial">
          <Reveal>
            <p className="eyebrow text-clay mb-8">— What We Offer —</p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-5xl">
              Bespoke services,{" "}
              <em className="text-clay">quietly considered.</em>
            </h1>
            <p className="mt-10 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Every offering is shaped to the couple. The list below is a
              starting point — not a menu — and the conversation always begins
              with you.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-28 lg:pb-40 bg-ivory">
        <div className="container-editorial">
          <Reveal>
            <p className="eyebrow mb-8">Our Services</p>
          </Reveal>
          <div className="border-t border-border">
            {SERVICES.map((s, i) => {
              const num = String(i + 1).padStart(2, "0");
              return (
                <Reveal key={s.t} delay={i * 50}>
                  <div className="grid grid-cols-12 gap-4 md:gap-8 py-10 lg:py-14 border-b border-border group hover:bg-sand/30 transition-colors duration-700 px-2">
                    <div className="col-span-2 md:col-span-1">
                      <p className="font-serif italic text-clay text-xl md:text-2xl">
                        {num}
                      </p>
                    </div>
                    <div className="col-span-10 md:col-span-5">
                      <h2 className="font-serif text-2xl md:text-4xl leading-tight transition-transform duration-700 group-hover:translate-x-2">
                        {s.t}
                      </h2>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                        {s.d}
                      </p>
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
              "More than simply planning events, we create experiences filled
              with emotion, warmth, and memories that last forever."
            </p>
            <div className="mt-16">
              <Link to="/inquiry" className="btn-line">
                Begin Your Journey
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
