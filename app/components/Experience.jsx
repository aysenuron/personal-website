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
            <span className=" font-normal text-gray-700">
              Elevate Health Technologies{" "}
            </span>
          </h3>
          <div className="flex flex-col gap-4 mt-4">
            <p>
              I work remotely as the primary designer and developer for
              Elevate's digital presence, building and maintaining the company
              website in Webflow with custom JavaScript. I create marketing
              materials including landing pages, email campaigns, and corporate
              videos, while managing technical integrations like HubSpot and
              Google Analytics to optimize user engagement and track performance
              across healthcare platforms.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:flex space-y-4 gap-4 text-[15px] 2xl:text-md text-gray-500">
        <div className="shrink-0">
          <p>2023 - Present</p>
        </div>
        <div className="-mt-0.5">
          <h3 className="text-xl lg:text-lg text-gray-700 font-semibold">
            UX Designer / Web Developer
          </h3>
          <div className="flex flex-col gap-4 mt-4">
            <p>
              I design and develop digital products for clients across
              healthcare, food services, and media industries. Projects include
              mobile app design for pregnancy tracking and handyman services, a
              food waste reduction marketplace, and responsive websites for
              international clients with a focus on user-friendly navigation and
              content strategy.
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
