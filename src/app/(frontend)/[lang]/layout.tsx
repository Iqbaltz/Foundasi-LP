import './globals.css'
import Navbar from './components/Navbar/index'
import Footer from './components/Footer/index'
import { Lang } from '@/types'
import { ToastContainer } from 'react-toastify'

export const metadata = {
  title: 'Foundasi',
  description:
    'Foundasi is an agency that combines expertise in design and technology to deliver measurable business outcomes for growing startups and established companies.',
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: Lang }>
}) {
  const { lang } = await params

  return (
    <html lang={lang}>
      <body>
        <Navbar lang={lang} />
        {children}
        <ToastContainer />
        <Footer />
      </body>
    </html>
  )
}
