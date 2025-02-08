const Beliefs = () => {
  return (
    <div className="max-w-2xl mx-auto lg:max-w-7xl sm:pb-4 rounded-3xl">
      <div className="grid grid-cols-1 gap-5 my-16 lg:grid-cols-2">
        {/* COLUMN-1 */}

        <div className="px-10 pt-12 bg-darkblue bg-beliefs sm:px-24 pb-52 md:pb-70 rounded-3xl">
          <h2 className="mb-5 text-lg font-normal tracking-widest text-center text-white sm:text-start">
            DESIGNING SERVICES
          </h2>
          <h3 className="mb-5 text-4xl font-bold leading-snug text-center text-white sm:text-65xl sm:text-start">
            Design<span className="text-grey">ing Brands, Crafting Experiences</span>
          </h3>
          <h5 className="pt-2 mb-5 text-center text-offwhite sm:text-start">
            Logos, UI/UX, social media, photography—every pixel tells a story. Let’s bring your
            vision to life.
          </h5>
          <div className="text-center sm:text-start">
            <button className="py-5 mt-5 text-xl font-semibold text-white border rounded-full px-14 bg-blue border-blue hover:bg-hoblue">
              Let’s Create
            </button>
          </div>
        </div>

        {/* COLUMN-2 */}

        <div className="px-10 pt-12 bg-build sm:px-24 pb-52 md:pb-70 rounded-3xl">
          <h2 className="mb-5 text-lg font-normal tracking-widest text-center text-blue sm:text-start">
            COPYWRITING & MARKETING
          </h2>
          <h3 className="mb-5 text-4xl font-bold leading-snug text-center text-black sm:text-65xl sm:text-start">
            <span className="text-blue">Words</span> That Sell, Strategies That Scale.
          </h3>
          <h5 className="pt-2 mb-5 text-center bluish sm:text-start">
            From SEO-driven content to brand storytelling, we craft messages that engage, convert,
            and grow.
          </h5>
          <div className="text-center sm:text-start">
            <button className="py-5 mt-5 text-xl font-semibold text-white border rounded-full px-14 bg-blue border-blue hover:bg-hoblue">
              Boost Your Brand
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Beliefs
