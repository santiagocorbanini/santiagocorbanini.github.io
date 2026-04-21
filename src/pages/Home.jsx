import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import Section from '../components/Section'
import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects'
import GitHubIcon from '../assets/icons/github'
import LinkedinIcon from '../assets/icons/linkedin'
import MailIcon from '../assets/icons/mail'
import SunIcon from '../assets/icons/sun'
import MoonIcon from '../assets/icons/moon'

const socials = [
  { label: 'GitHub', icon: <GitHubIcon />, url: 'https://github.com/santiagocorbanini' },
  { label: 'LinkedIn', icon: <LinkedinIcon />, url: 'https://linkedin.com/in/santiagocorbanini/' },
  { label: 'Email', icon: <MailIcon />, url: 'mailto:santiagocorbanini@gmail.com' },
]

export default function Home({ dark, toggleTheme }) {
  const { t, i18n } = useTranslation()
  const lang = i18n.language
  const setLang = (l) => i18n.changeLanguage(l)

  const experience = t('experience', { returnObjects: true })
  const skills = t('skills', { returnObjects: true })
  const education = t('education', { returnObjects: true })
  const languages = t('languages', { returnObjects: true })

  return (
    <div>
      {/* Hero */}
      <div className="hero">
        <p className="hero__role">{t('role')}</p>
        <h1 className="hero__name">
          Santiago <span>Corbanini</span>
        </h1>

        <div className="hero__socials">
          {socials.map(s => (
            <a key={s.label} href={s.url} className="social-icon" title={s.label} target="_blank" rel="noopener noreferrer">
              {s.icon}
            </a>
          ))}
          <div className="divider" />
          {['en', 'es'].map(l => (
            <button
              key={l}
              
              className={`social-icon lang-pill ${lang === l ? 'social-icon--active lang-pill--active' : ''}`}
              onClick={() => setLang(l)}
            >
              {l.toUpperCase()}
            </button>
          ))}
          <div className="divider" />
            <button
                className="social-icon ctrl-btn ctrl-btn--icon"
                onClick={toggleTheme}
                title={dark ? 'Modo claro' : 'Modo oscuro'}
            >
                {dark ? '☀' : '☾'}
            </button>
        </div>

        <p className="hero__bio">{t('bio1')}</p>
        <p className="hero__bio">{t('bio2')}</p>
      </div>

      {/* Experience */}
      <Section title={t('sections.experience')}>
        {experience.map((e, i) => (
            <div key={i} className="exp-item">
                <div className="exp-item__header">
                <span className="exp-item__role">{e.role}</span>
                <span className="exp-item__period">{e.period}</span>
                </div>

                <div className="exp-item__company">
                {e.company} · {e.location}
                </div>

                <ul className="exp-item__desc">
                {e.desc.map((item, idx) => (
                    <li key={idx}>{item}</li>
                ))}
                </ul>
            </div>
        ))}
      </Section>

      {/* Projects */}
      <Section title={t('sections.projects')}>
        {projects.map(p => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </Section>

      {/* Skills */}
      <Section title={t('sections.skills')}>
        <div className="skills-grid">
          {skills.map(s => (
            <span key={s} className="skill-pill">{s}</span>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section title={t('sections.education')}>
        {education.map((e, i) => (
          <div key={i} className="edu-item">
            <div className="edu-item__degree">{e.degree}</div>
            <div className="edu-item__meta">{e.school} · {e.year}</div>
          </div>
        ))}
      </Section>

      {/* Languages */}
      <Section title={t('sections.languages')}>
        <div className="lang-cards">
          {languages.map((l, i) => (
            <div key={i} className="lang-card">
              <div className="lang-card__name">{l.lang}</div>
              <div className="lang-card__level">{l.level}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section title={t('sections.contact')}>
        <div className="contact-links">
          {socials.map(s => (
            <a key={s.label} href={s.url} className="contact-link" target="_blank" rel="noopener noreferrer">
              {s.label} ↗
            </a>
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer className="footer">
        <span>© 2026 Santiago Corbanini. {t('footer')}</span>
        <span className="footer__brand"></span>
      </footer>
    </div>
  )
}
