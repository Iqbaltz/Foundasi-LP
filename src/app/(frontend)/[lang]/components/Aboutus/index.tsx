import Image from 'next/image'
import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

interface datatype {
  heading: string
  imgSrc: string
  paragraph: string
  link: string
}

const Aboutdata: datatype[] = [
  {
    heading: 'Discovering Who We Are.',
    imgSrc: '/images/aboutus/imgOne.svg',
    paragraph:
      'We’re helping businesses craft unique identities, streamline operations, and design digital products that make an impact. Every day, we’re transforming ideas into reality.',
    link: 'Uncover Our Story',
  },
  {
    heading: 'Bringing Ideas to Life.',
    imgSrc: '/images/aboutus/imgTwo.svg',
    paragraph: `We’re creating powerful websites and interactive platforms, turning visions into stunning digital experiences. Whether it's e-commerce, web apps, or landing pages, we’re making brands thrive.`,
    link: 'See How We Do It',
  },
  {
    heading: 'Designing the Future.',
    imgSrc: '/images/aboutus/imgThree.svg',
    paragraph:
      'We’re shaping visual identities and developing brand strategies that set tech companies apart. By blending creativity with strategy, we’re helping brands leave a lasting mark.',
    link: 'Explore Our Work',
  },
]

const Aboutus = () => {
  return (
    <div id="aboutus-section">
      <div className="relative px-4 py-24 mx-auto my-32 bg-lightgrey lg:px-10 rounded-3xl max-w-7xl">
        <Image
          src="/images/aboutus/dots.svg"
          width={100}
          height={100}
          alt="dots-image"
          className="absolute bottom-1 -left-20"
        />
        <h3 className="text-lg tracking-widest text-center text-blue">
          Embarking on a Creative Journey
        </h3>
        <h4 className="text-4xl font-bold text-center lg:text-65xl">
          We’re shaping brands, building experiences, and redefining success—one step at a time.
        </h4>
        <div className="grid grid-cols-1 my-16 gap-x-16 sm:grid-cols-2 lg:grid-cols-3">
          {Aboutdata.map((item, i) => (
            <div
              key={i}
              className="pt-10 pb-10 pl-8 pr-6 mt-16 bg-white shadow-xl hover:bg-navyblue rounded-3xl group"
            >
              <h4 className="mb-5 text-4xl font-semibold text-black group-hover:text-white">
                {item.heading}
              </h4>
              <Image src={item.imgSrc} alt={item.imgSrc} width={60} height={60} className="mb-5" />
              <h4 className="mb-5 text-lg font-normal text-black group-hover:text-offwhite">
                {item.paragraph}
              </h4>
              <Link
                href="#"
                className="text-lg font-semibold group-hover:text-white text-blue hover-underline"
              >
                {item.link}
                <ChevronRightIcon width={20} height={20} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Aboutus
