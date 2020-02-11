import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

const HeroCarousel = () => (
  <Carousel showThumbs={false} infiniteLoop autoPlay interval={4000} showStatus={false} showIndicators={false}>
    <div>
      <img src="https://via.placeholder.com/400x100" alt="hero-placeholder" />
    </div>
    <div>
      <img src="https://via.placeholder.com/400x100" alt="hero-placeholder" />
    </div>
    <div>
      <img src="https://via.placeholder.com/400x100" alt="hero-placeholder" />
    </div>
  </Carousel>
)

export default HeroCarousel;