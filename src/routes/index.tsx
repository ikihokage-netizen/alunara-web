import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Reveal } from "@/components/Reveal";
import { Parallax } from "@/components/Parallax";
import { WordReveal } from "@/components/WordReveal";
import hero from "@/assets/Gemini_Generated_Image-01.jpg";
import wedding1 from "@/assets/ANDARA-9158.jpg";
import wedding2 from "@/assets/RYZ_0515.jpg";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alunara — Modern Luxury Wedding Planner" },
      { name: "description", content: "Crafting memories that last forever. Booking limited intimate celebrations for 2026." },
    ],
  }),
  component: Index,
});

const TESTIMONIALS = [
  {
    quote: "we dont have time to plan our wedding AT ALL cause we're both too busy with our work. It's a very tight deadline for us, 10 days before the wedding day, we found Alunara; they plan it and save the day. Proven they're so good",
    author: "Farah & Dhiska",
  },
  {
    quote: "Thank you for being with us from the beginning of 'seeking' to the moment we cannot describe; we really are grateful for everything.Never regret getting to know Alunara, honestly feels like finding new friends. Thank you for always reminding us to stay 'awake' while you were also trying to do so. Good luck for the next bride, anyone!",
    author: "Ara & Duan",
  },
  {
    quote: "Alunara gave us best vendors of all time! Very much friendly not just to us as the bride&groom, but also to those who works with them. Shoutout to all the vendor and crew for making our wedding go crazy! You all crushed it- couldn't have done it without you! You guys killed it! p.s. let's hangout sometimes.",
    author: "Vanny & Wawan",
  },
  {
    quote: "A million thank yous for Alunara! We haven’t even reached the wedding day yet, but just from being accompanied through our prewed, fitting session, and decor meetings alone, it has already been this fun and memorable best wedding planner EVER. truly dedicated to Alunara, we love you guys so much see you in September!",
    author: "The September bride-to-be",
  },
];

