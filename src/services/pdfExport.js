/**
 * Service d'export PDF
 * Utilise html2pdf.js pour générer des PDFs côté client
 */

/**
 * Configure et génère un PDF à partir d'un élément HTML
 */
export const generatePDF = async (element, filename = 'document.pdf', options = {}) => {
  try {
    // Import dynamique de html2pdf
    const html2pdf = (await import('html2pdf.js')).default

    const defaultOptions = {
      margin: 10,
      filename: filename,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    }

    const finalOptions = { ...defaultOptions, ...options }

    await html2pdf().set(finalOptions).from(element).save()
    return true
  } catch (error) {
    console.error('Erreur lors de la génération du PDF:', error)
    return false
  }
}

/**
 * Exporte une fiche projet en PDF
 */
export const exportFicheProjetPDF = async (projetId) => {
  const element = document.getElementById(`fiche-projet-${projetId}`)
  if (!element) {
    console.error('Élément de fiche projet introuvable')
    return false
  }

  return await generatePDF(element, `fiche-projet-${projetId}.pdf`)
}

/**
 * Exporte le planning en PDF
 */
export const exportPlanningPDF = async () => {
  const element = document.getElementById('planning-export')
  if (!element) {
    console.error('Élément de planning introuvable')
    return false
  }

  return await generatePDF(element, 'mon-planning.pdf', {
    orientation: 'landscape'
  })
}

/**
 * Méthode alternative : utiliser l'impression du navigateur
 * Plus simple mais moins de contrôle
 */
export const printElement = (elementId) => {
  const element = document.getElementById(elementId)
  if (!element) {
    console.error('Élément introuvable pour impression')
    return false
  }

  // Créer une nouvelle fenêtre pour l'impression
  const printWindow = window.open('', '_blank')
  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Impression</title>
        <style>
          body {
            font-family: 'Inter', sans-serif;
            padding: 20px;
            max-width: 800px;
            margin: 0 auto;
          }
          h1, h2, h3 {
            font-family: 'Poppins', sans-serif;
            color: #1f2937;
          }
          .no-print {
            display: none;
          }
          @media print {
            body {
              padding: 0;
            }
            .page-break {
              page-break-after: always;
            }
          }
        </style>
      </head>
      <body>
        ${element.innerHTML}
      </body>
    </html>
  `)

  printWindow.document.close()
  printWindow.focus()

  // Attendre que le contenu soit chargé avant d'imprimer
  setTimeout(() => {
    printWindow.print()
    printWindow.close()
  }, 250)

  return true
}

/**
 * Prépare un élément HTML pour l'export PDF
 * Ajoute des classes CSS spécifiques pour une meilleure mise en page
 */
export const preparePDFContent = (content) => {
  const wrapper = document.createElement('div')
  wrapper.className = 'pdf-export-content'
  wrapper.innerHTML = content

  // Ajouter des styles inline pour l'export
  wrapper.style.padding = '20px'
  wrapper.style.fontFamily = 'Arial, sans-serif'
  wrapper.style.fontSize = '12px'
  wrapper.style.lineHeight = '1.6'
  wrapper.style.color = '#000'
  wrapper.style.backgroundColor = '#fff'

  return wrapper
}
