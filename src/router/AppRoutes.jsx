import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import ProjectDetail from '../pages/ProjectDetail'
import { useTheme } from './../hooks/useTheme'

export default function AppRoutes() {
    const { dark, toggle } = useTheme()

  return (
    <Routes>
      <Route path="/" element={<Home dark={dark} toggleTheme={toggle}/>} />
      <Route path="/projects/:id" element={<ProjectDetail dark={dark} toggleTheme={toggle}/>} />
    </Routes>
  )
}
