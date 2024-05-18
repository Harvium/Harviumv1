import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const ProductCarousel = () => {
  return (
    <Carousel className='flex flex-col gap-16 w-full'>
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem
            key={index}
            className='flex flex-col gap-4 md:basis-1/2 lg:basis-1/4'
          >
            <img src='src/assets/Carousel.png' alt='carousel' />

            <div className='flex flex-col gap-1'>
              <p className='text-lg font-semibold non-italic'>
                Product name
              </p>
              <p className='text-sm non-italic'>Varient</p>
              <p className='text-x1 font-bold non-italic'>$55</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className='flex items-center justify-between'>
        <div className='flex gap-4'>
          <div className='h-2 w-2 bg-white rounded-full' />
          <div className='h-2 w-2 bg-[#ccc] rounded-full' />
          <div className='h-2 w-2 bg-[#ccc] rounded-full' />
          <div className='h-2 w-2 bg-[#ccc] rounded-full' />
          <div className='h-2 w-2 bg-[#ccc] rounded-full' />
        </div>

        <div className='flex items-center gap-4'>
          <CarouselPrevious className='relative translate-x-0 translate-y-0 bg-transparent h-12 w-12 left-0 top-0' />
          <CarouselNext className='relative translate-x-0 translate-y-0 bg-transparent h-12 w-12 right-0 top-0' />
        </div>
      </div>
    </Carousel>
  )
}

export default ProductCarousel;
