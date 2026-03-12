import { FoodItem as FoodItemType } from '@/types'

interface FoodItemProps {
  food: FoodItemType
}

export default function FoodItem({ food }: FoodItemProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '10px 14px',
        borderRadius: '8px',
        background: food.highlight ? '#fff8f6' : '#f0ebe2',
        border: food.highlight ? '1px solid #f5d0c8' : 'none',
      }}
    >
      <span style={{ fontSize: '18px', flexShrink: 0 }}>{food.emoji}</span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: '14px', fontWeight: 500, color: '#1a1714' }}>
          {food.name}
        </div>
        <div style={{ fontSize: '12px', color: '#7a7068', marginTop: '1px', fontStyle: 'italic' }}>
          {food.prep}
        </div>
      </div>
      <div style={{ display: 'flex', gap: '10px', flexShrink: 0 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '40px' }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', fontWeight: 600, lineHeight: 1, color: '#1a4a7a' }}>
            {food.macros.prot}g
          </span>
          <span style={{ fontSize: '9px', color: '#7a7068', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            Prot
          </span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '40px' }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', fontWeight: 600, lineHeight: 1, color: '#d4790a' }}>
            {food.macros.gluc}g
          </span>
          <span style={{ fontSize: '9px', color: '#7a7068', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            Gluc
          </span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '40px' }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', fontWeight: 600, lineHeight: 1, color: '#2a6b3f' }}>
            {food.macros.lip}g
          </span>
          <span style={{ fontSize: '9px', color: '#7a7068', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            Lip
          </span>
        </div>
      </div>
    </div>
  )
}
