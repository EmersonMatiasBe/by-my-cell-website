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
        Entregando <span className="p-2 bg-secondary-500 text-white">Excelência</span>
        <br /> nos Resultados
      </>
    ),
    subtitle: 'Números Importantes',
    text: ' Na ByMyCell, nossa missão é entregar resultados de análise genômica de alta qualidade com rapidez e precisão. Com um portfólio de mais de 450 projetos bem-sucedidos, nos orgulhamos de superar as expectativas de nossos clientes. Nossa equipe especializada garante soluções inovadoras, sempre com foco na excelência e no sucesso de cada cliente.',
    results: [
      { number: '+500', text: 'Amostras analisadas por mês' },
      { number: '+50', text: 'Artigos publicados por clientes' },
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
        text: 'Identificação de microrganismos presentes em amostras a partir de sequenciamento de DNA de nova geração',
        image: '/analise-de-microbiota.webp',
        url: 'analise-de-microbiota'
      },
      {
        title: 'Genomas de Bactérias',
        text: 'Sequenciamento completo de genoma de bactérias em plataformas Illumina e Nanopore, com montagem a anotação',
        image: '/genomas-de-bacterias.webp',
        url: 'sequenciamento-de-genomas-de-bacterias'
      },
      {
        title: 'Genomas de Fungos',
        text: 'Sequenciamento completo de genomas de fungos e leveduras, com montagem a anotação',
        image: '/genomas-de-fungos.webp',
        url: 'sequenciamento-de-genomas-de-fungos-e-leveduras'
      },
      {
        title: 'Metagenômica Shotgun',
        text: 'Análise por sequenciamento massivo de genomas presente em amostras complexas',
        image: '/metagenomica-shotgun.webp',
        url: 'metagenomica-shotgun'
      },
      {
        title: ' Bioinformática',
        text: 'Traga seu próprio dado, e desenvolvemos pipelines customizadas para análises de dados gerados em diferentes plataformas',
        image: '/bioinformatica.webp',
        url: 'bioinformatica'
      }
    ],
    buttonLabel: 'Saber mais'
  },
  steps: {
    title: 'Conheça nosso fluxo de análise',
    subtitle: 'Passo a Passo',
    text: 'Nossas análises são baseadas no sequenciamento de DNA de nova geração. A partir do recebimento das amostras no laboratório, realizamos a extração de DNA total e preparo das bibliotecas de sequenciamento. As análises geram uma quantidade massiva de dados que são processados em nossa plataforma em Nuvem. Os dados gerados são analisados por bioinformática e mapeados contra nossos bancos de dados, permitindo assim identificar os níveis relativos de todos os microrganismos presentes na amostra.',
    steps: [
      'Envio da amostra',
      'Etapas Laboratoriais',
      'Sequenciamento de DNA',
      'Análise dos dados e Relatório '
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
    link: 'https://lp.bymycell.com.br/ebookmicrorganismos',
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
    title: 'Engenharia de Proteínas e Metabolômica',
    text: 'Nossa plataforma BlackGenn é dedicada à prospecção e engenharia de proteínas e de microrganismos, combinando a fronteira de conhecimento de genômica, metabolômica e computação de alto desempenho para acelerar a biotecnologia no Brasil.',
    labelButton: 'Plataforma BlackGenn',
    link: 'https://blackgenn.com/'
  },
  bymysoil: {
    title: 'Análise genômica para agricultura de precisão',
    text: 'Nossa plataforma ByMySoil é especializada no mapeamento de microrganismos de solo, visando redução nos riscos de doenças, otimização do uso de bioinusmos e ganho de produtividade na sua lavoura. Com base em análises laboratoriais e dados agronômicos, a plataforma oferece recomendações para um manejo assertivo e sustentável da terra.',
    labelButton: 'Plataforma ByMySoil',
    link: 'https://bymysoil.com.br/'
  }
}

