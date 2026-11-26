import { lazy, Suspense } from 'react'
import { PageHeader } from '../components/layout/PageHeader'
import { ProgressOverview } from '../components/layout/ProgressOverview'
import { RoadmapTrack } from '../components/roadmap/RoadmapTrack'
import { englishModules, englishStudyItems } from '../data/english'
import { useProgress } from '../hooks/useProgress'
import { useStudyNavigation } from '../hooks/useStudyNavigation'

const StudyModal = lazy(() => import('../components/study/StudyModal').then((m) => ({ default: m.StudyModal })))

export function EnglishRoadmapPage() {
  const { isDone, isChecked, toggleDone, toggleCheck } = useProgress('english')
  const nav = useStudyNavigation(englishStudyItems, isDone)
  const doneCount = englishStudyItems.filter((item) => isDone(item.topic.id)).length

  return (
    <div className="mx-auto box-border max-w-[1440px] px-4 pt-8 pb-18 sm:px-8 sm:pt-12 sm:pb-24">
      <PageHeader>
        <ProgressOverview
          done={doneCount}
          total={englishStudyItems.length}
          onResume={() => nav.resumeId && nav.open(nav.resumeId)}
        />
      </PageHeader>

      <main>
        <RoadmapTrack modules={englishModules} isDone={isDone} onOpen={nav.open} />
      </main>

      <p className="mt-24 text-center text-[13px] leading-relaxed text-muted">
        Estude no seu ritmo: nenhum módulo de inglês é pré-requisito do roadmap Back-end.
        <br />O progresso fica salvo neste navegador.
      </p>

      {nav.current && (
        <Suspense fallback={null}>
          <StudyModal
            item={nav.current}
            position={nav.position}
            total={nav.total}
            isDone={isDone(nav.current.topic.id)}
            isChecked={isChecked}
            onToggleDone={() => nav.current && toggleDone(nav.current.topic.id)}
            onToggleCheck={toggleCheck}
            onPrev={nav.prevId ? () => nav.prevId && nav.open(nav.prevId) : undefined}
            onNext={nav.nextId ? () => nav.nextId && nav.open(nav.nextId) : undefined}
            onClose={nav.close}
          />
        </Suspense>
      )}
    </div>
  )
}
