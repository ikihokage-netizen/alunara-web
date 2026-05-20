import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import fd1 from "@/assets/farah-dhiska-1.jpg";
import fd2 from "@/assets/farah-dhiska-2.jpg";
import fd3 from "@/assets/farah-dhiska-3.jpg";
import fd4 from "@/assets/farah-dhiska-4.jpg";
import fd5 from "@/assets/farah-dhiska-5.jpg";
import fd6 from "@/assets/farah-dhiska-6.jpg";
import fd7 from "@/assets/farah-dhiska-7.jpg";
import ad1 from "@/assets/ara-duan-1.jpg";
import ad2 from "@/assets/ara-duan-2.jpg";
import ad3 from "@/assets/ara-duan-3.jpg";
import ad4 from "@/assets/ara-duan-4.jpg";
import ad5 from "@/assets/ara-duan-5.jpg";
import ad6 from "@/assets/ara-duan-6.jpg";
import ad7 from "@/assets/ara-duan-7.jpg";
import vw1 from "@/assets/vanny-wawan-1.jpg";
import vw2 from "@/assets/vanny-wawan-2.jpg";
import vw3 from "@/assets/vanny-wawan-3.jpg";
import vw4 from "@/assets/vanny-wawan-4.jpg";
import vw5 from "@/assets/vanny-wawan-5.jpg";
import vw6 from "@/assets/vanny-wawan-6.jpg";
import vw7 from "@/assets/vanny-wawan-7.jpg";
import vw8 from "@/assets/vanny-wawan-8.jpg";
import vw9 from "@/assets/vanny-wawan-9.jpg";
import ic1 from "@/assets/ibra-citra-1.jpg";
import ic2 from "@/assets/ibra-citra-2.jpg";
import ic3 from "@/assets/ibra-citra-3.jpg";
import ic4 from "@/assets/ibra-citra-4.jpg";
import ic5 from "@/assets/ibra-citra-5.jpg";
import ic6 from "@/assets/ibra-citra-6.jpg";
import ic7 from "@/assets/ibra-citra-7.jpg";
import ic8 from "@/assets/ibra-citra-8.jpg";
import ic9 from "@/assets/ibra-citra-9.jpg";

export const Route = createFileRoute("/weddings")({
  head: () => ({
    meta: [
      { title: "Weddings — Alunara" },
      { name: "description", content: "A curated portfolio of intimate, editorial, and timeless weddings by Alunara." },
      { property: "og:title", content: "Weddings — Alunara Portfolio" },
      { property: "og:description", content: "Four love stories, told quietly through cinematic celebrations." },
    ],
  }),
  component: Weddings,
});

type Wedding = {
  couple: string;
  date: string;
  venue: string;
  story: string;
  images: string[];
};

const WEDDINGS: Wedding[] = [
  {
    couple: "Ibra & Citra",
    date: "25 December 2025",
    venue: "Pooldeck Grand Qin Hotel",
    story:
      "A sacred daytime akad on the Grand Qin pooldeck — sunlight filtering through ivory drapery, the quiet weight of vows exchanged, and the tender warmth of family witnessing two souls bound in faith.",
    images: [ic1, ic2, ic3, ic4, ic5, ic6, ic7, ic8, ic9],
  },
  {
    couple: "Ara & Duan",
    date: "14 December 2025",
    venue: "Dapur Galuh Resto",
    story:
      "A romantic sunset wedding at Dapur Galuh Resto — gardenias, golden hour, and a first dance shared with their closest people.",
    images: [ad1, ad2, ad3, ad4, ad5, ad6, ad7],
  },
  {
    couple: "Vanny & Wawan",
    date: "25 November 2025",
    venue: "La Tare Joglo",
    story:
      "An intimate evening reception beneath the wooden beams of La Tare Joglo — long ivory tablescapes, candlelight, and the quiet warmth of heritage architecture.",
    images: [vw1, vw2, vw3, vw4, vw5, vw6, vw7, vw8, vw9],
  },
  {
    couple: "Farah & Dhiska",
    date: "14 June 2025",
    venue: "Swiss Belhotel Borneo",
    story:
      "A graceful daytime celebration held within the timeless interiors of Swiss Belhotel Borneo — soft florals, ivory linens, and the gentle hum of family gathered close.",
    images: [fd1, fd2, fd3, fd4, fd5, fd6, fd7],
  },
];

function Weddings() {
  return (
    <>
      <section className="pt-44 pb-20 lg:pt-52 lg:pb-28 bg-ivory">
        <div className="container-editorial">
          <Reveal>
            <p className="eyebrow text-clay mb-8">— The Portfolio —</p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-5xl">
              Four love stories, <em className="text-clay">told quietly.</em>
            </h1>
          </Reveal>
        </div>
      </section>

      {WEDDINGS.map((w, idx) => (
        <section
          key={w.couple}
          className={`py-20 lg:py-32 ${idx % 2 === 0 ? "bg-ivory" : "bg-sand/40"}`}
        >
          <div className="container-editorial">
            <Reveal>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
                <div className="md:col-span-1">
                  <p className="font-serif italic text-clay text-2xl">
                    {String(idx + 1).padStart(2, "0")}
                  </p>
                </div>
                <div className="md:col-span-6">
                  <p className="eyebrow mb-3">{w.date} · {w.venue}</p>
                  <h2 className="font-serif text-4xl md:text-6xl leading-tight">{w.couple}</h2>
                </div>
                <div className="md:col-span-5">
                  <p className="text-lg leading-relaxed text-muted-foreground">{w.story}</p>
                </div>
              </div>
            </Reveal>

            {/* Masonry grid */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-5">
              {w.images.map((src, i) => {
                const spans = [
                  "col-span-2 md:col-span-4 row-span-2 aspect-[4/3]",
                  "col-span-2 md:col-span-2 aspect-[3/4]",
                  "col-span-1 md:col-span-2 aspect-square",
                  "col-span-1 md:col-span-2 aspect-square",
                  "col-span-2 md:col-span-2 aspect-[3/4]",
                  "col-span-2 md:col-span-3 aspect-[4/3]",
                  "col-span-2 md:col-span-3 aspect-[4/3]",
                  "col-span-1 md:col-span-2 aspect-square",
                  "col-span-1 md:col-span-2 aspect-square",
                ];
                return (
                  <Reveal key={i} delay={i * 60} className={spans[i % spans.length]}>
                    <div className="overflow-hidden h-full w-full">
                      <img
                        src={src}
                        alt={`${w.couple} — ${i + 1}`}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-[2000ms] hover:scale-105"
                      />
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
