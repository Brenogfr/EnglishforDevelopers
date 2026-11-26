import { useEffect, type RefObject } from 'react'

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'

/**
 * Comportamento de diálogo modal: foco inicial, foco preso dentro,
 * Esc fecha, rolagem do body travada e foco devolvido ao fechar.
 */
export function useModalBehavior(ref: RefObject<HTMLElement | null>, onClose: () => void) {
  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    const previouslyFocused = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    dialog.focus()

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        // Não descarta uma resposta que está sendo escrita.
        const target = event.target
        if (target instanceof HTMLTextAreaElement && target.value.trim()) return
        event.preventDefault()
        onClose()
        return
      }
      if (event.key !== 'Tab' || !dialog) return
      const items = Array.from(dialog.querySelectorAll<HTMLElement>(FOCUSABLE))
      const first = items[0]
      const last = items[items.length - 1]
      if (!first || !last) return
      if (event.shiftKey && (document.activeElement === first || document.activeElement === dialog)) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    dialog.addEventListener('keydown', onKeyDown)
    return () => {
      dialog.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
      previouslyFocused?.focus()
    }
  }, [ref, onClose])
}
