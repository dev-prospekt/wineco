import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef] = useEmblaCarousel(options)

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">

          {slides.map((index, key) => (
            <div className="embla__slide" key={key}>
              <img
                className="embla__slide__img"
                src={`https://strapi.wine-co.hr${index.attributes.url}`}
                alt="slide"
              />
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
