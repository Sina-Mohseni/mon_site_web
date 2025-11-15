import { Link } from 'react-router-dom'
import { Breadcrumb } from '../components/common/Navigation'
import Card from '../components/common/Card'
import { Tabs } from '../components/common/Navigation'
import { Heart, BookmarkPlus } from 'lucide-react'
import { useFavoris, useATester } from '../hooks/useFavoris'
import ProjetCard from '../components/projet/ProjetCard'
import projetsData from '../data/projets.json'
import { useState } from 'react'

const MonCarnet = () => {
  const { favoris } = useFavoris()
  const { aTester } = useATester()
  const [activeTab, setActiveTab] = useState('favoris')

  const projetsFavoris = projetsData.filter(p => favoris.includes(p.id))
  const projetsATester = projetsData.filter(p => aTester.includes(p.id))

  return (
    <div className="container-custom py-8">
      <Breadcrumb items={[{ label: 'Mon carnet' }]} />

      <h1 className="text-4xl font-display font-bold mb-8">Mon carnet</h1>

      <Tabs
        tabs={[
          { value: 'favoris', label: `❤️ Favoris (${favoris.length})` },
          { value: 'a-tester', label: `📌 À tester (${aTester.length})` }
        ]}
        activeTab={activeTab}
        onChange={setActiveTab}
      />

      <div className="mt-8">
        {activeTab === 'favoris' && (
          <div>
            {projetsFavoris.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projetsFavoris.map(projet => (
                  <ProjetCard key={projet.id} projet={projet} />
                ))}
              </div>
            ) : (
              <Card className="text-center py-16">
                <Heart size={48} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  Aucun favori
                </h3>
                <p className="text-gray-600 mb-4">
                  Ajoutez des projets à vos favoris pour les retrouver facilement
                </p>
                <Link to="/projets" className="text-primary-600 hover:underline font-medium">
                  Parcourir les projets
                </Link>
              </Card>
            )}
          </div>
        )}

        {activeTab === 'a-tester' && (
          <div>
            {projetsATester.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projetsATester.map(projet => (
                  <ProjetCard key={projet.id} projet={projet} />
                ))}
              </div>
            ) : (
              <Card className="text-center py-16">
                <BookmarkPlus size={48} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  Aucun projet à tester
                </h3>
                <p className="text-gray-600 mb-4">
                  Marquez des projets à tester pour les retrouver ici
                </p>
                <Link to="/projets" className="text-primary-600 hover:underline font-medium">
                  Parcourir les projets
                </Link>
              </Card>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default MonCarnet
