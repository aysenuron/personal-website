import ToolChip from "./ToolChip";

export default function ChipsContainer({ selectedTools = [], color }) {
  return (
    <div className="flex flex-wrap gap-3">
      {selectedTools.map((tool) => {
        return (
          <ToolChip
            key={tool.name}
            img={tool.img}
            name={tool.name}
            color={color}
          />
        );
      })}
    </div>
  );
}
