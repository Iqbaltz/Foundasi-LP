'use client'
import Slider from 'react-slick'
import React, { Component } from 'react'
import Image from 'next/image'

// CAROUSEL DATA

interface DataType {
  heading: string
  imgSrc: string
}

const postData: DataType[] = [
  {
    heading: 'Brand design for a computer brand.',
    imgSrc: '/images/featured/feat1.jpg',
  },
  {
    heading: 'Mobile app 3d wallpaper.',
    imgSrc: '/images/featured/feat2.jpg',
  },
  {
    heading: 'Brand design for a computer brand.',
    imgSrc: '/images/featured/feat1.jpg',
  },
  {
    heading: 'Mobile app 3d wallpaper.',
    imgSrc: '/images/featured/feat2.jpg',
  },
]

// CAROUSEL SETTINGS

function SampleNextArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgba(255, 255, 255, 0.3)',
        padding: '28px',
        borderRadius: '20px',
      }}
      onClick={onClick}
    />
  )
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgba(255, 255, 255, 0.3)',
        padding: '28px',
        borderRadius: '20px',
      }}
      onClick={onClick}
    />
  )
}

interface MultipleItemsProps {
  lang: string;
}

export default class MultipleItems extends Component<MultipleItemsProps> {
  render() {
    const { lang } = this.props;
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      // centerMode: true,
      arrows: true,
      autoplay: false,
      speed: 500,
      nextArrow: <SampleNextArrow className={undefined} style={undefined} onClick={undefined} />,
      prevArrow: <SamplePrevArrow className={undefined} style={undefined} onClick={undefined} />,
      cssEase: 'linear',
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
      ],
    };

    return (
      <div className="bg-bgblue bg-featured py-20 marginFeature">
        <div className="mx-auto lg:px-8 sm:py-4 max-w-7xl">
          <div className="pt-48 md:pt-96 pb-10 text-center">
            <h3 className="my-2 font-bold text-white text-4xl sm:text-6xl">Featured works.</h3>
            <h3 className="my-2 lg:mr-48 font-bold text-white text-4xl sm:text-6xl text-opacity-50">
              Featured works.
            </h3>
            <h3
              id="featured-works"
              className="my-2 lg:-mr-32 font-bold text-white text-4xl sm:text-6xl text-opacity-25"
            >
              Featured works.
            </h3>
          </div>

          <Slider {...settings}>
            {postData.map((items, i) => (
              <div key={i}>
                <div className="bg-transparent m-3 my-10 pb-12 rounded-3xl">
                  <Image
                    src={items.imgSrc}
                    alt="gaby"
                    width={636}
                    height={620}
                    className="rounded-2xl"
                  />
                  <div className="w-345">
                    <h4 className="mt-10 sm:pt-6 font-bold text-white sm:text-5xl text-center sm:text-start">
                      {items.heading}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
