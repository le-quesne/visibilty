import { useEffect, useState, useRef } from 'react'
import { Check, CheckCheck } from 'lucide-react'

interface Message {
  id: number
  text: string
  time: string
  type: 'received' | 'sent'
  tag?: { label: string; color: string }
}

const messages: Message[] = [
  {
    id: 1,
    text: 'Hola! Soy tu asistente Visibilty. Aqui va tu reporte semanal:',
    time: '9:01',
    type: 'received',
  },
  {
    id: 2,
    text: 'Ventas esta semana: $847,320 (+23% vs semana pasada). Tu mejor dia fue el jueves con $189K.',
    time: '9:01',
    type: 'received',
    tag: { label: 'Ventas', color: '#10b981' },
  },
  {
    id: 3,
    text: 'El producto "Zapatilla Runner Pro" se agota en ~3 dias. Recomiendo reponer al menos 200 unidades hoy.',
    time: '9:02',
    type: 'received',
    tag: { label: 'Urgente', color: '#ef4444' },
  },
  {
    id: 4,
    text: 'La categoria Outdoor crecio 45% esta semana. Considera aumentar el presupuesto de ads en esa categoria.',
    time: '9:02',
    type: 'received',
    tag: { label: 'Oportunidad', color: '#3b82f6' },
  },
  {
    id: 5,
    text: 'Tienes 12 carritos abandonados de +$50K. Quieres que prepare una campana de recuperacion?',
    time: '9:03',
    type: 'received',
    tag: { label: 'Accion', color: '#f59e0b' },
  },
  {
    id: 6,
    text: 'Si, lanza la campana! Y manda el reporte completo por mail',
    time: '9:04',
    type: 'sent',
  },
  {
    id: 7,
    text: 'Listo! Campana de recuperacion activada para 12 carritos. Reporte completo enviado a tu mail. Te notifico cuando haya resultados.',
    time: '9:04',
    type: 'received',
  },
]

export default function IPhoneWhatsApp() {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([])
  const [hasAnimated, setHasAnimated] = useState(false)
  const phoneRef = useRef<HTMLDivElement>(null)
  const chatRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          messages.forEach((msg, i) => {
            setTimeout(() => {
              setVisibleMessages((prev) => [...prev, msg.id])
            }, 800 + i * 1100)
          })
        }
      },
      { threshold: 0.3 }
    )

    if (phoneRef.current) observer.observe(phoneRef.current)
    return () => observer.disconnect()
  }, [hasAnimated])

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight
    }
  }, [visibleMessages])

  return (
    <div className="iphone-wrapper" ref={phoneRef}>
      {/* iPhone frame */}
      <div className="iphone-frame">
        {/* Notch */}
        <div className="iphone-notch">
          <div className="iphone-notch-cam" />
        </div>

        {/* Status bar */}
        <div className="iphone-statusbar">
          <span className="iphone-time">9:04</span>
          <div className="iphone-statusbar-right">
            <div className="iphone-signal">
              <div className="signal-bar" style={{ height: 4 }} />
              <div className="signal-bar" style={{ height: 6 }} />
              <div className="signal-bar" style={{ height: 8 }} />
              <div className="signal-bar" style={{ height: 10 }} />
            </div>
            <span className="iphone-battery">87%</span>
            <div className="iphone-battery-icon">
              <div className="battery-fill" />
            </div>
          </div>
        </div>

        {/* WhatsApp header */}
        <div className="wsp-header">
          <div className="wsp-back">
            <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
              <path d="M8.5 1L1.5 8L8.5 15" stroke="#00a884" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="wsp-avatar">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M3 20L5 14L14 5C15.1 3.9 16.9 3.9 18 5L19 6C20.1 7.1 20.1 8.9 19 10L10 19L4 21L3 20Z" fill="#10b981"/>
              <path d="M8 16L13 11" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="wsp-contact">
            <div className="wsp-contact-name">Visibilty AI</div>
            <div className="wsp-contact-status">en linea</div>
          </div>
          <div className="wsp-header-icons">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M15.6 14H14.8L14.5 13.7C15.5 12.6 16 11.1 16 9.5C16 5.9 13.1 3 9.5 3C5.9 3 3 5.9 3 9.5C3 13.1 5.9 16 9.5 16C11.1 16 12.6 15.5 13.7 14.5L14 14.8V15.6L19 20.6L20.6 19L15.6 14ZM9.5 14C7 14 5 12 5 9.5C5 7 7 5 9.5 5C12 5 14 7 14 9.5C14 12 12 14 9.5 14Z" fill="#aebac1"/>
            </svg>
          </div>
        </div>

        {/* Chat area */}
        <div className="wsp-chat" ref={chatRef}>
          {/* Date separator */}
          <div className="wsp-date-sep">
            <span>HOY</span>
          </div>

          {messages.map((msg) => {
            const isVisible = visibleMessages.includes(msg.id)
            return (
              <div
                key={msg.id}
                className={`wsp-msg ${msg.type} ${isVisible ? 'visible' : ''}`}
              >
                {msg.tag && (
                  <div
                    className="wsp-msg-tag"
                    style={{ backgroundColor: msg.tag.color + '20', color: msg.tag.color }}
                  >
                    {msg.tag.label}
                  </div>
                )}
                <div className="wsp-msg-text">{msg.text}</div>
                <div className="wsp-msg-meta">
                  <span className="wsp-msg-time">{msg.time}</span>
                  {msg.type === 'sent' && (
                    <CheckCheck size={14} className="wsp-msg-check" />
                  )}
                  {msg.type === 'received' && (
                    <Check size={14} className="wsp-msg-check" style={{ opacity: 0 }} />
                  )}
                </div>
              </div>
            )
          })}

          {/* Typing indicator */}
          {visibleMessages.length > 0 && visibleMessages.length < messages.length && (
            <div className="wsp-msg received visible">
              <div className="wsp-typing">
                <span className="typing-dot" />
                <span className="typing-dot" />
                <span className="typing-dot" />
              </div>
            </div>
          )}
        </div>

        {/* Input bar */}
        <div className="wsp-input-bar">
          <div className="wsp-input-emoji">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" stroke="#8696a0" strokeWidth="1.5"/>
              <circle cx="9" cy="10" r="1.2" fill="#8696a0"/>
              <circle cx="15" cy="10" r="1.2" fill="#8696a0"/>
              <path d="M8.5 14C9.33 15.33 10.67 16 12 16C13.33 16 14.67 15.33 15.5 14" stroke="#8696a0" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="wsp-input-field">Mensaje</div>
          <div className="wsp-input-mic">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <rect x="9" y="3" width="6" height="11" rx="3" stroke="#8696a0" strokeWidth="1.5"/>
              <path d="M5 11C5 14.87 8.13 18 12 18C15.87 18 19 14.87 19 11" stroke="#8696a0" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="12" y1="18" x2="12" y2="21" stroke="#8696a0" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        {/* Home indicator */}
        <div className="iphone-home-indicator" />
      </div>
    </div>
  )
}