const header = [
  { label: 'Início', href: '/', items: null },
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
      {
        label: 'Trabalhe Conosco',
        link: 'https://docs.google.com/forms/d/e/1FAIpQLSfP-oVOIi62GUOJgRqUjoZMTSAO493s47vByzf2HcjiEcn6zg/viewform'
      }
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
    title: 'Sócios',
    partners: [
      {
        name: 'Rafael Silva Rocha',
        linkedin: 'https://www.linkedin.com/in/rafael-silva-rocha-5312b835/',
        position: 'Fundador',
        image: '/about-us-rafael.webp'
      },
      {
        name: 'Stela Virgíllio',
        linkedin: 'https://www.linkedin.com/in/stela-virgilio-250267212/',
        position: 'Co-fundadora',
        image: '/about-us-stela.webp'
      }
    ],
    text: (
      <>
        Nossa equipe é formada por especialistas que unem ciência, tecnologia e estratégia. O{' '}
        <span className="font-bold">Laboratório</span> é onde a ciência ganha vida, realizando
        análises precisas de diversos tipos de amostras. A{' '}
        <span className="font-bold"> Bioinformática</span> transforma dados complexos em relatórios
        claros com informações valiosas para os clientes. O{' '}
        <span className="font-bold"> Marketing</span> conecta nossa inovação ao mercado, comunicando
        valor e construindo relacionamentos sólidos. A equipe de{' '}
        <span className="font-bold">Vendas</span> é o nosso elo direto com os clientes, aproximando
        o mercado das nossas soluções. Tudo isso é sustentado pela{' '}
        <span className="font-bold">Gestão de pessoas</span>, que desenvolve talentos e fortalece
        nossa missão de facilitar o acesso à genômica. Juntos, esses setores formam a ByMyCell, uma
        empresa comprometida em revolucionar o agronegócio e a pesquisa brasileira por meio da
        ciência e da tecnologia.
      </>
    )
  }
}

const socialMedias = {
  linkedin: 'https://www.linkedin.com/company/bymycell',
  instagram: 'https://www.instagram.com/bymycell/',
  youtube: 'https://www.youtube.com/@ByMyCell',
  whatsapp: 'https://wa.me/5516994664643'
}

