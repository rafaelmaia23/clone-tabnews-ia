import { ConstructionMeter } from "./_components/construction-meter";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="hazard-stripes h-6 w-full" aria-hidden />

      <main className="flex flex-1 flex-col items-center justify-center gap-8 px-6 py-16 text-center">
        <div className="relative text-8xl" aria-hidden>
          <span className="animate-float inline-block">🚧</span>
          <span className="animate-hammer absolute -right-12 bottom-0 text-6xl">
            🔨
          </span>
        </div>

        <div className="space-y-3">
          <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
            Opa! Estamos em obras
          </h1>
          <p className="mx-auto max-w-xl text-lg opacity-80">
            O <strong>TabNews IA</strong> está sendo construído por agentes de
            IA, café imaginário e muita fé no{" "}
            <code className="rounded bg-accent px-1.5 py-0.5 font-mono text-sm text-stone-900">
              npm run dev
            </code>
            . Volte logo!
          </p>
        </div>

        <ConstructionMeter />

        <p className="font-mono text-xs opacity-60">
          Feito com Next.js 16 · React 19 · Tailwind 4
        </p>
      </main>

      <div className="hazard-stripes h-6 w-full" aria-hidden />
    </div>
  );
}
