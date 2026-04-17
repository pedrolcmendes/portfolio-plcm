import { useScrollReveal } from '../components/useScrollReveal'
import { projects } from '../data/projects'
import './Projects.css'

export default function Projects() {
  const headerRef = useScrollReveal()

  return (
    <section id="projects" className="projects">
      <div ref={headerRef} className="reveal projects__header">
        <div className="section-tag">Portfólio</div>
        <h2 className="section-title">Projetos</h2>
      </div>

      <div className="projects__grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}

// Componente filho — recebe dados via props
// Cada card é um componente isolado, mais fácil de manter
function ProjectCard({ project, index }) {
  const ref = useScrollReveal()

  return (
    <div
      ref={ref}
      className="reveal project-card"
      style={{ transitionDelay: `${(index % 3) * 0.1}s` }}
    >
      <div className="project-card__num">{project.id}</div>

      <div className="project-card__stack">
        {project.stack.map((tech) => (
          <span key={tech} className="stack-badge">{tech}</span>
        ))}
      </div>

      <h3 className="project-card__name">{project.name}</h3>
      <p className="project-card__desc">{project.desc}</p>

      <div className="project-card__footer">
        {project.link ? (
          <a
            href={project.link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            {project.link.label} <span className="project-link__arrow">↗</span>
          </a>
        ) : <span />}

        {project.badge && (
          <span className="project-badge">{project.badge}</span>
        )}
      </div>
    </div>
  )
}