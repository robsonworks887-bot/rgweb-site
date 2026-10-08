import { useState } from 'react'

// ── ICONS ──────────────────────────────────────────────────────────────────

function IconCode() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  )
}
function IconVideo() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" />
    </svg>
  )
}
function IconBot() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /><circle cx="12" cy="16" r="1" />
    </svg>
  )
}
function IconGamepad() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="6" y1="12" x2="10" y2="12" /><line x1="8" y1="10" x2="8" y2="14" /><circle cx="15" cy="13" r="1" /><circle cx="18" cy="11" r="1" />
      <path d="M21 16H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2z" />
    </svg>
  )
}
function IconHeadset() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>
  )
}
function IconCheck() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
function IconArrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  )
}
function IconWhatsapp() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  )
}

// ── LEAD QUALIFY FORM ──────────────────────────────────────────────────────

const PROJECT_TYPES = [
  { id: 'web', label: 'Site / Landing Page', icon: <IconCode />, desc: 'Sites institucionais, landing pages, sistemas web' },
  { id: 'video', label: 'Edição de Vídeos', icon: <IconVideo />, desc: 'Reels, Shorts, YouTube, conteúdo profissional' },
  { id: 'automation', label: 'Automação & Scripts', icon: <IconBot />, desc: 'Scripts, bots, integrações e processos automáticos' },
  { id: 'roblox', label: 'Roblox / Games', icon: <IconGamepad />, desc: 'Itens, sistemas e ferramentas para TheSandBox' },
  { id: 'consulting', label: 'Suporte & Consultoria', icon: <IconHeadset />, desc: 'Consultoria técnica, análise e estratégia digital' },
]

const BUDGETS = [
  { id: 'under500', label: 'Até R$ 500' },
  { id: '500-1500', label: 'R$ 500 – R$ 1.500' },
  { id: '1500-5000', label: 'R$ 1.500 – R$ 5.000' },
  { id: 'over5000', label: 'Acima de R$ 5.000' },
  { id: 'flexible', label: 'Flexível / Em aberto' },
]

const TIMELINES = [
  { id: 'urgent', label: 'Urgente (menos de 1 semana)' },
  { id: 'soon', label: '1 a 4 semanas' },
  { id: 'month', label: '1 a 3 meses' },
  { id: 'flexible', label: 'Sem prazo definido' },
]

type FormData = {
  projectType: string
  budget: string
  timeline: string
  name: string
  email: string
  whatsapp: string
  description: string
}

