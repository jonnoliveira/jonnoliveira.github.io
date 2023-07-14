import Sidenav from './components/Sidenav'
import Home from './pages/Home'
import Timeline from './pages/Timeline'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Resume from './pages/Resume'

function App() {

  return (
    <div>
      <Sidenav />
      <Home />
      <Resume />
      <Timeline />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
