import { Meal } from '@/types'
import FoodItem from '@/components/alimentation/FoodItem'

interface MealCardProps {
  meal: Meal
}

export default function MealCard({ meal }: MealCardProps) {
  const totalMacros = meal.foods.reduce(
    (acc, food) => ({
      prot: acc.prot + food.macros.prot,
      gluc: acc.gluc + food.macros.gluc,
      lip: acc.lip + food.macros.lip,
    }),
    { prot: 0, gluc: 0, lip: 0 }
  )

  return (
    <div style={{
      background: '#ffffff',
      border: '1px solid #e8e2d9',
      borderRadius: '14px',
      overflow: 'hidden',
    }}>
      {/* Header */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '56px 1fr auto',
        alignItems: 'center',
        borderBottom: '1px solid #e8e2d9',
      }}>
        {/* Time block */}
        <div style={{
          background: '#1a1714',
          padding: '16px 0',
          textAlign: 'center',
          alignSelf: 'stretch',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '10px',
            fontWeight: 600,
            letterSpacing: '0.05em',
            color: '#9a9080',
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            transform: 'rotate(180deg)',
          }}>
            {meal.time}
          </span>
        </div>

        {/* Title block */}
        <div style={{ padding: '14px 20px' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: '#7a7068', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '2px' }}>
            {meal.label}
          </div>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '24px', letterSpacing: '0.04em', color: '#1a1714' }}>
            {meal.name}
          </div>
        </div>

        {/* Kcal */}
        <div style={{ padding: '14px 20px', textAlign: 'right' }}>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '28px', color: '#c8402a', lineHeight: 1 }}>
            {meal.kcal}
          </div>
          <div style={{ fontSize: '10px', color: '#7a7068', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            kcal
          </div>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: '20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '12px' }}>
          {meal.foods.map((food) => (
            <FoodItem key={food.name} food={food} />
          ))}
        </div>

        {/* Total macros */}
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '20px',
          paddingTop: '10px',
          borderTop: '1px dashed #e8e2d9',
          marginTop: '4px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#1a4a7a' }} />
            <span style={{ color: '#7a7068' }}>Protéines</span>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 600, fontSize: '13px' }}>{totalMacros.prot}g</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#d4790a' }} />
            <span style={{ color: '#7a7068' }}>Glucides</span>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 600, fontSize: '13px' }}>{totalMacros.gluc}g</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#2a6b3f' }} />
            <span style={{ color: '#7a7068' }}>Lipides</span>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 600, fontSize: '13px' }}>{totalMacros.lip}g</span>
          </div>
        </div>
      </div>
    </div>
  )
}
