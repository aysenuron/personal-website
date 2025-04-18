import apps from "../apps";
import AppCard from "./AppCard";
export default function Playground() {
  return (
    <div className="container mx-auto px-4 space-y-8 lg:space-y-12 pt-20 lg:pt-40 lg:px-0 lg:py-20">
      <div className="grid gap-6 lg:grid-cols-6">
        <div className="flex items-center h-full lg:col-span-2">
          <h2 className="degular  text-2xl lg:text-4xl font-medium">
            Playground 👩🏻‍💻
          </h2>
        </div>
        <p className="text-gray-700 text-md lg:col-span-4">
          These projects were developed during my learning journey and for
          personal use. Feel free to explore, use, or adapt any that interest
          you. You can find even more on my GitHub. <br /> <br />
          <span className="text-orange-500 ">
            Feedback is always welcome!
          </span>{" "}
          👉🏻{" "}
          <a
            className="underline-offset-1 hover:text-orange-500 font-medium"
            href="mailto:contact@aysenuronaran.com"
          >
            contact@aysenuronaran.com
          </a>
        </p>
      </div>
      <div className="gap-4 lg:gap-10 grid lg:grid-cols-12 lg:grid-flow-row-dense">
        {apps.map((app) => (
          <AppCard key={app.id} data={app} className={"lg:col-span-6"} />
        ))}
      </div>
    </div>
  );
}
