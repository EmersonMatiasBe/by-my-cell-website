import Container from '@/components/ui/container'
import Wrapper from '@/components/ui/wrapper'

export default function AboutUs() {
  const team = [
    {
      name: 'Marcos Silva',
      email: 'marcos.silva@empresa.com',
      linkedin: 'https://linkedin.com/in/marcos-silva',
      photo: '/plantation-2.jpg'
    },
    {
      name: 'Ana Costa',
      email: 'ana.costa@empresa.com',
      linkedin: 'https://linkedin.com/in/ana-costa',
      photo: '/plantation-2.jpg'
    },
    {
      name: 'João Pereira',
      email: 'joao.pereira@empresa.com',
      linkedin: 'https://linkedin.com/in/joao-pereira',
      photo: '/plantation-2.jpg'
    },
    {
      name: 'Maria Oliveira',
      email: 'maria.oliveira@empresa.com',
      linkedin: 'https://linkedin.com/in/maria-oliveira',
      photo: '/plantation-2.jpg'
    }
  ]

  return (
    <Container className="py-40 px-5">
      <Wrapper>
        <h2 className="text-4xl font-bold text-white text-center mb-8">Quem Somos</h2>

        <div className="flex flex-wrap gap-10 justify-center mb-10">
          <div className="w-[90%] max-w-[600px] h-auto overflow-hidden bg-red-500 lg:w-1/2">
            <img
              src="/building.webp"
              alt="Nossa Empresa"
              className="rounded-xl w-full h-full object-contain"
            />
          </div>

          <div className="w-full text-center  flex flex-col justify-center lg:w-1/2 lg:text-left">
            <p className="text-lg text-gray-600 mb-4">
              Somos uma empresa inovadora que transforma desafios em soluções. Com mais de 10 anos
              de experiência, já conquistamos o mercado com nossa excelência em análise de solo e
              biologia. Nosso compromisso com a sustentabilidade é o que nos move.
            </p>
            <p className="text-lg text-gray-600">
              Com uma equipe qualificada e tecnologia de ponta, atingimos mais de 300 projetos
              bem-sucedidos e continuamos a crescer com nossos parceiros.
            </p>
          </div>
        </div>

        {/* Equipe */}
        <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">Conheça Nossa Equipe</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-5 flex flex-col items-center text-center"
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.email}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-500 mt-2 text-sm font-medium hover:underline"
              >
                LinkedIn
              </a>
            </div>
          ))}
        </div>
      </Wrapper>

      <Wrapper className="w-full h-[50dvh] absolute top-0 left-0 -z-10">
        <img src="/building.webp" className="w-full h-full object-cover brightness-[0.3]" alt="" />
      </Wrapper>
    </Container>
  )
}
