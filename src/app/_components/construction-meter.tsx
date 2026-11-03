"use client";

import { useState } from "react";

const EXCUSAS = [
  "Estamos compilando... de novo.",
  "O agente de IA pediu um café.",
  "Alguém esqueceu um ponto e vírgula.",
  "Deploy na sexta? Nem pensar.",
  "Funciona na minha máquina™",
  "Procurando o bug... achamos 3 novos.",
  "O estagiário é uma IA e está pensando.",
];

export function ConstructionMeter() {
  const [cliques, setCliques] = useState(0);

  const progresso = Math.min(13 + cliques * 7, 99);
  const excusa = EXCUSAS[cliques % EXCUSAS.length];

  return (
    <div className="w-full max-w-md space-y-4">
      <div
        role="progressbar"
        aria-valuenow={progresso}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Progresso da obra"
        className="h-8 overflow-hidden rounded-full border-4 border-foreground"
      >
        <div
          className="hazard-stripes animate-stripes h-full transition-[width] duration-500"
          style={{ width: `${progresso}%`, backgroundSize: "64px 64px" }}
        />
      </div>
      <p className="font-mono text-sm">
        Obra {progresso}% concluída (nunca passa de 99%)
      </p>
      <button
        type="button"
        onClick={() => setCliques((c) => c + 1)}
        className="cursor-pointer rounded-xl border-4 border-foreground bg-accent px-6 py-3 font-bold text-stone-900 shadow-[4px_4px_0_0_var(--foreground)] transition active:translate-x-1 active:translate-y-1 active:shadow-none"
      >
        🔨 Acelerar a obra
      </button>
      <p aria-live="polite" className="min-h-6 text-sm italic opacity-80">
        {cliques > 0 && excusa}
      </p>
    </div>
  );
}
