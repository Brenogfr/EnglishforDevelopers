interface ConnectorProps {
  side: 'left' | 'right'
}

/** Curvas que ligam 3 cards (46px + 10px de espaço) ao centro do módulo. */
const PATHS = {
  left: ['M0 23 C34 23 30 79 64 79', 'M0 79 L64 79', 'M0 135 C34 135 30 79 64 79'],
  right: ['M0 79 C34 79 30 23 64 23', 'M0 79 L64 79', 'M0 79 C34 79 30 135 64 135'],
}

export function Connector({ side }: ConnectorProps) {
  return (
    <svg
      className="hidden h-[158px] w-16 text-connector lg:block"
      viewBox="0 0 64 158"
      preserveAspectRatio="none"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.2}
      aria-hidden="true"
    >
      {PATHS[side].map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  )
}
