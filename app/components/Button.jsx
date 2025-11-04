import Link from "next/link";

export default function Button({ children, handleClick, primary }) {
  return (
    <Link href={handleClick} target={primary ? "" : "_blank"}>
      {" "}
      <button
        className={`cursor-pointer ${
          primary
            ? "bg-[#192de4] text-white drop-shadow-md"
            : "bg-gray-200 text-gray-900"
        } hover:bg-white hover:shadow-[inset_0_0_8px_rgba(0,0,0,0.1)] 2xl:text-[17px] border-none hover:text-[#192de4] duration-200 ease-in-out transition w-fit px-5 2xl:px-7 2xl:py-1.5 py-1 rounded-full hover:drop-shadow-none`}
      >
        {children}
      </button>
    </Link>
  );
}
