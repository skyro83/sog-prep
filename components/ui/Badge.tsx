import { BadgeType } from '@/types'

const badgeStyles: Record<BadgeType, string> = {
  muscu: 'bg-[#1a4a7a]/10 text-[#1a4a7a] border-[#1a4a7a]/20',
  hyrox: 'bg-[#c8402a]/10 text-[#c8402a] border-[#c8402a]/20',
  cardio: 'bg-[#2a6b3f]/10 text-[#2a6b3f] border-[#2a6b3f]/20',
  repos: 'bg-[#7a7068]/10 text-[#7a7068] border-[#7a7068]/20',
  actif: 'bg-purple-700/10 text-purple-700 border-purple-700/20',
}

interface BadgeProps {
  label: string
  type: BadgeType
}

export default function Badge({ label, type }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.08em] ${badgeStyles[type]}`}
    >
      {label}
    </span>
  )
}
