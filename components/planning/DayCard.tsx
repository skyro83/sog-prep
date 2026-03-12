'use client'

import { useState } from 'react'
import { Day } from '@/types'
import Badge from '@/components/ui/Badge'
import ExerciseItem from '@/components/planning/ExerciseItem'

interface DayCardProps {
  day: Day
  defaultOpen?: boolean
}

export default function DayCard({ day, defaultOpen = false }: DayCardProps) {
  const [open, setOpen] = useState(defaultOpen)

  if (day.isRest) {
    return (
      <div style={{
        background: '#ffffff',
        border: '1px solid #e8e2d9',
        borderRadius: '14px',
        padding: '16px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{
              display: 'flex',
              width: '40px',
              height: '40px',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '8px',
              background: '#1a1714',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '13px',
              fontWeight: 700,
              color: '#7a7068',
            }}>
              {day.num}
            </span>
            <div>
              <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '20px', color: '#1a1714', margin: 0, letterSpacing: '0.04em' }}>
                {day.day}
              </p>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: '#7a7068', margin: 0 }}>
                {day.duration}
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '6px' }}>
            {day.badges.map((badge) => (
              <Badge key={badge.label} label={badge.label} type={badge.type} />
            ))}
          </div>
        </div>
        <p style={{ marginTop: '12px', fontSize: '14px', lineHeight: 1.6, color: '#7a7068' }}>
          {day.restText}
        </p>
      </div>
    )
  }

  return (
    <div style={{
      background: '#ffffff',
      border: '1px solid #e8e2d9',
      borderRadius: '14px',
      overflow: 'hidden',
    }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px',
          textAlign: 'left',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          transition: 'background 0.15s',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = '#f0ebe280')}
        onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{
            display: 'flex',
            width: '40px',
            height: '40px',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '8px',
            background: '#1a1714',
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '18px',
            color: '#c8402a',
          }}>
            {day.num}
          </span>
          <div>
            <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '20px', letterSpacing: '0.04em', color: '#1a1714', margin: 0 }}>
              {day.day}
            </p>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: '#7a7068', margin: 0 }}>
              {day.duration}
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ display: 'flex', gap: '6px' }}>
            {day.badges.map((badge) => (
              <Badge key={badge.label} label={badge.label} type={badge.type} />
            ))}
          </div>
          <svg
            style={{
              width: '20px',
              height: '20px',
              color: '#7a7068',
              transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s',
              flexShrink: 0,
            }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      <div style={{
        overflow: 'hidden',
        maxHeight: open ? '2000px' : '0',
        opacity: open ? 1 : 0,
        transition: 'max-height 0.25s ease, opacity 0.2s ease',
      }}>
        <div style={{
          borderTop: '1px solid #e8e2d9',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}>
          {day.sections?.map((section) => (
            <div key={section.title}>
              <h3 style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '10px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: '#7a7068',
                marginBottom: '10px',
                marginTop: 0,
              }}>
                {section.title}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {section.exercises.map((exercise) => (
                  <ExerciseItem key={exercise.name} exercise={exercise} />
                ))}
              </div>
              {section.tip && (
                <p style={{
                  marginTop: '10px',
                  borderRadius: '8px',
                  background: 'rgba(200,64,42,0.08)',
                  padding: '8px 12px',
                  fontSize: '12px',
                  color: '#c8402a',
                }}>
                  💡 {section.tip}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
