import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import Container from '@/components/ui/container'

export default function Feedbacks() {
  const reviews = [
    {
      name: 'Maria Silva',
      role: 'Produtora Agrícola',
      review:
        'Os serviços são excepcionais! A análise detalhada do solo ajudou a melhorar minha colheita. Recomendo a todos.',
      rating: 5,
      avatar: '/avatar1.jpg'
    },
    {
      name: 'Carlos Santos',
      role: 'Pesquisador',
      review:
        'A precisão das análises e o suporte técnico são impecáveis. Me ajudaram muito no meu projeto de biologia.',
      rating: 4,
      avatar: '/avatar2.jpg'
    },
    {
      name: 'Ana Costa',
      role: 'Engenheira Ambiental',
      review:
        'Serviço de alta qualidade, com resultados rápidos e confiáveis. A equipe é muito atenciosa.',
      rating: 5,
      avatar: '/avatar3.jpg'
    },
    {
      name: 'Ana Costa',
      role: 'Engenheira Ambiental',
      review:
        'Serviço de alta qualidade, com resultados rápidos e confiáveis. A equipe é muito atenciosa.',
      rating: 5,
      avatar: '/avatar3.jpg'
    },
    {
      name: 'Carlos Santos',
      role: 'Pesquisador',
      review:
        'A precisão das análises e o suporte técnico são impecáveis. Me ajudaram muito no meu projeto de biologia.',
      rating: 4,
      avatar: '/avatar2.jpg'
    },
    {
      name: 'Ana Costa',
      role: 'Engenheira Ambiental',
      review:
        'Serviço de alta qualidade, com resultados rápidos e confiáveis. A equipe é muito atenciosa.',
      rating: 5,
      avatar: '/avatar3.jpg'
    },
    {
      name: 'Ana Costa',
      role: 'Engenheira Ambiental',
      review:
        'Serviço de alta qualidade, com resultados rápidos e confiáveis. A equipe é muito atenciosa.',
      rating: 5,
      avatar: '/avatar3.jpg'
    }
  ]

  return (
    <Container className="py-16 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <h6 className="font-semibold mb-1 text-center">Avaliações</h6>
        <h2 className="text-4xl font-bold text-secondary-500 text-center mb-8">
          O que nossos
          <br /> clientes dizem
        </h2>

        <Carousel>
          <CarouselContent className="p-5">
            {reviews.map(({ name, role, review }, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-white rounded-lg shadow-black shadow-lg  p-6 flex flex-col items-center text-center">
                  <h3 className="text-xl font-semibold text-secondary-500">{name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{role}</p>
                  <p className="text-gray-700 mb-4">{review}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-1/2 transform -translate-x-[calc(50%+40px)] top-[105%] translate-y-0" />
          <CarouselNext className="left-1/2 transform -translate-x-[calc(50%-40px)] top-[105%]  translate-y-0" />
        </Carousel>
      </div>
    </Container>
  )
}
