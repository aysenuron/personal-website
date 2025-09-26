import Link from "next/link";
import P_Card from "../components/P_Card";
import websites from "../websites";
import Header from "../components/Header";
export default function Projects() {
    return (
        <>
            <Header backBtn={true} />
            <section>
                <div className="container mx-auto pt-8 pb-12 px-4 md:px-0 ">
                    <div id="projects" className="flex flex-col gap-8 lg:gap-10">
                        <h1 className="text-4xl font-semibold">All Projects</h1>
                        {websites.map((website) => (
                          <P_Card key={website.id} data={website} chipsVisible={true}/>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
} 