function Index() {
  const heroImgRef = useRef<HTMLImageElement>(null);
  const heroSectionRef = useRef<HTMLElement>(null);
  const featHeadingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero — slow parallax + gentle scale-up as user scrolls past
      if (heroImgRef.current && heroSectionRef.current) {
        gsap.fromTo(
          heroImgRef.current,
          { scale: 1.08, yPercent: 0 },
          {
            scale: 1.18,
            yPercent: 15,
            ease: "none",
            scrollTrigger: {
              trigger: heroSectionRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }

      // Featured weddings — heading subtly scales down on scroll-through
      if (featHeadingRef.current) {
        gsap.fromTo(
          featHeadingRef.current,
          { scale: 1.05 },
          {
            scale: 0.92,
            ease: "none",
            scrollTrigger: {
              trigger: featHeadingRef.current,
              start: "top 80%",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* HERO */}
      <section ref={heroSectionRef} className="relative h-[100svh] w-full overflow-hidden">
        <img
          ref={heroImgRef}
          src={hero}
          alt="Bride and groom at golden hour"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover scale-105 animate-fade-in will-change-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/20 to-charcoal/70" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 text-ivory">
          <div className="animate-fade-up" style={{ animationDelay: "200ms" }}>
            <p className="text-[12px] uppercase tracking-[0.5em] text-ivory/80 mb-8">
              Borneo, Indonesia
            </p>
            <h1 className="font-serif text-[18vw] md:text-[10vw] leading-[0.85] tracking-[0.05em]">
              Alunara
            </h1>
            <p className="mt-8 font-serif italic text-xl md:text-2xl text-ivory/90 max-w-2xl mx-auto">
              Crafting Memories That Last Forever
            </p>

            <p className="mt-4 text-[8px] md:text-xs uppercase tracking-[0.45em] text-ivory/70">
               Thoughtfully Curated, Emotionally Intimate, and Beautifully Timeless
            </p>

            <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/weddings" className="btn-ghost-line">
                Explore Weddings
              </Link>
              <Link to="/inquiry" className="btn-ghost-line bg-ivory text-charcoal hover:bg-transparent hover:text-ivory">
                Inquire Now
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ivory/60 text-[10px] uppercase tracking-[0.4em] animate-fade-in">
          Scroll
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-32 lg:py-48 bg-ivory">
        <div className="container-editorial max-w-5xl text-center">
          <Reveal>
            <p className="eyebrow mb-10">— A Quiet Promise —</p>
          </Reveal>
          <WordReveal
            as="p"
            stagger={0.045}
            className="font-serif text-2xl md:text-4xl lg:text-5xl leading-[1.25] tracking-[-0.01em] text-foreground"
          >
            At Alunara, we believe every celebration should feel deeply personal — just as meaningful as they are beutiful. Because to us, the most beatiful celebrations are the ones that feel genuinely yours  .
          </WordReveal>
        </div>
      </section>

      {/* FEATURED WEDDINGS */}
      <section className="bg-sand/40 py-24 lg:py-40">
        <div className="container-editorial">
          <Reveal>
            <div className="flex items-end justify-between mb-16 md:mb-24">
              <div>
                <p className="eyebrow mb-4">Featured Celebrations</p>
                <h2
                  ref={featHeadingRef}
                  className="font-serif text-4xl md:text-6xl origin-left will-change-transform"
                >
                  Recent Love Stories
                </h2>
              </div>
              <Link to="/weddings" className="hidden md:inline-flex link-underline text-[11px] uppercase tracking-[0.3em]">
                View all weddings
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            <Reveal>
              <Link to="/weddings" className="group block">
                <Parallax speed={-18} className="overflow-hidden">
                  <img
                    src={wedding1}
                    alt="Vanny & Wawan wedding at La Tare Joglo"
                    width={1280}
                    height={1600}
                    loading="lazy"
                    className="w-full aspect-[4/5] object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                  />
                </Parallax>
                <div className="mt-8">
                  <p className="eyebrow text-clay">25 November 2025 · La Tare Joglo</p>
                  <h3 className="font-serif text-3xl md:text-4xl mt-3">Vanny & Wawan</h3>
                  <p className="mt-4 text-muted-foreground max-w-md leading-relaxed">
                    Modern Heritage Reception - An intimate evening celebration where modern elegance meets timeless cultural details.
                  </p>
                </div>
              </Link>
            </Reveal>

            <Reveal delay={150}>
              <Link to="/weddings" className="group block md:mt-32">
                <Parallax speed={-32} className="overflow-hidden">
                  <img
                    src={wedding2}
                    alt="Ara & Duan wedding at Dapur Galuh Resto"
                    width={1280}
                    height={1600}
                    loading="lazy"
                    className="w-full aspect-[4/5] object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                  />
                </Parallax>
                <div className="mt-8">
                  <p className="eyebrow text-clay">14 December 2025 · Dapur Galuh Resto</p>
                  <h3 className="font-serif text-3xl md:text-4xl mt-3">Ara & Duan</h3>
                  <p className="mt-4 text-muted-foreground max-w-md leading-relaxed">
                    Intimate Garden Celebration - A romantic sunrise wedding surrounded by their closest people.
                  </p>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-28 lg:py-40 bg-ivory">
        <div className="container-editorial">
          <Reveal>
            <div className="text-center mb-20">
              <p className="eyebrow mb-4">What We Offer</p>
              <h2 className="font-serif text-4xl md:text-6xl max-w-3xl mx-auto">
                Three ways to be held
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-border">
            {[
              {
                n: "01",
                t: "Full Wedding Planning",
                d: "Thoughtful planning and creative direction from start to celebration— every detail crafted personally for you.",
              },
              {
                n: "02",
                t: "Intimate Wedding",
                d: "Small in scale, rich in meaning— intentionally designed with much details to share the moment with your closest people.",
              },
              {
                n: "03",
                t: "On The Day Coordination",
                d: "You plan the dream, we handle your wedding day to flow seamlessly and beautifully— be present wholeheartedly.",
              },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 120}>
                <div className="p-10 lg:p-14 border-b md:border-b-0 md:border-r border-border last:border-r-0 h-full group hover:bg-sand/40 transition-colors duration-700">
                  <p className="font-serif italic text-clay text-2xl">{s.n}</p>
                  <h3 className="font-serif text-2xl md:text-3xl mt-6">{s.t}</h3>
                  <p className="mt-5 text-muted-foreground leading-relaxed">{s.d}</p>
                  <Link to="/services" className="mt-10 inline-flex link-underline text-[11px] uppercase tracking-[0.3em]">
                    Discover →
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 lg:py-40 bg-charcoal text-ivory overflow-hidden">
        <div className="container-editorial">
          <Reveal>
            <div className="text-center mb-20">
              <p className="eyebrow mb-8">The Love Letter</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} delay={i * 150}>
                <figure className="text-center md:text-left">
                  <blockquote className="font-serif text-x1 md:text-x2 leading-relaxed mt-2 text-ivory/90">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-8 text-[11px] uppercase tracking-[0.3em] text-ivory/60">
                    — {t.author}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="relative py-32 lg:py-48 bg-ivory overflow-hidden">
       
        <div className="container-editorial relative">
          <Reveal>
            <div className="max-w-3xl">
              <p className="eyebrow mb-6">Now Booking 2026</p>
              <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.05]">
                Now booking intimate celebrations for 2026.
              </h2>
              <p className="mt-10 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                 We intentionally accept a limited number of weddings each year to ensure every couple receives our fullest attention.
              </p>
              <div className="mt-14">
                <Link to="/inquiry" className="btn-line">
                  Begin Your Journey
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}