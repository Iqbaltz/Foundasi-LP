'use client'
import { Lang } from '@/types'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

interface FAQProps {
  lang: Lang
  parser: any
}

const sentences = {
  title: {
    en: 'FAQ',
    id: 'FAQ',
  },
  subtitle: {
    en: 'Frequently asked <br /> questions.',
    id: 'Pertanyaan yang <br /> sering diajukan.',
  },
  question1: {
    en: 'What services do we offer?',
    id: 'Layanan apa yang kami tawarkan?',
  },
  answer1: {
    en: `We provide <span className="font-bold text-black">branding, design, and digital marketing</span> solutions, including <span className="font-bold text-black">logo design, UI/UX design, social media graphics, photography, website development, SEO, and content strategy.</span>`,
    id: `Kami menyediakan <span className="font-bold text-black">solusi branding, desain, dan pemasaran digital</span>, termasuk <span className="font-bold text-black">desain logo, desain UI/UX, grafis media sosial, fotografi, pengembangan situs web, SEO, dan strategi konten.</span>`,
  },
  question2: {
    en: 'Where are we located?',
    id: 'Dimana kami berlokasi?',
  },
  answer2: {
    en: `We are based in <span className="font-bold text-black">Medan, Indonesia</span> but we work with clients globally. Whether you're local or international, we ensure seamless communication and collaboration.`,
    id: `Kami berbasis di <span className="font-bold text-black">Medan, Indonesia</span> tetapi kami bekerja dengan klien secara global. Apakah Anda lokal atau internasional, kami memastikan komunikasi dan kolaborasi yang mulus.`,
  },
  question3: {
    en: 'What makes us different?',
    id: 'Apa yang membuat kami berbeda?',
  },
  answer3: {
    en: `We stand out through our <span className="font-bold text-black">end-to-end approach</span>, handling everything from <span className="font-bold text-black">branding and UI/UX design to development, SEO, and content strategy</span>—all under one roof. Our team combines <span className="font-bold text-black">industry expertise, cutting-edge technology, and data-driven insights</span> to craft solutions tailored to each client. We prioritize <span className="font-bold text-black">scalability, performance, and seamless user experiences</span>, ensuring that every project is not just visually appealing but also functional and optimized for growth`,
    id: `Kami menonjol melalui <span className="font-bold text-black">pendekatan end-to-end</span> kami, menangani segala sesuatu mulai dari <span className="font-bold text-black">branding dan desain UI/UX hingga pengembangan, SEO, dan strategi konten</span>—semua di bawah satu atap. Tim kami menggabungkan <span className="font-bold text-black">keahlian industri, teknologi mutakhir, dan wawasan berbasis data</span> untuk membuat solusi yang disesuaikan dengan setiap klien. Kami memprioritaskan <span className="font-bold text-black">skalabilitas, kinerja, dan pengalaman pengguna yang mulus</span>, memastikan bahwa setiap proyek tidak hanya menarik secara visual tetapi juga fungsional dan dioptimalkan untuk pertumbuhan.`,
  },
}

const FAQ = ({ lang, parser }: FAQProps) => {
  return (
    <div
      id="faq-section"
      className="py-24 mx-auto my-16 bg-faqblue lg:px-8 rounded-2xl max-w-7xl faq-bg"
    >
      <h3 className="mb-6 text-xl font-normal text-center text-white">{sentences.title[lang]}</h3>
      <h2 className="text-4xl font-semibold text-center text-white lg:text-6xl">
        {parser(sentences.subtitle[lang])}
      </h2>
      <div className="w-full px-4 pt-16">
        <div className="w-full max-w-5xl px-6 py-8 mx-auto mb-5 bg-white rounded-2xl">
          <Disclosure as="div">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-2xl font-medium text-left rounded-lg">
                  <span>{sentences.question1[lang]}</span>
                  <ChevronUpIcon
                    className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base font-normal text-black opacity-50">
                  {parser(sentences.answer1[lang])}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>

        <div className="w-full max-w-5xl px-6 py-8 mx-auto mb-5 bg-white rounded-2xl">
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-2xl font-medium text-left rounded-lg">
                  <span>{sentences.question2[lang]}</span>
                  <ChevronUpIcon
                    className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base font-normal text-black opacity-50">
                  {parser(sentences.answer2[lang])}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>

        <div className="w-full max-w-5xl px-6 py-8 mx-auto bg-white rounded-2xl">
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-2xl font-medium text-left rounded-lg">
                  <span>{sentences.question3[lang]}</span>
                  <ChevronUpIcon
                    className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base font-normal text-black opacity-50">
                  {parser(sentences.answer3[lang])}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
  )
}

export default FAQ
