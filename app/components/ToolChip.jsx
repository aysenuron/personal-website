export default function ToolChip(props) {
  return (
    <div className="bg-[#F5F5F5] rounded-full flex items-center gap-2 px-3.5 py-1.5">
      <img className="w-4 h-auto" src={props.img} alt={props.name} />
      <p className="forma text-sm">{props.name}</p>
    </div>
  );
}
