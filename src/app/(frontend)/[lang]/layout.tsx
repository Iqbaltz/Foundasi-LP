import './globals.css'
import Navbar from './components/Navbar/index'
import Footer from './components/Footer/index'

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
  params: Promise<{ lang: string }>
}) {
  const { lang } = (await params) || 'en'

  return (
    <html lang={lang}>
      <body>
        <Navbar lang={lang} />
        {children}
        <Footer />
      </body>
    </html>
  )
}
