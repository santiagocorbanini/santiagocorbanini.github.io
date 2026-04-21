import { useParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import projects from '../data/projects'

export default function ProjectDetail({ dark, toggleTheme }) {
  const { id } = useParams()
  const { t, i18n } = useTranslation()
  const lang = i18n.language
  const setLang = (l) => i18n.changeLanguage(l)

  const project = projects.find(p => p.id === id)

  if (!project) {
    return (
      <div className="project-detail">
        <Link to="/" className="project-detail__back">{t('labels.backHome')}</Link>
        <h1 style={{ color: 'var(--muted)' }}>404 — Project not found</h1>
      </div>
    )
  }

  return (
    <div className="project-detail">

        <div className="header">
            <Link to="/" className="project-detail__back">
                {t('labels.backHome')}
            </Link>
            <div className="header__actions">
                {['en', 'es'].map(l => (
                <button
                    key={l}
                    className={`lang-pill project-pill ${lang === l ? 'lang-pill--active' : ''}`}
                    onClick={() => setLang(l)}
                >
                    {l.toUpperCase()}
                </button>
                ))}
                <div className="divider" />
                <button
                    className="ctrl-btn ctrl-btn--icon"
                    onClick={toggleTheme}
                    title={dark ? 'Modo claro' : 'Modo oscuro'}
                    >
                    {dark ? '☀' : '☾'}
                </button>
            </div>
      </div>

      <h1 className="project-detail__title">
        <span>{project.name}</span>
      </h1>

      <p className="project-detail__year">{project.year}</p>

      <p className="project-detail__desc">
        {project.longDesc[lang] || project.longDesc.en}
      </p>

      <div className="project-detail__stack">
        {project.stack.map(s => (
          <span key={s} className="skill-pill">{s}</span>
        ))}
      </div>

      {project.url && (
        <a
          href={project.url}
          className="project-detail__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('labels.viewProject')} ↗
        </a>
      )}
    </div>
  )
}
