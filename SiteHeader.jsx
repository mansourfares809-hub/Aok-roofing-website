import React, { useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Why Aok', href: '#why-us' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#quote' },
];

export const PHONE_DISPLAY = '(519) 670-4025';
export const PHONE_TEL = 'tel:+15196704025';
export const EMAIL = 'jeff@aokroofinginc.com';
export const ADDRESS = '21695 Clarke Rd, Arva, ON N0M 1C0';

const SiteHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-1.5 text-xs font-medium sm:px-6">
          <p className="tracking-wide">GAF Certified Plus™ · Serving London &amp; area since 2000</p>
          <a href={PHONE_TEL} className="hidden items-center gap-1.5 hover:text-accent sm:flex">
            <Phone className="h-3.5 w-3.5" /> {PHONE_DISPLAY}
          </a>
        </div>
      </div>
      <div className="border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-accent font-display text-xl font-bold text-accent-foreground">A</span>
            <span className="leading-tight">
              <span className="block font-display text-2xl font-bold uppercase tracking-wide text-primary">Aok Roofing</span>
              <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Inc. · London, Ontario</span>
            </span>
          </a>
          <nav className="hidden items-center gap-6 lg:flex">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-semibold text-foreground/80 transition-colors hover:text-accent">{link.label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a href={PHONE_TEL} className="hidden h-11 items-center gap-2 rounded-md border-2 border-primary px-4 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground md:flex">
              <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
            </a>
            <a href="#quote" className="flex h-11 items-center rounded-md bg-accent px-5 text-sm font-bold text-accent-foreground shadow-sm transition-all hover:brightness-110 active:scale-[0.98]">Free Quote</a>
            <button type="button" onClick={() => setOpen((v) => !v)} className="flex h-11 w-11 items-center justify-center rounded-md border border-border text-foreground lg:hidden" aria-label="Toggle menu">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {open && (
          <nav className="border-t border-border bg-background px-4 py-3 lg:hidden">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="block rounded-md px-3 py-3 text-base font-semibold text-foreground hover:bg-secondary">{link.label}</a>
            ))}
            <a href={PHONE_TEL} className="mt-2 flex h-11 items-center justify-center gap-2 rounded-md bg-primary text-sm font-bold text-primary-foreground">
              <Phone className="h-4 w-4" /> Call {PHONE_DISPLAY}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default SiteHeader;