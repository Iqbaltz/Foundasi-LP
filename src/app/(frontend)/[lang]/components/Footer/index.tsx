import Image from 'next/image'
import Link from 'next/link'

// MIDDLE LINKS DATA
interface ProductType {
  id: number
  section: string
  link: string[]
}

const products: ProductType[] = [
  {
    id: 1,
    section: 'Menu',
    link: ['Home', 'Popular', 'About', 'Contact'],
  },
  {
    id: 2,
    section: 'Category',
    link: ['Design', 'Mockup', 'View all', 'Log In'],
  },
  {
    id: 3,
    section: 'Pages',
    link: ['404', 'Instructions', 'License'],
  },
  {
    id: 4,
    section: 'Others',
    link: ['Styleguide', 'Changelog'],
  },
]

const footer = () => {
  return (
    <div className="bg-black" id="first-section">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 pt-48 pb-16 max-w-2xl lg:max-w-7xl">
        <div className="gap-x-16 gap-y-10 xl:gap-x-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 mt-24">
          {/* COLUMN-1 */}

          <div className="col-span-4">
            <h3 className="mb-4 lg:mb-20 font-semibold text-white text-4xl leading-9">
              {' '}
              Foundasi Solutions
            </h3>
            <div className="flex gap-4">
              <div className="footer-icons">
                <Link href="https://facebook.com">
                  <Image src={'/images/footer/vec.svg'} alt="facebook" width={15} height={20} />
                </Link>
              </div>
              <div className="footer-icons">
                <Link href="https://twitter.com">
                  <Image src={'/images/footer/twitter.svg'} alt="twitter" width={20} height={20} />
                </Link>
              </div>
              <div className="footer-icons">
                <Link href="https://instagram.com">
                  <Image
                    src={'/images/footer/instagram.svg'}
                    alt="instagram"
                    width={20}
                    height={20}
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* CLOUMN-2/3 */}

          {products.map((product) => (
            <div key={product.id} className="group relative col-span-2">
              <p className="mb-9 font-extrabold text-white text-xl">{product.section}</p>
              <ul>
                {product.link.map((link: string, index: number) => (
                  <li key={index} className="mb-5">
                    <Link href="/" className="mb-6 font-normal text-white text-lg space-links">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* All Rights Reserved */}

      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <div className="px-4 sm:px-6 lg:px-4 pt-5 pb-5 border-footer border-t border-solid">
          <div className="gap-x-16 gap-y-10 xl:gap-x-8 grid grid-cols-1 sm:grid-cols-2 mt-4">
            <div>
              <h3 className="text-offwhite text-lg text-center md:text-start">
                @2025 - All Rights Reserved by{' '}
                <Link href="https://iqbaldev.pro/" target="_blank">
                  {' '}
                  iqbaldev.pro
                </Link>
              </h3>
            </div>
            <div className="flex justify-center md:justify-end">
              <Link href="/">
                <h3 className="pr-6 text-offwhite">Privacy policy</h3>
              </Link>
              <Link href="/">
                <h3 className="pl-6 border-footer border-l border-solid text-offwhite">
                  Terms & conditions
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default footer
