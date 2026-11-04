import type { Category, SiteConfig } from '../types'

// Conteúdo do cliente. Para um novo site: copiar este ficheiro, trocar os textos,
// imagens e cores. Os componentes não precisam de ser alterados.
//
// NOTA: as imagens abaixo apontam para o Wix. Antes de publicar, descarrega-as para
// /public/images e troca os URLs por "/images/nome.jpg" para não dependeres do Wix.

const wix = (id: string) => `https://static.wixstatic.com/media/${id}`

const bolacha = (file: string) => `/images/produtos/bolachas/${file}`

const bolo = (file: string) => `/images/produtos/bolos/${file}`

const elena = (file: string) => `/images/elena/${file}`

// Produtos mostrados na página "Produtos". Os marcados com featured aparecem também na página inicial.
const cookies: Category[] = [
  { title: 'Pistácio e Chocolate Branco', description: 'Bolacha com pistácio e chocolate branco.', image: bolacha('01 - Pistácio e Chocolate Branco.webp'), featured: true },
  { title: 'Amendoa, Avelã e Chocolate', description: 'Bolacha crocante de avelã recheada com creme de chocolate.', image: bolacha('02 - Avelã e Nutela.webp') },
  { title: 'Avelã e Nutella', description: 'Com coração de nutella e avelã triturada.', image: bolacha('03-thumbprint-choc.webp'), featured: true },
  { title: 'Caramelo Salgado', description: 'Coberta de chocolate, com coração de caramelo.', image: bolacha('04-linzer-caramelo.webp'), featured: true },
  { title: 'Ferrero Rocher', description: 'Bolacha de chocolate estilo ferrero rocher.', image: bolacha('05-sandwich-choc.webp') },
  { title: 'Kinder Bueno', description: 'Bolacha de chocolate estilo kinder bueno.', image: bolacha('06-linzer-leite.webp') },
  { title: 'Lima e Menta', description: 'Bolacha de lima e menta.', image: bolacha('07-folhas-pistacio.webp'), featured: true },
  { title: 'Alperce e Chocolate Branco', description: 'Com doce de alperce e chocolate branco.', image: bolacha('08-alperce-branco.webp') },
  { title: 'Papoila e Limão', description: 'Bolacha de papoila, com curd de limão.', image: bolacha('09-limao-papoila.webp'), featured: true },
  { title: 'Pistácio e Frutos Vermelhos', description: 'Bolacha de pistácio com doce de frutos vermelhos.', image: bolacha('10-pistacio-frutos.webp') },
  { title: 'Pistácio e Framboesa', description: 'Glacê branco, pistácio e framboesa.', image: bolacha('11-linzer-pistacio.webp'), featured: true },
  { title: 'Raffaelo', description: 'Bolacha de coco estilo raffaelo.', image: bolacha('12-coco.webp'), featured: true },
  { title: 'Red Velvet', description: 'Bolachas em forma de coração red velvet.', image: bolacha('13-coracoes.webp'), featured: true },
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
    items: cookies,
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
