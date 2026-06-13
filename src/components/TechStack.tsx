import { techStack } from "@/data/about";

export default function TechStack() {
  return (
    <section className="py-8 border-y border-slate-100 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <p className="text-center text-xs font-semibold tracking-widest text-slate-400 uppercase mb-5">
          Teknologi yang kami gunakan
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-slate-400 font-bold text-lg">
          {techStack.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
