import type { SiteConfig } from '../types'

// Conteúdo do cliente. Para um novo site: copiar este ficheiro, trocar os textos,
// imagens e cores. Os componentes não precisam de ser alterados.
//
// NOTA: as imagens abaixo apontam para o Wix. Antes de publicar, descarrega-as para
// /public/images e troca os URLs por "/images/nome.jpg" para não dependeres do Wix.

const wix = (id: string) => `https://static.wixstatic.com/media/${id}`

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
    image: wix('65be8f_66a1f54ed91a48eda547249205a13e30~mv2.jpg'),
    title: 'Cantinho da Bolacha',
    subtitle: 'Doces Artesanais',
  },

  home: {
    productsTitle: 'Os Nossos Produtos',
    productsPreview: [
      { title: 'Bolachas', image: wix('902989c7e1b14b7c9f61d0053902e808.jpg') },
      { title: 'Bolos', image: wix('11062b_fdf55a8c88f242dea45e2897c55ffcf2~mv2.jpg') },
      { title: 'Tortas', image: wix('0d0af6469a0391f1561416b64fa57420.jpg') },
    ],
    productsCta: 'Mais Produtos',
    aboutTitle: 'Sobre Nós',
    aboutSummary:
      'O meu nome é Elena Golemanova, sou natural da Búlgaria, cidade de Ruse e conclui o ensino secundário em Tecnologia Culinária e Bartender. Desde a adolescência gosto da área de culinária, principalmente a pastelaria, onde mais tarde me especializei em doces artesanais búlgaros. Com o tempo, transformei um pequeno sonho em realidade e estou muito orgulhosa que os meus doces conseguem tocar as vossas almas. Atualmente, tenho uma pastelaria acolhedora, onde consigo imaginar, criar e tornar realidade doces artesanais em arte, deixando a minha marca pessoal.',
    aboutCta: 'Ver Mais',
    aboutImage: wix('9c608a_9efc5333c98a44c994dbb37cade9066f.jpg'),
    infoTitle: 'O Nosso Cantinho',
  },

  products: {
    title: 'Os Nossos Produtos',
    intro:
      'Explore a nossa seleção de bolachas, bolos e doces feitos na hora, com todo o carinho do Cantinho da Bolacha.',
    items: [
      { title: 'Bolachas Gourmet', description: 'Diversos Sabores', image: wix('11062b_7aa2fd1a9f704ca8b8c9112210cc23bd~mv2.jpg') },
      { title: 'Pequenas Delícias', description: 'Macarons, Cake Pops, Cake Sicles, Cupcakes', image: wix('11062b_7aa2fd1a9f704ca8b8c9112210cc23bd~mv2.jpg') },
      { title: 'Bolachas Artesanais', description: 'Para Casamento, Chá Revelações, Aniversários, etc.', image: wix('11062b_7aa2fd1a9f704ca8b8c9112210cc23bd~mv2.jpg') },
      { title: 'Isomalt', description: 'Pirulitos', image: wix('11062b_7aa2fd1a9f704ca8b8c9112210cc23bd~mv2.jpg') },
      { title: 'Bolacha New York', description: 'Diversos Sabores', image: wix('11062b_7aa2fd1a9f704ca8b8c9112210cc23bd~mv2.jpg') },
      { title: 'Bolos e Tortas', image: wix('11062b_7aa2fd1a9f704ca8b8c9112210cc23bd~mv2.jpg') },
    ],
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
