import ToolChip from "./ToolChip";

export default function ChipsContainer({
  selectedTools = [],
  color,
  className,
}) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
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
