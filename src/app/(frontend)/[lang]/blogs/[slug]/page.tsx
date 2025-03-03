import { getPayload } from 'payload'
import config from '@payload-config'
import { Lang } from '@/types'
import NotFound from '../../not-found'
import Image from 'next/image'
import { formatDate } from '@/lib/helpers'
import { RichText } from '@payloadcms/richtext-lexical/react'

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
    <div className="mx-auto my-32 p-4 max-w-[800px]">
      <h1 className="mb-4 font-bold text-3xl lg:text-5xl">{blog.title}</h1>
      <p className="opacity-75">{blog.author?.['Full Name']}</p>
      <p className="opacity-50 text-sm">{formatDate(blog.createdAt)}</p>
      {blog.image?.url && (
        <Image
          src={blog.image.url}
          alt={blog.title}
          width={800}
          height={400}
          className="my-6 lg:mb-8 rounded max-h-96 object-cover"
        />
      )}
      <RichText data={blog.content} />
    </div>
  )
}
