import { Breadcrumb } from '../components/common/Navigation'
import Card from '../components/common/Card'

const Guide = () => {
  return (
    <div className="container-custom py-8">
      <Breadcrumb items={[{ label: 'Guide d\'utilisation' }]} />

      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-display font-bold mb-6">Comment utiliser Anim'Connect ?</h1>

        <div className="space-y-6">
          <Card>
            <h2 className="text-2xl font-display font-bold mb-4">🔍 Trouver une activité</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Allez dans "Projets" pour parcourir le catalogue complet</li>
              <li>Utilisez les filtres pour affiner par âge, durée, lieu, etc.</li>
              <li>Cliquez sur "Fiche" pour voir le détail complet du projet</li>
              <li>Cliquez sur "Démo" pour vivre une version interactive du projet</li>
            </ol>
          </Card>

          <Card>
            <h2 className="text-2xl font-display font-bold mb-4">⚡ Mode Urgence</h2>
            <p className="text-gray-700 mb-4">
              Besoin d'une activité maintenant ? Le mode urgence est fait pour ça !
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Sélectionnez les niveaux de votre groupe</li>
              <li>Indiquez le temps et le lieu disponibles</li>
              <li>Précisez le matériel dont vous disposez</li>
              <li>Le site vous propose 1 à 3 activités adaptées</li>
            </ol>
          </Card>

          <Card>
            <h2 className="text-2xl font-display font-bold mb-4">❤️ Favoris et À tester</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Cliquez sur le cœur pour ajouter un projet à vos favoris</li>
              <li>Utilisez "À tester" pour marquer les projets que vous voulez essayer</li>
              <li>Retrouvez toutes vos sélections dans "Mon carnet"</li>
            </ul>
          </Card>

          <Card>
            <h2 className="text-2xl font-display font-bold mb-4">📅 Planning</h2>
            <p className="text-gray-700 mb-4">
              Organisez votre journée avec les projets qui vous plaisent :
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Depuis une fiche projet, ajoutez-la à un créneau (matin, midi, après-midi, soir)</li>
              <li>Allez dans "Planning" pour voir votre journée complète</li>
              <li>Imprimez ou exportez votre planning en PDF</li>
            </ol>
          </Card>

          <Card>
            <h2 className="text-2xl font-display font-bold mb-4">📄 Créer un projet</h2>
            <p className="text-gray-700 mb-4">
              Vous avez une idée d'activité ? Créez votre propre fiche :
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Allez dans "Créer un projet"</li>
              <li>Remplissez le formulaire (titre, description, niveaux, etc.)</li>
              <li>Visualisez l'aperçu en temps réel</li>
              <li>Exportez votre fiche en PDF</li>
            </ol>
          </Card>

          <Card>
            <h2 className="text-2xl font-display font-bold mb-4">💾 Vos données</h2>
            <p className="text-gray-700">
              Toutes vos données (favoris, planning, projets personnels) sont stockées
              localement sur votre appareil. Aucune donnée n'est envoyée sur internet.
              Si vous changez d'appareil ou videz vos données de navigation, vous perdrez
              ces informations.
            </p>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Guide
