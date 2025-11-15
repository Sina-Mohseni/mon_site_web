import { useState } from 'react'
import { Breadcrumb } from '../components/common/Navigation'
import Card from '../components/common/Card'
import { ChevronDown, ChevronUp } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "Anim'Connect est-il vraiment gratuit ?",
      reponse: "Oui, 100% gratuit. Pas d'abonnement caché, pas de version premium, pas de publicité. Le site est une ressource partagée pour la communauté des animateurs."
    },
    {
      question: "Dois-je créer un compte ?",
      reponse: "Non ! Aucun compte n'est nécessaire. Toutes vos données (favoris, planning) sont stockées localement sur votre appareil."
    },
    {
      question: "Mes données sont-elles sécurisées ?",
      reponse: "Oui, car elles ne quittent jamais votre appareil. Tout est stocké en local dans votre navigateur (localStorage). Aucune donnée n'est envoyée à un serveur."
    },
    {
      question: "Que se passe-t-il si je change d'appareil ?",
      reponse: "Vos favoris et planning étant stockés localement, ils ne seront pas transférés automatiquement. Vous pourrez les recréer sur votre nouvel appareil."
    },
    {
      question: "Puis-je utiliser le site hors ligne ?",
      reponse: "Actuellement, une connexion internet est nécessaire pour charger les pages. Une version hors ligne (PWA) pourrait être développée dans le futur."
    },
    {
      question: "Les activités sont-elles adaptées à tous les âges PS-CM2 ?",
      reponse: "Chaque activité indique les niveaux recommandés et propose des adaptations par âge. Vous pouvez toujours adapter selon votre groupe."
    },
    {
      question: "Puis-je proposer mes propres activités ?",
      reponse: "Pour l'instant, vous pouvez créer et exporter vos propres fiches via 'Créer un projet'. Une fonctionnalité de partage communautaire pourrait être ajoutée plus tard."
    },
    {
      question: "Le site fonctionne-t-il sur mobile ?",
      reponse: "Oui ! Le site est pensé mobile-first et fonctionne parfaitement sur smartphone, tablette et ordinateur."
    },
    {
      question: "Puis-je exporter les fiches en PDF ?",
      reponse: "Oui, chaque fiche projet dispose d'un bouton 'Exporter en PDF'. Vous pouvez aussi utiliser la fonction d'impression de votre navigateur."
    },
    {
      question: "D'où viennent les activités proposées ?",
      reponse: "Les activités sont issues de mon expérience d'animateur, de formations, et d'échanges avec des collègues. Certaines sont des classiques adaptés, d'autres sont des créations originales."
    }
  ]

  return (
    <div className="container-custom py-8">
      <Breadcrumb items={[{ label: 'FAQ' }]} />

      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-display font-bold mb-6">Foire aux questions</h1>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="cursor-pointer" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
              <div className="flex items-start justify-between">
                <h3 className="font-semibold text-lg pr-4">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="text-primary-600 flex-shrink-0" size={24} />
                ) : (
                  <ChevronDown className="text-gray-400 flex-shrink-0" size={24} />
                )}
              </div>

              {openIndex === index && (
                <p className="text-gray-700 mt-4 pt-4 border-t border-gray-200">
                  {faq.reponse}
                </p>
              )}
            </Card>
          ))}
        </div>

        <Card className="mt-8 bg-primary-50 border-2 border-primary-200">
          <h3 className="font-semibold mb-2">Vous avez une autre question ?</h3>
          <p className="text-gray-700">
            N'hésitez pas à consulter le <a href="/guide" className="text-primary-600 hover:underline">guide d'utilisation</a> ou la page <a href="/a-propos" className="text-primary-600 hover:underline">à propos</a>.
          </p>
        </Card>
      </div>
    </div>
  )
}

export default FAQ
