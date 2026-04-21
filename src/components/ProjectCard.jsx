import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function ProjectCard({ project }) {
  const { t, i18n } = useTranslation()
  const lang = i18n.language

  return (
    <Link to={`/projects/${project.id}`} className="proj-row">
      <div>
        <div className="proj-row__name">
          {project.name}
          {project.status === 'archived' && (
            <span className="badge">{t('labels.archived')}</span>
          )}
          {project.status === 'wip' && (
            <span className="badge">{t('labels.wip')}</span>
          )}
        </div>
        <p className="proj-row__desc">
          {project.shortDesc[lang] || project.shortDesc.en}
        </p>
      </div>
      <span className="proj-row__arrow">↗</span>
    </Link>
  )
}
