import { MetadataRoute } from 'next'

const BASE_URL = 'https://myatlantapulse.com'

// Category slugs served by /atlanta/[category]
const CATEGORIES = ['events', 'food', 'nightlife', 'things-to-do', 'music', 'arts']

// Categories that have a dedicated /atlanta/[category]/faq page
const FAQ_CATEGORIES = ['events', 'food']

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: 'daily', priority: 1.0 },
    { url: `${BASE_URL}/atlanta`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/newsletter`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/archive`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${BASE_URL}/hidden-gems`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/community`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/pulse-plus`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/advertise`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ]

  const categoryPages: MetadataRoute.Sitemap = CATEGORIES.map(c => ({
    url: `${BASE_URL}/atlanta/${c}`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.8
  }))

  const categoryFAQPages: MetadataRoute.Sitemap = FAQ_CATEGORIES.map(c => ({
    url: `${BASE_URL}/atlanta/${c}/faq`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.6
  }))

  return [...staticPages, ...categoryPages, ...categoryFAQPages]
}
