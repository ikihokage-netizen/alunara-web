import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { useState } from "react";
import { MessageCircle } from "lucide-react";

export const Route = createFileRoute("/inquiry")({
  head: () => ({
    meta: [
      { title: "Inquire — Alunara" },
      { name: "description", content: "Begin your journey with Alunara. Share your vision and we'll be in touch within 48 hours." },
      { property: "og:title", content: "Inquire — Alunara" },
      { property: "og:description", content: "Let's create something meaningful together." },
    ],
  }),
  component: Inquiry,
});

function Inquiry() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="pt-44 pb-16 lg:pt-52 lg:pb-20 bg-ivory">
        <div className="container-editorial max-w-5xl">
          <Reveal>
            <p className="eyebrow text-clay mb-8">— Inquire —</p>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.05]">
              Let's create something <em className="text-clay">meaningful</em> together.
            </h1>
            <p className="mt-10 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Thank you for considering Alunara. Share a little about your celebration below, and we'll respond personally within 48 hours.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-32 lg:pb-48 bg-ivory">
        <div className="container-editorial max-w-4xl">
          {submitted ? (
            <Reveal>
              <div className="border-t border-border pt-20 text-center">
                <p className="font-serif italic text-clay text-2xl">— With gratitude —</p>
                <h2 className="font-serif text-4xl md:text-6xl mt-6">Your message has landed.</h2>
                <p className="mt-8 text-muted-foreground text-lg">
                  We'll be in touch personally within 48 hours.
                </p>
              </div>
            </Reveal>
          ) : (
            <Reveal>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="border-t border-border pt-16 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12"
              >
                <Field label="Full Name" name="name" required />
                <Field label="Partner's Name" name="partner" required />
                <Field label="Event Type" name="event" placeholder="Wedding, proposal, anniversary…" required />
                <Field label="Event Date" name="date" type="date" />
                <Field label="Venue / Location" name="venue" />
                <Field label="Estimated Guest Count" name="guests" type="number" />
                <Field label="Budget Range" name="budget" placeholder="Comfort range in IDR or USD" />
                <Field label="Instagram Handle" name="ig" placeholder="@" />

                <div className="md:col-span-2">
                  <label className="label-line">Tell us about your celebration</label>
                  <textarea
                    rows={5}
                    name="vision"
                    className="input-line resize-none"
                    placeholder="The feeling, the people, the small details you cannot stop thinking about…"
                  />
                </div>

                <div className="md:col-span-2">
                  <Field label="Moodboard Link" name="moodboard" placeholder="Pinterest, drive, anywhere…" />
                </div>

                <div className="md:col-span-2 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pt-8 border-t border-border">
                  <p className="text-sm text-muted-foreground max-w-md">
                    By sending this, you trust us with your story. We hold it gently.
                  </p>
                  <button type="submit" className="btn-line">
                    Send Inquiry
                  </button>
                </div>
              </form>
            </Reveal>
          )}
        </div>
      </section>

      {/* DIRECT CONTACT */}
      <section className="py-24 lg:py-36 bg-charcoal text-ivory">
        <div className="container-editorial text-center max-w-3xl">
          <Reveal>
            <p className="eyebrow text-ivory/50 mb-6">— Direct Contact —</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
              Prefer a more personal conversation?
            </h2>
            <p className="mt-8 text-ivory/70 text-lg">
              Reach us directly on WhatsApp — we love a real conversation.
            </p>
            <div className="mt-12">
              <a
                href="https://wa.me/6287858461888"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-line bg-ivory text-charcoal hover:bg-transparent hover:text-ivory inline-flex items-center gap-3"
              >
                <MessageCircle size={16} strokeWidth={1.5} />
                Chat With Alunara
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="label-line">
        {label} {required && <span className="text-clay">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="input-line"
      />
    </div>
  );
}
