import { getPayload } from 'payload'
import config from '@payload-config'
import { Lang } from '@/types'
import NotFound from '../../not-found'
import Image from 'next/image'
import { formatDate } from '@/lib/helpers'
import { CalendarIcon, UserIcon } from '@heroicons/react/24/solid'
import FoRichText from '../components/FoRichText'

export default async function BlogPage({
  params,
}: {
  params: Promise<{ lang: Lang; slug: string }>
}) {
  const payload = await getPayload({ config })
  const { lang, slug } = await params

  const blog: any = (
    await payload.find({
      collection: 'blogs',
      where: { slug: { equals: slug } },
      limit: 1,
      draft: false,
    })
  )?.docs?.[0]

  if (!blog) {
    return <NotFound />
  }

  return (
    <div className="bg-lightgrey w-full h-full">
      <div className="mx-auto px-4 py-28 lg:py-32 max-w-[800px] leading-relaxed">
        <h1 className="opacity-75 mb-4 w-full font-bold text-3xl lg:text-5xl/tight">
          {blog.title}
        </h1>
        <p className="flex items-center gap-1 opacity-75">
          <UserIcon className="w-4" /> {blog.author?.['Full Name']}
        </p>
        <p className="flex items-center gap-1 opacity-50 text-sm">
          <CalendarIcon className="w-4" />
          {formatDate(blog.createdAt)}
        </p>
        {blog.image?.url && (
          <Image
            src={blog.image.url}
            alt={blog.title}
            width={800}
            height={400}
            className="my-6 lg:mb-8 rounded max-h-96 object-cover"
          />
        )}
        <FoRichText blog={blog} />
      </div>
    </div>
  )
}
