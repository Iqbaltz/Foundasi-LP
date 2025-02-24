'use client'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { Lang, LocalizedString } from '@/types'
import { toast } from 'react-toastify'

interface datatype {
  heading: LocalizedString
  imgSrc: string
  paragraph: LocalizedString
  linkText: LocalizedString
  link: string
}
const sentences = {
  title: {
    en: 'Embarking on a Creative Journey',
    id: 'Memulai Perjalanan Kreatif',
  },
  subtitle: {
    en: 'We’re shaping brands, building experiences, and redefining success—one step at a time.',
    id: 'Kami membentuk merek, menciptakan pengalaman, dan mendefinisikan ulang kesuksesan—satu langkah pada satu waktu.',
  },
}

const Aboutdata: datatype[] = [
  {
    heading: { en: 'Discovering Who We Are.', id: 'Cari tahu siapa kami.' },
    imgSrc: '/images/aboutus/imgOne.svg',
    paragraph: {
      en: 'We’re helping businesses craft unique identities, streamline operations, and design digital products that make an impact. Every day, we’re transforming ideas into reality.',
      id: 'Kami membantu bisnis menciptakan identitas unik, menyederhanakan operasional, dan merancang produk digital yang memberikan dampak. Setiap hari, kami mengubah ide menjadi kenyataan.',
    },
    linkText: { en: 'Uncover Our Story', id: 'Jelajahi Kisah Kami' },
    link: '#',
  },
  {
    heading: { en: 'Bringing Ideas to Life.', id: 'Menghidupkan Ide.' },
    imgSrc: '/images/aboutus/imgTwo.svg',
    paragraph: {
      en: "We’re creating powerful websites and interactive platforms, turning visions into stunning digital experiences. Whether it's e-commerce, web apps, or landing pages, we’re making brands thrive.",
      id: 'Kami menciptakan situs web yang kuat dan platform interaktif, mengubah visi menjadi pengalaman digital yang memukau. Baik itu e-commerce, aplikasi web, atau halaman arahan, kami membuat merek berkembang.',
    },
    linkText: { en: 'See How We Do It', id: 'Lihat Cara Kami Melakukannya' },
    link: '#',
  },
  {
    heading: { en: 'Designing the Future.', id: 'Merancang Masa Depan.' },
    imgSrc: '/images/aboutus/imgThree.svg',
    paragraph: {
      en: 'We’re shaping visual identities and developing brand strategies that set tech companies apart. By blending creativity with strategy, we’re helping brands leave a lasting mark.',
      id: 'Kami membentuk identitas visual dan mengembangkan strategi merek yang membuat perusahaan teknologi berbeda. Dengan memadukan kreativitas dan strategi, kami membantu merek meninggalkan kesan yang mendalam.',
    },
    linkText: { en: 'Explore Our Work', id: 'Jelajahi Karya Kami' },
    link: '#featured-works',
  },
]

const Aboutus = ({ lang }: { lang: Lang }) => {
  const handleComingSoon = (url: string) => {
    if (url == '#') toast.info('We’re still working on that 🔥🧑‍💻')
  }
  return (
    <div id="aboutus-section">
      <div className="relative bg-lightgrey mx-auto my-32 px-4 lg:px-10 py-24 rounded-3xl max-w-7xl">
        <Image
          src="/images/aboutus/dots.svg"
          width={100}
          height={100}
          alt="dots-image"
          className="bottom-1 -left-20 absolute"
        />
        <h3 className="text-blue text-lg text-center tracking-widest">{sentences.title[lang]}</h3>
        <h4
          className={`font-bold lg:text-65xl ${lang == 'id' && 'lg:!text-[56px]'} text-4xl text-center`}
        >
          {sentences.subtitle[lang]}
        </h4>
        <div className="gap-x-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-16">
          {Aboutdata.map((item, i) => (
            <div
              key={i}
              className="group bg-white hover:bg-navyblue shadow-xl mt-16 pt-10 pr-6 pb-10 pl-8 rounded-3xl"
            >
              <h4 className="group-hover:text-white mb-5 font-semibold text-black text-4xl">
                {item.heading[lang]}
              </h4>
              <Image src={item.imgSrc} alt={item.imgSrc} width={60} height={60} className="mb-5" />
              <h4 className="group-hover:text-offwhite mb-5 font-normal text-black text-lg">
                {item.paragraph[lang]}
              </h4>
              <Link
                href={item.link}
                onClick={() => handleComingSoon(item.link)}
                className="group-hover:text-white font-semibold text-blue text-lg hover-underline"
              >
                {item.linkText[lang]}
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
