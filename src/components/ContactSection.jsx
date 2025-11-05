import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="relative bg-zinc-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">Let’s build something exceptional</h2>
            <p className="mt-3 text-zinc-600 max-w-xl">
              Share your project requirements and our team will reply with tailored recommendations, pricing, and lead times within 24 hours.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Info icon={<Mail className="h-4 w-4" />} label="hello@aurafurn.com" href="mailto:hello@aurafurn.com" />
              <Info icon={<Phone className="h-4 w-4" />} label="+1 (555) 123-4567" href="tel:+15551234567" />
              <Info icon={<MapPin className="h-4 w-4" />} label="Los Angeles, CA" />
            </div>

            <div id="about" className="mt-10 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-zinc-900">About AuraFurn</h3>
              <p className="mt-2 text-zinc-700">
                We are a vertically integrated furniture manufacturer specializing in high-volume production and bespoke projects for architects, interior designers, and global hospitality brands.
                Our facilities are powered by renewable energy, and our materials adhere to strict sustainability standards.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <form onSubmit={(e) => { e.preventDefault(); const f = e.currentTarget; const data = new FormData(f); const subject = encodeURIComponent('Project inquiry'); const body = encodeURIComponent(`Name: ${data.get('name')}` + `\nEmail: ${data.get('email')}` + `\nCompany: ${data.get('company')}` + `\nTimeline: ${data.get('timeline')}` + `\nMessage: ${data.get('message')}`); window.location.href = `mailto:hello@aurafurn.com?subject=${subject}&body=${body}`; }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Name">
                  <input name="name" required className="w-full rounded-md border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-zinc-900" />
                </Field>
                <Field label="Email">
                  <input name="email" type="email" required className="w-full rounded-md border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-zinc-900" />
                </Field>
                <Field label="Company">
                  <input name="company" className="w-full rounded-md border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-zinc-900" />
                </Field>
                <Field label="Timeline">
                  <input name="timeline" placeholder="e.g., 8–10 weeks" className="w-full rounded-md border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-zinc-900" />
                </Field>
                <div className="sm:col-span-2">
                  <Field label="Project details">
                    <textarea name="message" rows={5} className="w-full rounded-md border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-zinc-900" />
                  </Field>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-sm text-zinc-500">We respond within one business day.</p>
                <button type="submit" className="inline-flex items-center rounded-md bg-zinc-900 px-5 py-2.5 text-white font-medium hover:bg-zinc-800">Send inquiry</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Info({ icon, label, href }) {
  const content = (
    <div className="inline-flex items-center gap-2 rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm">
      {icon}
      <span>{label}</span>
    </div>
  );
  return href ? (
    <a href={href} className="hover:opacity-90 transition-opacity">{content}</a>
  ) : (
    content
  );
}

function Field({ label, children }) {
  return (
    <label className="block text-sm">
      <span className="mb-1 block text-zinc-700">{label}</span>
      {children}
    </label>
  );
}
