import type { Metadata } from 'next';

export const siteMetadata: Metadata = {
  title: 'Squeako — Team Chat, Calls, Meetings & Tasks for Indian Teams | Slack & Teams Alternative',
  description:
    "Squeako is an all-in-one team communication app for Indian startups and SMBs — chat, calls, meetings, tasks, presence and org hierarchy in one app. Up to 70% cheaper than Slack & Teams. INR billing, GST invoice, data in India. Free to start.",
  keywords:
    'team communication app, Slack alternative India, Microsoft Teams alternative, business chat app, team chat India, video calling for business, affordable team collaboration, Flock alternative, Pumble alternative, SMB communication software',
  robots: 'index, follow',
  other: {
    'theme-color': '#E8571F',
  },
  alternates: {
    canonical: 'https://squeako.app/',
  },
  openGraph: {
    type: 'website',
    siteName: 'Squeako',
    title: 'Squeako — One app for team chat, calls, meetings & tasks',
    description:
      'Everything Slack, Teams and Zoom do, at a price built for Indian startups and SMBs. Up to 70% cheaper. Free to start.',
    url: 'https://squeako.app/',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Squeako — Team chat, calls & meetings for Indian teams',
    description:
      'Chat, calls, meetings, tasks and org hierarchy in one affordable app. Built for Indian startups & SMBs.',
  },
};

// SoftwareApplication JSON-LD
export const softwareAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Squeako',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web, Android, iOS',
  description:
    'All-in-one team communication app — chat, calls, meetings, tasks, presence and org hierarchy — for Indian startups and SMBs.',
  offers: [
    { '@type': 'Offer', name: 'Free', price: '0', priceCurrency: 'INR' },
    { '@type': 'Offer', name: 'Growth', price: '99', priceCurrency: 'INR' },
    { '@type': 'Offer', name: 'Business', price: '199', priceCurrency: 'INR' },
  ],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', ratingCount: '640' },
};

// FAQPage JSON-LD
export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Squeako cheaper than Slack or Microsoft Teams?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Squeako's Growth plan is INR 99 per user per month, while comparable Slack and Microsoft 365 plans run INR 250 to 750. Most teams save 60-70%.",
      },
    },
    {
      '@type': 'Question',
      name: 'Where is my data stored?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "In Indian data centres, aligned with India's DPDP Act, with a GST invoice in INR.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can clients and guests join my workspace?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you can invite clients and external guests into specific groups only.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Squeako work on mobile?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, on the web plus native Android and iOS apps.',
      },
    },
  ],
};
