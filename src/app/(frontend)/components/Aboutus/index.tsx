import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

interface datatype {
  heading: string;
  imgSrc: string;
  paragraph: string;
  link: string;
}

const Aboutdata: datatype[] = [
  {
    heading: "About us.",
    imgSrc: "/images/aboutus/imgOne.svg",
    paragraph:
      "We help our clients build a consistent brand and product. We help companies streamline business operations through digital product design and development.",
    link: "Learn more",
  },
  {
    heading: "Services.",
    imgSrc: "/images/aboutus/imgTwo.svg",
    paragraph:
      "Our agency creates websites and landing pages, from e-commerce platforms to interactive web applications, making your brand a resounding success.",
    link: "Learn more",
  },
  {
    heading: "Our Works.",
    imgSrc: "/images/aboutus/imgThree.svg",
    paragraph:
      "Our branding agency creates visual identities and develops brand strategies for tech companies around the world.",
    link: "Learn more",
  },
];

const Aboutus = () => {
  return (
    <div id="aboutus-section">
      <div className="relative bg-lightgrey mx-auto my-32 px-4 lg:px-10 py-24 rounded-3xl max-w-7xl">
        <Image
          src="/images/aboutus/dots.svg"
          width={100}
          height={100}
          alt="dots-image"
          className="bottom-1 -left-20 absolute"
        />
        <h3 className="text-blue text-center text-lg tracking-widest">
          ABOUT US
        </h3>
        <h4 className="font-bold text-4xl text-center lg:text-65xl">
          Know more about us.
        </h4>
        <div className="gap-x-16 lg:gap-x-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-16">
          {Aboutdata.map((item, i) => (
            <div
              key={i}
              className="bg-white hover:bg-navyblue shadow-xl mt-16 pt-10 pr-6 pb-10 pl-8 rounded-3xl group"
            >
              <h4 className="group-hover:text-white mb-5 font-semibold text-4xl text-black">
                {item.heading}
              </h4>
              <Image
                src={item.imgSrc}
                alt={item.imgSrc}
                width={100}
                height={100}
                className="mb-5"
              />
              <h4 className="group-hover:text-offwhite mb-5 font-normal text-black text-lg">
                {item.paragraph}
              </h4>
              <Link
                href="#"
                className="group-hover:text-white font-semibold text-blue text-lg hover-underline"
              >
                {item.link}
                <ChevronRightIcon width={20} height={20} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
