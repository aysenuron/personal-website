import Link from "next/link";
import P_Card from "../components/P_Card";
import websites from "../websites";
import Header from "../components/Header";
export default function Projects() {
  return (
    <>
      <Header backBtn={true} />
      <section>
        <div className="container mx-auto pt-2 pb-20 px-4 md:px-0 ">
          <div id="projects" className="flex flex-col gap-8 lg:gap-10">
            {/* Breadcrumbs */}
            <div className="text-sm text-gray-700 flex gap-2 items-center">
              <Link href="/" className="hover:text-red-600">
                <p>Home</p>
              </Link>
              <p>/</p>
              <p className="text-gray-400">All Projects</p>
            </div>

            <h1 className="text-4xl font-semibold">All Projects</h1>
            {websites.map((website) => (
              <P_Card key={website.id} data={website} chipsVisible={true} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
