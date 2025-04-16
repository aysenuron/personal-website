import ProjectCard from "./ProjectCard";
import apps from "../apps";

export default function Playground() {
  return (
    <div className="container mx-auto px-4 pt-20 lg:pt-40 lg:px-0">
      <div className="mb-5 lg:mb-10 grid lg:grid-cols-6">
        <h2 className="degular lg:col-span-2 text-2xl lg:text-4xl font-medium mb-5 lg:mb-10">
          Playground 👩🏻‍💻
        </h2>
        <p className="text-gray-400 text-md lg:col-span-4">
          These projects were developed during my learning journey and for
          personal use. Feel free to explore, use, or adapt any that interest
          you.{" "}
          <span className="text-orange-500 font-medium">
            Feedback is always welcome!
          </span>{" "}
          👉🏻{" "}
          <a
            className="underline-offset-1 font-medium text-gray-900"
            href="mailto:contact@aysenuronaran.com"
          >
            contact@aysenuronaran.com
          </a>
        </p>
      </div>
      <div className="gap-4 lg:gap-10 grid lg:grid-cols-12">
        {apps.map((app) => (
          <ProjectCard
            key={app.id}
            data={app}
            className={
              app.id === 1 || app.id === 4 ? "lg:col-span-7" : "lg:col-span-5"
            }
          />
        ))}
      </div>
    </div>
  );
}
