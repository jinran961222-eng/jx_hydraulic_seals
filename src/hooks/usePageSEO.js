import { useEffect } from 'react'

export default function usePageSEO({ title, description, keywords }) {
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = `${title} | JX Hydraulic Seals`
    }

    // Update meta description
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]')
      if (metaDescription) {
        metaDescription.setAttribute('content', description)
      } else {
        metaDescription = document.createElement('meta')
        metaDescription.setAttribute('name', 'description')
        metaDescription.setAttribute('content', description)
        document.head.appendChild(metaDescription)
      }
    }

    // Update meta keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]')
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords)
      } else {
        metaKeywords = document.createElement('meta')
        metaKeywords.setAttribute('name', 'keywords')
        metaKeywords.setAttribute('content', keywords)
        document.head.appendChild(metaKeywords)
      }
    }

    // Update Open Graph tags
    if (title) {
      let ogTitle = document.querySelector('meta[property="og:title"]')
      if (ogTitle) ogTitle.setAttribute('content', `${title} | JX Hydraulic Seals`)
    }

    if (description) {
      let ogDescription = document.querySelector('meta[property="og:description"]')
      if (ogDescription) ogDescription.setAttribute('content', description)
    }

    // Update Twitter tags
    if (title) {
      let twitterTitle = document.querySelector('meta[property="twitter:title"]')
      if (twitterTitle) twitterTitle.setAttribute('content', `${title} | JX Hydraulic Seals`)
    }

    if (description) {
      let twitterDescription = document.querySelector('meta[property="twitter:description"]')
      if (twitterDescription) twitterDescription.setAttribute('content', description)
    }
  }, [title, description, keywords])
}
