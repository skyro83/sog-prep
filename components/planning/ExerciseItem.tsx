import { Exercise, ExerciseType } from '@/types'

const borderColors: Record<ExerciseType, string> = {
  muscu: '#1a4a7a',
  hyrox: '#c8402a',
  cardio: '#2a6b3f',
}

interface ExerciseItemProps {
  exercise: Exercise
}

export default function ExerciseItem({ exercise }: ExerciseItemProps) {
  return (
    <div style={{
      borderLeft: `2px solid ${borderColors[exercise.type]}`,
      background: '#f0ebe2',
      borderRadius: '0 8px 8px 0',
      padding: '10px 12px',
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px' }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{ fontSize: '14px', fontWeight: 500, color: '#1a1714', margin: 0 }}>
            <span style={{ marginRight: '6px' }}>{exercise.icon}</span>
            {exercise.name}
          </p>
          <p style={{ marginTop: '2px', fontSize: '12px', color: '#7a7068', fontStyle: 'italic', margin: '2px 0 0 0' }}>
            {exercise.detail}
          </p>
        </div>
        {exercise.sets && (
          <span style={{
            flexShrink: 0,
            background: '#ffffff',
            border: '1px solid #e8e2d9',
            borderRadius: '6px',
            padding: '2px 8px',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '12px',
            fontWeight: 600,
            color: '#1a1714',
            whiteSpace: 'nowrap',
          }}>
            {exercise.sets}
          </span>
        )}
      </div>
    </div>
  )
}
