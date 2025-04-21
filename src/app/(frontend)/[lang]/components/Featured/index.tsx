'use client'
import Slider from 'react-slick'
import React, { Component } from 'react'
import Image from 'next/image'

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
  lang: string
  projects: any
}

export default class MultipleItems extends Component<MultipleItemsProps> {
  render() {
    const { lang, projects } = this.props

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
    }

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
            {projects.map((items: any, i: number) => (
              <div key={i}>
                <div className="bg-transparent m-3 my-10 pb-12 rounded-3xl">
                  <Image
                    src={items?.images?.[0].image.url}
                    alt="gaby"
                    width={636}
                    height={620}
                    className="rounded-2xl h-[360px] object-cover"
                  />
                  <div className="flex justify-between">
                    <div className="w-345">
                      <h4 className="mt-6 sm:pt-2 font-bold text-white sm:text-4xl text-center sm:text-start">
                        {items?.title}
                      </h4>
                      <p className="pt-2 text-white text-lg">{items?.description}</p>
                    </div>
                    <div className="flex justify-center items-center w-1/2 sm:w-1/3">
                      <a
                        key={i}
                        href={items?.['site url']}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="bg-white hover:bg-lightblue hover:shadow-xl px-6 py-3 rounded-full font-bold text-blue text-lg">
                          {lang === 'en' ? 'Visit Site' : 'Kunjungi Web'}
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    )
  }
}
