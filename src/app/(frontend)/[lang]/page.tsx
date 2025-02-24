'use client'
import Banner from './components/Banner/index'
import Aboutus from './components/Aboutus/index'
import Digital from './components/Digital/index'
import Beliefs from './components/Beliefs/index'
import Featured from './components/Featured/index'
import FAQ from './components/FAQ/index'
import Joinus from './components/Joinus/index'
import parser from 'html-react-parser'
import { Lang } from '@/types'
import { useEffect, useState } from 'react'
import Articles from './components/Articles'
import { PaginatedDocs } from 'payload'
import { Blog } from '@/payload-types'

export default function Home({ params }: { params: Promise<{ lang: Lang }> }) {
  const [lang, setLang] = useState<Lang>('en')
  const [blogs, setBlogs] = useState<Blog[]>()

  useEffect(() => {
    const init = async () => {
      const { lang } = await params
      const res = await fetch('/api/blogs?limit=5')
      console.log('res', res)
      const resBlogs: PaginatedDocs<Blog> = await res.json()
      setBlogs(resBlogs.docs)

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
      <Articles blogs={blogs} />
      {/* <Insta /> */}
    </main>
  )
}
