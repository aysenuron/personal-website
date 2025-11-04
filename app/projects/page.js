"use client";
import Link from "next/link";
import P_Card from "../components/P_Card";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";

import apps from "../projects_apps";
import websites from "../projects_websites";
import cc from "../projects_cc";
import research from "../projects_research";
import master from "../projects_master";
import Footer from "../components/Footer";

export default function Projects() {
  const menuItems = [
    { name: "Web Apps", sectionId: "web-apps" },
    { name: "Web Design & Development", sectionId: "websites" },
    { name: "Creative Coding", sectionId: "creative-coding" },
    { name: "Research-Based Exhibitions", sectionId: "research" },
    { name: "Master's Thesis", sectionId: "master-thesis" },
  ];

  return (
    <>
      <section>
        <div className="container mx-auto py-10 px-4 md:px-0 ">
          <div id="projects" className="flex flex-col gap-8 lg:gap-10">
            {/* Breadcrumbs */}
            <div className="text-sm text-gray-700 flex gap-2 items-center">
              <Link href="/" className="hover:text-red-600">
                <p>Home</p>
              </Link>
              <p>/</p>
              <p className="text-gray-400">All Projects</p>
            </div>
            <div className="grid lg:grid-cols-12 gap:12 lg:gap-2 2xl:gap-24">
              <div className="col-span-3 lg:flex flex-col gap-8 hidden lg:sticky self-start top-26">
                <h1 className="text-4xl pt-6 font-semibold">All Projects</h1>

                <div className="hidden lg:flex lg:flex-col lg:gap-4">
                  <SideMenu items={menuItems} />
                </div>
              </div>

              <div
                id="selected_projects"
                className="flex flex-col gap-12 lg:gap-20 col-span-9"
              >
                <div id="web-apps" className="flex flex-col gap-10">
                  <h2 className="text-2xl font-semibold pt-6 -mb-4 lg:mb-0">
                    Web Apps
                  </h2>
                  {apps.map((app) => (
                    <P_Card key={app.id} data={app} chipsVisible={true} />
                  ))}
                </div>
                <div id="websites" className="flex flex-col gap-10">
                  <h2 className="text-2xl pt-6 font-semibold -mb-4 lg:mb-0">
                    Web Design & Development
                  </h2>
                  {websites.map((website) => (
                    <P_Card
                      key={website.id}
                      data={website}
                      chipsVisible={true}
                    />
                  ))}
                </div>
                <div id="creative-coding" className="flex flex-col gap-10">
                  <h2 className="text-2xl pt-6 font-semibold -mb-4 lg:mb-0">
                    Creative Coding
                  </h2>
                  {cc.map((c) => (
                    <P_Card key={c.id} data={c} chipsVisible={true} />
                  ))}
                </div>
                <div id="research" className="flex flex-col gap-8">
                  <h2 className="text-2xl pt-6 font-semibold -mb-4 lg:mb-0">
                    Research-Based Exhibitions
                  </h2>
                  {research.map((r) => (
                    <P_Card key={r.id} data={r} chipsVisible={true} />
                  ))}
                </div>
                <div
                  id="master-thesis"
                  className="flex flex-col gap-8 lg:mb-8 mb-4"
                >
                  <h2 className="text-2xl pt-6 font-semibold -mb-4 lg:mb-0">
                    Master's Thesis
                  </h2>
                  {master.map((m) => (
                    <P_Card key={m.id} data={m} chipsVisible={false} />
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
