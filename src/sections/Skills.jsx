import { useScrollReveal } from '../components/useScrollReveal'
import { skills } from '../data/skills'
import './Skills.css'

export default function Skills() {
  const headerRef = useScrollReveal()
  const gridRef   = useScrollReveal()

  return (
    <section id="skills" className="skills">
      <div ref={headerRef} className="reveal skills__header">
        <div>
          <div className="section-tag">Habilidades</div>
          <h2 className="section-title">Tech Stack</h2>
        </div>
        <p className="skills__note">Tracejado = em aprendizado ativo</p>
      </div>

      <div ref={gridRef} className="reveal reveal--delay-1 skills__grid">
        {/* .map() — itera o array e retorna um elemento JSX por item */}
        {skills.map((group) => (
          <div key={group.group} className="skill-group">
            <div className="skill-group__name">{group.group}</div>
            <div className="skill-group__tags">
              {group.items.map((item) => (
                <span
                  key={item.name}
                  className={`skill-tag ${item.learning ? 'skill-tag--learning' : ''}`}
                >
                  {item.name}
                </span>
              ))}
            </div>
            {group.learning && (
              <p className="skill-group__learning">{group.learning}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}