import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      {/* Tvoje logo z /public/logo.png */}
      <div className="mb-8 relative w-48 h-48 border-4 border-safecore-blue rounded-full p-2 overflow-hidden bg-slate-900">
        <Image
          src="/logo/SafeCore.png"
          alt="SafeCore Logo"
          fill
          className="object-contain p-4"
        />
      </div>

      <h1 className="text-5xl font-black tracking-tighter mb-4">
        Safe<span className="text-safecore-blue">Core</span>
      </h1>

      <p className="max-w-xl text-slate-400 text-lg mb-10">
        Inteligentná bezpečnosť pre 21. storočie. Spájame fyzickú ochranu s AI
        monitoringom.
      </p>

      <div className="flex gap-4">
        <button className="bg-safecore-blue hover:bg-blue-600 px-8 py-3 rounded-full font-bold transition-all shadow-lg shadow-blue-500/20">
          Naše Služby
        </button>
        <button className="border border-slate-700 hover:border-safecore-blue px-8 py-3 rounded-full font-bold transition-all">
          SBS Akadémia
        </button>
      </div>
    </main>
  );
}
