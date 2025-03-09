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
        Conheça nossos <span className="p-2 bg-secondary-500 text-white">Serviços</span>
      </>
    ),
    subtitle: 'Serviços',
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
    ],
    buttonLabel: 'Saber mais',

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
    link: 'https://lp.bymycell.com.br/ebook-microrganismos',
    downloadEbook: {
      title: 'Sobre o eBook',
      description:
        'Para receber o eBook diretamente no seu e-mail, clique no botão abaixo e preencha as informações.',
        buttonLabel: 'Baixe agora mesmo'
    }
  },
  aboutUs: {
    title: (
      <>
        Por Dentro da <br></br> Nossa{' '}
        <span className="p-2 bg-secondary-500 text-white">Jornada</span>
      </>
    ),
    subtitle: 'Entenda o que os move e nos torna únicos.',
    subtitle2: 'Quem Somos',
    text: 'Buscamos simplificar o acesso à genômica de alto nível no Brasil, fornecendo aos clientes serviços relevantes de forma rápida e a preços acessíveis. Temos um laboratório próprio e controle de todo o processo de análise dos dados para atender nossos clientes da melhor maneira possível. Venha conhecer a ByMyCell e nossa equipe de especialistas!',
    buttonLabel: 'Quem Somos'
  },
  blackgenn: {
    title:'Engenharia de Proteínas e Metabolômica',
    text: 'Nossa plataforma BlackGenn é dedicada à prospecção e engenharia de proteínas e de microrganismos, combinando a fronteira de conhecimento de genômica, metabolômica e computação de alto desempenho para acelerar a biotecnologia no Brasil.',
    labelButton: 'Plataforma BlackGenn',
    link: 'https://blackgenn.com/'
  },
  bymysoil: {
    title: "Análise genômica para agricultura de precisão",
    text: 'Nossa plataforma ByMySoil é especializada no mapeamento de microrganismos de solo, visando redução nos riscos de doenças, otimização do uso de bioinusmos e ganho de produtividade na sua lavoura. Com base em análises laboratoriais e dados agronômicos, a plataforma oferece recomendações para um manejo assertivo e sustentável da terra.',
    labelButton: 'Plataforma ByMySoil',
    link: 'https://bymysoil.com.br/'
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

const aboutUs = {
  title: 'Quem Somos',
  text: [
    'A ByMyCell é uma startup brasileira de biotecnologia dedicada a simplificar o acesso à genômica no Brasil e na América Latina. Com sede em Ribeirão Preto - São Paulo, a empresa foi fundada em 2021.',
    'Especializada em soluções para o agronegócio e para a pesquisa, a ByMyCell desenvolve tecnologias avançadas para análise de microrganismos de amostras biológicas, utilizando sequenciamento de DNA de nova geração. Sua principal plataforma, a ByMySoil, lançada no início de 2023, auxilia produtores rurais na identificação e mensuração da diversidade microbiana do solo, promovendo aumento de produtividade e redução no uso de fertilizantes e pesticidas químicos.',
    'Além disso, a empresa oferece serviços como análise de microbiota, sequenciamento completo de genomas de bactérias e fungos, metagenômica shotgun e bioinformática sob demanda, desenvolvendo pipelines customizadas para análises de dados em diferentes plataformas de sequenciamento. A ByMyCell também conta com sua spin-off BlackGenn, focada na prospecção e engenharia de proteínas e microrganismos, combinando genômica, metabolômica e computação de alto desempenho para acelerar a biotecnologia no Brasil.',
    'Na ByMyCell, somos movidos pela curiosidade científica e pela paixão por transformar conhecimento em soluções reais. Acreditamos que a biotecnologia tem o poder de revolucionar mercados, tornando processos mais sustentáveis, produtivos e inovadores.',
    'O que nos torna únicos é a combinação de tecnologia de ponta, pesquisa aplicada e um olhar estratégico para os desafios do presente e do futuro. Desenvolvemos soluções genômicas avançadas para o agronegócio, a biotecnologia industrial e as pesquisas científicas, oferecendo respostas precisas e personalizadas, em equipe qualificada de mestres, doutores e especialistas.',
    'Nossa essência está na conexão entre ciência e tecnologia. Unimos inovação e acessibilidade para que produtores, pesquisadores e empresas tenham em mãos o que há de mais moderno em análise biológica. Mais do que dados, entregamos inteligência para impulsionar decisões e transformar realidades.',
    'Esse é o nosso propósito. Esse é o DNA da ByMyCell.'
  ],
  teamSection: {
    title: 'Conheça Nossa Equipe',
    team: [
      {
        title: 'Diretoria',
        members: [
          {
            name: 'Rafael Silva Rocha',
            linkedin: 'https://www.linkedin.com/in/rafael-silva-rocha-5312b835/',
            position: 'Fundador'
          },
          {
            name: 'Stela Virgíllio',
            linkedin: 'https://www.linkedin.com/in/stela-virgilio-250267212/',
            position: 'Co-fundadora'
          }
        ]
      },
      {
        title: 'Laboratório',
        members: [
          {
            name: 'Gabriela Condé',
            linkedin: 'https://www.linkedin.com/in/gabriela-cond%C3%A9-b6043920a/',
            position: ''
          },
          {
            name: 'Jéssica Ellen Lima',
            linkedin: 'https://www.linkedin.com/in/jessicaellenlima/',
            position: ''
          },
          {
            name: 'Lucas Lorenzon',
            linkedin: 'https://www.linkedin.com/in/lucas-lorenzon-645a5615a/ ',
            position: ''
          },
          {
            name: 'Tânia Petta ',
            linkedin: 'https://www.linkedin.com/in/t%C3%A2nia-petta-8b39b961/ ',
            position: ''
          },
          ,
          {
            name: 'Victória Zucheratto ',
            linkedin: 'https://www.linkedin.com/in/victoria-zucherato/ ',
            position: ''
          }
        ]
      },
      {
        title: 'Bioinformática',
        members: [
          {
            name: 'Adriano Gomes',
            linkedin: 'https://www.linkedin.com/in/adriano-gomes-silva/',
            position: ''
          },
          {
            name: 'Deivison Costa',
            linkedin: 'https://www.linkedin.com/in/deivison-costa/',
            position: ''
          },
          {
            name: 'Gabriel Novais',
            linkedin: 'https://www.linkedin.com/in/gabriel-novais-guarnieri/',
            position: ''
          },
          {
            name: 'Lucas Pádua',
            linkedin: 'https://www.linkedin.com/in/lucas-p%C3%A1dua-3a2b0a227/',
            position: ''
          },
          {
            name: 'Maria Bruna Pilotto',
            linkedin: 'https://www.linkedin.com/in/mbpilotto/',
            position: ''
          },
          {
            name: 'Vinícius Castro',
            linkedin: 'https://www.linkedin.com/in/vinicius-castro-santos/',
            position: ''
          }
        ]
      },
      {
        title: 'Marketing e Vendas',
        members: [
          {
            name: 'Anna Paula Tojal',
            linkedin: 'https://www.linkedin.com/in/annannapaula/',
            position: ''
          },
          {
            name: 'Carolina Santos',
            linkedin: 'https://www.linkedin.com/in/carolina-santos-ba4b3b24a/',
            position: ''
          },
          {
            name: 'Érika Cerqueira',
            linkedin: 'https://www.linkedin.com/in/%C3%A9rika-cerqueira-b6765b259/',
            position: ''
          },
          {
            name: 'Rodrigo Barros',
            linkedin: 'https://www.instagram.com/representantecrb/',
            position: ''
          }
        ]
      },
      {
        title: 'Gestão de Pessoas',
        members: [
          {
            name: 'Bianca Gadini',
            linkedin: 'https://www.linkedin.com/in/bianca-gadini/ ',
            position: ''
          }
        ]
      }
    ]
  }
}

const socialMedias = {
  linkedin: 'https://www.linkedin.com/company/bymycell',
  instagram: 'https://www.instagram.com/bymycell/',
  youtube: 'https://www.youtube.com/@ByMyCell',
  whatsapp: ''
}

const services = {
  title: 'Nossos Serviços',
  subtitle: 'Escolha a área que mais te representa',
  search: {
    title: 'Para PESQUISA',
    subtitle: 'Conheça os nossos serviços para acelerar a sua Pesquisa Científica',
    labelButton: 'Conhecer Serviços para Pesquisa'
  },
  agro: {
    title: 'Para o AGRO',
    subtitle: 'Conheça os nossos serviços de análises para o Agro',
    labelButton: 'Conhecer Serviços para o AGRO'
  }
}

const feedbacks = [
  {
    client: 'Professor Dr. Marcos Rogério André',
    position: 'UNESP Jaboticabal',
    feedback:
      'Excelente serviço de sequenciamento de microbioma e suporte impecável, fundamentais para o avanço das pesquisas do nosso grupo sobre microbioma de ectoparasitas. Recomendo a todos os pesquisadores que buscam excelência em sequenciamento.'
  },
  {
    client: 'Sabrina Condi',
    position: 'Empresa BioSab',
    feedback:
      'Os serviços têm sido essenciais no nosso dia a dia. Com tecnologia avançada e expertise científica, fornecem dados confiáveis de forma ágil e personalizada, garantindo uma tomada de decisão mais eficiente nos processos em que atuamos.'
  },
  {
    client: 'Alexandre Santos',
    position: 'Empresa Fertale',
    feedback:
      'A análise microbiana do solo tem sido uma verdadeira revolução na nossa maneira de abordar a agricultura sustentável. Ao estudar a diversidade dos microrganismos do solo, conseguimos melhorar sua saúde e mitigar os riscos causados pelos patógenos, agindo de forma rápida e precisa. Utilizando estratégias de controle biológico que evitam o uso de produtos químicos.'
  },
  {
    client: 'Daniel Mol',
    position: 'Consultor Agrícola',
    feedback:
      'Metagenômica é uma ferramenta importante para o manejo regenerativo, digo que é um zoom sobre o que não conseguimos enxergar a olho nu, e identificar a diversidade e a funcionalidade das comunidades microbianas presentes no solo. Ao analisar o DNA presente em amostras de talhões produtivos, podemos identificar os microrganismos benéficos e os maléficos, e assim tomar a melhor decisão do manejo a ser utilizado! Junto a ByMyCell e seus colaboradores, podemos compreender a composição e atividade microbiana, otimizando o melhor posicionamento a ser realizado. Além disso, a metagenômica ajuda a monitorar o impacto das recomendações e permite corrigir ou manter o manejo de forma mais eficaz e sustentável!'
  },
  {
    client: 'Jackson Bedin',
    position: 'Produtor Rural',
    feedback:
      'As análises são excelentes. Estão ajudando muito a direcionar os manejos biológicos nas nossas áreas. Conseguimos diagnosticar os principais patógenos e também os micro-organismos benéficos em cada área. O aplicativo também ajuda muito. Tem muitas informações e é bem simples e intuitivo de utilizar. O suporte técnico também é maravilhoso. Estamos muito satisfeitos.'
  }
]

const messagesPt = {
  header,
  home,
  contact,
  socialMedias,
  aboutUs,
  services,
  feedbacks
}

export default messagesPt
