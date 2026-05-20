import { useEffect, useRef, type ElementType } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Word-by-word staggered reveal — masked translateY for an editorial feel.
 * Renders a block-level element with the same typographic flow as plain text.
 */
export function WordReveal({
  children,
  className = "",
  as: Tag = "p",
  delay = 0,
  stagger = 0.05,
}: {
  children: string;
  className?: string;
  as?: ElementType;
  delay?: number;
  stagger?: number;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const words = el.querySelectorAll<HTMLElement>("[data-word]");
    const ctx = gsap.context(() => {
      gsap.from(words, {
        yPercent: 115,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        stagger,
        delay,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      });
    }, el);
    return () => ctx.revert();
  }, [children, delay, stagger]);

  const words = children.split(" ");

  return (
    <Tag ref={ref as never} className={className}>
      {words.map((w, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom leading-[1.15]"
        >
          <span data-word className="inline-block will-change-transform">
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </span>
        </span>
      ))}
    </Tag>
  );
}
