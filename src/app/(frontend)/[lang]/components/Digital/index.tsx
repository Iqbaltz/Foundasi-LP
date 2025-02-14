import { Lang } from '@/types'
import Image from 'next/image'
import Link from 'next/link';


interface DigitalProps {
  lang: Lang
  parser: any
}

const sentences = {
  title:{
    en: 'Digital Solutions',
    id: 'Solusi Digital'
  },
  subtitle:{
    en: `We’re building <br />
              <span className="font-extrabold text-[#FFD700] text-5xl sm:text-7xl">
                future-ready
              </span>
          <br /> software for seamless growth.`,
    id: `Kami membangun <br />
              <span className="font-extrabold text-[#FFD700] text-5xl sm:text-7xl">
                future-ready
                </span>
                <br />software untuk pertumbuhan jangka panjang.`
  },
  button:{
    en: 'Let’s Build Together',
    id: 'Mari Bangun Bersama'
  }
}

const Digital = ({lang, parser}:DigitalProps) => {
  return (
    <div className="mx-2" id="services-section">
      <div className="relative bg-blue bg-digital mx-auto mt-40 px-4 lg:px-8 pb-20 lg:pb-40 rounded-3xl max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 my-16">
          {/* COLUMN-1 */}

          <div className="pt-24 lg:pl-24">
            <h3 className="mb-5 font-normal text-white text-lg text-center lg:text-start tracking-widest">
              {sentences.title[lang]}
            </h3>
            <h4 className="mb-8 font-bold text-white text-4xl sm:text-6xl text-center lg:text-start leading-snug">
              {parser(sentences.subtitle[lang])}
            </h4>
            <div className="text-center lg:text-start">
              <Link href="/start-project">
                <button className="bg-btnblue hover:bg-hoblue px-12 py-4 rounded-full font-semibold text-white text-xl">
                  {sentences.button[lang]}
                </button>
              </Link>
            </div>
          </div>

          {/* COLUMN-2 */}

          <div>
            <div className="lg:absolute girldoodle">
              <Image
                src="/images/digital/girldoodle.svg"
                alt="girldoodle"
                width={815}
                height={691}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Digital