const services = {
  title: 'Nossos Serviços',
  subtitle: 'Escolha a área que mais te representa',
  search: {
    title: 'Para PESQUISA',
    subtitle: 'Conheça os nossos serviços para acelerar a sua Pesquisa Científica',
    labelButton: 'Conheça os Serviços para PESQUISA'
  },
  agro: {
    title: 'Para o AGRO',
    subtitle: 'Conheça os nossos serviços de análises para o Agro',
    labelButton: 'Conheça os Serviços para o AGRO'
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

const search = {
  title: 'Serviços para Pesquisadores',
  subtitle:
    'Nossa metodologia permite que pesquisadores e cientistas de empresas, institutos e universidades acelerem suas pesquisas genômicas para identificação de microrganismos em amostras biológicas como material fermentado, bioinsumos, fezes, rúmen, solo, outros. Além de material bruto, também aceitamos DNAs já extraídos.',
  items: [
    {
      title: 'Análise de Microbiota',
      subtitle: 'Identificação de microrganismos em amostras complexas',
      image: '/analise-de-microbiota.webp',
      link: 'analise-de-microbiota'
    },
    {
      title: ' Identificação de Microrganismos',
      subtitle: 'Identificação de isolado microbiano',
      image: '/identificacao-de-microrganismos.webp',
      link: 'identificacao-de-microrganismos'
    },
    {
      title: 'Sequenciamento de Genomas de Bactérias',
      subtitle: 'Genoma completo bacteriano ',
      image: '/genomas-de-bacterias.webp',
      link: 'sequenciamento-de-genomas-de-bacterias'
    },
    {
      title: 'Sequenciamento de Genomas de Fungos e Leveduras',
      subtitle: 'Genoma completo fúngico',
      image: '/genomas-de-fungos.webp',
      link: 'sequenciamento-de-genomas-de-fungos-e-leveduras'
    },
    {
      title: 'Metagenômica Shotgun',
      subtitle: 'Montagem, anotação e identificação de microrganismos em amostras complexas',
      image: '/metagenomica-shotgun.webp',
      link: 'metagenomica-shotgun'
    },
    {
      title: 'Bioinformática',
      subtitle: ' Análise de bioinformática sob demanda',
      image: '/bioinformatica.webp',
      link: 'bioinformatica'
    }
  ]
}

const teste = {
  'analise-de-microbiota': {
    title: 'Análise de Microbiota',
    description: [
      {
        title: 'Descrição',
        text: 'Serviço voltado para pesquisadores, empresas de biológicos, On Farm e demais que desejam analisar a composição bacteriana e fúngica de suas amostras. Trabalhamos com as plataformas Illumina (short reads) e Oxford Nanopore (long reads), entregando relatório, tabelas completas, análise de diversidade e predição de vias metabólicas.'
      },
      {
        title: 'Material Requerido',
        text: '2-10 gramas de amostra sólida/semi sólida ou 5-10 mL de amostra líquida, em recipiente individualizado e estéril, com identificação da amostra. Indicamos enviar as amostras em gelo reciclável para evitar o crescimento microbiano indesejado. O experimento amostral e envio das amostras são de responsabilidade do cliente.'
      },
      {
        title: 'Para Amostras de DNA Já Extraídas',
        text: 'Mínimo 500 ng de DNA extraído em um volume mínimode 50uL. Enviar em microtubos tipo eppendorf de 1.5mL devidamente identifcados, em geloseco/reciclável. Não concentrar as amostras. Recomendamos os kits de extração ZymoBIOMICS Mini Prep (ref: D4300) ou DNeasy PowerSoil Pro QIAGEN (ref: 47016).'
      }
    ],
    image: '/analise-de-microbiota.webp'
  },
  'identificacao-de-microrganismos': {
    title: 'Identificação de Microrganismos',
    description: [
      {
        title: 'Descrição',
        text: 'Serviço voltado a clientes que querem identificar bactéria, fungo ou levedura a partir de cultura isolada, onde espera-se encontrar um único microrganismo. Trabalhamos com a plataforma Nanopore Oxford, entregando relatório com a identificação do microrganismo a nível de gênero e de espécie.'
      },
      {
        title: 'Material Requerido',
        text: '2-10 gramas de amostra sólida/semi sólida ou 5-10 mL de amostra líquida, em recipiente individualizado e estéril, com identificação da amostra. Não recebemos amostras em Placa de Petri. Recomendamos raspar o pellet e enviar em microtubo identificado. Indicamos enviar as amostras em gelo seco/reciclável para evitar crescimento microbiano indesejado. O experimento amostral e envio das amostras são de responsabilidade do cliente.'
      },
      {
        title: 'Para Amostras de DNA Já Extraídas',
        text: 'Mínimo 500 ng de DNA extraído em um volume mínimode 50uL. Enviar em microtubos tipo eppendorf de 1.5mL devidamente identificados, em geloseco/reciclável. Não concentrar as amostras. Recomendamos os kits de extração ZymoBIOMICS Mini Prep (ref: D4300) ou DNeasy PowerSoil Pro QIAGEN (ref: 47016).'
      }
    ],
    image: '/identificacao-de-microrganismos.webp'
  },
  'sequenciamento-de-genomas-de-bacterias': {
    title: 'Sequenciamento de Genomas de Bactérias',
    description: [
      {
        title: 'Descrição',
        text: 'Serviço voltado a pesquisadores em universidades e institutos e equipes de P&D em empresas, onde realizamos o sequenciamento completo de bactérias, entregando o genoma montado e anotado (com bioinformática completa). Trabalhamos com a plataforma Illumina e indicamos a montagem híbrida (Illumina + Nanopore Oxford) para fechar o genoma.'
      },
      {
        title: 'Material Requerido',
        text: '2-10 gramas de amostra sólida/semi sólida ou 5-10 mL de amostra líquida, em recipiente individualizado e estéril, com identificação da amostra. Não recebemos amostras em Placa de Petri. Recomendamos raspar o pellet e enviar em microtubo identificado. Indicamos enviar as amostras em gelo seco/reciclável para evitar crescimento microbiano indesejado. O experimento amostral e envio das amostras são de responsabilidade do cliente.'
      },
      {
        title: 'Para Amostras de DNA Já Extraídas',
        text: '4 ug de DNA genômico extraído em um volume mínimo de 50 uL. Enviar em microtubos tipo eppendorf de 1.5mL devidamente identificados, em gelo seco/reciclável. Não concentrar as amostras.'
      }
    ],
    image: '/genomas-de-bacterias.webp'
  },
  'sequenciamento-de-genomas-de-fungos-e-leveduras': {
    title: 'Sequenciamento de Genomas de Fungos e Leveduras',
    description: [
      {
        title: 'Descrição',
        text: 'Serviço voltado a pesquisadores em universidades e institutos e equipes de P&D em empresas, onde realizamos o sequenciamento completo de fungos e leveduras, entregando o genoma montado e anotado (com bioinformática completa). Trabalhamos com a plataforma Illumina e indicamos a montagem híbrida (Illumina + Nanopore Oxford) para fechar o genoma. O experimento amostral e envio das amostras são de responsabilidade do cliente.'
      },
      {
        title: 'Material Requerido',
        text: '2-10 gramas de amostra sólida/semi sólida ou 5-10 mL de amostra líquida, em recipiente individualizado e estéril, com identificação da amostra. Indicamos enviar as amostras em gelo seco/reciclável para evitar crescimento microbiano indesejado.'
      },
      {
        title: 'Para Amostras de DNA Já Extraídas',
        text: '4 ug de DNA genômico extraído em um volume mínimo de 50 uL. Enviar em microtubos tipo eppendorf de 1.5mL devidamente identificados, em gelo seco/reciclável. Não concentrar as amostras.'
      }
    ],
    image: '/genomas-de-fungos.webp'
  },
  'metagenomica-shotgun': {
    title: 'Metagenômica Shotgun',
    description: [
      {
        title: 'Descrição',
        text: 'Serviço voltado a grupos de pesquisa mais avançados, na qual realizamos o sequenciamento massivo do DNA total de amostras em plataforma Illumina, permitindo identificar todos os microrganismos presentes na amostra (bactérias, fungos, parasitas, células e outros) e explorar genes e genomas em alta resolução. O experimento amostral e envio das amostras são de responsabilidade do cliente.'
      },
      {
        title: 'Material Requerido',
        text: '2-10 gramas de amostra sólida/semi sólida ou 5-10 mL de amostra líquida, em recipiente individualizado e estéril, com identificação da amostra. Indicamos enviar as amostras em gelo seco/reciclável para evitar crescimento microbiano indesejado.'
      },
      {
        title: 'Para Amostras de DNA Já Extraídas',
        text: ' 4 ug de DNA genômico extraído em um volume mínimo de 50 uL. Enviar em microtubos tipo eppendorf de 1.5mL devidamente identificados, em gelo seco/reciclável. Não concentrar as amostras.'
      }
    ],
    image: '/metagenomica-shotgun.webp'
  },
  bioinformatica: {
    title: 'Bioinformática',
    description: [
      {
        title: 'Descrição',
        text: (
          <>
            Traga seu próprio dado, e desenvolvemos pipelines customizadas para análises de dados
            gerados em diferentes plataformas de sequenciamento. <br />
            Para avaliação da demanda de bioinformática e análises customizadas, solicitamos a
            especificação do serviço desejado, microrganismo(a) alvo(s) e/ou esperado(s), plataforma
            de sequenciamento usada, quantidade de dados brutos gerados, análises de dados
            recomendados, outros.
          </>
        )
      }
    ],
    image: '/bioinformatica.webp'
  }
}

const agro = {
  title: 'Serviços para o Agro',
  subtitle:
    'Nossa metodologia permite conhecer os microrganismos de diferentes tipos de amostras de maneira eficiente e baseado na ciência.',
  background: '/agro.webp',
  items: [
    {
      title: 'Microrganismos do Solo e Nematoides',
      subtitle:
        'Conheça microrganismos e nematoides do solo da sua lavoura  e maneje o seu potencial.',
      image: '/microrganismos-do-solo-e-nematoides.webp',
      link: 'microrganismos-do-solo-e-nematoides'
    },
    {
      title: 'Microbiota Geral',
      subtitle: ' Identificação de microrganismos de diferentes amostras',
      image: '/microrganismos.webp',
      link: 'microbiota-geral'
    },
    {
      title: 'Microbiota de Produto Biológico',
      subtitle: ' Identificação de microrganismos de produtos biológicos',
      image: '/microbiota-de-produto-biologico.webp',
      link: 'microbiota-de-produto-biologico'
    },
    {
      title: 'Produção On Farm',
      subtitle: ' Identificação de microrganismos de produção on farm.',
      image: '/producao-on-farm.webp',
      link: 'producao-on-farm'
    },
    {
      title: 'Microbiota de Compostagem',
      subtitle: ' Identificação de microrganismos de compostagem',
      image: '/microbiota-de-compostagem.webp',
      link: 'microbiota-de-compostagem'
    },
    {
      title: 'Identificação de patógenos de plantas',
      subtitle:
        'Identificação de microrganismos causadores de doenças em diferentes partes da planta.',
      image: '/identificacao-de-patogenos-de-plantas.webp',
      link: 'identificacao-de-patogenos-de-plantas'
    },
    {
      title: 'Identificação de Microrganismo Isolado',
      subtitle: 'Identificação de microrganismos Isolados (Bactérias ou fungos)',
      image: '/identificacao-de-microrganismo-isolado.webp',
      link: 'identificacao-de-microrganismo-isolado'
    },
    {
      title: '',
      subtitle: '',
      image: '',
      link: ''
    },
    {
      title: '',
      subtitle: '',
      image: '',
      link: ''
    }
  ]
}

const agroServices = {
  'microrganismos-do-solo-e-nematoides': {
    title: 'Microrganismos do Solo e Nematoides',
    description: [
      {
        title: 'Descrição',
        text: (
          <>
            Nossas análises de microbiota de solo são baseadas no sequenciamento de DNA de nova
            geração. Identificamos os microrganismos benéficos, patogênicos, nematoides e o
            potencial metabólico. A partir dos resultados, é possível criar estratégias de manejo
            eficiente que otimizem a saúde do solo aprimorando processos produtivos. A produtividade
            começa no Solo!
            <br />
            Indicamos a realização das coletas das amostras compostas formadas por 10 a 20 amostras
            simples, cobrindo a área de interesse. Recomendamos 1 amostra composta a cada 20
            hectares em média, ou 1 amostra composta por zona de manejo ou 1 amostra composta por
            tratamento. Envio das amostras a temperatura ambiente.
          </>
        )
      }
    ],
    image: '/microrganismos-do-solo-e-nematoides.webp'
  },
  'microbiota-geral': {
    title: 'Microbiota Geral',
    description: [
      {
        title: 'Descrição',
        text: 'A análise de microbiota geral possibilita a identificação de bactérias e/ou fungos de diferentes tipos de amostras. Por exemplo, produtos biológicos, fermentados on farm, compostos, lodos, vinhaças, partes da planta para identificação de patógenos (doenças) etc. Estes microrganismos podem ser benéficos ou patogênicos. Nossa tecnologia permite identificar por sequenciamento regiões específicas do DNA de Bactérias e Fungos/leveduras.'
      },
      {
        title: 'Material Requerido',
        text: '2-10 gramas de amostra sólida/semi sólida ou 5-10 mL de amostra líquida, em recipiente individualizado e estéril, com identificação da amostra. Indicamos enviar as amostras em gelo reciclável para evitar o crescimento microbiano indesejado.'
      }
    ],
    image: '/microrganismos.webp'
  },
  'microbiota-de-produto-biologico': {
    title: 'Microbiota de Produto Biológico',
    description: [
      {
        title: 'Descrição',
        text: 'A análise de microbiota possibilita a identificação de bactérias e/ou fungos de produtos biológicos comerciais. Nossa tecnologia permite identificar por sequenciamento regiões específicas do DNA de Bactérias e Fungos/leveduras.'
      },
      {
        title: 'Material Requerido',
        text: '2-10 gramas de amostra sólida/semi sólida ou 5-10 mL de amostra líquida, em recipiente individualizado e estéril, com identificação da amostra. Indicamos enviar as amostras em gelo reciclável para evitar o crescimento microbiano indesejado.'
      }
    ],
    image: '/microbiota-de-produto-biologico.webp'
  },
  'producao-on-farm': {
    title: 'Produção On Farm',
    description: [
      {
        title: 'Descrição',
        text: 'A análise de microbiota possibilita a identificação de microrganismos de produção on farm. Nossa tecnologia permite identificar por sequenciamento regiões específicas do DNA de Bactérias e Fungos/leveduras.'
      },
      {
        title: 'Material Requerido',
        text: '2-10 gramas de amostra sólida/semi sólida ou 5-10 mL de amostra líquida, em recipiente individualizado e estéril, com identificação da amostra. Indicamos enviar as amostras em gelo reciclável para evitar o crescimento microbiano indesejado.'
      }
    ],
    image: '/producao-on-farm.webp'
  },
  'microbiota-de-compostagem': {
    title: 'Microbiota de Compostagem',
    description: [
      {
        title: 'Descrição',
        text: 'A análise de microbiota possibilita a identificação de microrganismos de processos de compostagem sólido ou líquido. Nossa tecnologia permite identificar por sequenciamento regiões específicas do DNA de Bactérias e Fungos/leveduras.'
      },
      {
        title: 'Material Requerido',
        text: ' 2-10 gramas de amostra sólida/semi sólida ou 5-10 mL de amostra líquida, em recipiente individualizado e estéril, com identificação da amostra. Indicamos enviar as amostras em gelo reciclável para o evitar o crescimento microbiano indesejado.'
      }
    ],
    image: '/microbiota-de-compostagem.webp'
  },
  'identificacao-de-patogenos-de-plantas': {
    title: 'Identificação de patógenos de plantas',
    description: [
      {
        title: 'Descrição',
        text: ' A análise possibilita a identificação de microrganismos causadores de doenças em diferentes partes da planta. Nossa tecnologia permite identificar por sequenciamento regiões específicas do DNA de Bactérias e Fungos/leveduras.'
      },
      {
        title: 'Material Requerido',
        text: 'Partes da planta, como folha, caule, raiz, enviados em sacos plásticos ou embrulhados em papel pardo com identificação da amostra. Indicamos enviar as amostras em gelo reciclável para evitar o crescimento microbiano indesejado.'
      }
    ],
    image: '/identificacao-de-patogenos-de-plantas.webp'
  },
  'identificacao-de-microrganismo-isolado': {
    title: 'Identificação de Microrganismo Isolado',
    description: [
      {
        title: 'Descrição',
        text: 'Para esta análise os microrganismos precisam estar isolados previamente. A partir da amostra recebida, identificamos o gênero/espécie do microrganismo (bactéria ou fungo).'
      },
      {
        title: 'Material Requerido',
        text: '2-10 gramas de amostra sólida/semi sólida ou 5-10 mL de amostra líquida, em recipiente individualizado e estéril, com identificação da amostra. ​​Não recebemos amostras em Placa de Petri. Recomendamos raspar o pellet e enviar em microtubo identificado. Indicamos enviar as amostras em gelo seco/reciclável para evitar crescimento microbiano indesejado.'
      }
    ],
    image: '/identificacao-de-microrganismo-isolado.webp'
  }
}

const messagesPt = {
  header,
  home,
  contact,
  socialMedias,
  aboutUs,
  services,
  feedbacks,
  search,
  teste,
  agro,
  agroServices
}

export default messagesPt
