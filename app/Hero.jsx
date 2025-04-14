export default function Hero() {
  return (
    <section>
      <div className="container py-10 lg:py-40 h-5/6 mx-auto">
        <div className="grid lg:grid-cols-3 gap-4">
          <div className="lg:col-start-2 lg:col-end-4">
            <h1 className="degular text-4xl lg:text-7xl mb-4">
              Hi, I'm Ayşenur{" "}
              <span className="degular text-2xl lg:text-5xl">👋🏻</span>
            </h1>
            <p className="degular mb-8 text-[#999999] font-medium text-2xl md:text-4xl lg:text-5xl">
              Web Developer & Designer
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 lg:grid-rows-1 gap-4 text-md lg:text-lg font-medium">
          <div className="lg:col-start-2 lg:col-end-4 lg:row-start-1 flex gap-2">
            <p>Contact me</p>
            <span>👉🏻</span>
            <a
              className="underline underline-offset-2 cursor-pointer"
              href="mailto:contact@aysenuronaran.com"
            >
              contact@aysenuronaran.com
            </a>
          </div>
          <div className="lg:col-start-1 lg:col-end-2 lg:row-start-1 flex gap-2 text-[#999999]">
            <p>Follow me</p>
            <span>👉🏻</span>
            <div>
              <a href="">
                <img src="" alt="" />
              </a>
              <a href="">
                <img src="" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-4 mt-10 lg:mt-60">
          <div className="lg:col-start-2 lg:col-end-3">
            <p>
              This website is open source. Designed in Figma, built with Next.js
              and Tailwind CSS, deployed with Vercel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
