import { Cube, Package, Leaf, Shield } from 'lucide-react';

const products = [
  {
    title: 'Living Room',
    description: 'Sofas, sectionals, and coffee tables blending comfort and sophistication.',
    icon: Cube,
    color: 'from-cyan-500 to-indigo-500',
  },
  {
    title: 'Bedroom',
    description: 'Beds, nightstands, and storage crafted to elevate restorative spaces.',
    icon: Package,
    color: 'from-fuchsia-500 to-purple-500',
  },
  {
    title: 'Office',
    description: 'Ergonomic desks and seating engineered for productivity and style.',
    icon: Shield,
    color: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Outdoor',
    description: 'Weatherproof pieces that bring refined comfort to open-air settings.',
    icon: Leaf,
    color: 'from-amber-500 to-rose-500',
  },
];

export default function ProductShowcase() {
  return (
    <section id="collections" className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end md:gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">Signature Collections</h2>
            <p className="mt-3 max-w-2xl text-zinc-600">
              Explore modular systems and bespoke pieces manufactured with precision. Each collection can be tailored to your dimensions, finish, and upholstery preferences.
            </p>
          </div>
          <a href="#contact" className="inline-flex items-center rounded-md border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-900 shadow-sm hover:bg-zinc-50">
            Get pricing & availability
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <Card key={p.title} {...p} />)
          )}
        </div>
      </div>
    </section>
  );
}

function Card({ title, description, icon: Icon, color }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
      <div className={`absolute inset-0 opacity-60 group-hover:opacity-80 transition-opacity bg-gradient-to-br ${color}`} />
      <div className="relative z-10 p-6 min-h-[220px] flex flex-col">
        <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/80 text-zinc-900 shadow">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-lg font-semibold text-zinc-900">{title}</h3>
        <p className="mt-2 text-sm text-zinc-700 flex-1">{description}</p>
        <div className="mt-4 text-sm font-medium text-zinc-900">
          View details →
        </div>
      </div>
    </div>
  );
}
