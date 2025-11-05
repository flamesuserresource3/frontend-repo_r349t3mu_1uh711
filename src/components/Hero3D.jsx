import Spline from '@splinetool/react-spline';
import { ArrowRight, Star, Shield, Leaf } from 'lucide-react';

export default function Hero3D() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden" id="home">
      {/* 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/80 z-10" />
      <div className="pointer-events-none absolute -inset-x-40 -top-40 h-80 blur-3xl z-10" aria-hidden>
        <div className="h-full w-full bg-gradient-to-tr from-cyan-400/40 via-fuchsia-400/30 to-purple-400/30" />
      </div>

      {/* Content */}
      <div className="relative z-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-xs text-zinc-700 shadow-sm">
              <Star className="h-3.5 w-3.5 text-yellow-500" />
              Award-winning craftsmanship
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-zinc-900">
              Modern furniture engineered for beauty, comfort, and longevity
            </h1>
            <p className="mt-5 text-lg text-zinc-700 max-w-xl">
              We design and manufacture premium pieces for homes, offices, and hospitality spaces—crafted with sustainable materials and rigorous quality control.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#collections" className="inline-flex items-center justify-center gap-2 rounded-md bg-zinc-900 text-white px-5 py-3 font-medium shadow hover:bg-zinc-800">
                Explore Collections
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-white text-zinc-900 px-5 py-3 font-medium shadow border border-zinc-200 hover:bg-zinc-50">
                Request a Catalog
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <Feature icon={<Shield className="h-4 w-4" />} label="10-year structural warranty" />
              <Feature icon={<Leaf className="h-4 w-4" />} label="Sustainably sourced materials" />
              <Feature icon={<Star className="h-4 w-4" />} label="Bespoke customization" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, label }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white/70 px-3 py-2 backdrop-blur">
      {icon}
      <span className="text-zinc-700">{label}</span>
    </div>
  );
}
