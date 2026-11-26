export function isSpeechAvailable(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window
}

/** Lê o texto em voz alta (inglês americano, um pouco mais devagar). */
export function speak(text: string): void {
  if (!isSpeechAvailable()) return
  try {
    const synth = window.speechSynthesis
    synth.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'en-US'
    utterance.rate = 0.9
    synth.speak(utterance)
  } catch {
    // voz indisponível no navegador
  }
}
