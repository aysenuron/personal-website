import Link from "next/link";

export default function Button({ children, handleClick }) {
  return (
    <Link href={handleClick}>
      {" "}
      <button className="bg-gradient-to-t cursor-pointer from-gray-700 to-gray-900 shadow-inner hover:border-none forma hover:text-orange-500 duration-200 ease-in-out transition shadow-gray-400 w-fit px-4 py-2 text-white rounded-2xl drop-shadow-xl hover:from-gray-50 hover:to-gray-100 hover:drop-shadow-none">
        {children}
      </button>
    </Link>
  );
}
