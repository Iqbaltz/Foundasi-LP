import Image from 'next/image'

const Digital = () => {
  return (
    <div className="mx-2">
      <div className="relative px-4 pb-20 mx-auto mt-40 max-w-7xl lg:pb-40 lg:px-8 bg-digital rounded-3xl bg-blue">
        <div className="grid grid-cols-1 my-16 lg:grid-cols-2">
          {/* COLUMN-1 */}

          <div className="pt-24 lg:pl-24 ">
            <h3 className="mb-5 text-lg font-normal tracking-widest text-center text-white lg:text-start">
              DIGITAL SOLUTIONS
            </h3>
            <h4 className="mb-8 text-4xl font-bold leading-snug text-center text-white sm:text-6xl lg:text-start">
              We’re building <br />{' '}
              <span className="text-5xl sm:text-7xl text-[#FFD700] font-extrabold">
                future-ready
              </span>{' '}
              <br /> software for seamless growth.
            </h4>
            <div className="text-center lg:text-start">
              <button className="px-12 py-4 text-xl font-semibold text-white rounded-full bg-btnblue hover:bg-hoblue">
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
