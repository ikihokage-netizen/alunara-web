import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoIvory from "@/assets/alunara-logo-ivory.png";
import logoDark from "@/assets/alunara-logo-dark.png";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/weddings", label: "Weddings" },
  { to: "/inquiry", label: "Inquire" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  const solid = scrolled || !isHome;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${
        solid
          ? "bg-background/85 backdrop-blur-md border-b border-border/60 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container-editorial flex items-center justify-between">
        <Link
          to="/"
          className={`flex items-center gap-3 font-serif text-2xl tracking-[0.25em] transition-colors ${
            solid ? "text-foreground" : "text-ivory"
          }`}
        >
          <span className="relative inline-block h-8 w-8">
            <img
              src={logoIvory}
              alt=""
              className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-700 ${
                solid ? "opacity-0" : "opacity-100"
              }`}
            />
            <img
              src={logoDark}
              alt=""
              className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-700 ${
                solid ? "opacity-100" : "opacity-0"
              }`}
            />
          </span>
          ALUNARA
        </Link>



        <nav className="hidden md:flex items-center gap-10">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className={`text-[11px] uppercase tracking-[0.3em] link-underline transition-colors ${
                solid ? "text-foreground" : "text-ivory"
              }`}
              activeProps={{ className: "after:scale-x-100" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden ${solid ? "text-foreground" : "text-ivory"}`}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border mt-4 animate-fade-in">
          <nav className="container-editorial flex flex-col py-6 gap-5">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-[12px] uppercase tracking-[0.3em] text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
