import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/common/Header'
import Footer from './components/common/Footer'

// Pages
import Accueil from './pages/Accueil'
import Projets from './pages/Projets'
import FicheProjet from './pages/FicheProjet'
import DemoAventure from './pages/DemoAventure'
import PSAADRAFRA from './pages/PSAADRAFRA'
import ModelesPSAADRAFRA from './pages/ModelesPSAADRAFRA'
import Astuces from './pages/Astuces'
import Tutos from './pages/Tutos'
import ModeUrgence from './pages/ModeUrgence'
import Planning from './pages/Planning'
import MonCarnet from './pages/MonCarnet'
import CreerProjet from './pages/CreerProjet'
import APropos from './pages/APropos'
import Guide from './pages/Guide'
import FAQ from './pages/FAQ'
import Mentions from './pages/Mentions'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/projets" element={<Projets />} />
            <Route path="/projets/:id/fiche" element={<FicheProjet />} />
            <Route path="/projets/:id/demo" element={<DemoAventure />} />
            <Route path="/psaadrafra" element={<PSAADRAFRA />} />
            <Route path="/psaadrafra/modeles" element={<ModelesPSAADRAFRA />} />
            <Route path="/astuces" element={<Astuces />} />
            <Route path="/tutos" element={<Tutos />} />
            <Route path="/mode-urgence" element={<ModeUrgence />} />
            <Route path="/planning" element={<Planning />} />
            <Route path="/mon-carnet" element={<MonCarnet />} />
            <Route path="/creer-projet" element={<CreerProjet />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/mentions" element={<Mentions />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
