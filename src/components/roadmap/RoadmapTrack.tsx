import { Fragment } from 'react'
import { levels } from '../../data/english'
import type { Module } from '../../types/content'
import { LevelDivider } from './LevelDivider'
import { ModuleRow } from './ModuleRow'
import { ProjectCard } from './ProjectCard'

interface RoadmapTrackProps {
  modules: Module[]
  isDone: (id: string) => boolean
  onOpen: (id: string) => void
}

export function RoadmapTrack({ modules, isDone, onOpen }: RoadmapTrackProps) {
  return (
    <div className="relative flex flex-col gap-12 lg:gap-18 lg:before:absolute lg:before:inset-y-0 lg:before:left-1/2 lg:before:w-px lg:before:bg-line-strong">
      {modules.map((module, i) => (
        <Fragment key={module.id}>
          {modules[i - 1]?.levelId !== module.levelId && <LevelDivider level={levels[module.levelId]} />}
          <ModuleRow module={module} tone={i % 2 === 0 ? 'info' : 'accent'} isDone={isDone} onOpen={onOpen} />
          {module.project && (
            <ProjectCard
              project={module.project}
              moduleNumber={module.number}
              done={isDone(module.project.id)}
              onOpen={onOpen}
            />
          )}
        </Fragment>
      ))}
    </div>
  )
}
