import ChipsContainer from "./ChipsContainer";
import tools from "../tools";

export default function ProjectCard({ data }) {
  const websiteTools = tools.filter((tool) =>
    data.toolNames.includes(tool.name)
  );

  return (
    <div className="lg:grid lg:grid-cols-5 px-6 py-3 p-2.5 flex flex-col gap-5 justify-center hover:border-orange-500 hover:bg-white hover:drop-shadow-xl hover:cursor-pointer duration-200 ease-in-out transition border-gray-300 border-[0.5px] rounded-3xl">
      <div className="lg:col-span-2">
        <img src={data.img} alt={data.title} />
      </div>
      <div className="lg:col-span-3 flex flex-col gap-5 justify-center">
        <h3 className="degular font-medium text-xl lg:text-2xl text-gray-700">
          {data.title}
        </h3>
        <p className="text-gray-400 text-md">{data.description}</p>
        <ChipsContainer selectedTools={websiteTools} />
      </div>
    </div>
  );
}
