import images from '../../assets/images/imports'
import Slider from 'react-slick'
import React from 'react'

const HiddenArrows = ({ style }: any) => <div style={{ display: 'none' }}/>

type Props = {
  peoplesSlider?: boolean
}

export const ImageSlider = ({ peoplesSlider = false }: Props) => {
  const configSlider = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <HiddenArrows/>,
    prevArrow: <HiddenArrows/>
  }
  if (peoplesSlider) {
    return (
      <Slider {...configSlider}>
        <div>
          <img src={images.peopleOne} alt="people with acoustic guitar" />
        </div>
        <div>
          <img src={images.peopleThree} alt="people sending messages" />
        </div>
      </Slider>
    )
  }

  return (
    <Slider {...configSlider}>
      <div>
        <img src={images.dogRobot} alt="dog robot" />
      </div>
      <div>
        <img src={images.helloRobot} alt="cute robot waving" />
      </div>
    </Slider>
  )
}
