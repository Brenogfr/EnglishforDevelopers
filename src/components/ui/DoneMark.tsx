import { Check } from 'lucide-react'

/** Marca verde de "concluído", usada nos cards de tópico e projeto. */
export function DoneMark() {
  return <Check className="size-4.5 flex-none text-success" strokeWidth={2.6} role="img" aria-label="Concluído" />
}
