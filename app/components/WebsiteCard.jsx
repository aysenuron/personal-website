import ChipsContainer from "./ChipsContainer";
import tools from "../tools";

export default function WebsiteCard({ websiteInfo }) {
  const websiteTools = tools.filter((tool) =>
    websiteInfo.toolNames.includes(tool.name)
  );

  return (
    <div className="lg:grid lg:grid-cols-5 lg:gap-5 lg:p-5 p-2.5 flex flex-col gap-5 hover:border-orange-500 hover:bg-white hover:drop-shadow-xl hover:cursor-pointer duration-300 ease-in-out transition border-[0.5px] rounded-3xl">
      <div className="lg:col-span-2">
        <img src={websiteInfo.img} alt={websiteInfo.title} />
      </div>
      <div className="lg:col-span-3 flex flex-col gap-5 justify-center">
        <h3 className="degular font-medium text-xl lg:text-2xl">
          {websiteInfo.title}
        </h3>
        <p className="text-gray-400 text-md">{websiteInfo.description}</p>
        <ChipsContainer selectedTools={websiteTools} />
      </div>
    </div>
  );
}
