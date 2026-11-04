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
  /** Preço em euros (por unidade). Sem preço, o cartão não mostra nenhum. */
  price?: number
  /** Aparece também na secção de produtos da página inicial. */
  featured?: boolean
}

/** Trabalho premiado: foto do bolo + foto do prémio lado a lado. */
export interface Award {
  badge: string
  title: string
  description: string
  image: string
  imageAlt: string
  certificate: string
  certificateAlt: string
}

/** Secção de produtos feitos à medida (ex.: bolos personalizados). */
export interface CustomSection {
  title: string
  intro: string
  /** Etiqueta nos cartões, ex.: "Personalizável". */
  tag: string
  note: string
  cta: string
  award?: Award
  items: Category[]
}

/** Secção extra de produtos (ex.: outros doces que não são bolachas). */
export interface ExtrasSection {
  title: string
  intro?: string
  items: Category[]
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
  products: {
    title: string
    intro: string
    /** Texto junto ao preço, ex.: "un.". */
    priceUnit: string
    items: Category[]
    extras?: ExtrasSection
    custom?: CustomSection
  }
  about: { title: string; paragraphs: string[]; gallery: string[]; portrait?: string }
  order: {
    title: string
    thanks: string
    submitLabel: string
    sentMessage: string
    errorMessage: string
    /** Endpoint de formulário (ex.: Formspree). Se vazio, abre o email do cliente. */
    formEndpoint?: string
    /** Texto inicial da mensagem quando o pedido vem de "Pedir orçamento" (bolos personalizados). */
    customCakeTemplate?: string
    labels: { name: string; email: string; phone: string; message: string }
  }
  contact: {
    title: string
    email: string
    phone: string
    phoneDisplay: string
    address: string
    /** Pesquisa usada no mapa (por defeito, a morada). Sem "Loja L"/andar: só rua, código postal e cidade. */
    mapQuery?: string
    mapTitle: string
    directionsLabel: string
    hoursTitle: string
    socialsTitle: string
  }
  hours: HourRow[]
  socials: Social[]
}
