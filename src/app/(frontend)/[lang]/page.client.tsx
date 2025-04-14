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
import React from 'react'
import Articles from './components/Articles'
import { Blog } from '@/payload-types'
import { Project } from '@/payload-types'

interface HomePageProps {
  lang: Lang
  blogs: Blog[]
  projects: Project[]
}

export default function HomePage({ lang, blogs, projects }: HomePageProps) {
  return (
    <React.Fragment>
      <Banner lang={lang} />
      <Aboutus lang={lang} />
      <Digital lang={lang} parser={parser} />
      <Beliefs lang={lang} parser={parser} />
      <Featured lang={lang} projects={projects} />
      <FAQ lang={lang} parser={parser} />
      <Joinus lang={lang} parser={parser} />
      <Articles blogs={blogs} />
      {/* <Insta /> */}
    </React.Fragment>
  )
}
