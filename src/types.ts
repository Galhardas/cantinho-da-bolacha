// Tudo o que muda de cliente para cliente vive neste formato.
// Para um site novo: copiar src/data/site.ts e preencher.

export interface NavItem {
  label: string
  to: string
}

export interface Category {
  title: string
  description?: string
  image: string
  /** Aparece também na secção de produtos da página inicial. */
  featured?: boolean
}

export interface HourRow {
  day: string
  hours: string
}

export interface Social {
  type: 'facebook' | 'instagram'
  url: string
}

export interface Theme {
  primary: string
  primaryDark: string
  background: string
  surface: string
  text: string
  muted: string
  fontHeading: string
  fontBody: string
}

export interface SiteConfig {
  name: string
  tagline: string
  theme: Theme
  nav: NavItem[]
  hero: { image: string; title: string; subtitle: string }
  home: {
    productsTitle: string
    productsCta: string
    aboutTitle: string
    aboutSummary: string
    aboutCta: string
    aboutImage: string
    infoTitle: string
  }
  products: { title: string; intro: string; items: Category[] }
  about: { title: string; paragraphs: string[]; gallery: string[]; portrait?: string }
  order: {
    title: string
    thanks: string
    submitLabel: string
    sentMessage: string
    errorMessage: string
    /** Endpoint de formulário (ex.: Formspree). Se vazio, abre o email do cliente. */
    formEndpoint?: string
    labels: { name: string; email: string; phone: string; message: string }
  }
  contact: {
    title: string
    email: string
    phone: string
    phoneDisplay: string
    address: string
    hoursTitle: string
    socialsTitle: string
  }
  hours: HourRow[]
  socials: Social[]
}
