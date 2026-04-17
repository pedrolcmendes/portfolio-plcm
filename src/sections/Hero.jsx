import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__noise" />
      <div className="hero__grid" />
      <div className="hero__glow" />

      <div className="hero__content">
        <div className="hero__tag">Disponível para oportunidades</div>

        <h1 className="hero__name">
          Pedro<br />
          <span>Mendes</span>
        </h1>

        <p className="hero__role">Software Developer</p>

        <p className="hero__desc">
          Estudante de Engenharia de Software com foco em desenvolvimento web.
          Construo interfaces funcionais, bem organizadas e visualmente marcantes
          — do front-end ao back-end.
        </p>

        <div className="hero__cta">
          <a href="#projects" className="btn-primary">
            Ver Projetos
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="#contact" className="btn-outline">Entrar em Contato</a>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-num">5°</span>
            <span className="hero__stat-label">Período — Eng. Software</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-num">6+</span>
            <span className="hero__stat-label">Projetos Desenvolvidos</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-num">2</span>
            <span className="hero__stat-label">Anos de Experiência</span>
          </div>
        </div>
      </div>
    </section>
  )
}