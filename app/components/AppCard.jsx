import apps from "../apps";
import tools from "../tools";
import ChipsContainer from "./ChipsContainer";

export default function AppCard({ data, className }) {
  const websiteTools = tools.filter((tool) =>
    data.toolNames.includes(tool.name)
  );

  return (
    <div
      className={`${className} hover:border-orange-500 hover:bg-white hover:shadow-inner duration-300 ease-in-out transition border-gray-400 border-[0.1px] rounded-3xl`}
    >
      <div className="px-6 py-3 flex justify-between items-center">
        <span className="text-xl">{data.emoji}</span>
        <div className="flex gap-4 text-sm items-center">
          <div>
            <a href={data.githubLink} target="_blank">
              <p className="duration-200 ease-in-out transition cursor-pointer underline hover:text-orange-500 underline-offset-3">
                Github ↗️
              </p>
            </a>
          </div>
          {data.webLink ? (
            <a href={data.webLink} target="_blank">
              <button className="duration-200 ease-in-out transition forma bg-gradient-to-t from-gray-50 to-gray-100 drop-shadow-sm border border-gray-300 shadow-gray-300 w-fit px-4 py-1 text-gray-500 rounded-xl hover:from-gray-50 hover:to-gray-100 hover:text-orange-500 cursor-pointer hover:drop-shadow-none">
                View Live 🌐
              </button>
            </a>
          ) : null}
        </div>
      </div>
      <div className="flex flex-col gap-3 items-start bg-gray-50 px-6 py-3">
        <h3 className="degular font-medium text-lg/tight lg:text-xl/tight 2xl:text-xl/tight text-gray-700">
          {data.title}
        </h3>
      </div>
      <div className="px-6 py-4 flex flex-col gap-5">
        <p className="text-gray-400 text-md">{data.description}</p>
        <ChipsContainer selectedTools={websiteTools} />
      </div>
    </div>
  );
}