function LeadForm() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState<FormData>({
    projectType: '', budget: '', timeline: '',
    name: '', email: '', whatsapp: '', description: '',
  })

  const totalSteps = 4

  const canProceed = () => {
    if (step === 1) return form.projectType !== ''
    if (step === 2) return form.budget !== '' && form.timeline !== ''
    if (step === 3) return form.name.trim() !== '' && (form.email.trim() !== '' || form.whatsapp.trim() !== '')
    return true
  }

  const handleSubmit = () => {
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center text-center py-16 px-6 gap-6">
        <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #7c3aed, #00e676)' }}>
          <IconCheck />
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Recebemos sua solicitação!
          </h3>
          <p className="text-gray-400 max-w-md">
            Obrigado, <strong className="text-white">{form.name}</strong>! Vou analisar seu projeto e entrar em contato em breve pelo canal informado.
          </p>
        </div>
        <a
          href={`https://wa.me/5511999999999?text=Olá Robson, sou ${encodeURIComponent(form.name)} e gostaria de conversar sobre meu projeto.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-opacity hover:opacity-90"
          style={{ background: '#00e676', color: '#0a0a0d' }}
        >
          <IconWhatsapp /> Chamar no WhatsApp agora
        </a>
      </div>
    )
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress */}
      <div className="flex items-center gap-2 mb-8">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div key={i} className="flex-1 h-1 rounded-full transition-all duration-500"
            style={{ background: i < step ? 'linear-gradient(90deg, #7c3aed, #9d5cf6)' : '#1e1e2e' }} />
        ))}
      </div>

      {/* Step 1 — Project type */}
      {step === 1 && (
        <div className="space-y-4">
          <div className="mb-6">
            <p className="text-xs uppercase tracking-widest font-semibold mb-2" style={{ color: '#9d5cf6' }}>Passo 1 de 4</p>
            <h3 className="text-2xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Que tipo de projeto você precisa?
            </h3>
            <p className="text-gray-400 mt-1 text-sm">Selecione a categoria que melhor representa sua necessidade.</p>
          </div>
          <div className="grid gap-3">
            {PROJECT_TYPES.map(pt => (
              <button
                key={pt.id}
                onClick={() => setForm(f => ({ ...f, projectType: pt.id }))}
                className="flex items-center gap-4 p-4 rounded-xl border text-left transition-all duration-200 group"
                style={{
                  background: form.projectType === pt.id ? 'rgba(124,58,237,0.15)' : '#111118',
                  borderColor: form.projectType === pt.id ? '#7c3aed' : '#1e1e2e',
                  color: '#fff',
                }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: form.projectType === pt.id ? '#7c3aed' : '#1a1a24', color: form.projectType === pt.id ? '#fff' : '#8b8ba0' }}>
                  {pt.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm">{pt.label}</div>
                  <div className="text-xs mt-0.5" style={{ color: '#8b8ba0' }}>{pt.desc}</div>
                </div>
                {form.projectType === pt.id && (
                  <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center" style={{ background: '#7c3aed' }}>
                    <IconCheck />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2 — Budget & Timeline */}
      {step === 2 && (
        <div className="space-y-6">
          <div className="mb-6">
            <p className="text-xs uppercase tracking-widest font-semibold mb-2" style={{ color: '#9d5cf6' }}>Passo 2 de 4</p>
            <h3 className="text-2xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Orçamento e prazo
            </h3>
            <p className="text-gray-400 mt-1 text-sm">Isso me ajuda a entender a escala e prioridade do projeto.</p>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-3" style={{ color: '#c4c4d4' }}>Qual é o seu orçamento estimado?</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {BUDGETS.map(b => (
                <button key={b.id} onClick={() => setForm(f => ({ ...f, budget: b.id }))}
                  className="px-4 py-3 rounded-xl border text-sm font-medium text-left transition-all duration-200"
                  style={{
                    background: form.budget === b.id ? 'rgba(124,58,237,0.15)' : '#111118',
                    borderColor: form.budget === b.id ? '#7c3aed' : '#1e1e2e',
                    color: form.budget === b.id ? '#fff' : '#8b8ba0',
                  }}>
                  {b.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-3" style={{ color: '#c4c4d4' }}>Qual é o prazo ideal?</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {TIMELINES.map(t => (
                <button key={t.id} onClick={() => setForm(f => ({ ...f, timeline: t.id }))}
                  className="px-4 py-3 rounded-xl border text-sm font-medium text-left transition-all duration-200"
                  style={{
                    background: form.timeline === t.id ? 'rgba(124,58,237,0.15)' : '#111118',
                    borderColor: form.timeline === t.id ? '#7c3aed' : '#1e1e2e',
                    color: form.timeline === t.id ? '#fff' : '#8b8ba0',
                  }}>
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Step 3 — Contact */}
      {step === 3 && (
        <div className="space-y-5">
          <div className="mb-6">
            <p className="text-xs uppercase tracking-widest font-semibold mb-2" style={{ color: '#9d5cf6' }}>Passo 3 de 4</p>
            <h3 className="text-2xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Como posso te chamar?
            </h3>
            <p className="text-gray-400 mt-1 text-sm">Seus dados ficam comigo, sem spam.</p>
          </div>

          {[
            { key: 'name', label: 'Seu nome *', placeholder: 'Ex: João Silva', type: 'text' },
            { key: 'email', label: 'E-mail', placeholder: 'seuemail@exemplo.com', type: 'email' },
            { key: 'whatsapp', label: 'WhatsApp', placeholder: '(11) 99999-9999', type: 'tel' },
          ].map(field => (
            <div key={field.key}>
              <label className="block text-sm font-semibold mb-2" style={{ color: '#c4c4d4' }}>{field.label}</label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                value={form[field.key as keyof FormData]}
                onChange={e => setForm(f => ({ ...f, [field.key]: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                style={{
                  background: '#111118',
                  border: '1px solid #1e1e2e',
                  color: '#fff',
                }}
                onFocus={e => { e.target.style.borderColor = '#7c3aed' }}
                onBlur={e => { e.target.style.borderColor = '#1e1e2e' }}
              />
            </div>
          ))}
          <p className="text-xs" style={{ color: '#8b8ba0' }}>* Pelo menos e-mail ou WhatsApp é obrigatório para contato.</p>
        </div>
      )}

      {/* Step 4 — Description */}
      {step === 4 && (
        <div className="space-y-5">
          <div className="mb-6">
            <p className="text-xs uppercase tracking-widest font-semibold mb-2" style={{ color: '#9d5cf6' }}>Passo 4 de 4</p>
            <h3 className="text-2xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Conte mais sobre o projeto
            </h3>
            <p className="text-gray-400 mt-1 text-sm">Quanto mais detalhes, melhor posso te ajudar. (opcional)</p>
          </div>

          {/* Summary */}
          <div className="rounded-xl p-4 space-y-2" style={{ background: '#111118', border: '1px solid #1e1e2e' }}>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#8b8ba0' }}>Resumo do seu projeto</p>
            {[
              { label: 'Tipo', value: PROJECT_TYPES.find(p => p.id === form.projectType)?.label },
              { label: 'Orçamento', value: BUDGETS.find(b => b.id === form.budget)?.label },
              { label: 'Prazo', value: TIMELINES.find(t => t.id === form.timeline)?.label },
              { label: 'Contato', value: form.name },
            ].map(row => (
              <div key={row.label} className="flex justify-between text-sm">
                <span style={{ color: '#8b8ba0' }}>{row.label}</span>
                <span className="font-medium">{row.value}</span>
              </div>
            ))}
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2" style={{ color: '#c4c4d4' }}>Descreva seu projeto</label>
            <textarea
              rows={5}
              placeholder="Ex: Preciso de um site para minha empresa com página de contato, portfólio e integração com WhatsApp..."
              value={form.description}
              onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 resize-none"
              style={{ background: '#111118', border: '1px solid #1e1e2e', color: '#fff' }}
              onFocus={e => { e.target.style.borderColor = '#7c3aed' }}
              onBlur={e => { e.target.style.borderColor = '#1e1e2e' }}
            />
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex items-center justify-between mt-8 pt-6" style={{ borderTop: '1px solid #1e1e2e' }}>
        {step > 1 ? (
          <button onClick={() => setStep(s => s - 1)}
            className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-80"
            style={{ background: '#111118', border: '1px solid #1e1e2e', color: '#8b8ba0' }}>
            ← Voltar
          </button>
        ) : <div />}

        {step < totalSteps ? (
          <button
            onClick={() => canProceed() && setStep(s => s + 1)}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
            style={{
              background: canProceed() ? 'linear-gradient(135deg, #7c3aed, #9d5cf6)' : '#1e1e2e',
              color: canProceed() ? '#fff' : '#8b8ba0',
              cursor: canProceed() ? 'pointer' : 'not-allowed',
            }}>
            Continuar <IconArrow />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #00e676)', color: '#fff' }}>
            Enviar projeto <IconArrow />
          </button>
        )}
      </div>
    </div>
  )
}

// ── MAIN SITE ──────────────────────────────────────────────────────────────

const SERVICES = [
  { icon: <IconCode />, color: '#7c3aed', title: 'Desenvolvimento Web', desc: 'Sites, landing pages e sistemas web personalizados com foco em performance e experiência.' },
  { icon: <IconVideo />, color: '#00e676', title: 'Edição de Vídeos', desc: 'Edições profissionais para Reels, Shorts, YouTube e conteúdo que prende atenção.' },
  { icon: <IconBot />, color: '#f59e0b', title: 'Automações & Scripts', desc: 'Scripts que automatizam sistemas, backup, raspagem de dados e muito mais.' },
  { icon: <IconGamepad />, color: '#3b82f6', title: 'Roblox & TheSandBox', desc: 'Scripts, sistemas e itens personalizados para Roblox e TheSandBox. Do zero ao avançado.' },
  { icon: <IconHeadset />, color: '#ec4899', title: 'Suporte & Consultoria', desc: 'Suporte técnico, consultoria e auxílio para tirar seu projeto do papel.' },
]

const STATS = [
  { value: '+30', label: 'Projetos entregues' },
  { value: '+20', label: 'Clientes satisfeitos' },
  { value: '+3 Anos', label: 'De experiência' },
  { value: '100%', label: 'Comprometimento' },
]

export default function App() {
  const [navOpen, setNavOpen] = useState(false)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setNavOpen(false)
  }

  return (
    <div style={{ background: '#0a0a0d', color: '#fff', fontFamily: 'Inter, sans-serif' }}>
      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
        style={{ background: 'rgba(10,10,13,0.85)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #1e1e2e' }}>
        <span className="font-bold text-lg tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#9d5cf6' }}>
          RGWEBMASTER
        </span>
        <div className="hidden md:flex items-center gap-6 text-sm" style={{ color: '#8b8ba0' }}>
          {['inicio', 'servicos', 'projetos', 'qualificar'].map(id => (
            <button key={id} onClick={() => scrollTo(id)}
              className="hover:text-white transition-colors capitalize">
              {id === 'qualificar' ? 'Conversar' : id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </div>
        <button
          onClick={() => scrollTo('qualificar')}
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:opacity-90"
          style={{ background: 'linear-gradient(135deg, #7c3aed, #9d5cf6)', color: '#fff' }}>
          Vamos Conversar →
        </button>
        <button className="md:hidden text-gray-400" onClick={() => setNavOpen(o => !o)}>☰</button>
      </nav>

      {navOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 text-xl"
          style={{ background: 'rgba(10,10,13,0.97)' }}>
          <button className="absolute top-5 right-6 text-gray-400 text-2xl" onClick={() => setNavOpen(false)}>✕</button>
          {['inicio', 'servicos', 'projetos', 'qualificar'].map(id => (
            <button key={id} onClick={() => scrollTo(id)} className="font-semibold hover:text-purple-400 transition-colors">
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </div>
      )}

      {/* ── HERO ── */}
      <section id="inicio" className="relative min-h-screen flex items-center pt-20 pb-16 px-6 md:px-12 overflow-hidden">
        {/* bg glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
            style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }} />
          <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full opacity-10 blur-3xl"
            style={{ background: 'radial-gradient(circle, #00e676, transparent)' }} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest font-semibold mb-4" style={{ color: '#9d5cf6' }}>Olá! Eu sou</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Robson Guimarães<br />
              <span style={{ color: '#8b8ba0', fontSize: '0.75em', fontWeight: 500 }}>(RGWebmaster)</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Transformo ideias em{' '}
              <span style={{ background: 'linear-gradient(90deg, #7c3aed, #00e676)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                soluções digitais reais.
              </span>
            </h2>
            <p className="text-base mb-8 max-w-md" style={{ color: '#8b8ba0', lineHeight: 1.7 }}>
              Desenvolvedor Full Stack, editor de vídeo e especialista em análise de dados. Crio sites, sistemas, scripts e conteúdos que geram resultados e economizam tempo.
            </p>
            <div className="flex flex-wrap gap-3">
              <button onClick={() => scrollTo('projetos')}
                className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #9d5cf6)', color: '#fff' }}>
                Ver Projetos →
              </button>
              <button onClick={() => scrollTo('qualificar')}
                className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all hover:opacity-90"
                style={{ background: '#111118', border: '1px solid #1e1e2e', color: '#00e676' }}>
                <IconWhatsapp /> Falar Comigo
              </button>
            </div>
            <div className="flex flex-wrap gap-3 mt-8">
              {['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python', 'PHP'].map(tech => (
                <span key={tech} className="text-xs px-3 py-1 rounded-full font-mono"
                  style={{ background: '#111118', border: '1px solid #1e1e2e', color: '#8b8ba0' }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Skills grid */}
          <div className="hidden md:grid grid-cols-2 gap-3">
            {SERVICES.map(s => (
              <div key={s.title} className="p-5 rounded-xl" style={{ background: '#111118', border: '1px solid #1e1e2e' }}>
                <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                  style={{ background: s.color + '22', color: s.color }}>
                  {s.icon}
                </div>
                <p className="text-sm font-semibold">{s.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="servicos" className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: '#9d5cf6' }}>O que eu faço</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Soluções que entregam resultado.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map(s => (
              <div key={s.title} className="p-6 rounded-2xl transition-all duration-200 hover:translate-y-[-2px]"
                style={{ background: '#111118', border: '1px solid #1e1e2e' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: s.color + '22', color: s.color }}>
                  {s.icon}
                </div>
                <h3 className="font-semibold mb-2">{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#8b8ba0' }}>{s.desc}</p>
                <button onClick={() => scrollTo('qualificar')}
                  className="mt-4 text-xs font-semibold transition-colors hover:opacity-80"
                  style={{ color: s.color }}>
                  Saiba mais →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projetos" className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: '#9d5cf6' }}>Projetos em destaque</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Alguns projetos que tenho orgulho.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Agência Digital', type: 'Site institucional', color: '#7c3aed', tag: 'Web' },
              { title: 'Dashboard Financeiro', type: 'Sistema web', color: '#3b82f6', tag: 'SaaS' },
              { title: 'Loja de Itens – Roblox', type: 'Loja completa', color: '#f59e0b', tag: 'Game' },
              { title: 'Edição – Reels', type: 'Conteúdo para redes sociais', color: '#00e676', tag: 'Vídeo' },
              { title: 'Bot de Automação', type: 'Automação WhatsApp', color: '#ec4899', tag: 'Script' },
              { title: 'Landing Page SaaS', type: 'Conversão e vendas', color: '#9d5cf6', tag: 'Web' },
            ].map(p => (
              <div key={p.title} className="group relative p-6 rounded-2xl overflow-hidden transition-all duration-300 hover:translate-y-[-3px]"
                style={{ background: '#111118', border: '1px solid #1e1e2e' }}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: `linear-gradient(135deg, ${p.color}15, transparent)` }} />
                <div className="relative">
                  <div className="h-24 rounded-xl mb-4 flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg, ${p.color}33, ${p.color}11)` }}>
                    <span className="text-3xl font-black opacity-30" style={{ color: p.color, fontFamily: 'Space Grotesk' }}>
                      {p.tag}
                    </span>
                  </div>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-sm">{p.title}</h3>
                      <p className="text-xs mt-0.5" style={{ color: '#8b8ba0' }}>{p.type}</p>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full font-semibold"
                      style={{ background: p.color + '22', color: p.color }}>
                      {p.tag}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-16 px-6 md:px-12" style={{ background: '#0e0e16', borderTop: '1px solid #1e1e2e', borderBottom: '1px solid #1e1e2e' }}>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map(s => (
            <div key={s.value}>
              <div className="text-3xl font-bold mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif', background: 'linear-gradient(135deg, #9d5cf6, #00e676)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                {s.value}
              </div>
              <div className="text-sm" style={{ color: '#8b8ba0' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── LEAD QUALIFY ── */}
      <section id="qualificar" className="py-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: '#9d5cf6' }}>Vamos trabalhar juntos</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Me conta sobre seu projeto
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: '#8b8ba0' }}>
              Responda algumas perguntas rápidas para eu entender sua necessidade e te dar uma resposta mais assertiva.
            </p>
          </div>

          {/* Form card */}
          <div className="relative rounded-2xl overflow-hidden">
            {/* gradient border */}
            <div className="absolute inset-0 rounded-2xl p-px" style={{ background: 'linear-gradient(135deg, #7c3aed44, #00e67622, #1e1e2e)', zIndex: 0 }}>
              <div className="w-full h-full rounded-2xl" style={{ background: '#0e0e16' }} />
            </div>
            <div className="relative z-10 p-8 md:p-10" style={{ background: 'rgba(14,14,22,0.97)' }}>
              <LeadForm />
            </div>
          </div>

          {/* Alternative CTA */}
          <div className="mt-8 text-center">
            <p className="text-sm mb-3" style={{ color: '#8b8ba0' }}>Prefere falar diretamente?</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:opacity-90"
                style={{ background: '#00e676', color: '#0a0a0d' }}>
                <IconWhatsapp /> WhatsApp
              </a>
              <a href="mailto:contato@rgwebmaster.com"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:opacity-90"
                style={{ background: '#111118', border: '1px solid #1e1e2e', color: '#8b8ba0' }}>
                ✉ E-mail
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-12 px-6 md:px-12" style={{ borderTop: '1px solid #1e1e2e' }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="font-bold text-lg" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#9d5cf6' }}>
            RGWEBMASTER
          </span>
          <div className="flex flex-wrap gap-6 text-sm" style={{ color: '#8b8ba0' }}>
            {['Início', 'Serviços', 'Projetos', 'Contato'].map(link => (
              <a key={link} href="#" className="hover:text-white transition-colors">{link}</a>
            ))}
          </div>
          <p className="text-xs" style={{ color: '#8b8ba0' }}>
            © 2026 RGWebmaster. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
