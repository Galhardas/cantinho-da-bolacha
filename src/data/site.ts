import type { Category, SiteConfig } from '../types'

// Conteúdo do cliente. Para um novo site: copiar este ficheiro, trocar os textos,
// imagens e cores. Os componentes não precisam de ser alterados.
//
// NOTA: a galeria e o retrato da página "Sobre Nós" ainda apontam para o Wix. Antes de dar o site
// como terminado, descarrega essas imagens para /public/images e troca os URLs por "/images/...".

const wix = (id: string) => `https://static.wixstatic.com/media/${id}`

const bolo = (file: string) => `/images/produtos/bolos/${file}`

const elena = (file: string) => `/images/elena/${file}`

// Fotos de produtos:  public/images/produtos/<pasta>/NN - <title>.webp
// (NN = número com 2 dígitos, <title> = exatamente o mesmo texto do título, com acentos).
// Ao mudar um título, muda o nome do ficheiro; ao mudar a ordem, o número do ficheiro acompanha o 1.º argumento.
// Evitar no título caracteres que o Windows não aceita em nomes de ficheiro:  \ / : * ? " < > |
const foto = (pasta: string, n: number, title: string, sufixo = '') =>
  `/images/produtos/${pasta}/${String(n).padStart(2, '0')} - ${title}${sufixo}.webp`

// Bolachas. Argumentos: número da foto, título, descrição, preço em € por unidade, destaque na página inicial (true).
const bolacha = (n: number, title: string, description: string, price?: number, featured = false): Category => ({
  title,
  description,
  price,
  image: foto('bolachas', n, title),
  featured,
})

// Outros doces (não são bolachas nem bolos personalizados).
const outro = (n: number, title: string, description: string, price?: number): Category => ({
  title,
  description,
  price,
  image: foto('outros', n, title),
})

// Bolos personalizados: sem preço (é sob orçamento).
const boloPersonalizado = (n: number, title: string, description: string): Category => ({
  title,
  description,
  image: foto('bolos', n, title),
})

// Preços da lista da Elena. Sem preço = ainda por confirmar (o cartão não mostra preço).
const cookies: Category[] = [
  bolacha(1, 'Pistácio e Chocolate Branco', 'Bolacha com pistácio e chocolate branco.', 1.2, true),
  bolacha(2, 'Amêndoa, Avelã e Chocolate', 'Bolacha crocante de avelã recheada com creme de chocolate.', 1.4),
  bolacha(3, 'Avelã e Nutella', 'Com coração de Nutella e avelã triturada.', 0.95, true),
  bolacha(4, 'Caramelo Salgado', 'Coberta de chocolate, com coração de caramelo.', 1.2, true),
  bolacha(5, 'Ferrero Rocher', 'Bolacha de chocolate estilo Ferrero Rocher.', 1.3),
  bolacha(6, 'Kinder Bueno', 'Bolacha de chocolate estilo Kinder Bueno.', 1.3),
  bolacha(7, 'Lima e Menta', 'Bolacha de lima e menta.', 0.9, true),
  bolacha(8, 'Alperce e Chocolate Branco', 'Com doce de alperce e chocolate branco.', 1.05),
  bolacha(9, 'Papoila e Limão', 'Bolacha de papoila, com curd de limão.', 1.2, true),
  bolacha(10, 'Pistácio e Frutos Vermelhos', 'Bolacha de pistácio com doce de frutos vermelhos.'),
  bolacha(11, 'Pistácio e Framboesa', 'Glacê branco, pistácio e framboesa.', 1.05, true),
  bolacha(12, 'Raffaello', 'Bolacha de coco estilo Raffaello.', 1.4, true),
  bolacha(13, 'Red Velvet', 'Bolachas em forma de coração red velvet.', 1.35, true),
]

const outros: Category[] = [
  outro(1, 'Croissant', 'Mini croissants polvilhados com açúcar.'),
]

