import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/6287858461888"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 group"
    >
      <span className="absolute inset-0 rounded-full bg-clay/40 animate-ping" />
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-charcoal text-ivory shadow-xl border border-ivory/20 transition-transform duration-300 group-hover:scale-110">
        <MessageCircle size={22} strokeWidth={1.5} />
      </span>
    </a>
  );
}
