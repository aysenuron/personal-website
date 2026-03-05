import Link from "next/link";
import P_Card from "../components/P_Card";
import Footer from "../components/Footer";

import apps from "../projects_apps";
import websites from "../projects_websites";
import cc from "../projects_cc";

export const metadata = {
  title: "HCI Portfolio – Ayşenur Onaran",
  description:
    "A curated selection of projects for my MSc Human-Computer Interaction application at Tallinn University.",
};

const roiCalculator = apps.find((p) => p.slug === "roi-calculator");
const patientResources = apps.find((p) => p.slug === "patient-resources");
const buyAndBill = websites.find((p) => p.slug === "buy-and-bill-landing-page");
const cubtale = websites.find((p) => p.slug === "cubtale");
const creativeCoding = cc.find((p) => p.slug === "creative-coding-experiments");

const projects = [
  roiCalculator,
  patientResources,
  buyAndBill,
  cubtale,
  creativeCoding,
];

export default function TallinnHCI() {
  return (
    <>
      <section>
        <div className="container mx-auto py-10 px-4 md:px-0">
          <div id="projects" className="flex flex-col gap-8 lg:gap-10">
            {/* Breadcrumbs */}
            <div className="text-sm text-gray-700 flex gap-2 items-center">
              <Link href="/" className="hover:text-red-600">
                <p>Home</p>
              </Link>
              <p>/</p>
              <p className="text-gray-400">HCI Portfolio</p>
            </div>

            <div className="grid lg:grid-cols-12 gap:12 lg:gap-2 2xl:gap-24">
              <div className="col-span-3 lg:flex flex-col gap-8 hidden">
                <h1 className="text-2xl font-semibold">HCI Portfolio</h1>
                <p className="text-gray-500 text-sm leading-relaxed lg:sticky self-start top-20">
                  A curated selection of work for my MSc Human-Computer
                  Interaction application at Tallinn University. These five
                  projects span user research, interaction design, data-driven
                  decision-making, and creative programming—each one shaped by a
                  question about how people and systems meet.
                </p>
              </div>

              <div
                id="selected_projects"
                className="flex flex-col gap-12 lg:gap-20 col-span-9"
              >
                <div className="flex flex-col gap-4 lg:hidden lg:mt-15">
                  <h1 className="text-2xl font-semibold">HCI Portfolio</h1>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    A curated selection of work for my MSc Human-Computer
                    Interaction application at Tallinn University. These five
                    projects span user research, interaction design, data-driven
                    decision-making, and creative programming—each one shaped by
                    a genuine question about how people and systems meet.
                    Together they reflect my interest in designing not just for
                    usability, but for understanding.
                  </p>
                </div>

                <div className="flex flex-col gap-16 lg:mt-15">
                  {projects.map((project) => (
                    <P_Card
                      key={project.id + project.type}
                      data={project}
                      chipsVisible={true}
                    />
                  ))}
                </div>

                <Footer />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
