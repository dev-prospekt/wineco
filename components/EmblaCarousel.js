import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { useState, useEffect, useCallback } from 'react';
import { DotButton } from '../components/EmblaCarouselArrowsDotsButtons';

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const [scrollSnaps, setScrollSnaps] = useState([])
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, setScrollSnaps, onSelect])

  return (
    <>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">

            {slides && slides.map((index, key) => (
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

      <div className="embla__dots">
      {scrollSnaps.map((_, index) => (
        <DotButton
          key={index}
          selected={index === selectedIndex}
          onClick={() => scrollTo(index)}
        />
      ))}
      </div>
    </>
  )
}

export default EmblaCarousel
