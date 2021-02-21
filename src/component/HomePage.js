/**
Author : Rishabh Tyagi
utility : to make a Carousel  of components by passing them in as props.content in this component
*/

import React from 'react';
import CarouselSlider from './Carousel/CarouselSlider';
import Carousels from './Carousel/Carousel';

const HomePage = (props) => {

 const banners = [
    {
    img: "https://i.picsum.photos/id/441/800/400.jpg?hmac=ZY9zRJFqE-b2hmGp5nZdLi2zdXSSbmJuMm8Em2X0QZQ",
    title: "Test caption 1",
    subTitle: "Test Caption description 1"
    },
    {
    img: "https://i.picsum.photos/id/582/800/400.jpg?hmac=8L1sqcjsbMttGRTUY89BdteLNhiR8_V41W7jfL1FfPA",
    title: "Test caption 2",
    subTitle: "Test Caption description 2"
    },
    {
    img: "https://i.picsum.photos/id/140/800/400.jpg?hmac=XH08p051qQGcGOB_TQrNra5Jp9QlXVduAIHCgHUy260",
    title: "Test caption 3",
    subTitle: "Test Caption description 3"
    }
    ]

  return (
      <>
      <div>
          <CarouselSlider 
            popular={1}
            scrollButtons
            rightArrowStyle={{
                marginTop: '-1.5625rem',
              }}
              leftArrowStyle={{
                marginTop: '-1.5625rem',
              }}
              arrowContainerStyle={{
                  marginLeft: '-24px',
              }}
            content={banners.map((data) => (
                <Carousels
                  articleImage={data.img}
                  title={data.title}
                  subTitle={data.subTitle}
                  popular={1}
                />
              ))}
          />
      </div>
      </>
  )
}

export default HomePage;