const bolosPersonalizados: Category[] = [
  boloPersonalizado(2, 'Frozen', 'Bolo de aniversário com personagens pintadas à mão e pirulitos de isomalte.'),
  boloPersonalizado(3, 'Casamento', 'Bolo de vários andares com renda, flores de açúcar e pintura à mão.'),
  boloPersonalizado(4, 'Fundo do Mar', 'Dois andares com corais, conchas e areia modelados em pasta de açúcar.'),
]

export const site: SiteConfig = {
  name: 'Cantinho da Bolacha',
  tagline: 'Doces Artesanais',

  theme: {
    primary: '#b5446e',
    primaryDark: '#8c3354',
    background: '#fff9f5',
    surface: '#ffffff',
    text: '#3b2a2f',
    muted: '#7a6a6e',
    fontHeading: "'Playfair Display', Georgia, serif",
    fontBody: "'Inter', system-ui, sans-serif",
  },

  nav: [
    { label: 'Início', to: '/' },
    { label: 'Produtos', to: '/produtos' },
    { label: 'Encomendas', to: '/encomendas' },
    { label: 'Sobre Nós', to: '/sobre-nos' },
  ],

  hero: {
    image: bolo('Bolo - Aniversário Fundo.jpeg'),
    title: 'Cantinho da Bolacha',
    subtitle: 'Doces Artesanais',
  },

  home: {
    productsTitle: 'Os Nossos Produtos',
    productsCta: 'Mais Produtos',
    aboutTitle: 'Sobre Nós',
    aboutSummary:
      'O meu nome é Elena Golemanova, sou natural da Búlgaria, cidade de Ruse e conclui o ensino secundário em Tecnologia Culinária e Bartender. Desde a adolescência gosto da área de culinária, principalmente a pastelaria, onde mais tarde me especializei em doces artesanais búlgaros. Com o tempo, transformei um pequeno sonho em realidade e estou muito orgulhosa que os meus doces conseguem tocar as vossas almas. Atualmente, tenho uma pastelaria acolhedora, onde consigo imaginar, criar e tornar realidade doces artesanais em arte, deixando a minha marca pessoal.',
    aboutCta: 'Ver Mais',
    aboutImage: elena('Bolo - Grande 1 c Elena.jpeg'),
    infoTitle: 'O Nosso Cantinho',
  },

  products: {
    title: 'Os Nossos Produtos',
    intro:
      'Bolachas artesanais feitas com carinho, para oferecer ou para adoçar o seu dia.',
    priceUnit: 'un.',
    items: cookies,
    extras: {
      title: 'Outras Delícias',
      intro: 'Para além das bolachas, também temos:',
      items: outros,
    },
    custom: {
      title: 'Bolos Personalizados',
      intro:
        'Cada bolo é feito à medida: o tema, os sabores e o tamanho são combinados consigo. Estes são alguns dos nossos trabalhos.',
      tag: 'Personalizável',
      note: 'Preço sob orçamento, consoante o tamanho e a decoração.',
      cta: 'Pedir orçamento',
      award: {
        badge: 'Vencedor · Cake Star Portugal 2023',
        title: 'Circo',
        description:
          'Bolo vencedor da categoria Bolos de Celebração no Cake Star Portugal 2023. Cada detalhe é modelado à mão, do carrossel ao palhaço.',
        image: foto('bolos', 1, 'Circo'),
        imageAlt: 'Bolo Circo, em vários andares, com carrossel, macaco e palhaço',
        certificate: foto('bolos', 1, 'Circo', ' - Prémio'),
        certificateAlt: 'Certificado de vencedora da categoria Bolos de Celebração do Cake Star Portugal',
      },
      items: bolosPersonalizados,
    },
  },

  about: {
    title: 'A Nossa História',
    paragraphs: [
      'O meu nome é Elena Golemanova, sou natural da Búlgaria, cidade de Ruse e conclui o ensino secundário em Tecnologia Culinária e Bartender. Desde a adolescência gosto da área de culinária, principalmente a pastelaria, onde mais tarde me especializei em doces artesanais búlgaros.',
      'Desde 2015 habito em Portugal, onde comecei a explorar mais aprofundadamente a pastelaria, nomeadamente, confeitaria, realizando diversos cursos sobre técnicas de decoração e pintura de bolachas e bolos, modelagem, macarons, cakepops, cakesicles, trabalhos com isomalte entre outros.',
      'Já participei em concursos internacionais, tais como, Art Cake Bulgária 2021 e 2022 nas categorias “Bolo de Celebração” e “Bolo de Casamento”, onde obtive 2 medalhas de bronze e Cake Star Portugal 2023 na categoria “Bolo de Celebração”, onde venci e abri portas para concursos mundiais. Adoro desafiar-me e participar nos concursos para mostrar e expressar a minha arte na área da confeitaria.',
      'Com o tempo, transformei um pequeno sonho em realidade e estou muito orgulhosa que os meus doces conseguem tocar as vossas almas. Atualmente, tenho uma pastelaria acolhedora, onde consigo imaginar, criar e tornar realidade doces artesanais em arte, deixando a minha marca pessoal.',
    ],
    gallery: [
      wix('b25591_2790fd3a23db403793dbf2c3c1c62723~mv2_d_3000_1946_s_2.jpg'),
      wix('b25591_89a9544354da4226913c3727baf2a742~mv2_d_3000_1688_s_2.jpg'),
      wix('b25591_24a35ec53c4a4d41a0da9c7b7cd6d2d3~mv2_d_3000_1965_s_2.jpg'),
      wix('b25591_f1ab68320b444a4ca3cc0b7dd2284bf5~mv2_d_3000_4500_s_4_2.jpg'),
      wix('11062b_557b08f38b5f4eeb98b2060f3c025460~mv2.jpg'),
    ],
    portrait: wix('11062b_d3035e46ddb74c469f4fc1bf6c858a73~mv2.jpg'),
  },

  order: {
    title: 'Faça o seu pedido!',
    thanks: 'Obrigado pela preferência',
    submitLabel: 'Submeter Pedido',
    sentMessage: 'Pedido enviado! Entraremos em contacto consigo em breve.',
    errorMessage: 'Não foi possível enviar o pedido. Tente novamente ou contacte-nos por telefone.',
    // Cria um formulário em formspree.io e cola aqui o endpoint, ex.: 'https://formspree.io/f/xxxxxxx'
    formEndpoint: '',
    customCakeTemplate:
      'Pedido de bolo personalizado\n\nTema:\nNúmero de pessoas:\nData pretendida:\nSabor ou recheio:\nOutras indicações:\n',
    labels: {
      name: 'Nome Completo',
      email: 'Email',
      phone: 'Contacto Telefónico',
      message: 'Faça o pedido (indique número de bolachas, bolos, etc)',
    },
  },

  contact: {
    title: 'Contactos',
    email: 'bolachasfaro@gmail.com',
    phone: '+351920057783',
    phoneDisplay: '920 057 783',
    address: 'Praça dos Poetas, Loja L, 8000-236 Faro',
    mapQuery: 'Praça dos Poetas, 8000-236 Faro, Portugal',
    mapTitle: 'Localização da loja',
    directionsLabel: 'Como chegar',
    hoursTitle: 'Horários',
    socialsTitle: 'Redes Sociais',
  },

  hours: [
    { day: 'Segunda', hours: '09h30 - 19h00' },
    { day: 'Terça', hours: '09h30 - 19h00' },
    { day: 'Quarta', hours: '09h30 - 19h00' },
    { day: 'Quinta', hours: '09h30 - 19h00' },
    { day: 'Sexta', hours: '09h30 - 17h00' },
    { day: 'Sábado', hours: '11h30 - 14h00' },
    { day: 'Domingo', hours: 'Fechado' },
  ],

  socials: [
    { type: 'facebook', url: 'https://www.facebook.com/p/Cantinho-da-Bolacha-100041790381266/' },
    { type: 'instagram', url: 'https://www.instagram.com/cantinho_da_bolacha/' },
  ],
}
