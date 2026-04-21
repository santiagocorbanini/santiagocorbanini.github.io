import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function Navbar({ dark, toggleTheme }) {
  const { i18n } = useTranslation()
  const lang = i18n.language

  const setLang = (l) => i18n.changeLanguage(l)

  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">Inicio</Link>
      <div className="navbar__controls">
        {['en', 'es'].map(l => (
          <button
            key={l}
            className={`ctrl-btn ${lang === l ? 'ctrl-btn--active' : ''}`}
            onClick={() => setLang(l)}
          >
            {l.toUpperCase()}
          </button>
        ))}
        <button
          className="ctrl-btn ctrl-btn--icon"
          onClick={toggleTheme}
          title={dark ? 'Modo claro' : 'Modo oscuro'}
        >
          {dark ? '☀' : '☾'}
        </button>
      </div>
    </nav>
  )
}
