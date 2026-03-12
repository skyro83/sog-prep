interface SectionTitleProps {
  children: React.ReactNode
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <h2 className="shrink-0 font-display text-[28px] tracking-[0.05em] text-[#1a1714]">
        {children}
      </h2>
      <div className="h-[2px] flex-1 bg-[#e8e2d9]" />
    </div>
  )
}
