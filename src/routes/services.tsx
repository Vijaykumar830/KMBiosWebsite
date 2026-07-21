import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { ServiceCard } from "@/components/site/ServiceCard";
import { SERVICES } from "@/lib/site";
import { img } from "@/lib/images";

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        {/* Title */}
        <title>Pharmaceutical Services | QP, RP, RPi, QA & Regulatory | KM Biosciences</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Explore KM Biosciences' comprehensive pharmaceutical services including Qualified Person (QP), Responsible Person (RP), Responsible Person for Import (RPi), Quality Assurance, Regulatory Affairs, eQMS, GMP, GDP, Lead Auditor, Batch Certification and pharmaceutical compliance services across the UK, Ireland and Europe."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="Pharmaceutical Services, Qualified Person, QP Services, Contract Qualified Person, Qualified Person Batch Certification, Batch Release, Responsible Person, RP Services, Responsible Person Import, RPi Services, Pharmaceutical Importation, MIA Holder, MHRA, HPRA, Regulatory Affairs, Regulatory Compliance, Pharmaceutical Compliance, Quality Assurance, QA Services, GMP, GDP, Good Manufacturing Practice, Good Distribution Practice, Lead Auditor, Internal Audit, Supplier Audit, eQMS, Electronic Quality Management System, Scilife, Pharmaceutical Quality Systems, Pharmaceutical Consulting, Pharmaceutical Support Services, Pharmaceutical Experts, UK Pharmaceutical Services, Ireland Pharmaceutical Services, European Pharmaceutical Services, KM Biosciences"
        />

        {/* Robots */}
        <meta name="robots" content="index,follow" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.kmbios.com/services" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Pharmaceutical Services | QP, RP, RPi, QA & Regulatory | KM Biosciences"
        />

        <meta
          property="og:description"
          content="Discover pharmaceutical quality and regulatory services from KM Biosciences including Qualified Person (QP), Responsible Person (RP), RPi, Quality Assurance, Regulatory Affairs, GMP, GDP, eQMS, Lead Auditor and compliance support."
        />

        <meta property="og:url" content="https://www.kmbios.com/services" />

        <meta property="og:type" content="website" />

        <meta property="og:site_name" content="KM Biosciences Limited" />

        <meta property="og:locale" content="en_GB" />

        <meta property="og:image" content="https://www.kmbios.com/og-image.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:title" content="Pharmaceutical Services | KM Biosciences" />

        <meta
          name="twitter:description"
          content="Qualified Person (QP), Responsible Person (RP), RPi, Quality Assurance, Regulatory Affairs, GMP, GDP, eQMS and pharmaceutical compliance services across the UK, Ireland and Europe."
        />

        <meta name="twitter:image" content="https://www.kmbios.com/og-image.png" />
      </Helmet>
      <section className="relative isolate overflow-hidden pt-36 pb-20">
        <div className="absolute inset-0 -z-20 grad-hero" />
        <div
          aria-hidden
          className="absolute -left-40 top-20 -z-10 h-[520px] w-[520px] rounded-full bg-[color:var(--royal-blue)] opacity-30 blur-[120px] drift"
        />
        <div className="container-x relative text-white">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]">
              Services
            </div>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-6xl">
              A complete pharmaceutical service model,{" "}
              <span className="bg-gradient-to-r from-white to-[color:var(--light-blue)] bg-clip-text text-transparent">
                delivered under one MIA
              </span>
            </h1>
            <p className="mt-5 text-white/80">
              Importation, Qualified Person, Responsible Person, Responsible Person for Import RPI,
              Quality Assurance, Quality Management Systems (eQMS · Scilife), Lead Auditor and
              Regulatory Support.
            </p>
          </div>
        </div>
      </section>

      {/* Quick nav */}
      <section className="border-b border-[color:var(--border)] bg-white py-6">
        <div className="container-x">
          <div className="flex flex-wrap justify-center gap-2">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                to={`/services#${s.slug}`}
                className="rounded-full border border-[color:var(--border)] bg-white px-4 py-2 text-xs font-semibold text-[color:var(--ink)] transition-colors hover:border-[color:var(--royal-purple)] hover:text-[color:var(--deep-purple)]"
              >
                {s.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {SERVICES.map((s, i) => (
        <section key={s.slug} className={`py-24 ${i % 2 === 1 ? "bg-[color:var(--surface)]" : ""}`}>
          <div className="container-x">
            <ServiceCard
              id={s.slug}
              title={s.title}
              short={s.short}
              icon={s.icon}
              image={s.image}
              highlights={s.highlights}
              slug={s.slug}
              reverse={i % 2 === 1}
            />
          </div>
        </section>
      ))}

      {/* Subcontractor note */}
      <section className="py-16">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-3xl rounded-3xl border border-[color:var(--border)] bg-[color:var(--accent)] p-8 text-center">
              <h3 className="font-display text-2xl font-semibold text-[color:var(--deep-purple)]">
                Subcontractor coordination
              </h3>
              <p className="mt-3 text-[color:var(--ink-soft)]">
                Where specialised capabilities are required, services are delivered through an
                approved subcontractor network of qualified partners — including warehousing,
                transportation and laboratory testing.
              </p>
              <Link
                to="/industries"
                className="mt-6 inline-flex items-center gap-2 rounded-full grad-button px-5 py-2.5 text-sm font-semibold text-white shadow-soft"
              >
                See who we support <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA image band */}
      <section className="relative isolate overflow-hidden py-24">
        <div className="absolute inset-0 -z-20">
          <img src={img("hero-lab")} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 grad-hero opacity-90" />
        </div>
        <div className="container-x relative">
          <div className="mx-auto max-w-3xl text-center text-white">
            <h2 className="font-display text-3xl font-semibold sm:text-5xl">
              Speak to a Qualified Person today.
            </h2>
            <p className="mt-4 text-white/85">
              Whether you need batch release, an RPi for UK import or a full eQMS deployment, KMB is
              ready to support your programme.
            </p>
            <div className="mt-8 flex justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[color:var(--deep-purple)] shadow-elegant hover:-translate-y-0.5"
              >
                Request Consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
