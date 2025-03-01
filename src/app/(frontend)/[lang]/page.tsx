import { getPayload } from 'payload'
import config from '@payload-config'
import { Lang } from '@/types'
import HomePage from './page.client'

export default async function Home({ params }: { params: Promise<{ lang: Lang }> }) {
  const payload = await getPayload({ config })
  const { lang } = await params

  const blogs = (await payload.find({ collection: 'blogs', limit: 5, draft: false })).docs

  return (
    <main className="overflow-x-hidden">
      <HomePage lang={lang} blogs={blogs} />
    </main>
  )
}
