import { Link } from "@tanstack/react-router";
import { Instagram, Facebook } from "lucide-react";
import { Parallax } from "@/components/Parallax";

export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="container-editorial py-20 lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-14">
          <div className="md:col-span-5">
            <Parallax speed={-25}>
              <h3 className="font-serif text-4xl md:text-5xl tracking-[0.15em]">ALUNARA</h3>
            </Parallax>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-ivory/70 font-serif italic">
              Crafting memories that last forever
            </p>
            <p className="mt-3 text-[11px] uppercase tracking-[0.3em] text-ivory/50">
              Available for destination celebrations
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow text-ivory/50 mb-5">Explore</p>
            <ul className="space-y-3 font-serif text-lg">
              <li><Link to="/" className="link-underline">Home</Link></li>
              <li><Link to="/about" className="link-underline">About</Link></li>
              <li><Link to="/services" className="link-underline">Services</Link></li>
              <li><Link to="/weddings" className="link-underline">Weddings</Link></li>
              <li><Link to="/inquiry" className="link-underline">Inquire</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="eyebrow text-ivory/50 mb-5">Contact</p>
            <ul className="space-y-3 text-sm text-ivory/80">
              <li>
                <a href="https://wa.me/6287858461888" className="link-underline">
                  +62 878-5846-1888
                </a>
              </li>
              <li>
                <a href="mailto:alunaramoment@gmail.com" className="link-underline">
                  alunaramoment@gmail.com
                </a>
              </li>
              {/* CHANGE: Hapus "South Borneo" sesuai instruksi ganti "Borneo, Indonesia" */}
              <li>Banjarbaru, Indonesia</li>
            </ul>

            <div className="mt-8 flex items-center gap-5 text-ivory/70">
              <a href="https://instagram.com/alunara.moment" aria-label="Instagram" className="hover:text-ivory transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://tiktok.com/@alunara.moment" aria-label="TikTok" className="hover:text-ivory transition-colors text-xs uppercase tracking-[0.3em]">
                TikTok
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-ivory transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-ivory/15 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] uppercase tracking-[0.3em] text-ivory/40">
          <p>© {new Date().getFullYear()} Alunara Moment</p>
          <p>Crafted with intention</p>
        </div>
      </div>
    </footer>
  );
}