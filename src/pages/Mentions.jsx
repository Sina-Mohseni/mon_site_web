import { Breadcrumb } from '../components/common/Navigation'
import Card from '../components/common/Card'

const Mentions = () => {
  return (
    <div className="container-custom py-8">
      <Breadcrumb items={[{ label: 'Mentions légales' }]} />

      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-display font-bold mb-6">Mentions légales</h1>

        <div className="space-y-6">
          <Card>
            <h2 className="text-2xl font-display font-bold mb-4">Éditeur du site</h2>
            <p className="text-gray-700">
              Anim'Connect<br />
              Site web personnel<br />
              France
            </p>
          </Card>

          <Card>
            <h2 className="text-2xl font-display font-bold mb-4">Hébergement</h2>
            <p className="text-gray-700">
              Ce site est hébergé par des services de déploiement web modernes
              (Netlify, Vercel ou GitHub Pages selon la configuration).
            </p>
          </Card>

          <Card>
            <h2 className="text-2xl font-display font-bold mb-4">Données personnelles</h2>
            <p className="text-gray-700 mb-4">
              Anim'Connect ne collecte aucune donnée personnelle. Le site fonctionne
              entièrement côté client (navigateur) sans aucun serveur backend.
            </p>
            <p className="text-gray-700 mb-4">
              Les informations que vous enregistrez (favoris, planning, projets personnels)
              sont stockées localement sur votre appareil via le localStorage de votre
              navigateur. Elles ne sont jamais transmises à un serveur.
            </p>
            <p className="text-gray-700">
              Aucun cookie de tracking ou de publicité n'est utilisé.
            </p>
          </Card>

          <Card>
            <h2 className="text-2xl font-display font-bold mb-4">Propriété intellectuelle</h2>
            <p className="text-gray-700 mb-4">
              Le contenu de ce site (textes, images, structure) est la propriété de
              l'éditeur, sauf mention contraire.
            </p>
            <p className="text-gray-700">
              Les fiches d'activités sont mises à disposition à titre gratuit pour
              un usage personnel ou professionnel dans le cadre de l'animation.
              Toute reproduction ou diffusion à des fins commerciales est interdite
              sans autorisation préalable.
            </p>
          </Card>

          <Card>
            <h2 className="text-2xl font-display font-bold mb-4">Responsabilité</h2>
            <p className="text-gray-700 mb-4">
              Les informations fournies sur ce site le sont à titre indicatif.
              L'éditeur s'efforce de maintenir des informations à jour et exactes,
              mais ne peut garantir l'exactitude, la précision ou l'exhaustivité
              des informations mises à disposition.
            </p>
            <p className="text-gray-700">
              Les activités proposées doivent être adaptées par l'animateur en
              fonction de son contexte, de son groupe et des règles de sécurité
              en vigueur. L'éditeur ne saurait être tenu responsable de tout
              dommage résultant de l'utilisation des activités proposées.
            </p>
          </Card>

          <Card>
            <h2 className="text-2xl font-display font-bold mb-4">Crédits</h2>
            <p className="text-gray-700">
              Site développé avec React, Vite et Tailwind CSS.<br />
              Icônes : Lucide React<br />
              Polices : Google Fonts (Inter, Poppins)
            </p>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Mentions
