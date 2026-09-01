import React from 'react';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_TEL, EMAIL, ADDRESS } from './SiteHeader';

const SiteFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-accent font-display text-xl font-bold text-accent-foreground">A</span>
            <span className="font-display text-2xl font-bold uppercase tracking-wide">Aok Roofing Inc.</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/70">A locally owned roofing and exterior renovations company based in Arva, Ontario — serving London and the surrounding area since 2000. GAF Certified Plus™ contractor.</p>
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-accent">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li><a href={PHONE_TEL} className="flex items-center gap-2.5 hover:text-accent"><Phone className="h-4 w-4 shrink-0" /> {PHONE_DISPLAY}</a></li>
            <li><a href={`mailto:${EMAIL}`} className="flex items-center gap-2.5 hover:text-accent"><Mail className="h-4 w-4 shrink-0" /> {EMAIL}</a></li>
            <li className="flex items-center gap-2.5"><MapPin className="h-4 w-4 shrink-0" /> {ADDRESS}</li>
            <li className="flex items-center gap-2.5"><Clock className="h-4 w-4 shrink-0" /> Mon–Sat, 7:30am–6:00pm</li>
          </ul>
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-accent">Services</h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li><a href="#services" className="hover:text-accent">Roof Replacements &amp; Repairs</a></li>
            <li><a href="#services" className="hover:text-accent">Eavestrough, Soffit &amp; Fascia</a></li>
            <li><a href="#services" className="hover:text-accent">Attic Insulation &amp; Ventilation</a></li>
            <li><a href="#services" className="hover:text-accent">Windows &amp; Doors</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-primary-foreground/60 sm:flex-row sm:px-6">
          <p>&copy; {year} Aok Roofing Inc. All rights reserved.</p>
          <p>GAF Certified Plus™ · Licensed &amp; insured</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;