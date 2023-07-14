import Sidenav from './components/Sidenav'
import Home from './pages/Home'
import Timeline from './pages/Timeline'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import Footer from './components/Footer'
import HandleTheme from './components/HandleTheme'

function App() {

  return (
    <div>
      <Sidenav />
      <HandleTheme />
      <main>
        <Home />
        <Resume />
        <Timeline />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
