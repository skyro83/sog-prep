interface CardProps {
  children: React.ReactNode
  className?: string
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={`rounded-[14px] border border-[#e8e2d9] bg-white p-5 ${className}`}
    >
      {children}
    </div>
  )
}
