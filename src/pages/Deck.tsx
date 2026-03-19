import { useState, useEffect, useCallback } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Bell,
  CheckCircle2,
  ChevronRight,
  Clock,
  FileSpreadsheet,
  LineChart,
  Mail,
  MessageCircle,
  ShoppingBag,
  Sparkles,
  Target,
  TrendingUp,
  Zap,
  XCircle,
  AlertTriangle,
} from 'lucide-react'
import './Deck.css'

/* ─────── SLIDE 1: COVER ─────── */
function SlideCover() {
  return (
    <div className="slide slide-cover">
      <div className="slide-cover-bg" />
      <div className="slide-cover-content">
        <div className="deck-logo">
          <div className="deck-logo-icon"><LineChart size={28} /></div>
          <span>Visibilty</span>
        </div>
        <h1>
          Tus datos ya tienen<br />
          <span className="gradient">las respuestas</span>
        </h1>
        <p className="slide-cover-sub">
          Dashboards inteligentes + insights accionables<br />
          directo a tu WhatsApp, sin complicaciones
        </p>
        <div className="slide-cover-badges">
          <span className="cover-pill">Excel / CSV</span>
          <span className="cover-pill">Shopify</span>
          <span className="cover-pill">Google Sheets</span>
          <span className="cover-pill">WhatsApp</span>
        </div>
      </div>
    </div>
  )
}

/* ─────── SLIDE 2: PAIN ─────── */
function SlidePain() {
  return (
    <div className="slide slide-center-wide">
      <div className="slide-tag">Te suena familiar?</div>
      <h2>Tu negocio genera datos todos los dias...<br />pero nadie los mira</h2>
      <div className="pain-grid">
        <div className="pain-card">
          <XCircle size={24} className="pain-icon" />
          <h4>Excels que nadie abre</h4>
          <p>Reportes que te toma horas armar y que terminan olvidados en una carpeta</p>
        </div>
        <div className="pain-card">
          <AlertTriangle size={24} className="pain-icon" />
          <h4>Te enteras tarde</h4>
          <p>Cuando ves que un producto se agoto o las ventas cayeron, ya perdiste plata</p>
        </div>
        <div className="pain-card">
          <Clock size={24} className="pain-icon" />
          <h4>No tienes tiempo</h4>
          <p>Estas operando el negocio, no tienes horas para sentarte a analizar numeros</p>
        </div>
        <div className="pain-card">
          <Target size={24} className="pain-icon" />
          <h4>Decides por intuicion</h4>
          <p>Sin datos claros, terminas adivinando que promover, que reponer, que cambiar</p>
        </div>
      </div>
    </div>
  )
}

/* ─────── SLIDE 3: SOLUTION ─────── */
function SlideSolution() {
  return (
    <div className="slide slide-center-wide">
      <div className="slide-tag">La solucion</div>
      <h2>
        Conecta tu data, recibe<br />
        <span className="gradient">decisiones en tu WhatsApp</span>
      </h2>
      <p className="slide-body" style={{ maxWidth: 650, margin: '0 auto 48px' }}>
        Visibilty analiza tus datos con IA y te envia lo que necesitas saber
        para actuar: alertas, oportunidades y recomendaciones claras.
        Sin dashboards complicados, sin curva de aprendizaje.
      </p>
      <div className="solution-flow">
        <div className="solution-step">
          <div className="solution-icon"><FileSpreadsheet size={28} /></div>
          <span>Sube tu data</span>
          <small>Excel, Shopify, Sheets</small>
        </div>
        <ChevronRight size={24} className="solution-arrow" />
        <div className="solution-step">
          <div className="solution-icon accent"><Sparkles size={28} /></div>
          <span>IA analiza</span>
          <small>Patrones y oportunidades</small>
        </div>
        <ChevronRight size={24} className="solution-arrow" />
        <div className="solution-step">
          <div className="solution-icon green"><MessageCircle size={28} /></div>
          <span>Tu recibes</span>
          <small>WhatsApp o mail</small>
        </div>
      </div>
    </div>
  )
}

