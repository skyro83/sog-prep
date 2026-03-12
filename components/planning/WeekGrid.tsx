import { days } from '@/data/planning'
import DayCard from '@/components/planning/DayCard'

export default function WeekGrid() {
  return (
    <div className="space-y-3">
      {days.map((day, index) => (
        <DayCard key={day.num} day={day} defaultOpen={index === 0} />
      ))}
    </div>
  )
}
