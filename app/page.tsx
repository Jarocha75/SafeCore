import { client } from "@/sanity/lib/client";
import { SERVICES_QUERY } from "@/sanity/lib/queries";
import type { Service } from "@/types";

export default async function HomePage() {
  const services = await client.fetch<Service[]>(SERVICES_QUERY);

  return (
    <main className="min-h-screen bg-slate-950 text-white p-10">
      <h1 className="text-4xl font-bold mb-8 text-center">SafeCore Riešenia</h1>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service) => (
          <div
            key={service._id}
            className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500 transition-colors"
          >
            <div className="text-xs font-mono text-blue-400 mb-2 uppercase tracking-widest">
              {service.category}
            </div>
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>


      {services.length === 0 && (
        <p className="text-center text-slate-500 mt-10">
          V Sanity Studiu zatiaľ nie sú žiadne služby. Choď na /studio a pridaj
          prvú!
        </p>
      )}
    </main>
  );
}
