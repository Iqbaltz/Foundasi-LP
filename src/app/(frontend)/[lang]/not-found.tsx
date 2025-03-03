import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className="py-28 container">
      <div className="max-w-none prose">
        <h1 style={{ marginBottom: 0 }}>404</h1>
        <p className="mb-4">This page could not be found.</p>
      </div>
      <Link href="/">Go home</Link>
    </div>
  )
}
