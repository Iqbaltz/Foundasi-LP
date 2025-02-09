import Banner from './components/Banner/index'
import Aboutus from './components/Aboutus/index'
import Digital from './components/Digital/index'
import Beliefs from './components/Beliefs/index'
import Featured from './components/Featured/index'
import FAQ from './components/FAQ/index'
import Joinus from './components/Joinus/index'
import Insta from './components/Insta/index'
import { Lang } from '@/types'

export default async function Home({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params

  return (
    <main className="overflow-x-hidden">
      <Banner lang={lang} />
      <Aboutus lang={lang} />
      <Digital />
      <Beliefs />
      <Featured />
      <FAQ />
      <Joinus />
      <Insta />
    </main>
  )
}
