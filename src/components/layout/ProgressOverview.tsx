interface ProgressOverviewProps {
  done: number
  total: number
  onResume: () => void
}

function resumeLabel(done: number, total: number): string {
  if (done === 0) return 'Começar pelo módulo 01'
  if (done === total) return 'Revisar desde o início'
  return 'Continuar de onde parei'
}

export function ProgressOverview({ done, total, onResume }: ProgressOverviewProps) {
  const pct = total ? Math.round((done / total) * 100) : 0

  return (
    <section
      aria-label="Seu progresso"
      className="mt-2 box-border flex w-full max-w-[560px] flex-col gap-2.5 rounded-xl border border-line bg-surface px-5 py-4.5"
    >
      <div className="flex flex-wrap justify-between gap-3 text-[13px] font-semibold text-muted">
        <span>Seu progresso no inglês</span>
        <span>
          <strong className="text-fg">{done}</strong> de {total} tópicos · {pct}%
        </span>
      </div>
      <div
        className="h-1.5 overflow-hidden rounded-full bg-line"
        role="progressbar"
        aria-label="Tópicos concluídos"
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={done}
      >
        <div className="h-full rounded-full bg-accent transition-[width] duration-300" style={{ width: `${pct}%` }} />
      </div>
      <button
        type="button"
        onClick={onResume}
        className="mt-1.5 min-h-11 self-center rounded-lg bg-fg px-5 text-sm font-bold text-bg hover:bg-white"
      >
        {resumeLabel(done, total)}
      </button>
    </section>
  )
}
