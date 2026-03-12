import WeekGrid from '@/components/planning/WeekGrid'

export default function PlanningPage() {
  return (
    <div>
      {/* Header editorial */}
      <header style={{
        marginBottom: '40px',
        paddingBottom: '32px',
        borderBottom: '2px solid #1a1714',
      }}>
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
          Sport · Préparation SOG
        </div>
        <h1 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(40px, 7vw, 64px)',
          lineHeight: 0.9,
          letterSpacing: '0.02em',
          color: '#1a1714',
          margin: 0,
        }}>
          PLANNING<br />SPORTIF
        </h1>
      </header>

      <p style={{ marginBottom: '24px', fontSize: '14px', lineHeight: 1.6, color: '#7a7068' }}>
        Programme sur 7 jours : musculation ciblée + préparation Hyrox les
        lundi, mercredi et vendredi. Mardi = cuisses seules (récupération avant
        Hyrox mercredi). Vendredi = simulation EPG complète avec chrono.
      </p>

      <WeekGrid />
    </div>
  )
}
