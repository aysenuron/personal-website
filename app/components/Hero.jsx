export default function Hero() {
  return (
    <section>
      <div className="container py-10 px-4 lg:px-0 lg:pt-24 2xl:pt-60 2xl:pb-30 h-5/6 mx-auto">
        <div className="grid lg:grid-cols-3 gap-4">
          <div className="lg:col-start-2 lg:col-end-4">
            <h1 className="degular font-medium text-4xl lg:text-7xl mb-4">
              Hi, I'm Ay<span className="text-[33px] lg:text-[64px]">ş</span>
              enur <span className="degular text-2xl lg:text-5xl">👋🏻</span>
            </h1>
            <p className="degular mb-8 text-[#999999] font-medium text-2xl md:text-4xl lg:text-5xl">
              Web Developer & Designer
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 lg:grid-rows-1 gap-6 text-md lg:text-lg font-medium">
          <div className="lg:col-start-2 lg:col-end-4 lg:row-start-1 flex gap-2">
            <p>Contact me</p>
            <span>👉🏻</span>
            <a
              className="underline underline-offset-2 cursor-pointer hover:text-orange-500 transition duration-200 ease-in-out"
              href="mailto:contact@aysenuronaran.com"
            >
              contact@aysenuronaran.com
            </a>
          </div>
          <div className="lg:col-start-1 lg:col-end-2 lg:row-start-1 items-center flex gap-3 text-[#999999]">
            <p>Follow me</p>
            <span>👉🏻</span>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/onaranaysenur/"
                target="_blank"
              >
                <img
                  className="w-5 h-auto"
                  src="/logos/linkedin.png"
                  alt="linkedin"
                />
              </a>
              <a href="https://github.com/aysenuron" target="_blank">
                <img
                  className="w-5 h-auto"
                  src="/logos/github.png"
                  alt="github"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-4 mt-10 lg:mt-52 2xl:mt-100">
          <div className="lg:col-start-2 lg:col-end-3">
            <p>
              This website is open source. Designed in Figma, built with Next.js
              and Tailwind CSS, deployed with Netlify.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
