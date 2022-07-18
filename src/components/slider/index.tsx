import images from '../../assets/images/imports'
import Slider from 'react-slick'
import React from 'react'
import { CentralizeImage } from './style'

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
        <CentralizeImage centralize>
          <img src={images.peopleOne} alt="people with acoustic guitar" />
        </CentralizeImage>
        <CentralizeImage centralize>
          <img src={images.peopleThree} alt="people sending messages" />
        </CentralizeImage>
      </Slider>
    )
  }

  return (
    <Slider {...configSlider}>
      <CentralizeImage>
        <img src={images.dogRobot} alt="dog robot" />
      </CentralizeImage>
      <CentralizeImage>
        <img src={images.helloRobot} alt="cute robot waving" />
      </CentralizeImage>
    </Slider>
  )
}
