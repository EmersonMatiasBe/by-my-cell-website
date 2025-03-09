const home = {
  heroSection: {
    title: 'Bem vindo à ByMyCell',
    subtitle: 'Simplificando a genômica no Brasil',
    firstButton: 'Fazer um orçamento online',
    secondButton: 'Saber mais sobre a empresa'
  },
  results: {
    title: (
      <>
        Entregando <span className="p-2 bg-primary-500 text-white">Excelência</span>
        <br /> nos Resultados
      </>
    ),
    subtitle: 'Números Importantes',
    text: ' Na ByMyCell, nossa missão é entregar resultados de análise genômica de alta qualidade com rapidez e precisão. Com um portfólio de mais de 450 projetos bem-sucedidos, nos orgulhamos de superar as expectativas de nossos clientes. Nossa equipe especializada garante soluções inovadoras, sempre com foco na excelência e no sucesso de cada cliente.',
    results: [
      { number: '+500', text: 'Amostras analisadas por mês' },
      { number: '+150', text: 'Clientes satisfeitos' },
      { number: '+450', text: 'Projetos realizados em nossas plataformas' },
      { number: '20-60', text: 'Dias de prazo para entrega de resultados' }
    ]
  },
  specializedSolutions: {
    agro: {
      title: 'Soluções para o Agro',
      text: 'Realizamos análises do microbioma do solo, de amostras sólidas (semente, raízes, folhas etc) e de amostras líquidas (bioinsumos, produções OnFarm, lodos etc) para o setor do agronegócio.'
    },
    searchers: {
      title: 'Soluções para Pesquisadores',
      text: 'Realizamos análises genômicas e metagenômicas de diversos tipos de amostras com as tecnologias Illumina e/ou Nanopore para projetos científicos.'
    },
    buttonLabel: 'Saiba Mais'
  },
  services: {
    title: (
      <>
        Conheça nossos <br></br> <span className="p-2 bg-secondary-500 text-white">Serviços</span>
      </>
    ),
    items: [
      {
        title: 'Análise de microbiota',
        text: 'Identificação de microrganismos presentes em amostras a partir de sequenciamento de DNA de nova geração'
      },
      {
        title: 'Genomas de Bactérias',
        text: 'Sequenciamento completo de genoma de bactérias em plataformas Illumina e Nanopore, com montagem a anotação'
      },
      {
        title: 'Genomas de Fungos',
        text: 'Sequenciamento completo de genomas de fungos e leveduras, com montagem a anotação'
      },
      {
        title: 'Metagenômica Shotgun',
        text: 'Análise por sequenciamento massivo de genomas presente em amostras complexas'
      },
      {
        title: ' Bioinformática',
        text: 'Traga seu próprio dado, e desenvolvemos pipelines customizadas para análises de dados gerados em diferentes plataformas'
      }
    ]
  },
  ebook: {
    title: (
      <>
        Conheça os <span className="p-2 bg-primary-500">Principais</span> Microrganismos<br></br> de
        Interesse Agronômico
      </>
    ),
    description:
      'Preparamos um e-book com informações sobre os microrganismos benéficos e patogênicos mais relevantes para o solo.',
    link: 'https://lp.bymycell.com.br/ebook-microrganismos'
  },
  aboutUs: {
    title: (
      <>
        Por Dentro da <br></br> Nossa{' '}
        <span className="p-2 bg-secondary-500 text-white">Jornada</span>
      </>
    ),
    subtitle: 'Entenda o que os move e nos torna únicos.',
    text: 'Buscamos simplificar o acesso à genômica de alto nível no Brasil, fornecendo aos clientes serviços relevantes de forma rápida e a preços acessíveis. Temos um laboratório próprio e controle de todo o processo de análise dos dados para atender nossos clientes da melhor maneira possível. Venha conhecer a ByMyCell e nossa equipe de especialistas!',
    buttonLabel: 'Quem Somos'
  }
}
const header = [
  { label: 'Inicio', href: '/', items: null },
  {
    label: 'Serviços',
    href: '/servicos',
    items: [
      { label: 'Para a Pesquisa', link: '/servicos/pesquisadores' },
      { label: 'Para o Agro', link: '/servicos/agro' }
    ]
  },
  { label: 'Quem Somos', href: '/quem-somos', items: null },
  {
    label: 'Contato',
    href: '/contato',
    items: [
      { label: 'Contato', link: 'contato' },
      { label: 'Trabalhe Conosco', link: '' }
    ]
  }
]

const contact = {
  title: (
    <>
      Fale Conosco Para <br></br>{' '}
      <span className="p-2 bg-primary-500 text-white">Análises Genômicas</span>
    </>
  ),
  subtitle: 'Entre em Contato',
  subtitle_2: (
    <>
      Tire suas dúvidas, solicite orçamentos ou agende uma visita. <br></br>Estamos aqui para
      ajudá-lo!
    </>
  ),
  contactInformations: {
    title: 'Informações de Contato',
    address:
      'Endereço: Rua Martinico Prado 555. Piso Térreo. Vila Tibério. Ribeirão Preto - SP. 14050-050',
    phone: '+55 (16) 99466-4643',
    email: 'contato@bymycell.com',
    openingHours: 'Segunda a sexta, das 8 às 17h.'
  },
  boxMessage: {
    title: 'Envie uma Mensagem',
    fields: {
      name: { name: 'Nome', placeholder: 'Digite seu nome' },
      email: { name: 'E-mail', placeholder: 'seuemail@exemplo.com' },
      phone: { name: 'Telefone', placeholder: '(00) 000000-0000' },
      message: { name: 'Mensagem', placeholder: 'Escreva sua mensagem aqui...' }
    },
    permissionMessage:
      'Ao selecionar esta caixa e enviar seus dados, você nos autoriza a te enviar e-mails. Você pode cancelar a qualquer momento.',
    labelButton: 'Enviar Mensagem'
  },
  doubtBox: {
    title: 'Ficou com alguma dúvida? Entre em Contato',
    labelButton: 'Saber mais sobre a empresa'
  },
  socialMedias: 'Nossas Redes Sociais'
}

const socialMedias = {
  linkedin: 'https://www.linkedin.com/company/bymycell',
  instagram: 'https://www.instagram.com/bymycell/',
  youtube: 'https://www.youtube.com/@ByMyCell',
  whatsapp: ''
}

const messagesPt = {
  header,
  home,
  contact,
  socialMedias
}

export default messagesPt
