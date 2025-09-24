import Link from "next/link";

export default function Button({ children, handleClick }) {
  return (
    <Link href={handleClick} target="_blank">
      {" "}
      <button className="cursor-pointer bg-[#192de4] hover:bg-white hover:shadow-[inset_0_0_8px_rgba(0,0,0,0.1)] border-none forma hover:text-[#192de4] duration-200 ease-in-out transition w-fit px-4 py-2 text-white rounded-full drop-shadow-xl hover:drop-shadow-none">
        {children}
      </button>
    </Link>
  );
}
