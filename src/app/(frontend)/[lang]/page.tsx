'use client'
import Banner from './components/Banner/index'
import Aboutus from './components/Aboutus/index'
import Digital from './components/Digital/index'
import Beliefs from './components/Beliefs/index'
import Featured from './components/Featured/index'
import FAQ from './components/FAQ/index'
import Joinus from './components/Joinus/index'
import Insta from './components/Insta/index'
import parser from 'html-react-parser'
import { Lang } from '@/types'
import { useEffect, useState } from 'react'

export default function Home({ params }: { params: Promise<{ lang: Lang }> }) {
  const [lang, setLang] = useState<Lang>('en')

  useEffect(() => {
    const init = async () => {
      const { lang } = await params
      setLang(lang)
    }
    init()
  }, [])

  return (
    <main className="overflow-x-hidden">
      <Banner lang={lang} />
      <Aboutus lang={lang} />
      <Digital lang={lang} parser={parser} />
      <Beliefs lang={lang} parser={parser} />
      <Featured lang={lang} />
      <FAQ lang={lang} parser={parser} />
      <Joinus lang={lang} parser={parser} />
      <Insta />
    </main>
  )
}
