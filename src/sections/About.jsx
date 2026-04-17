import { useScrollReveal } from '../components/useScrollReveal'
import photo from '../assets/photo.jpg'
import './About.css'

const experiences = [
  {
    role: 'Estagiário — Análise de Dados',
    company: 'ROQT',
    period: '6 meses',
    desc: 'Desenvolvimento de dashboards em Power BI para financeiro, comercial e marketing. Foco em Data Visualization e storytelling com dados.',
  },
  {
    role: 'Suporte Técnico & Telemarketing',
    company: 'Inova Fibra',
    period: '10 meses',
    desc: 'Atendimento técnico, resolução de problemas e comunicação com clientes. Empatia, organização e trabalho em equipe.',
  },
  {
    role: 'Co-Fundador & Desenvolvedor',
    company: 'SWS — Storm Web & Systems',
    period: 'Em andamento',
    desc: 'Empresa de soluções digitais modernas. Landing pages, sistemas e soluções web de alto impacto para negócios.',
  },
]

export default function About() {
  const textRef  = useScrollReveal()
  const cardsRef = useScrollReveal()

  return (
    <section id="about" className="about">
      <div ref={textRef} className="reveal about__text">
        <div className="section-tag">Sobre mim</div>
        <h2 className="section-title">Código &amp;<br />Criatividade</h2>

        {/* Foto + texto lado a lado */}
        <div className="about__intro">
          <div className="about__photo-wrap">
            <img src={photo} alt="Pedro Mendes" className="about__photo" />
            <div className="about__photo-border" />
          </div>
          <div className="about__bio">
            <p>
              Sou estudante de <strong>Engenharia de Software</strong> apaixonado
              por desenvolvimento web. Tenho grande interesse em construir interfaces
              que sejam não só funcionais, mas também organizadas e visualmente claras.
            </p>
            <p>
              Passei pela <strong>Inova Fibra</strong> com suporte técnico e pela{' '}
              <strong>ROQT</strong> como estagiário em análise de dados, desenvolvendo
              dashboards com Power BI — o que fortaleceu minha visão analítica.
            </p>
            <p>
              Fora do código, pratico <strong>basquete, futebol, tênis, natação e corrida</strong>{' '}
              — esportes que me ensinam disciplina, foco e trabalho em equipe.
            </p>
          </div>
        </div>
      </div>

      <div ref={cardsRef} className="reveal reveal--delay-2 about__cards">
        {experiences.map((exp) => (
          // key é obrigatório em listas no React — identifica cada item
          <div key={exp.company} className="exp-card">
            <div className="exp-card__role">{exp.role}</div>
            <div className="exp-card__company">{exp.company}</div>
            <div className="exp-card__period">{exp.period}</div>
            <div className="exp-card__desc">{exp.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}