import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import Container from '@/components/ui/container'
import useTranslations from '@/i18n/translations'

export default function Feedbacks() {
  const { feedbacks } = useTranslations('pt')

  return (
    <Container className="py-20 my-20 max-w-full  overflow-hidden relative">
      <div className="px-4 sm:px-6 lg:px-12 z-10 w-full text-white">
        <h6 className="font-semibold mb-3 text-center">Depoimentos</h6>
        <h2 className="text-4xl font-bold text-center leading-normal">
          A <span className="font-bold bg-green-500 p-2">Satisfação</span>
          <br /> em cada palavra
        </h2>
      </div>

      <div className="px-4 sm:px-6 lg:px-12  w-full">
        <Carousel>
          <CarouselContent className="p-5">
            {feedbacks.map(({ client, feedback, position }, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-white h-full rounded-lg shadow-black shadow-md  p-6 flex flex-col items-center text-center">
                  <h3 className="text-xl font-semibold text-secondary-500 line-clamp-1">
                    {client}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4 line-clamp-1">{position}</p>
                  <p className="text-gray-700 mb-4 line-clamp-4">{feedback}</p>
                  <Dialog>
                    <DialogTrigger className="bg-secondary-500 px-5 py-5 text-white w-full max-w-[600px] mx-auto font-semibold rounded-lg">
                      Ver avaliação completa
                    </DialogTrigger>
                    <DialogContent className="w-fit max-w-[400px] min-w-[90%] md:min-w-0">
                      <DialogHeader>
                        <DialogTitle className="text-secondary-500 text-2xl">{client}</DialogTitle>
                        <DialogDescription className="text-gray-700 text-lg  font-thin max-h-[80dvh] overflow-y-auto">
                          {feedback}
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-1/2 transform -translate-x-[calc(50%+40px)] top-[105%] translate-y-0" />
          <CarouselNext className="left-1/2 transform -translate-x-[calc(50%-40px)] top-[105%]  translate-y-0" />
        </Carousel>
      </div>

      <div className="absolute w-full h-full -bottom-10 md:bottom-0 left-0 -z-10">
        <img
          src="/home-feedbacks.webp"
          className="w-full h-full object-cover object-center blur-[6px]"
          alt=""
          loading="lazy"
        />
      </div>
    </Container>
  )
}
