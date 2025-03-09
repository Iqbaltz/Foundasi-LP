'use client'
import { RichText } from '@payloadcms/richtext-lexical/react'
import React from 'react'

// Custom styles component for rich text content
const RichTextStyles = () => {
  return (
    <style jsx global>{`
      /* Add margin-top to headings within rich text */
      .rich-text h1 {
        margin-top: 2rem; /* mt-8 equivalent */
        font-size: 2rem; /* text-4xl equivalent */
      }
      .rich-text h2 {
        margin-top: 1.5rem; /* mt-6 equivalent */
        font-size: 1.75rem; /* text-3xl equivalent */
      }
      .rich-text h3 {
        margin-top: 1rem; /* mt-4 equivalent */
        font-size: 1.425rem; /* text-2xl equivalent */
      }
      .rich-text h4 {
        margin-top: 0.75rem; /* mt-3 equivalent */
        font-size: 1.25rem; /* text-xl equivalent */
      }
      .rich-text h5,
      .rich-text h6 {
        margin-top: 0.5rem; /* mt-2 equivalent */
        font-size: 1rem; /* text-lg equivalent */
      }
      .rich-text p {
        margin-top: 0.5rem; /* mt-4 equivalent */
        line-height: 1.75; /* leading-relaxed equivalent */
      }
    `}</style>
  )
}

type Props = { blog: any }

export default function FoRichText({ blog }: Props) {
  return (
    <div>
      <RichTextStyles />
      <RichText className="leading-relaxed rich-text" data={blog.content} />
    </div>
  )
}
