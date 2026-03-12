import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: 'SOG Prep — Préparation Sous-Officier de Gendarmerie',
  description: 'Planning sportif et plan alimentaire pour la préparation au concours SOG',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ background: '#f7f4ef', color: '#1a1714', minHeight: '100vh', fontFamily: "'DM Sans', sans-serif" }}>

        {/* Navbar */}
        <nav style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          borderBottom: '2px solid #1a1714',
          background: 'rgba(247,244,239,0.92)',
          backdropFilter: 'blur(8px)',
        }}>
          <div style={{
            maxWidth: '860px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 16px',
          }}>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '24px', letterSpacing: '0.05em', color: '#c8402a' }}>
                SOG
              </span>
              <span style={{ fontSize: '13px', color: '#7a7068' }}>Prep</span>
            </Link>
            <div style={{ display: 'flex', gap: '24px' }}>
              <Link href="/planning" style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: '#7a7068',
                textDecoration: 'none',
              }}>
                Planning
              </Link>
              <Link href="/alimentation" style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: '#7a7068',
                textDecoration: 'none',
              }}>
                Alimentation
              </Link>
            </div>
          </div>
        </nav>

        <main style={{ maxWidth: '860px', margin: '0 auto', padding: '40px 16px 80px' }}>
          {children}
        </main>

        <footer style={{
          borderTop: '1px solid #e8e2d9',
          padding: '24px 16px',
          textAlign: 'center',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '10px',
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          color: '#7a7068',
        }}>
          SOG Prep — Objectif concours 2026
        </footer>
      </body>
    </html>
  )
}
