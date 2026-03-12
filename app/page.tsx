'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <div>
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
            Préparation · Sous-Officier de Gendarmerie
          </div>
          <h1 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(52px, 9vw, 88px)',
            lineHeight: 0.88,
            letterSpacing: '0.02em',
            color: '#1a1714',
            margin: 0,
          }}>
            SOG<br />PREPA<br />
            <span style={{ position: 'relative', display: 'inline-block' }}>
              RATION
              <span style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: '50%',
                height: '4px',
                background: '#c8402a',
                transform: 'translateY(-50%) rotate(-2deg)',
                display: 'block',
              }} />
            </span>
          </h1>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingTop: '8px' }}>
          {[
            { label: 'Poids actuel', value: '84,4 kg', color: 'white' },
            { label: 'Objectif', value: '75,8 kg', color: '#6ee7a0' },
            { label: 'TGC', value: '24,4%', color: '#fbbf24' },
            { label: 'Concours EPG', value: '2026', color: 'white' },
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

      {/* Objectif */}
      <div style={{ background: '#ffffff', border: '1px solid #e8e2d9', borderRadius: '14px', padding: '20px', marginBottom: '32px' }}>
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '20px', letterSpacing: '0.04em', color: '#1a1714', marginBottom: '8px', marginTop: 0 }}>
          Objectif
        </h2>
        <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#7a7068', margin: 0 }}>
          Perdre 8,6 kg en 12 mois tout en maintenant la masse musculaire.
          Programme combinant musculation, préparation Hyrox et nutrition
          calibrée à 2 150 kcal/jour.
        </p>
      </div>

      {/* CTA Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
        <Link href="/planning" style={{
          display: 'block',
          background: '#ffffff',
          border: '1px solid #e8e2d9',
          borderRadius: '14px',
          padding: '24px',
          textDecoration: 'none',
          transition: 'box-shadow 0.2s, border-color 0.2s',
        }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = 'rgba(26,74,122,0.4)'
            ;(e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)'
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = '#e8e2d9'
            ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
          }}
        >
          <div style={{ fontSize: '28px', marginBottom: '12px' }}>🏋️</div>
          <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '24px', letterSpacing: '0.04em', color: '#1a1714', marginBottom: '4px', marginTop: 0 }}>
            Planning sportif
          </h3>
          <p style={{ fontSize: '14px', color: '#7a7068', margin: 0 }}>
            7 jours de programme — muscu, Hyrox, cardio et récupération
          </p>
        </Link>

        <Link href="/alimentation" style={{
          display: 'block',
          background: '#ffffff',
          border: '1px solid #e8e2d9',
          borderRadius: '14px',
          padding: '24px',
          textDecoration: 'none',
          transition: 'box-shadow 0.2s, border-color 0.2s',
        }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = 'rgba(200,64,42,0.4)'
            ;(e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)'
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = '#e8e2d9'
            ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
          }}
        >
          <div style={{ fontSize: '28px', marginBottom: '12px' }}>🍽️</div>
          <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '24px', letterSpacing: '0.04em', color: '#1a1714', marginBottom: '4px', marginTop: 0 }}>
            Plan alimentaire
          </h3>
          <p style={{ fontSize: '14px', color: '#7a7068', margin: 0 }}>
            4 repas calibrés — 2 150 kcal, 153g protéines par jour
          </p>
        </Link>
      </div>
    </div>
  )
}
