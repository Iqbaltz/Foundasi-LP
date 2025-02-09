import Image from 'next/image'

const Digital = () => {
  return (
    <div className="mx-2" id="services-section">
      <div className="relative bg-blue bg-digital mx-auto mt-40 px-4 lg:px-8 pb-20 lg:pb-40 rounded-3xl max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 my-16">
          {/* COLUMN-1 */}

          <div className="pt-24 lg:pl-24">
            <h3 className="mb-5 font-normal text-white text-lg text-center lg:text-start tracking-widest">
              DIGITAL SOLUTIONS
            </h3>
            <h4 className="mb-8 font-bold text-white text-4xl sm:text-6xl text-center lg:text-start leading-snug">
              We’re building <br />{' '}
              <span className="font-extrabold text-[#FFD700] text-5xl sm:text-7xl">
                future-ready
              </span>{' '}
              <br /> software for seamless growth.
            </h4>
            <div className="text-center lg:text-start">
              <button className="bg-btnblue hover:bg-hoblue px-12 py-4 rounded-full font-semibold text-white text-xl">
                Let’s Build Together
              </button>
            </div>
          </div>

          {/* COLUMN-2 */}

          <div>
            <div className="lg:absolute girldoodle">
              <Image
                src="/images/digital/girldoodle.svg"
                alt="girldoodle"
                width={815}
                height={691}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Digital
