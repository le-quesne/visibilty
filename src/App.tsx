import { useState, useEffect } from 'react'
import {
  ArrowRight,
  BarChart3,
  Bell,
  Check,
  FileSpreadsheet,
  LineChart,
  Menu,
  MessageCircle,
  Mail,
  ShoppingBag,
  Sparkles,
  TrendingUp,
  Zap,
  Target,
  Eye,
} from 'lucide-react'
import IPhoneWhatsApp from './components/IPhoneWhatsApp'
import './App.css'

const useCases = [
  {
    id: 'ecommerce',
    label: 'E-commerce',
    title: 'Conoce tu tienda como nunca antes',
    desc: 'Conecta Shopify y recibe insights accionables sobre productos, inventario y tendencias de venta directamente en tu WhatsApp.',
    bullets: [
      'Productos estrella y los que debes descontinuar',
      'Alertas de stock bajo antes de que pierdas ventas',
      'Tendencias semanales con recomendaciones claras',
    ],
    bars: [85, 60, 45, 90, 70, 55, 80],
  },
  {
    id: 'retail',
    label: 'Retail',
    title: 'Tu inventario bajo control total',
    desc: 'Sube tu Excel de inventario y obtiene un dashboard que te dice exactamente que hacer: que reponer, que liquidar, que promover.',
    bullets: [
      'Analisis de rotacion por categoria',
      'Prediccion de demanda basada en historicos',
      'Reportes automaticos a tu equipo por mail',
    ],
    bars: [70, 90, 50, 65, 85, 40, 75],
  },
  {
    id: 'services',
    label: 'Servicios',
    title: 'Mide lo que importa de tu negocio',
    desc: 'Desde ventas hasta satisfaccion del cliente, transforma tus datos dispersos en decisiones rapidas.',
    bullets: [
      'KPIs personalizados para tu tipo de negocio',
      'Comparativas mes a mes automaticas',
      'Resumen semanal directo a tu WhatsApp',
    ],
    bars: [55, 75, 90, 60, 80, 70, 65],
  },
]

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [activeUseCase, setActiveUseCase] = useState('ecommerce')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const currentUseCase = useCases.find((u) => u.id === activeUseCase)!

  return (
    <>
      {/* NAVBAR */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          <a href="#" className="logo">
            <div className="logo-icon">
              <LineChart size={18} />
            </div>
            Visibilty
          </a>
          <ul className="nav-links">
            <li><a href="#como-funciona">Como funciona</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#casos">Casos de uso</a></li>
            <li><a href="#demo" className="nav-cta">Probar gratis</a></li>
          </ul>
          <button className="mobile-menu-btn">
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-badge">
          <span className="dot" />
          Convierte datos en decisiones
        </div>
        <h1>
          Tu data tiene
          <br />
          <span className="gradient-text">las respuestas</span>
        </h1>
        <p className="hero-subtitle">
          Conecta tu Excel o Shopify y obtiene dashboards inteligentes, insights
          accionables y recomendaciones directo a tu WhatsApp o mail.
        </p>
        <div className="hero-ctas">
          <a href="#demo" className="btn-primary">
            Comenzar gratis <ArrowRight size={18} />
          </a>
          <a href="#como-funciona" className="btn-secondary">
            Ver como funciona
          </a>
        </div>

        <div className="hero-visual">
          <div className="dashboard-preview">
            <div className="dashboard-header">
              <span className="dashboard-dot" />
              <span className="dashboard-dot" />
              <span className="dashboard-dot" />
            </div>
            <div className="dashboard-grid">
              <div className="dash-card">
                <div className="dash-card-label">Ventas del mes</div>
                <div className="dash-card-value">$4.2M</div>
                <div className="dash-card-change">
                  <TrendingUp size={14} /> +23% vs mes anterior
                </div>
              </div>
              <div className="dash-card">
                <div className="dash-card-label">Productos activos</div>
                <div className="dash-card-value">1,847</div>
                <div className="dash-card-change">
                  <TrendingUp size={14} /> 12 nuevos esta semana
                </div>
              </div>
              <div className="dash-card">
                <div className="dash-card-label">Tasa de conversion</div>
                <div className="dash-card-value">3.8%</div>
                <div className="dash-card-change">
                  <TrendingUp size={14} /> +0.4pp vs promedio
                </div>
              </div>
              <div className="dash-chart">
                {[65, 45, 80, 55, 90, 70, 85, 60, 95, 50, 75, 88].map(
                  (h, i) => (
                    <div
                      key={i}
                      className="chart-bar"
                      style={{ height: `${h}%` }}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOGOS */}
      <div className="logos-section">
        <div className="logos-inner">
          <div className="logos-label">Se integra con tus herramientas</div>
          <div className="logos-grid">
            <div className="logo-item">
              <ShoppingBag size={24} /> Shopify
            </div>
            <div className="logo-item">
              <FileSpreadsheet size={24} /> Excel / CSV
            </div>
            <div className="logo-item">
              <MessageCircle size={24} /> WhatsApp
            </div>
            <div className="logo-item">
              <Mail size={24} /> Email
            </div>
            <div className="logo-item">
              <BarChart3 size={24} /> Google Sheets
            </div>
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <section className="section" id="como-funciona">
        <div className="section-inner">
          <div className="section-label">Como funciona</div>
          <h2 className="section-title">
            De datos crudos a decisiones
            <br />
            en 3 pasos
          </h2>
          <p className="section-subtitle">
            No necesitas ser analista de datos. Nosotros hacemos el trabajo
            pesado por ti.
          </p>

          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Conecta tu data</h3>
              <p>
                Sube tu archivo Excel, conecta tu Shopify o pega el link de tu
                Google Sheet. Soportamos multiples formatos.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Analisis con IA</h3>
              <p>
                Nuestra IA analiza tu data, identifica patrones, anomalias y
                oportunidades que no se ven a simple vista.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Recibe insights</h3>
              <p>
                Dashboards interactivos y recomendaciones accionables directo a
                tu WhatsApp o mail, cuando tu quieras.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IPHONE WHATSAPP */}
      <section className="phone-section section-dark">
        <div className="phone-section-inner">
          <div className="phone-section-text">
            <div className="section-label">Insights en tu bolsillo</div>
            <h2 className="section-title">
              Tu negocio te habla
              <br />
              <span style={{
                background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                por WhatsApp
              </span>
            </h2>
            <p className="section-subtitle">
              Recibe alertas, reportes y recomendaciones accionables directo en tu chat. Responde para tomar accion al instante.
            </p>
            <ul className="phone-feature-list">
              <li className="phone-feature-item">
                <div className="phone-feature-icon">
                  <Bell size={18} />
                </div>
                <div>
                  <h4>Alertas inteligentes</h4>
                  <p>Stock bajo, anomalias en ventas, oportunidades detectadas</p>
                </div>
              </li>
              <li className="phone-feature-item">
                <div className="phone-feature-icon">
                  <BarChart3 size={18} />
                </div>
                <div>
                  <h4>Reportes automaticos</h4>
                  <p>Diarios, semanales o mensuales, tu decides la frecuencia</p>
                </div>
              </li>
              <li className="phone-feature-item">
                <div className="phone-feature-icon">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <h4>Conversacional</h4>
                  <p>Responde al mensaje para tomar accion inmediata</p>
                </div>
              </li>
            </ul>
          </div>
          <IPhoneWhatsApp />
        </div>
      </section>

      {/* FEATURES */}
      <section className="section" id="features">
        <div className="section-inner">
          <div className="section-label">Features</div>
          <h2 className="section-title">
            Inteligencia accionable,
            <br />
            no solo graficos bonitos
          </h2>
          <p className="section-subtitle">
            Cada insight viene con una recomendacion clara de que hacer.
          </p>

          <div className="features-grid">
            <div className="feature-card large">
              <div>
                <div className="feature-icon">
                  <Sparkles size={24} />
                </div>
                <h3>Insights con IA que te dicen que hacer</h3>
                <p>
                  No te mostramos solo numeros. Te decimos "tu producto X esta
                  cayendo un 30%, considera hacer una promo este viernes" o "el
                  stock de Y se agota en 5 dias, repon ahora".
                </p>
              </div>
              <div className="feature-visual">
                <div className="insight-row">
                  <span className="tag tag-urgent">Urgente</span>
                  <span>Stock de "Zapatilla Runner X" se agota en 3 dias</span>
                </div>
                <div className="insight-row">
                  <span className="tag tag-growth">Crecimiento</span>
                  <span>Categoria "Outdoor" subio 45% esta semana</span>
                </div>
                <div className="insight-row">
                  <span className="tag tag-info">Oportunidad</span>
                  <span>
                    Margen en "Accesorios" es 2x mayor que promedio
                  </span>
                </div>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <MessageCircle size={24} />
              </div>
              <h3>Alertas a tu WhatsApp</h3>
              <p>
                Recibe las metricas importantes y alertas criticas directo en tu
                chat. Sin apps extras, sin dashboards que nadie revisa.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Bell size={24} />
              </div>
              <h3>Reportes automaticos</h3>
              <p>
                Configura reportes diarios, semanales o mensuales. Llegan a tu
                mail o WhatsApp con el resumen que tu necesitas.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Target size={24} />
              </div>
              <h3>Dashboards personalizados</h3>
              <p>
                Cada negocio es distinto. Los dashboards se adaptan a tu
                industria, tus KPIs y lo que realmente necesitas medir.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Eye size={24} />
              </div>
              <h3>Deteccion de anomalias</h3>
              <p>
                La IA detecta cambios inusuales en tus metricas antes de que se
                conviertan en problemas. Anticipate, no reacciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="section" id="casos">
        <div className="section-inner">
          <div className="section-label">Casos de uso</div>
          <h2 className="section-title">
            Para todo tipo de negocio
          </h2>
          <p className="section-subtitle">
            Desde tiendas online hasta servicios profesionales, tus datos
            trabajan para ti.
          </p>

          <div className="usecases-tabs">
            {useCases.map((uc) => (
              <button
                key={uc.id}
                className={`usecase-tab ${activeUseCase === uc.id ? 'active' : ''}`}
                onClick={() => setActiveUseCase(uc.id)}
              >
                {uc.label}
              </button>
            ))}
          </div>

          <div className="usecase-content">
            <div className="usecase-text">
              <h3>{currentUseCase.title}</h3>
              <p>{currentUseCase.desc}</p>
              <ul className="usecase-bullets">
                {currentUseCase.bullets.map((b, i) => (
                  <li key={i}>
                    <Check size={18} /> {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="usecase-visual">
              <div className="usecase-mockup">
                {currentUseCase.bars.map((w, i) => (
                  <div key={i} className="mockup-row">
                    <div
                      className={`mockup-bar ${i % 3 === 0 ? 'accent' : ''}`}
                      style={{ width: `${w}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section section-dark">
        <div className="section-inner">
          <div style={{ textAlign: 'center' }}>
            <div className="section-label">Resultados</div>
            <h2 className="section-title" style={{ maxWidth: 600, margin: '0 auto 20px' }}>
              Los numeros hablan
            </h2>
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-value">5min</div>
              <div className="stat-label">
                Para tener tu primer dashboard listo
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-value">10x</div>
              <div className="stat-label">
                Mas rapido que analizar datos manualmente
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-value">85%</div>
              <div className="stat-label">
                De insights son accionables inmediatamente
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="demo">
        <h2 className="section-title">
          Deja de adivinar.
          <br />
          <span style={{
            background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Empieza a decidir.
          </span>
        </h2>
        <p className="section-subtitle" style={{ margin: '0 auto 40px' }}>
          Sube tu primer archivo o conecta tu Shopify. Es gratis, sin tarjeta de
          credito.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#" className="btn-primary">
            <Zap size={18} /> Comenzar gratis
          </a>
          <a href="#" className="btn-secondary">
            Agendar demo
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-copy">
            &copy; 2026 Visibilty. Todos los derechos reservados.
          </div>
          <ul className="footer-links">
            <li><a href="#">Terminos</a></li>
            <li><a href="#">Privacidad</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default App
