import ChipsContainer from "./ChipsContainer";
import tools from "../tools";

export default function ProjectCard({ data, className }) {
  const websiteTools = tools.filter((tool) =>
    data.toolNames.includes(tool.name)
  );

  return (
    <div
      className={`${
        data.img ? "lg:grid lg:grid-cols-5" : ""
      } ${className} lg:p-5 p-2.5 flex flex-col gap-5 justify-center hover:border-orange-500 hover:bg-white hover:drop-shadow-xl hover:cursor-pointer duration-300 ease-in-out transition border-[0.5px] rounded-3xl`}
    >
      {data.img ? (
        <div className="lg:col-span-2">
          <img src={data.img} alt={data.title} />
        </div>
      ) : null}
      <div
        className={`${
          data.img ? "lg:col-span-3" : ""
        } flex flex-col gap-5 justify-center`}
      >
        <h3 className="degular font-medium text-xl lg:text-2xl">
          {data.title}
        </h3>
        <p className="text-gray-400 text-md">{data.description}</p>
        <ChipsContainer selectedTools={websiteTools} />
      </div>
    </div>
  );
}
