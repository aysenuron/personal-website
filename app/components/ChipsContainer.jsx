import ToolChip from "./ToolChip";

export default function ChipsContainer({ selectedTools = [] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {selectedTools.map((tool) => {
        return <ToolChip key={tool.name} img={tool.img} name={tool.name} />;
      })}
    </div>
  );
}
