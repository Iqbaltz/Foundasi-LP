'use client'
import Slider from 'react-slick'
import React, { Component } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { formatDate } from '@/lib/helpers'

interface ArticlesProps {
  blogs: any
}

export default class Articles extends Component<ArticlesProps> {
  render() {
    const { blogs } = this.props

    const settings = {
      dots: false,
      infinite: false,
      slidesToShow: 3,
      // centerMode: true,
      slidesToScroll: 2,
      arrows: false,
      autoplay: false,
      speed: 500,
      cssEase: 'linear',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
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
      <div className="bg-lightgrey py-20" id="blog-section">
        <div className="mx-auto lg:px-8 sm:py-4 max-w-7xl">
          <div className="text-center">
            <h3 className="font-normal text-blue text-lg tracking-widest">ARTICLES</h3>
            <h3 className="font-bold text-4xl sm:text-6xl">Our latest post.</h3>
          </div>

          <Slider {...settings}>
            {blogs &&
              blogs.map((items: any) => (
                <div key={items.id}>
                  <div className="relative bg-white shadow-lg m-3 my-10 px-3 pt-3 pb-4 rounded-3xl">
                    <Image
                      src={items.image.url}
                      alt="gaby"
                      width={389}
                      height={262}
                      className="inline-block rounded-2xl w-full h-72 object-cover"
                    />

                    {/* <Link href="/">
                      <h3 className="absolute bg-blue hover:bg-black hover:shadow-xl px-6 py-3 rounded-full text-white article-img">
                        {items.time} read
                      </h3>
                    </Link> */}
                    <Link href={`/blogs/${items.slug}`}>
                      <h4 className="pt-6 font-bold text-black text-2xl line-clamp-2">
                        {items.title}
                      </h4>
                    </Link>

                    <div>
                      <h3 className="opacity-75 pt-2 font-normal text-base">
                        {items.author['Full Name']}
                      </h3>
                      <h3 className="opacity-35 font-normal text-base">
                        {formatDate(items.createdAt)}
                      </h3>
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
