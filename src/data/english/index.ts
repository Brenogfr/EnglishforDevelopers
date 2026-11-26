import type { Module, StudyItem } from '../../types/content'
import { vocabulary } from './modules/01-vocabulary'
import { grammar } from './modules/02-grammar'
import { reading } from './modules/03-reading'
import { technicalEnglish } from './modules/04-technical'
import { listening } from './modules/05-listening'
import { speaking } from './modules/06-speaking'
import { writing } from './modules/07-writing'
import { interviews } from './modules/08-interviews'

export { levels } from './levels'

/** Ordem de estudo. Novo módulo: importe e acrescente aqui. */
export const englishModules: Module[] = [
  vocabulary,
  grammar,
  reading,
  technicalEnglish,
  listening,
  speaking,
  writing,
  interviews,
]

/** Tópicos e projetos em sequência, usada para anterior/próximo e "continuar". */
export const englishStudyItems: StudyItem[] = englishModules.flatMap((module) => [
  ...module.topics.map((topic) => ({ topic, module, isProject: false })),
  ...(module.project ? [{ topic: module.project, module, isProject: true }] : []),
])
