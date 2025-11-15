import { Breadcrumb } from '../components/common/Navigation'
import Card from '../components/common/Card'
import psaadrafraData from '../data/psaadrafra-exemples.json'

const ModelesPSAADRAFRA = () => {
  const { exemples } = psaadrafraData

  return (
    <div className="container-custom py-8">
      <Breadcrumb items={[
        { path: '/psaadrafra', label: 'PSAADRAFRA' },
        { label: 'Modèles' }
      ]} />

      <h1 className="text-4xl font-display font-bold mb-8">Modèles et exemples</h1>

      <div className="space-y-8">
        {exemples.map(exemple => (
          <Card key={exemple.id}>
            <h2 className="text-2xl font-display font-bold mb-4">{exemple.titre}</h2>
            <div className="mb-4">
              <span className="badge bg-primary-100 text-primary-800">{exemple.niveau}</span>
            </div>

            <div className="space-y-3 text-sm">
              <div><strong>P - Présentation:</strong> {exemple.P}</div>
              <div><strong>S - Sujet:</strong> {exemple.S}</div>
              <div><strong>A - Âge:</strong> {exemple.A}</div>
              <div><strong>A - Appropriation:</strong> {exemple.A2}</div>
              <div><strong>D - Déroulement:</strong> {exemple.D}</div>
              <div><strong>R - Rangement:</strong> {exemple.R}</div>
              <div><strong>A - Analyse:</strong> {exemple.A3}</div>
              <div><strong>F - Feedback:</strong> {exemple.F}</div>
              <div><strong>R - Réactivation:</strong> {exemple.R2}</div>
              <div><strong>A - Amélioration:</strong> {exemple.A4}</div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default ModelesPSAADRAFRA
