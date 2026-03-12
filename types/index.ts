export type BadgeType = 'muscu' | 'hyrox' | 'cardio' | 'repos' | 'actif'

export type ExerciseType = 'muscu' | 'hyrox' | 'cardio'

export interface Exercise {
  icon: string
  name: string
  detail: string
  sets: string
  type: ExerciseType
}

export interface Section {
  title: string
  exercises: Exercise[]
  tip?: string
}

export interface Day {
  num: string
  day: string
  badges: { label: string; type: BadgeType }[]
  duration: string
  isRest?: boolean
  restText?: string
  sections?: Section[]
}

export type MacroKey = 'prot' | 'gluc' | 'lip'

export interface Macro {
  prot: number
  gluc: number
  lip: number
}

export interface FoodItem {
  emoji: string
  name: string
  prep: string
  macros: Macro
  highlight?: boolean
}

export interface Meal {
  time: string
  label: string
  name: string
  kcal: number
  foods: FoodItem[]
}
