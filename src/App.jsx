import './i18n'
import './index.css'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { useTheme } from './hooks/useTheme'
import Navbar from './components/Navbar'
import AppRoutes from './router/AppRoutes'

export default function App() {
  const { dark, toggle } = useTheme()

  return (
    <BrowserRouter>
      <div className="app">
        <div className="container">
          <AppRoutes dark={dark} toggleTheme={toggle}/>
        </div>
      </div>
    </BrowserRouter>
  )
}
