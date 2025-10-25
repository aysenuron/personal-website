import Link from "next/link";

export default function Experience() {
  return (
    <div className="flex flex-col gap-16">
      <div className="lg:flex space-y-4 gap-4 text-[15px] 2xl:text-md text-gray-500">
        <div className="shrink-0">
          <p>2022 - Present</p>
        </div>
        <div className="-mt-0.5">
          <h3 className="text-xl lg:text-lg text-gray-700 font-semibold">
            Web Developer / Digital Designer •{" "}
            <span className="font-semibold text-gray-400">
              Elevate Health Technologies{" "}
            </span>
          </h3>
          <div className="flex flex-col gap-4 mt-4">
            <p>
              <span className="text-gray-800 font-medium pr-1">
                Website Design & Development:
              </span>
              Designed and built the company website in Webflow, writing custom
              HTML, CSS, and JavaScript for interactive features and visual
              effects.
            </p>
            <p>
              <span className="text-gray-800 font-medium pr-1">
                Integration & Analytics:
              </span>
              Integrated HubSpot for lead management and implemented Google
              Analytics 4 and Google Tag Manager to track user behavior and
              inform design decisions.
            </p>
            <p>
              <span className="text-gray-800 font-medium pr-1">
                Marketing Design:
              </span>
              Created marketing assets including landing pages, brochures, email
              campaigns, presentation decks, and digital materials using Adobe
              Creative Cloud suite to communicate product value.
            </p>
            <p>
              <span className="text-gray-800 font-medium pr-1">
                Brand Identity:
              </span>
              Developed the company's complete brand identity—logo design, color
              palette, typography, and visual guidelines—ensuring consistency
              across all platforms.
            </p>
          </div>
        </div>
      </div>
      <Link
        href={"/aysenurOnaran-CV.pdf"}
        target="blank"
        className="group text-[#192de4] hover:text-red-600 underline underline-offset-6 text-sm font-bold transition-all duration-200"
      >
        View Complete CV
        <i className="fa-solid fa-arrow-right text-xs pl-1 group-hover:pl-2 transition-all duration-200"></i>
      </Link>
    </div>
  );
}
