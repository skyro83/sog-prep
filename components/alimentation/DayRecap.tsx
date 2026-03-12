import { totalMacros } from '@/data/alimentation'

export default function DayRecap() {
  return (
    <div style={{
      background: '#1a1714',
      color: 'white',
      borderRadius: '14px',
      padding: '24px',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '16px',
      textAlign: 'center',
    }}>
      <div>
        <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '38px', lineHeight: 1, color: '#fbbf24' }}>
          2 150
        </div>
        <div style={{ fontSize: '10px', color: '#6b6358', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '4px' }}>
          kcal / jour
        </div>
      </div>
      <div>
        <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '38px', lineHeight: 1, color: '#93c5fd' }}>
          {totalMacros.prot}g
        </div>
        <div style={{ fontSize: '10px', color: '#6b6358', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '4px' }}>
          Protéines
        </div>
      </div>
      <div>
        <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '38px', lineHeight: 1, color: '#fca5a5' }}>
          {totalMacros.gluc}g
        </div>
        <div style={{ fontSize: '10px', color: '#6b6358', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '4px' }}>
          Glucides
        </div>
      </div>
      <div>
        <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '38px', lineHeight: 1, color: '#86efac' }}>
          {totalMacros.lip}g
        </div>
        <div style={{ fontSize: '10px', color: '#6b6358', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '4px' }}>
          Lipides
        </div>
      </div>
    </div>
  )
}