/* ─────── SLIDE 4: DEMO WHATSAPP ─────── */
function SlideWhatsApp() {
  return (
    <div className="slide slide-two-col">
      <div className="slide-left">
        <div className="slide-tag">Asi se ve en tu celular</div>
        <h2>Tu negocio te habla por WhatsApp</h2>
        <p className="slide-body">
          Cada mañana recibes un resumen con lo que importa. Si algo urgente pasa,
          te avisa al toque. Y puedes responder para tomar accion.
        </p>
        <div className="wsp-examples">
          <div className="wsp-example">
            <span className="wsp-ex-tag red">Alerta</span>
            "Stock de Runner Pro se agota en 3 dias. Repon ahora."
          </div>
          <div className="wsp-example">
            <span className="wsp-ex-tag green">Oportunidad</span>
            "Outdoor crecio 45%. Aumenta ads en esa categoria."
          </div>
          <div className="wsp-example">
            <span className="wsp-ex-tag blue">Reporte</span>
            "Ventas semana: $847K (+23%). Mejor dia: jueves."
          </div>
        </div>
      </div>
      <div className="slide-right">
        <div className="deck-phone">
          <div className="dp-notch" />
          <div className="dp-header">
            <div className="dp-avatar">
              <Sparkles size={14} />
            </div>
            <div>
              <div className="dp-name">Visibilty AI</div>
              <div className="dp-status">en linea</div>
            </div>
          </div>
          <div className="dp-chat">
            <div className="dp-msg">Buen dia! Aqui va tu resumen semanal de ventas 📊</div>
            <div className="dp-msg">
              <span className="dp-tag green">Ventas</span>
              Esta semana: <strong>$847,320</strong> (+23% vs anterior). Tu mejor dia fue jueves con $189K.
            </div>
            <div className="dp-msg">
              <span className="dp-tag red">Urgente</span>
              "Zapatilla Runner Pro" se agota en ~3 dias. Recomiendo reponer 200 unidades hoy.
            </div>
            <div className="dp-msg">
              <span className="dp-tag blue">Oportunidad</span>
              Categoria Outdoor crecio 45%. Considera meterle mas presupuesto a ads.
            </div>
            <div className="dp-msg sent">Dale, repon las 200 y sube el budget de Outdoor!</div>
            <div className="dp-msg">Listo! Orden de reposicion creada. Te aviso cuando haya novedades.</div>
          </div>
          <div className="dp-input">
            <div className="dp-input-field">Mensaje</div>
            <div className="dp-input-send"><ArrowRight size={14} /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─────── SLIDE 5: DASHBOARD ─────── */
function SlideDashboard() {
  return (
    <div className="slide slide-center-wide">
      <div className="slide-tag">Dashboard inteligente</div>
      <h2>Todo tu negocio en una pantalla</h2>
      <p className="slide-body" style={{ maxWidth: 600, margin: '0 auto 40px' }}>
        Dashboards que se generan solos a partir de tu data. Sin configurar nada.
        Y cada numero viene con una recomendacion de que hacer.
      </p>
      <div className="deck-dashboard">
        <div className="dd-dots"><span className="mdot r" /><span className="mdot y" /><span className="mdot g" /></div>
        <div className="dd-body">
          <div className="dd-cards">
            <div className="dd-card">
              <div className="dd-label">Ventas del mes</div>
              <div className="dd-value">$4.2M</div>
              <div className="dd-change up"><TrendingUp size={13} /> +23%</div>
            </div>
            <div className="dd-card">
              <div className="dd-label">Productos activos</div>
              <div className="dd-value">1,847</div>
              <div className="dd-change up"><TrendingUp size={13} /> 12 nuevos</div>
            </div>
            <div className="dd-card">
              <div className="dd-label">Conversion</div>
              <div className="dd-value">3.8%</div>
              <div className="dd-change up"><TrendingUp size={13} /> +0.4pp</div>
            </div>
            <div className="dd-card">
              <div className="dd-label">Ticket promedio</div>
              <div className="dd-value">$52K</div>
              <div className="dd-change up"><TrendingUp size={13} /> +8%</div>
            </div>
          </div>
          <div className="dd-chart-row">
            <div className="dd-chart">
              <div className="dd-chart-title">Ventas por semana</div>
              <div className="dd-bars">
                {[50, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                  <div key={i} className="dd-bar" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
            <div className="dd-insights">
              <div className="dd-insight-title">Insights IA</div>
              <div className="dd-insight-row">
                <span className="dd-tag red">Urgente</span>
                Stock Runner Pro: 3 dias
              </div>
              <div className="dd-insight-row">
                <span className="dd-tag green">Crecer</span>
                Outdoor +45% esta semana
              </div>
              <div className="dd-insight-row">
                <span className="dd-tag blue">Tip</span>
                Margen Accesorios 2x promedio
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─────── SLIDE 6: BENEFITS ─────── */
function SlideBenefits() {
  return (
    <div className="slide slide-center-wide">
      <div className="slide-tag">Que ganas con Visibilty</div>
      <h2>Menos tiempo en datos,<br /><span className="gradient">mejores decisiones</span></h2>
      <div className="benefits-grid">
        <div className="benefit-card">
          <div className="benefit-icon"><Clock size={24} /></div>
          <h4>Ahorra 15+ horas/semana</h4>
          <p>Cero reportes manuales. Todo se genera y llega automaticamente.</p>
        </div>
        <div className="benefit-card">
          <div className="benefit-icon"><Bell size={24} /></div>
          <h4>Enterate antes, no despues</h4>
          <p>Alertas proactivas de stock bajo, caidas en ventas y anomalias.</p>
        </div>
        <div className="benefit-card">
          <div className="benefit-icon"><Sparkles size={24} /></div>
          <h4>Insights, no solo numeros</h4>
          <p>La IA te dice QUE hacer, no solo te muestra graficos bonitos.</p>
        </div>
        <div className="benefit-card">
          <div className="benefit-icon"><MessageCircle size={24} /></div>
          <h4>En tu WhatsApp, no en otro app</h4>
          <p>Sin descargar nada nuevo. La info llega donde ya estas.</p>
        </div>
        <div className="benefit-card">
          <div className="benefit-icon"><Zap size={24} /></div>
          <h4>Setup en 5 minutos</h4>
          <p>Sube tu Excel o conecta Shopify. Primer dashboard listo al tiro.</p>
        </div>
        <div className="benefit-card">
          <div className="benefit-icon"><Target size={24} /></div>
          <h4>Adaptado a tu negocio</h4>
          <p>Los insights se ajustan a tu industria, tus productos, tu contexto.</p>
        </div>
      </div>
    </div>
  )
}

/* ─────── SLIDE 7: INTEGRACIONES ─────── */
function SlideIntegrations() {
  return (
    <div className="slide slide-center-wide">
      <div className="slide-tag">Integraciones</div>
      <h2>Se conecta con lo que ya usas</h2>
      <p className="slide-body" style={{ maxWidth: 550, margin: '0 auto 48px' }}>
        No importa donde tengas tu data. Visibilty la trae, la analiza y te la devuelve como decisiones.
      </p>
      <div className="integrations-grid">
        <div className="integration-card">
          <ShoppingBag size={32} />
          <h4>Shopify</h4>
          <p>Conecta tu tienda en 1 click. Ventas, productos, inventario, ordenes.</p>
        </div>
        <div className="integration-card">
          <FileSpreadsheet size={32} />
          <h4>Excel / CSV</h4>
          <p>Sube cualquier archivo. Lo parseamos automaticamente.</p>
        </div>
        <div className="integration-card">
          <BarChart3 size={32} />
          <h4>Google Sheets</h4>
          <p>Pega el link y se sincroniza en tiempo real.</p>
        </div>
        <div className="integration-card output">
          <MessageCircle size={32} />
          <h4>WhatsApp</h4>
          <p>Recibe alertas, reportes y responde para tomar accion.</p>
        </div>
        <div className="integration-card output">
          <Mail size={32} />
          <h4>Email</h4>
          <p>Reportes detallados con graficos directo a tu bandeja.</p>
        </div>
      </div>
    </div>
  )
}

/* ─────── SLIDE 8: PRICING ─────── */
function SlidePricing() {
  return (
    <div className="slide slide-center-wide">
      <div className="slide-tag">Planes</div>
      <h2>Simple, transparente, sin letra chica</h2>
      <div className="pricing-grid">
        <div className="pricing-card">
          <div className="pricing-name">Starter</div>
          <div className="pricing-price">$29<span>/mes</span></div>
          <ul className="pricing-features">
            <li>1 fuente de datos</li>
            <li>Dashboard basico</li>
            <li>Reportes semanales</li>
            <li>50 alertas WhatsApp/mes</li>
          </ul>
          <div className="pricing-target">Para negocios que parten</div>
        </div>
        <div className="pricing-card featured">
          <div className="pricing-badge">Mas elegido</div>
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
          <div className="pricing-name">Business</div>
          <div className="pricing-price">$249<span>/mes</span></div>
          <ul className="pricing-features">
            <li>Fuentes ilimitadas</li>
            <li>Multi-usuario</li>
            <li>Integraciones custom</li>
            <li>API access</li>
            <li>Soporte prioritario</li>
          </ul>
          <div className="pricing-target">Cadenas y operaciones grandes</div>
        </div>
      </div>
      <p className="pricing-note">Todos los planes incluyen 14 dias gratis. Sin tarjeta de credito.</p>
    </div>
  )
}

/* ─────── SLIDE 9: RESULTS ─────── */
function SlideResults() {
  return (
    <div className="slide slide-center-wide">
      <div className="slide-tag">Resultados</div>
      <h2>Lo que logras con Visibilty</h2>
      <div className="results-grid">
        <div className="result-card">
          <div className="result-value">5 min</div>
          <div className="result-label">para tener tu primer dashboard</div>
          <div className="result-sub">Sube tu archivo y listo</div>
        </div>
        <div className="result-card">
          <div className="result-value">15+ hrs</div>
          <div className="result-label">que te ahorras por semana</div>
          <div className="result-sub">Cero reportes manuales</div>
        </div>
        <div className="result-card">
          <div className="result-value">85%</div>
          <div className="result-label">de insights son accionables</div>
          <div className="result-sub">No solo datos, decisiones</div>
        </div>
      </div>
      <div className="results-quote">
        <p>"Antes me demoraba medio dia haciendo reportes en Excel. Ahora me llegan solos al WhatsApp con recomendaciones claras. Game changer."</p>
        <div className="results-author">
          <div className="results-avatar">M</div>
          <div>
            <strong>Maria Lopez</strong>
            <span>Dueña, Tienda Outdoor Chile</span>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─────── SLIDE 10: CTA ─────── */
function SlideCTA() {
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
          Prueba gratis por 14 dias.<br />
          Sin tarjeta de credito. Setup en 5 minutos.
        </p>
        <div className="cta-buttons">
          <a href="/" className="deck-btn-primary">
            <Zap size={18} /> Comenzar gratis
          </a>
          <a href="mailto:hello@visibilty.com" className="deck-btn-secondary">
            <Mail size={18} /> Agendar demo
          </a>
        </div>
        <div className="cta-trust">
          <div className="cta-trust-item"><CheckCircle2 size={14} /> 14 dias gratis</div>
          <div className="cta-trust-item"><CheckCircle2 size={14} /> Sin tarjeta</div>
          <div className="cta-trust-item"><CheckCircle2 size={14} /> Setup en 5 min</div>
          <div className="cta-trust-item"><CheckCircle2 size={14} /> Cancela cuando quieras</div>
        </div>
      </div>
    </div>
  )
}

/* ─────── MAIN DECK ─────── */

const slides = [
  SlideCover,
  SlidePain,
  SlideSolution,
  SlideWhatsApp,
  SlideDashboard,
  SlideBenefits,
  SlideIntegrations,
  SlidePricing,
  SlideResults,
  SlideCTA,
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
      <div className="deck-viewport">
        <div className={`deck-slide-wrapper ${direction}`} key={current}>
          <CurrentSlide />
        </div>
      </div>

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
