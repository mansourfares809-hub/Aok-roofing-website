import React from 'react';
import { Helmet } from 'react-helmet';
import {
    Award,
    BadgeCheck,
    DoorOpen,
    Droplets,
    FileText,
    Home,
    Mail,
    MapPin,
    Phone,
    Quote,
    ShieldCheck,
    Star,
    Thermometer,
    Users,
    Wind,
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import CountUp from '@/components/CountUp';
import SiteHeader, { PHONE_DISPLAY, PHONE_TEL, EMAIL } from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import QuoteForm from '@/components/QuoteForm';

const HERO_IMG = 'https://images.hostinger.com/90652031-0e55-4b7b-a63f-9538a51d2d1a.png';
const ABOUT_IMG = 'https://images.hostinger.com/2a86878a-9463-4808-9349-b95240be4635.png';

const SERVICES = [
    {
        icon: Home,
        title: 'Roof Replacements & Repairs',
        text: 'GAF Timberline shingle replacements and fast leak repairs. Timberline carries a lifetime warranty with double-bead adhesion, Stain Guard protection, and a 130 mph wind rating — the best product we can put on your roof.',
        img: 'https://images.hostinger.com/c84c0369-3a79-4c6b-8569-04566fea5363.png',
    },
    {
        icon: Droplets,
        title: 'Eavestrough, Soffit & Fascia',
        text: 'Eavestrough, soffit, and fascia replacement and repairs to keep water moving away from your home and protect the edges of your roof system for the long haul.',
        img: 'https://images.hostinger.com/b2e8e00b-12f0-4b7c-b083-e9b8e418fd71.png',
    },
    {
        icon: Thermometer,
        title: 'Attic Insulation & Ventilation',
        text: 'Ventilation is critical to a roof that lasts. We inspect attics and soffits to ensure proper airflow, then upgrade insulation so your shingles perform the way they should.',
        img: 'https://images.hostinger.com/4853dcb3-4fc5-4c97-a383-594ef1fe378d.png',
    },
    {
        icon: DoorOpen,
        title: 'Windows & Doors',
        text: 'Exterior renovations beyond the roof. Quality window and door installation as part of a full exterior upgrade, handled by the same crew you already trust.',
        img: 'https://images.hostinger.com/7ce2817f-376e-4d66-adc6-33211c9733bf.png',
    },
];

const WHY_POINTS = [
    { icon: BadgeCheck, title: 'GAF Certified Plus™ Contractor', text: 'Aok is a GAF Certified Plus™ roofing contractor — a designation earned by fewer roofers, requiring factory-trained installation and proven track records.' },
    { icon: Award, title: 'GAF Lifetime Warranty', text: 'We install GAF Timberline shingles with a lifetime manufacturer warranty, double-bead adhesion, Stain Guard, and a 130 mph wind rating.' },
    { icon: FileText, title: 'Free In-Home Consultations', text: 'Same-day roof repairs available. We price our products fairly and make sure you get exactly the roof you need — no surprises.' },
    { icon: MapPin, title: 'Based in Arva, Serving London', text: 'Locally owned and operated out of Arva, Ontario. We serve homeowners and businesses across London and the surrounding area.' },
];

const STEPS = [
    { title: 'Call or Request a Quote', text: 'Reach Jeff by phone or the form below. Same-day roof repairs are available when you need them fast.' },
    { title: 'Free In-Home Consultation', text: 'We inspect your roof, attic, and soffits, explain your options, and provide a fair, straightforward estimate.' },
    { title: 'Scheduled Installation', text: 'Our crew arrives on time, protects your property, and installs your roof to GAF certified standards.' },
    { title: 'Walkthrough & Warranty', text: 'Final walkthrough together, a clean job site, and your GAF warranty paperwork in hand.' },
];

const TESTIMONIALS = [
    {
        quote: 'The team at AOK Roofing did a great job on my flat roof. They completed the flashing repairs as quoted, and while doing the work they found a hidden section of rotten roof decking that wasn\u2019t visible during the initial inspection. They showed me the issue with photos, explained everything clearly, sent a separate estimate, and came back the following week to repair it properly. I really appreciated their honesty, communication, and quality of work.',
        name: 'C.C.',
        place: 'GAF Review · Jul 2026',
    },
    {
        quote: 'I shopped around a lot before going with AOK Roofing. Jeff was patient and accommodating about both my roof needs and the price, and he answered every question I had before I signed anything. On day two of the install, Mark walked me through the process and everything I needed to know about the new torch-down roof. The crew worked late to finish because rain was forecast, and they left the property clean. Fair price, good communication, and a roof I don\u2019t have to worry about.',
        name: 'R.H.',
        place: 'GAF Review · Aug 2026',
    },
    {
        quote: 'They replaced our roof during an intense heat wave, and the entire crew never missed a beat. Their professionalism was a perfect 10 from start to finish — respectful, courteous, hardworking, and genuinely kind. They arrived on time, communicated clearly throughout, and took great pride in their work. They left the property clean when the job was complete. I highly recommend AOK Roofing to anyone looking for a reliable, honest, and professional roofing company.',
        name: 'P.M.',
        place: 'GAF Review · Jul 2026',
    },
];

const AREAS = ['London', 'Arva', 'St. Thomas', 'Strathroy', 'Komoka', 'Dorchester', 'Ingersoll', 'Middlesex County'];

const MARQUEE_ITEMS = [
    'GAF Certified Plus™',
    'Free In-Home Consultations',
    'Same-Day Roof Repairs',
    'GAF Timberline Lifetime Warranty',
    'Roofing & Exterior Renovations',
    'Serving London & Area Since 2000',
];

const HomePage = () => {
    return (
        <div id="top" className="min-h-screen bg-background text-foreground">
            <Helmet>
                <title>Aok Roofing Inc. | GAF Certified Roofers in London, Ontario</title>
                <meta
                    name="description"
                    content="Aok Roofing Inc. is a GAF Certified Plus™ roofing contractor based in Arva, Ontario and serving London since 2000. Roof replacements, repairs, eavestrough, soffit, fascia, attic insulation, and windows & doors. Call (519) 670-4025 for a free in-home consultation."
                />
            </Helmet>
            <SiteHeader />

            {/* Hero */}
            <section className="relative flex min-h-[100dvh] items-center">
                <img
                    src={HERO_IMG}
                    alt="Aok Roofing crew installing GAF Timberline shingles on a London, Ontario home"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
                <div className="relative mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
                    <Reveal>
                        <p className="inline-flex items-center gap-2 rounded-full border border-accent/60 bg-primary/60 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-accent">
                            <BadgeCheck className="h-4 w-4" /> GAF Certified Plus™ &middot; Since 2000
                        </p>
                        <h1 className="mt-6 max-w-3xl font-display text-6xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl">
                            A Roof You Can <span className="text-accent">Count On</span>
                        </h1>
                        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
                            Roof replacements, repairs, and exterior renovations for homes and businesses across London
                            and the surrounding area — done right, on time, and backed by a GAF lifetime warranty.
                        </p>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <a
                                href="#quote"
                                className="flex h-14 items-center justify-center rounded-md bg-accent px-8 text-base font-bold text-accent-foreground shadow-lg transition-all hover:brightness-110 active:scale-[0.98]"
                            >
                                Get a Free Quote
                            </a>
                            <a
                                href={PHONE_TEL}
                                className="flex h-14 items-center justify-center gap-2 rounded-md border-2 border-white/80 px-8 text-base font-bold text-white transition-all hover:bg-white hover:text-primary active:scale-[0.98]"
                            >
                                <Phone className="h-5 w-5" /> Call {PHONE_DISPLAY}
                            </a>
                        </div>
                        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold text-white/80">
                            <span className="flex items-center gap-2"><Award className="h-4 w-4 text-accent" /> GAF Timberline Lifetime Warranty</span>
                            <span className="flex items-center gap-2"><FileText className="h-4 w-4 text-accent" /> Free In-Home Consultations</span>
                            <span className="flex items-center gap-2"><Star className="h-4 w-4 text-accent" /> 4.9 Stars · 293 Reviews</span>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Marquee */}
            <div className="overflow-hidden bg-accent py-3" aria-hidden="true">
                <div className="flex w-max animate-marquee gap-10">
                    {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
                        <span
                            key={i}
                            className="flex items-center gap-10 whitespace-nowrap font-display text-lg font-semibold uppercase tracking-wider text-accent-foreground"
                        >
                            {item} <span className="text-accent-foreground/50">&bull;</span>
                        </span>
                    ))}
                </div>
            </div>

            {/* Stats */}
            <section className="border-b border-border bg-secondary">
                <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4">
                    {[
                        { value: 25, suffix: '+', label: 'Years in Business' },
                        { value: 293, suffix: '', label: 'GAF Reviews · 4.9★' },
                        { value: 130, suffix: ' mph', label: 'Wind-Rated Shingles' },
                        { value: 1, suffix: '-Day', label: 'Roof Repair Response' },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center">
                            <p className="font-display text-5xl font-bold text-primary">
                                <CountUp value={stat.value} suffix={stat.suffix} />
                            </p>
                            <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Services */}
            <section id="services" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
                <Reveal>
                    <p className="font-display text-lg font-semibold uppercase tracking-[0.2em] text-accent">
                        What We Do
                    </p>
                    <h2 className="mt-2 max-w-2xl font-display text-5xl font-bold uppercase leading-none text-primary sm:text-6xl">
                        Roofing & Exterior Renovations
                    </h2>
                    <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                        From a single leak to a full roof replacement, every job starts with a free in-home
                        consultation and a fair, straightforward estimate.
                    </p>
                </Reveal>
                <div className="mt-12 grid gap-6 sm:grid-cols-2">
                    {SERVICES.map((service, i) => (
                        <Reveal key={service.title} delay={i * 0.08}>
                            <article className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={service.img}
                                        alt={service.title}
                                        loading="lazy"
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-md bg-accent text-accent-foreground shadow">
                                        <service.icon className="h-5 w-5" />
                                    </span>
                                </div>
                                <div className="p-6">
                                    <h3 className="font-display text-2xl font-semibold uppercase text-primary">
                                        {service.title}
                                    </h3>
                                    <p className="mt-2 leading-relaxed text-muted-foreground">{service.text}</p>
                                    <a
                                        href="#quote"
                                        className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-accent hover:underline"
                                    >
                                        Get a free quote &rarr;
                                    </a>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* Why Us */}
            <section id="why-us" className="bg-primary py-20 text-primary-foreground sm:py-24">
                <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
                    <Reveal>
                        <div className="relative">
                            <img
                                src={ABOUT_IMG}
                                alt="Jeff, owner of Aok Roofing Inc., in front of a completed roof in London, Ontario"
                                loading="lazy"
                                className="w-full rounded-lg object-cover shadow-2xl"
                            />
                            <div className="absolute -bottom-6 -right-4 rounded-lg bg-accent px-6 py-4 text-accent-foreground shadow-xl sm:-right-6">
                                <p className="font-display text-4xl font-bold leading-none">GAF</p>
                                <p className="mt-1 text-xs font-bold uppercase tracking-wider">Certified Plus™</p>
                            </div>
                        </div>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <p className="font-display text-lg font-semibold uppercase tracking-[0.2em] text-accent">
                            Why Homeowners Choose Aok
                        </p>
                        <h2 className="mt-2 font-display text-5xl font-bold uppercase leading-none sm:text-6xl">
                            Workmanship You Can Trust
                        </h2>
                        <div className="mt-8 space-y-6">
                            {WHY_POINTS.map((point) => (
                                <div key={point.title} className="flex gap-4">
                                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-accent/15 text-accent">
                                        <point.icon className="h-5 w-5" />
                                    </span>
                                    <div>
                                        <h3 className="font-display text-xl font-semibold uppercase tracking-wide">
                                            {point.title}
                                        </h3>
                                        <p className="mt-1 text-primary-foreground/75">{point.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <a
                            href={PHONE_TEL}
                            className="mt-8 inline-flex h-12 items-center gap-2 rounded-md bg-accent px-6 text-sm font-bold text-accent-foreground transition-all hover:brightness-110 active:scale-[0.98]"
                        >
                            <Phone className="h-4 w-4" /> Talk to Jeff Today
                        </a>
                    </Reveal>
                </div>
            </section>

            {/* Process */}
            <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
                <Reveal>
                    <p className="font-display text-lg font-semibold uppercase tracking-[0.2em] text-accent">
                        How It Works
                    </p>
                    <h2 className="mt-2 font-display text-5xl font-bold uppercase leading-none text-primary sm:text-6xl">
                        From First Call to Final Nail
                    </h2>
                </Reveal>
                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {STEPS.map((step, i) => (
                        <Reveal key={step.title} delay={i * 0.08}>
                            <div className="border-t-4 border-accent pt-5">
                                <p className="font-display text-5xl font-bold text-primary/15">0{i + 1}</p>
                                <h3 className="mt-2 font-display text-xl font-semibold uppercase text-primary">
                                    {step.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* About */}
            <section id="about" className="border-y border-border bg-secondary py-20 sm:py-24">
                <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-5">
                    <Reveal className="lg:col-span-3">
                        <p className="font-display text-lg font-semibold uppercase tracking-[0.2em] text-accent">
                            About Aok Roofing Inc.
                        </p>
                        <h2 className="mt-2 font-display text-5xl font-bold uppercase leading-none text-primary sm:text-6xl">
                            A Local Crew, Not a Call Centre
                        </h2>
                        <p className="mt-6 text-lg leading-relaxed text-foreground/80">
                            Aok Roofing Inc. is a locally owned roofing and exterior renovations company based in Arva,
                            Ontario, serving London and the surrounding area since 2000. The business is led by Jeff,
                            who still answers the phone and walks every customer through their options personally.
                        </p>
                        <p className="mt-4 leading-relaxed text-muted-foreground">
                            Our theory is simple: we want the best product on your roof. That means GAF Timberline
                            shingles — lifetime warranty, double-bead adhesion, Stain Guard protection, and a 130 mph
                            wind rating. And because ventilation is critical to a roof that lasts, we inspect attics
                            and soffits to ensure proper airflow before the shingles ever go on. We price our work
                            fairly, show up when we say we will, and leave your property clean.
                        </p>
                        <div className="mt-8 grid gap-4 sm:grid-cols-2">
                            <div className="flex items-start gap-3 rounded-lg border border-border bg-background p-4">
                                <Users className="mt-0.5 h-6 w-6 shrink-0 text-accent" />
                                <div>
                                    <p className="font-display text-sm font-bold uppercase tracking-wide text-primary">Owner-Operated</p>
                                    <p className="text-sm text-muted-foreground">Jeff leads a tight, dedicated crew — you deal with the person doing the work.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 rounded-lg border border-border bg-background p-4">
                                <Wind className="mt-0.5 h-6 w-6 shrink-0 text-accent" />
                                <div>
                                    <p className="font-display text-sm font-bold uppercase tracking-wide text-primary">Ventilation First</p>
                                    <p className="text-sm text-muted-foreground">We inspect attics and soffits so your shingles last as long as they should.</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <p className="text-sm font-bold uppercase tracking-wider text-primary">
                                Proudly Serving
                            </p>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {AREAS.map((area) => (
                                    <span
                                        key={area}
                                        className="rounded-full border border-border bg-background px-4 py-1.5 text-sm font-semibold text-foreground/80"
                                    >
                                        {area}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Reveal>
                    <Reveal delay={0.1} className="lg:col-span-2">
                        <div className="rounded-lg border border-border bg-card p-8 shadow-sm">
                            <BadgeCheck className="h-10 w-10 text-accent" />
                            <h3 className="mt-4 font-display text-2xl font-semibold uppercase text-primary">
                                Our Promise
                            </h3>
                            <ul className="mt-4 space-y-3 text-foreground/80">
                                <li className="flex gap-2.5"><ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" /> GAF Certified Plus™ installation</li>
                                <li className="flex gap-2.5"><ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" /> Fair pricing and free in-home consultations</li>
                                <li className="flex gap-2.5"><ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" /> Same-day roof repairs when you need them</li>
                                <li className="flex gap-2.5"><ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" /> GAF Timberline lifetime manufacturer warranty</li>
                            </ul>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Testimonials */}
            <section id="reviews" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
                <Reveal>
                    <p className="font-display text-lg font-semibold uppercase tracking-[0.2em] text-accent">
                        Word of Mouth
                    </p>
                    <h2 className="mt-2 font-display text-5xl font-bold uppercase leading-none text-primary sm:text-6xl">
                        What London Says About Us
                    </h2>
                    <p className="mt-4 flex items-center gap-2 text-lg text-muted-foreground">
                        <Star className="h-5 w-5 fill-accent text-accent" />
                        <span className="font-bold text-primary">4.9</span> from 293 verified GAF reviews
                    </p>
                </Reveal>
                <div className="mt-12 grid gap-6 md:grid-cols-3">
                    {TESTIMONIALS.map((t, i) => (
                        <Reveal key={t.name} delay={i * 0.08}>
                            <figure className="flex h-full flex-col rounded-lg border border-border bg-card p-7 shadow-sm">
                                <Quote className="h-8 w-8 text-accent" />
                                <div className="mt-3 flex gap-0.5 text-accent" aria-label="5 out of 5 stars">
                                    {Array.from({ length: 5 }).map((_, s) => (
                                        <Star key={s} className="h-4 w-4 fill-current" />
                                    ))}
                                </div>
                                <blockquote className="mt-4 flex-1 leading-relaxed text-foreground/85">
                                    &ldquo;{t.quote}&rdquo;
                                </blockquote>
                                <figcaption className="mt-5 border-t border-border pt-4">
                                    <p className="font-bold text-primary">{t.name}</p>
                                    <p className="text-sm text-muted-foreground">{t.place}</p>
                                </figcaption>
                            </figure>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* Quote / Contact */}
            <section id="quote" className="bg-primary py-20 text-primary-foreground sm:py-24">
                <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
                    <Reveal>
                        <p className="font-display text-lg font-semibold uppercase tracking-[0.2em] text-accent">
                            Free Quote
                        </p>
                        <h2 className="mt-2 font-display text-5xl font-bold uppercase leading-none sm:text-6xl">
                            Let&apos;s Look at Your Roof
                        </h2>
                        <p className="mt-5 max-w-md text-lg leading-relaxed text-primary-foreground/80">
                            Tell us what&apos;s going on up there and we&apos;ll book a free in-home consultation with a
                            fair, written estimate — no obligation, no pressure. Same-day repairs available.
                        </p>
                        <div className="mt-8 space-y-4">
                            <a
                                href={PHONE_TEL}
                                className="flex items-center gap-4 rounded-lg border border-primary-foreground/20 bg-primary-foreground/5 p-5 transition-colors hover:border-accent"
                            >
                                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-accent text-accent-foreground">
                                    <Phone className="h-6 w-6" />
                                </span>
                                <span>
                                    <span className="block text-xs font-bold uppercase tracking-wider text-primary-foreground/60">
                                        Prefer to talk? Call Jeff
                                    </span>
                                    <span className="block font-display text-2xl font-bold">{PHONE_DISPLAY}</span>
                                </span>
                            </a>
                            <a
                                href={`mailto:${EMAIL}`}
                                className="flex items-center gap-4 rounded-lg border border-primary-foreground/20 bg-primary-foreground/5 p-5 transition-colors hover:border-accent"
                            >
                                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-accent text-accent-foreground">
                                    <Mail className="h-6 w-6" />
                                </span>
                                <span>
                                    <span className="block text-xs font-bold uppercase tracking-wider text-primary-foreground/60">
                                        Email us
                                    </span>
                                    <span className="block font-display text-xl font-bold">{EMAIL}</span>
                                </span>
                            </a>
                            <div className="flex items-center gap-4 rounded-lg border border-primary-foreground/20 bg-primary-foreground/5 p-5">
                                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-accent text-accent-foreground">
                                    <MapPin className="h-6 w-6" />
                                </span>
                                <span>
                                    <span className="block text-xs font-bold uppercase tracking-wider text-primary-foreground/60">
                                        Visit us in Arva
                                    </span>
                                    <span className="block font-display text-xl font-bold">21695 Clarke Rd, Arva, ON</span>
                                </span>
                            </div>
                        </div>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <QuoteForm />
                    </Reveal>
                </div>
            </section>

            <SiteFooter />
        </div>
    );
};

export default HomePage;
