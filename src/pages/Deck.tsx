import { useState, useEffect, useCallback } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Bell,
  ChevronRight,
  FileSpreadsheet,
  LineChart,
  Mail,
  MessageCircle,
  ShoppingBag,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
  Globe,
  DollarSign,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Eye,
} from 'lucide-react'
import './Deck.css'

/* ─────────────── slide definitions ─────────────── */

function SlidesCover() {
  return (
    <div className="slide slide-cover">
      <div className="slide-cover-bg" />
      <div className="slide-cover-content">
        <div className="deck-logo">
          <div className="deck-logo-icon"><LineChart size={28} /></div>
          <span>Visibilty</span>
        </div>
        <h1>
          Tu data tiene<br />
          <span className="gradient">las respuestas</span>
        </h1>
        <p className="slide-cover-sub">
          Dashboards inteligentes + insights accionables<br />
          directo a tu WhatsApp
        </p>
        <div className="slide-cover-badge">Pitch Comercial 2026</div>
      </div>
    </div>
  )
}

function SlidesProblem() {
  return (
    <div className="slide slide-two-col">
      <div className="slide-left">
        <div className="slide-tag">El Problema</div>
        <h2>Los negocios estan ciegos ante su propia data</h2>
        <p className="slide-body">
          Los duenos y operadores tienen datos dispersos en Excel, Shopify, Google Sheets...
          pero no tienen tiempo, herramientas ni equipo para convertirlos en decisiones.
        </p>
      </div>
      <div className="slide-right">
        <div className="problem-cards">
          <div className="problem-card">
            <AlertTriangle size={28} className="problem-icon red" />
            <h4>72% de las PYMEs</h4>
            <p>no analizan sus datos de ventas regularmente</p>
          </div>
          <div className="problem-card">
            <Clock size={28} className="problem-icon yellow" />
            <h4>15+ horas/semana</h4>
            <p>se pierden en reportes manuales y Excel</p>
          </div>
          <div className="problem-card">
            <Eye size={28} className="problem-icon blue" />
            <h4>89% de los insights</h4>
            <p>quedan enterrados en hojas de calculo que nadie revisa</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function SlidesSolution() {
  return (
    <div className="slide slide-center-wide">
      <div className="slide-tag">La Solucion</div>
      <h2>
        Conecta tu data.<br />
        Recibe decisiones, <span className="gradient">no graficos</span>.
      </h2>
      <p className="slide-body" style={{ maxWidth: 700, margin: '0 auto 48px' }}>
        Visibilty conecta tus fuentes de datos (Excel, Shopify, Google Sheets),
        analiza con IA y te envia insights accionables directo a tu WhatsApp o mail.
      </p>
      <div className="solution-flow">
        <div className="solution-step">
          <div className="solution-icon"><FileSpreadsheet size={28} /></div>
          <span>Tu Data</span>
        </div>
        <ChevronRight size={24} className="solution-arrow" />
        <div className="solution-step">
          <div className="solution-icon accent"><Sparkles size={28} /></div>
          <span>IA Visibilty</span>
        </div>
        <ChevronRight size={24} className="solution-arrow" />
        <div className="solution-step">
          <div className="solution-icon green"><MessageCircle size={28} /></div>
          <span>Tu WhatsApp</span>
        </div>
      </div>
    </div>
  )
}

function SlidesHowItWorks() {
  return (
    <div className="slide slide-center-wide">
      <div className="slide-tag">Como Funciona</div>
      <h2>3 pasos. 5 minutos. Listo.</h2>
      <div className="steps-row">
        <div className="step-box">
          <div className="step-num">1</div>
          <h3>Conecta</h3>
          <p>Sube tu Excel, conecta Shopify o pega el link de tu Google Sheet</p>
          <div className="step-icons">
            <ShoppingBag size={20} />
            <FileSpreadsheet size={20} />
            <BarChart3 size={20} />
          </div>
        </div>
        <div className="step-box">
          <div className="step-num">2</div>
          <h3>Analiza</h3>
          <p>Nuestra IA procesa tu data, encuentra patrones y oportunidades</p>
          <div className="step-icons">
            <Sparkles size={20} />
            <TrendingUp size={20} />
            <Target size={20} />
          </div>
        </div>
        <div className="step-box">
          <div className="step-num">3</div>
          <h3>Decide</h3>
          <p>Recibe insights accionables en tu WhatsApp o mail</p>
          <div className="step-icons">
            <MessageCircle size={20} />
            <Mail size={20} />
            <Bell size={20} />
          </div>
        </div>
      </div>
    </div>
  )
}

function SlidesProduct() {
  return (
    <div className="slide slide-two-col">
      <div className="slide-left">
        <div className="slide-tag">Producto</div>
        <h2>Dashboard + WhatsApp en uno</h2>
        <p className="slide-body">
          No es solo un dashboard mas. Es inteligencia que llega a ti, cuando y donde la necesitas.
        </p>
        <ul className="check-list">
          <li><CheckCircle2 size={18} /> Dashboards auto-generados desde tu data</li>
          <li><CheckCircle2 size={18} /> Insights con IA: te dice QUE hacer</li>
          <li><CheckCircle2 size={18} /> Alertas por WhatsApp en tiempo real</li>
          <li><CheckCircle2 size={18} /> Reportes automaticos (diario/semanal/mensual)</li>
          <li><CheckCircle2 size={18} /> Deteccion de anomalias y oportunidades</li>
          <li><CheckCircle2 size={18} /> Responde al chat para tomar accion</li>
        </ul>
      </div>
      <div className="slide-right">
        <div className="product-mockup">
          <div className="mockup-browser">
            <div className="mockup-browser-dots">
              <span className="mdot r" /><span className="mdot y" /><span className="mdot g" />
            </div>
            <div className="mockup-browser-body">
              <div className="mini-cards">
                <div className="mini-card">
                  <div className="mc-label">Ventas</div>
                  <div className="mc-val">$4.2M</div>
                  <div className="mc-change">+23%</div>
                </div>
                <div className="mini-card">
                  <div className="mc-label">Productos</div>
                  <div className="mc-val">1,847</div>
                  <div className="mc-change">+12</div>
                </div>
                <div className="mini-card">
                  <div className="mc-label">Conversion</div>
                  <div className="mc-val">3.8%</div>
                  <div className="mc-change">+0.4pp</div>
                </div>
              </div>
              <div className="mini-bars">
                {[65, 45, 80, 55, 90, 70, 85, 60].map((h, i) => (
                  <div key={i} className="mini-bar" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </div>
          <div className="mockup-phone-small">
            <div className="mp-header">
              <div className="mp-avatar" />
              <div>
                <div className="mp-name">Visibilty AI</div>
                <div className="mp-status">en linea</div>
              </div>
            </div>
            <div className="mp-msgs">
              <div className="mp-msg">
                <span className="mp-tag red">Urgente</span>
                Stock Runner Pro se agota en 3 dias
              </div>
              <div className="mp-msg">
                <span className="mp-tag green">Crecimiento</span>
                Outdoor subio 45% esta semana
              </div>
              <div className="mp-msg sent">Si, repon 200 unidades!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SlidesMarket() {
  return (
    <div className="slide slide-center-wide">
      <div className="slide-tag">Mercado</div>
      <h2>Un mercado enorme y desatendido</h2>
      <p className="slide-body" style={{ maxWidth: 650, margin: '0 auto 48px' }}>
        Millones de PYMEs y e-commerces en LATAM generan datos pero no los aprovechan.
        Las herramientas actuales son caras, complejas o no hablan su idioma.
      </p>
      <div className="market-circles">
        <div className="market-circle tam">
          <div className="mc-value">$12B</div>
          <div className="mc-name">TAM</div>
          <div className="mc-desc">BI & Analytics para SMBs global</div>
        </div>
        <div className="market-circle sam">
          <div className="mc-value">$2.4B</div>
          <div className="mc-name">SAM</div>
          <div className="mc-desc">PYMEs y e-commerce en LATAM</div>
        </div>
        <div className="market-circle som">
          <div className="mc-value">$180M</div>
          <div className="mc-name">SOM</div>
          <div className="mc-desc">Chile, Mexico, Colombia (Y1-Y3)</div>
        </div>
      </div>
    </div>
  )
}

function SlidesBusinessModel() {
  return (
    <div className="slide slide-center-wide">
      <div className="slide-tag">Modelo de Negocio</div>
      <h2>SaaS simple, valor desde el dia 1</h2>
      <div className="pricing-grid">
        <div className="pricing-card">
          <div className="pricing-name">Starter</div>
          <div className="pricing-price">$29<span>/mes</span></div>
          <ul className="pricing-features">
            <li>1 fuente de datos</li>
            <li>Dashboard basico</li>
            <li>Reportes semanales</li>
            <li>WhatsApp (50 alertas/mes)</li>
          </ul>
          <div className="pricing-target">PYMEs pequeñas</div>
        </div>
        <div className="pricing-card featured">
          <div className="pricing-badge">Popular</div>
          <div className="pricing-name">Pro</div>
          <div className="pricing-price">$79<span>/mes</span></div>
          <ul className="pricing-features">
            <li>5 fuentes de datos</li>
            <li>Dashboards ilimitados</li>
            <li>Reportes diarios</li>
            <li>WhatsApp ilimitado</li>
            <li>Insights con IA</li>
            <li>Deteccion de anomalias</li>
          </ul>
          <div className="pricing-target">E-commerce en crecimiento</div>
        </div>
        <div className="pricing-card">
          <div className="pricing-name">Enterprise</div>
          <div className="pricing-price">$249<span>/mes</span></div>
          <ul className="pricing-features">
            <li>Fuentes ilimitadas</li>
            <li>API access</li>
            <li>Multi-usuario</li>
            <li>Integraciones custom</li>
            <li>Soporte prioritario</li>
          </ul>
          <div className="pricing-target">Cadenas y retailers</div>
        </div>
      </div>
    </div>
  )
}

function SlidesTraction() {
  return (
    <div className="slide slide-center-wide">
      <div className="slide-tag">Traccion & Roadmap</div>
      <h2>Donde estamos y a donde vamos</h2>
      <div className="traction-timeline">
        <div className="traction-item done">
          <div className="traction-dot" />
          <div className="traction-content">
            <div className="traction-date">Q1 2026</div>
            <h4>MVP lanzado</h4>
            <p>Landing, conexion Excel/Shopify, dashboard basico, alertas WhatsApp</p>
          </div>
        </div>
        <div className="traction-item current">
          <div className="traction-dot" />
          <div className="traction-content">
            <div className="traction-date">Q2 2026</div>
            <h4>Beta privada</h4>
            <p>50 negocios beta, insights IA, Google Sheets, reportes automaticos</p>
          </div>
        </div>
        <div className="traction-item">
          <div className="traction-dot" />
          <div className="traction-content">
            <div className="traction-date">Q3 2026</div>
            <h4>Lanzamiento publico</h4>
            <p>Planes pagados, integraciones avanzadas, app mobile</p>
          </div>
        </div>
        <div className="traction-item">
          <div className="traction-dot" />
          <div className="traction-content">
            <div className="traction-date">Q4 2026</div>
            <h4>Expansion LATAM</h4>
            <p>Mexico y Colombia, partnerships con Shopify, 500+ clientes</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function SlidesTeam() {
  return (
    <div className="slide slide-center-wide">
      <div className="slide-tag">Equipo</div>
      <h2>Quienes construyen Visibilty</h2>
      <p className="slide-body" style={{ maxWidth: 600, margin: '0 auto 48px' }}>
        Un equipo que combina experiencia en producto, data y negocios en LATAM.
      </p>
      <div className="team-grid">
        <div className="team-card">
          <div className="team-avatar">
            <Users size={32} />
          </div>
          <h4>CEO / Product</h4>
          <p className="team-role">Estrategia, producto y go-to-market</p>
          <div className="team-tags">
            <span>Product</span>
            <span>Growth</span>
          </div>
        </div>
        <div className="team-card">
          <div className="team-avatar">
            <Zap size={32} />
          </div>
          <h4>CTO / Engineering</h4>
          <p className="team-role">Arquitectura, IA y desarrollo full-stack</p>
          <div className="team-tags">
            <span>AI/ML</span>
            <span>Full-Stack</span>
          </div>
        </div>
        <div className="team-card">
          <div className="team-avatar">
            <Globe size={32} />
          </div>
          <h4>Head of Growth</h4>
          <p className="team-role">Ventas, partnerships y expansion regional</p>
          <div className="team-tags">
            <span>Sales</span>
            <span>LATAM</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function SlidesAsk() {
  return (
    <div className="slide slide-cover">
      <div className="slide-cover-bg" />
      <div className="slide-cover-content">
        <div className="slide-tag" style={{ marginBottom: 24 }}>El Ask</div>
        <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', marginBottom: 16 }}>
          Buscamos <span className="gradient">$500K</span> pre-seed
        </h2>
        <p className="slide-body" style={{ maxWidth: 550, margin: '0 auto 40px', fontSize: 18 }}>
          Para construir el equipo core, lanzar la beta publica y adquirir los primeros 500 clientes en Chile, Mexico y Colombia.
        </p>
        <div className="ask-allocation">
          <div className="ask-item">
            <DollarSign size={20} />
            <div>
              <strong>40%</strong>
              <span>Producto & Engineering</span>
            </div>
          </div>
          <div className="ask-item">
            <TrendingUp size={20} />
            <div>
              <strong>35%</strong>
              <span>Growth & Ventas</span>
            </div>
          </div>
          <div className="ask-item">
            <Users size={20} />
            <div>
              <strong>25%</strong>
              <span>Operaciones & Equipo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SlidesClose() {
  return (
    <div className="slide slide-cover">
      <div className="slide-cover-bg" />
      <div className="slide-cover-content">
        <div className="deck-logo" style={{ marginBottom: 40 }}>
          <div className="deck-logo-icon"><LineChart size={28} /></div>
          <span>Visibilty</span>
        </div>
        <h1>
          Deja de adivinar.<br />
          <span className="gradient">Empieza a decidir.</span>
        </h1>
        <p className="slide-cover-sub" style={{ marginBottom: 40 }}>
          La inteligencia que tu negocio necesita,<br />
          en el chat que ya usas todos los dias.
        </p>
        <div className="close-contact">
          <a href="/" className="deck-btn-primary">
            <Globe size={18} /> visibilty.vercel.app
          </a>
          <a href="mailto:hello@visibilty.com" className="deck-btn-secondary">
            <Mail size={18} /> hello@visibilty.com
          </a>
        </div>
      </div>
    </div>
  )
}

/* ─────────────── main deck component ─────────────── */

const slides = [
  SlidesCover,
  SlidesProblem,
  SlidesSolution,
  SlidesHowItWorks,
  SlidesProduct,
  SlidesMarket,
  SlidesBusinessModel,
  SlidesTraction,
  SlidesTeam,
  SlidesAsk,
  SlidesClose,
]

export default function Deck() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState<'next' | 'prev'>('next')

  const goTo = useCallback(
    (n: number) => {
      if (n < 0 || n >= slides.length || n === current) return
      setDirection(n > current ? 'next' : 'prev')
      setCurrent(n)
    },
    [current]
  )

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); next() }
      if (e.key === 'ArrowLeft') { e.preventDefault(); prev() }
      if (e.key === 'Home') { e.preventDefault(); goTo(0) }
      if (e.key === 'End') { e.preventDefault(); goTo(slides.length - 1) }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [next, prev, goTo])

  const CurrentSlide = slides[current]

  return (
    <div className="deck">
      {/* Slide area */}
      <div className="deck-viewport">
        <div
          className={`deck-slide-wrapper ${direction}`}
          key={current}
        >
          <CurrentSlide />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="deck-controls">
        <a href="/" className="deck-home-link">
          <div className="deck-logo-icon small"><LineChart size={14} /></div>
          Visibilty
        </a>

        <div className="deck-nav">
          <button onClick={prev} disabled={current === 0} className="deck-nav-btn">
            <ArrowLeft size={18} />
          </button>
          <div className="deck-progress">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`deck-dot ${i === current ? 'active' : ''} ${i < current ? 'done' : ''}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
          <button onClick={next} disabled={current === slides.length - 1} className="deck-nav-btn">
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="deck-counter">
          {current + 1} / {slides.length}
        </div>
      </div>
    </div>
  )
}
