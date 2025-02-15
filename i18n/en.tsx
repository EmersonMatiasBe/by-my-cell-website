const home = {
  heroSection: {
    title: 'Welcome to ByMyCell',
    subtitle: 'Simplificando a genômica no Brasil',
    firstButton: 'Fazer um orçamento online',
    secondButton: 'Saber mais sobre a empresa'
  },
  results: {
    title: (
      <>
        Entregando excelência
        <br /> nos resultados
      </>
    ),
    subtitle: 'Números Importantes',
    results: [
      { number: '+600', text: 'Amostras analisadas por mês' },
      { number: '+150', text: 'Clientes satisfeitos' },
      { number: '+400', text: 'Projetos realizados em nossas plataformas' },
      { number: '20-60', text: 'Dias de prazo para entrega de resultados' }
    ]
  },
  specializedSolutions: {
    agro: {
      title: 'Soluções para o Agro',
      text: 'Realizamos análises do solo, de amostras sólidas (semente, raízes, folhas etc) e de amostras líquidas (bioinsumos, produções OnFarm, lodos etc).'
    },
    searchers: {
      title: 'Soluções para Pesquisadores',
      text: 'Realizamos análises metagenômicas de diversos tipos de amostras com tecnologia Illumina e/ou Nanopore para projetos científicos.'
    },
    buttonLabel: 'Saiba Mais'
  }
}
const messagesEn = {
  header: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: 'contato' },

    { label: 'About Us', href: 'quem-somos' },
    { label: 'Contact', href: 'contato' }
  ],
  home
}

export default messagesEn
