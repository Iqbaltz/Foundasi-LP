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
        opacity: 0.75;
        font-family: 'Urbanist', sans-serif;
        font-weight: bold;
      }
      .rich-text h2 {
        margin-top: 1.5rem; /* mt-6 equivalent */
        font-size: 1.75rem; /* text-3xl equivalent */
        opacity: 0.75;
        font-family: 'Urbanist', sans-serif;
        font-weight: bold;
      }
      .rich-text h3 {
        margin-top: 1rem; /* mt-4 equivalent */
        font-size: 1.425rem; /* text-2xl equivalent */
        opacity: 0.75;
        font-family: 'Urbanist', sans-serif;
        font-weight: bold;
      }
      .rich-text h4 {
        margin-top: 0.75rem; /* mt-3 equivalent */
        font-size: 1.25rem; /* text-xl equivalent */
        opacity: 0.75;
        font-family: 'Urbanist', sans-serif;
        font-weight: bold;
      }
      .rich-text h5,
      .rich-text h6 {
        margin-top: 0.5rem; /* mt-2 equivalent */
        font-size: 1.125rem; /* text-lg equivalent */
        opacity: 0.75;
        font-family: 'Urbanist', sans-serif;
        font-weight: bold;
      }
      .rich-text p {
        margin-top: 0.5rem; /* mt-4 equivalent */
        margin-bottom: 0.5rem; /* mt-4 equivalent */
        line-height: 1.75; /* leading-relaxed equivalent */
        font-size: 1.125rem; /* text-base equivalent */
        opacity: 0.75;
      }
      .rich-text ul {
        padding: 0.5em 1em;
      }
      .rich-text code {
        color: limegreen;
        padding: 4px 8px;
      }
      .rich-text p:has(code) {
        margin: 0;
        background-color: #000;
        opacity: 1;
        overflow-x: auto;
      }
      .rich-text hr {
        margin: 40px 0;
        border-top-width: 2px;
        border-color: #333;
      }
      .rich-text a {
        color: darkblue;
        text-decoration: underline;
      }
    `}</style>
  )
}

type Props = { blog: any }

export default function FoRichText({ blog }: Props) {
  return (
    <div>
      <RichTextStyles />
      <RichText className="font-[Merriweather] leading-relaxed rich-text" data={blog.content} />
    </div>
  )
}
