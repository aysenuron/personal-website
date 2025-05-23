export default function ToolChip(props) {
  return (
    <div
      className={`bg-${props.color} rounded-full flex items-center gap-2 px-3.5 py-1.5`}
    >
      {props.img ? (
        <img className="w-4 h-auto" src={props.img} alt={props.name} />
      ) : null}
      <p className="forma text-xs text-gray-900">{props.name}</p>
    </div>
  );
}
