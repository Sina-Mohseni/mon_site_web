import { useState } from 'react'
import { Breadcrumb } from '../components/common/Navigation'
import Card from '../components/common/Card'
import Button from '../components/common/Button'
import { Download, Save } from 'lucide-react'
import { NIVEAUX, LIEUX } from '../utils/constants'
import { printElement } from '../services/pdfExport'
import { generateId } from '../utils/helpers'

const CreerProjet = () => {
  const [projet, setProjet] = useState({
    titre: '',
    description: '',
    niveaux: [],
    duree: 30,
    lieu: 'interieur',
    materiel: '',
    objectifs: '',
    deroulement: ''
  })

  const handleChange = (field, value) => {
    setProjet({ ...projet, [field]: value })
  }

  const handleExport = () => {
    if (projet.titre) {
      printElement('preview-projet')
    } else {
      alert('Veuillez remplir au moins le titre du projet')
    }
  }

  return (
    <div className="container-custom py-8">
      <Breadcrumb items={[{ label: 'Créer un projet' }]} />

      <h1 className="text-4xl font-display font-bold mb-8">Créer un projet rapide</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <Card>
            <h2 className="text-2xl font-display font-bold mb-6">Formulaire</h2>

            <div className="space-y-4">
              <div>
                <label className="block font-semibold mb-2">Titre *</label>
                <input
                  type="text"
                  value={projet.titre}
                  onChange={(e) => handleChange('titre', e.target.value)}
                  className="input"
                  placeholder="Ex: La chasse au trésor"
                />
              </div>

              <div>
                <label className="block font-semibold mb-2">Description</label>
                <textarea
                  value={projet.description}
                  onChange={(e) => handleChange('description', e.target.value)}
                  className="input"
                  rows={3}
                  placeholder="Décrivez brièvement l'activité"
                />
              </div>

              <div>
                <label className="block font-semibold mb-2">Niveaux</label>
                <div className="flex flex-wrap gap-2">
                  {NIVEAUX.map(n => (
                    <button
                      key={n.value}
                      onClick={() => {
                        const niveaux = projet.niveaux.includes(n.value)
                          ? projet.niveaux.filter(niv => niv !== n.value)
                          : [...projet.niveaux, n.value]
                        handleChange('niveaux', niveaux)
                      }}
                      className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${projet.niveaux.includes(n.value) ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                    >
                      {n.value}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-2">Durée (minutes)</label>
                <input
                  type="number"
                  value={projet.duree}
                  onChange={(e) => handleChange('duree', parseInt(e.target.value) || 0)}
                  className="input"
                  min="5"
                  step="5"
                />
              </div>

              <div>
                <label className="block font-semibold mb-2">Lieu</label>
                <select
                  value={projet.lieu}
                  onChange={(e) => handleChange('lieu', e.target.value)}
                  className="input"
                >
                  {LIEUX.map(l => (
                    <option key={l.value} value={l.value}>{l.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-semibold mb-2">Matériel (un par ligne)</label>
                <textarea
                  value={projet.materiel}
                  onChange={(e) => handleChange('materiel', e.target.value)}
                  className="input"
                  rows={4}
                  placeholder="Ballon&#10;Plots&#10;Sifflet"
                />
              </div>

              <div>
                <label className="block font-semibold mb-2">Objectifs</label>
                <textarea
                  value={projet.objectifs}
                  onChange={(e) => handleChange('objectifs', e.target.value)}
                  className="input"
                  rows={3}
                  placeholder="Objectifs pédagogiques et compétences visées"
                />
              </div>

              <div>
                <label className="block font-semibold mb-2">Déroulement</label>
                <textarea
                  value={projet.deroulement}
                  onChange={(e) => handleChange('deroulement', e.target.value)}
                  className="input"
                  rows={6}
                  placeholder="Décrivez les étapes de l'activité"
                />
              </div>

              <Button fullWidth size="lg" onClick={handleExport} leftIcon={<Download size={20} />}>
                Exporter en PDF
              </Button>
            </div>
          </Card>
        </div>

        <div>
          <div className="sticky top-24">
            <Card>
              <h2 className="text-2xl font-display font-bold mb-4">Aperçu</h2>

              <div id="preview-projet" className="space-y-4">
                <div>
                  <h1 className="text-2xl font-bold">{projet.titre || 'Titre du projet'}</h1>
                  {projet.description && <p className="text-gray-600 mt-2">{projet.description}</p>}
                </div>

                {projet.niveaux.length > 0 && (
                  <div>
                    <strong>Niveaux:</strong> {projet.niveaux.join(', ')}
                  </div>
                )}

                <div>
                  <strong>Durée:</strong> {projet.duree} minutes
                </div>

                <div>
                  <strong>Lieu:</strong> {LIEUX.find(l => l.value === projet.lieu)?.label}
                </div>

                {projet.materiel && (
                  <div>
                    <strong>Matériel:</strong>
                    <ul className="list-disc list-inside mt-1">
                      {projet.materiel.split('\n').filter(m => m.trim()).map((m, i) => (
                        <li key={i}>{m}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {projet.objectifs && (
                  <div>
                    <strong>Objectifs:</strong>
                    <p className="mt-1">{projet.objectifs}</p>
                  </div>
                )}

                {projet.deroulement && (
                  <div>
                    <strong>Déroulement:</strong>
                    <p className="mt-1 whitespace-pre-line">{projet.deroulement}</p>
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreerProjet
