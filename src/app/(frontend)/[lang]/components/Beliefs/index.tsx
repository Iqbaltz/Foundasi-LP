import { Lang } from "@/types"

interface BeliefsProps {
  lang: Lang
  parser: any
}

const sentences = {
  title1: {
    en: 'DESIGNING SERVICES',
    id: 'LAYANAN DESAIN'
  },
  title2: {
    en: 'COPYWRITING & MARKETING',
    id: 'COPYWRITING & PEMASARAN'
  },
  subtitle1: {
    en: `Design<span className="text-grey">ing Brands, Crafting Experiences</span>`,
    id: `Mendesain<span className="text-grey"> Merek, Membuat Pengalaman</span>`
  },
  subtitle2: {
    en: `<span className="text-blue">Words</span> That Sell, Strategies That Scale.`,
    id: `<span className="text-blue">Kata-kata</span> yang Menjual, Strategi yang Berkembang.`
  },
  desc1: {
    en: 'Logos, UI/UX, social media, photography—every pixel tells a story. Let’s bring your vision to life.',
    id: 'Logo, UI/UX, media sosial, fotografi—setiap piksel menceritakan sebuah kisah. Mari kita hidupkan visi Anda.'
  },
  desc2: {
    en: 'From SEO-driven content to brand storytelling, we craft messages that engage, convert, and grow.',
    id: 'Dari konten yang didorong SEO hingga cerita merek, kami membuat pesan yang menarik, mengonversi, dan tumbuh.'
  },
  button1: {
    en: 'Let’s Create',
    id: 'Mari Membuat'
  },
  button2: {
    en: 'Boost Your Brand',
    id: 'Tingkatkan Merek Anda'
  }
}
  

const Beliefs = ({lang, parser}: BeliefsProps) => {
  return (
    <div className="max-w-2xl mx-auto lg:max-w-7xl sm:pb-4 rounded-3xl">
      <div className="grid grid-cols-1 gap-5 my-16 lg:grid-cols-2">
        {/* COLUMN-1 */}

        <div className="px-10 pt-12 bg-darkblue bg-beliefs sm:px-24 pb-52 md:pb-70 rounded-3xl">
          <h2 className="mb-5 text-lg font-normal tracking-widest text-center text-white sm:text-start">
            {sentences.title1[lang]}
          </h2>
          <h3 className="mb-5 text-4xl font-bold leading-snug text-center text-white sm:text-65xl sm:text-start">
            {parser(sentences.subtitle1[lang])}
          </h3>
          <h5 className="pt-2 mb-5 text-center text-offwhite sm:text-start">
            {sentences.desc1[lang]}
          </h5>
          <div className="text-center sm:text-start">
            <button className="py-5 mt-5 text-xl font-semibold text-white border rounded-full px-14 bg-blue border-blue hover:bg-hoblue">
              {sentences.button1[lang]}
            </button>
          </div>
        </div>

        {/* COLUMN-2 */}

        <div className="px-10 pt-12 bg-build sm:px-24 pb-52 md:pb-70 rounded-3xl">
          <h2 className="mb-5 text-lg font-normal tracking-widest text-center text-blue sm:text-start">
            {sentences.title2[lang]}
          </h2>
          <h3 className="mb-5 text-4xl font-bold leading-snug text-center text-black sm:text-65xl sm:text-start">
            {parser(sentences.subtitle2[lang])}
          </h3>
          <h5 className="pt-2 mb-5 text-center bluish sm:text-start">
            {sentences.desc2[lang]}
          </h5>
          <div className="text-center sm:text-start">
            <button className="py-5 mt-5 text-xl font-semibold text-white border rounded-full px-14 bg-blue border-blue hover:bg-hoblue">
              {sentences.button2[lang]}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Beliefs
