import type { Level } from '../../types/content'

interface LevelDividerProps {
  level: Level
}

export function LevelDivider({ level }: LevelDividerProps) {
  return (
    <div className="relative z-1 flex flex-col items-center gap-1.5 self-center bg-bg px-5 py-3 text-center">
      <h2 className="font-mono text-xs font-semibold tracking-[0.18em] text-accent">{level.label}</h2>
      <p className="text-[13px] text-muted">{level.description}</p>
    </div>
  )
}
