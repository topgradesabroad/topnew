import { BsCameraVideoFill, BsWhatsapp } from 'react-icons/bs';


export default function HeroSection() {
    return (
      <section className="h-[90vh] mt-5 flex flex-col md:flex-row gap-0">
        {/* Left Column (Text) */}
        <div className="relative w-full md:w-[50%] h-full px-8 md:pl-16 md:pr-2 flex flex-col justify-center bg-col order-2 md:order-1">
          <h1 className="text-3xl md:text-4xl lg:text-5xl pt-12 font-semibold font-dm-sans text-black leading-1.1 text-center md:text-left">
            Make Your Study-Abroad Dream a Reality
          </h1>
          <p className="mt-5 md:text-lg lg:text-base text-center md:text-justify text-gray-800 max-w-xl">
            From selecting the right programs and crafting strong applications to test preparation and visa support, we offer end-to-end assistance tailored to each student's goals, ensuring a smooth and successful study abroad journey.
          </p>
          <div className="mt-6 flex flex-row gap-2 md:gap-4 justify-center md:justify-start">
            {/* Consultation Button with Video Icon */}
            <button className="px-4 py-2 text-sm md:text-base font-normal text-white rounded-lg
              bg-black hover:bg-gray-800
              shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2">
              <span>Book Free Consultation</span>
              <BsCameraVideoFill size={20} />
            </button>
            {/* WhatsApp Button with WhatsApp Icon */}
            <button className="px-4 py-2 text-sm md:text-base font-normal text-black rounded-lg
              bg-transparent border border-black hover:text-white hover:bg-gray-800 hover:border-transparent
              shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2">
              <span>WhatsApp</span>
              <BsWhatsapp size={20} />
            </button>
          </div>
        </div>
        {/* Right Column (Image) */}
        <div className="relative w-full md:w-[50%] h-full order-1 md:order-2">
          <img src="hero7.png" alt="Description" className="w-full h-full object-cover object-left" />
        </div>
      </section>
    );
}