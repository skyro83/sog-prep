import { meals } from '@/data/alimentation'
import MealCard from '@/components/alimentation/MealCard'
import DayRecap from '@/components/alimentation/DayRecap'

const PORTIONS = [
  { food: '🍝 Pâtes (midi)', raw: '90g', unit: 'à sec — avant cuisson', tip: 'Ça donne ~250g cuit. Ne pèse JAMAIS les pâtes cuites.' },
  { food: '🍝 Pâtes (soir)', raw: '70g', unit: 'à sec — avant cuisson', tip: 'Moins actif le soir = moins de glucides nécessaires.' },
  { food: '🍗 Escalope (midi)', raw: '180g', unit: 'cru — avant cuisson', tip: 'Environ 130g cuit. Grillée sans matière grasse.' },
  { food: '🍗 Escalope (soir)', raw: '200g', unit: 'cru — avant cuisson', tip: 'Plus de protéines le soir = meilleure récup musculaire.' },
  { food: '🥚 Œufs matin', raw: '3', unit: 'œufs entiers', tip: 'Ne jette pas les jaunes — les lipides sont essentiels.' },
  { food: '🥣 Avoine', raw: '70g', unit: 'à sec', tip: 'Satiété longue durée. Évite les céréales sucrées.' },
]

const ERRORS = [
  { type: 'bad', icon: '❌', title: 'Peser les pâtes cuites', text: '100g de pâtes sèches = ~270g cuites. Si tu pèses cuites, tu sous-estimes tes calories de 65%.' },
  { type: 'bad', icon: '❌', title: 'Sautes de repas', text: 'Sauter le déj pour "compenser" provoque des fringales et du grignotage le soir. Contre-productif.' },
  { type: 'bad', icon: '❌', title: 'Sauces du commerce', text: 'Une sauce bolognese en bocal = +150-200 kcal cachées. Assaisonne avec herbes, citron, épices.' },
  { type: 'good', icon: '✅', title: 'Légumes à volonté', text: 'Brocoli, courgette, salade, haricots verts : mange autant que tu veux. Volume sans calories.' },
  { type: 'good', icon: '✅', title: '1,5L d\'eau minimum', text: 'La déshydratation masque la faim et réduit les performances. Bois avant d\'avoir soif.' },
  { type: 'good', icon: '✅', title: 'Prépare en avance', text: 'Cuis 3-4 escalopes d\'un coup, garde au frigo. Tu évites les mauvais choix quand t\'as faim.' },
]

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
      <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '28px', letterSpacing: '0.05em', color: '#1a1714', flexShrink: 0 }}>
        {children}
      </span>
      <div style={{ flex: 1, height: '2px', background: '#e8e2d9' }} />
    </div>
  )
}

export default function AlimentationPage() {
  return (
    <div style={{ maxWidth: '860px', margin: '0 auto' }}>

      {/* Header editorial */}
      <header style={{
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: '24px',
        alignItems: 'start',
        marginBottom: '48px',
        paddingBottom: '32px',
        borderBottom: '2px solid #1a1714',
      }}>
        <div>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '10px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#c8402a',
            marginBottom: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            <span style={{ fontSize: '8px' }}>●</span>
            Nutrition · Préparation SOG
          </div>
          <h1 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(52px, 9vw, 88px)',
            lineHeight: 0.88,
            letterSpacing: '0.02em',
            color: '#1a1714',
            margin: 0,
          }}>
            PLAN<br />ALIMEN<br />
            <span style={{ position: 'relative', display: 'inline-block' }}>
              TAIRE
              <span style={{
                content: '',
                position: 'absolute',
                left: 0,
                right: 0,
                top: '50%',
                height: '4px',
                background: '#c8402a',
                transform: 'translateY(-50%) rotate(-2deg)',
              }} />
            </span>
          </h1>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingTop: '8px' }}>
          {[
            { label: 'Objectif cal.', value: '2 150', color: 'white' },
            { label: 'Déficit/jour', value: '−350', color: '#fbbf24' },
            { label: 'Perte gras/sem.', value: '~400g', color: '#6ee7a0' },
            { label: 'Durée objectif', value: '20 sem.', color: 'white' },
          ].map(({ label, value, color }) => (
            <div key={label} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
              padding: '8px 14px',
              background: '#1a1714',
              borderRadius: '6px',
              minWidth: '180px',
            }}>
              <span style={{ fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9a9080', fontFamily: "'JetBrains Mono', monospace" }}>
                {label}
              </span>
              <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '22px', color }}>
                {value}
              </span>
            </div>
          ))}
        </div>
      </header>

      {/* Règle d'or */}
      <div style={{
        background: '#c8402a',
        color: 'white',
        padding: '18px 24px',
        borderRadius: '10px',
        marginBottom: '36px',
        display: 'flex',
        gap: '14px',
        alignItems: 'flex-start',
      }}>
        <span style={{ fontSize: '22px', flexShrink: 0 }}>⚠️</span>
        <div style={{ fontSize: '14px', lineHeight: 1.6 }}>
          <strong style={{ fontWeight: 600, display: 'block', marginBottom: '4px', fontSize: '15px' }}>
            Ton problème #1 : les portions trop grandes
          </strong>
          Tout est dans la balance et la pesée à cru. 100g de pâtes sèches ≠ 100g cuites
          (ça triple au moins). Investis dans une balance de cuisine — c&apos;est le seul
          outil qui va vraiment changer tes résultats.
        </div>
      </div>

      {/* Repas */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
        {meals.map((meal) => (
          <MealCard key={meal.time} meal={meal} />
        ))}
      </div>

      {/* Guide pesée */}
      <div style={{ background: '#ffffff', border: '1px solid #e8e2d9', borderRadius: '14px', padding: '24px', marginBottom: '32px' }}>
        <SectionHeading>Guide Pesée</SectionHeading>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '12px',
        }}>
          {PORTIONS.map((item) => (
            <div key={item.food} style={{
              padding: '14px',
              border: '1px solid #e8e2d9',
              borderRadius: '10px',
              background: '#fdfcfa',
            }}>
              <div style={{ fontWeight: 600, fontSize: '14px', marginBottom: '4px', color: '#1a1714' }}>
                {item.food}
              </div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '32px', color: '#c8402a', lineHeight: 1 }}>
                {item.raw}
              </div>
              <div style={{ fontSize: '11px', color: '#7a7068' }}>{item.unit}</div>
              <div style={{ fontSize: '11px', color: '#7a7068', marginTop: '6px', fontStyle: 'italic', lineHeight: 1.4 }}>
                {item.tip}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Erreurs */}
      <SectionHeading>Erreurs à éviter</SectionHeading>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '12px',
        marginBottom: '40px',
      }}>
        {ERRORS.map((item) => (
          <div key={item.title} style={{
            padding: '16px',
            borderRadius: '10px',
            border: `1px solid ${item.type === 'bad' ? '#fecaca' : '#bbf7d0'}`,
            background: item.type === 'bad' ? '#fff5f5' : '#f0faf4',
          }}>
            <div style={{ fontSize: '20px', marginBottom: '8px' }}>{item.icon}</div>
            <div style={{ fontWeight: 600, fontSize: '13px', marginBottom: '4px', color: '#1a1714' }}>
              {item.title}
            </div>
            <div style={{ fontSize: '12px', color: '#7a7068', lineHeight: 1.5 }}>
              {item.text}
            </div>
          </div>
        ))}
      </div>

      {/* Récap journée */}
      <SectionHeading>Total journée</SectionHeading>
      <DayRecap />
    </div>
  )
}
