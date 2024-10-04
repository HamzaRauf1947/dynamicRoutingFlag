import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-800 to-gray-500">
      <div className="relative bg-white bg-opacity-70 p-6 md:p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-gray-800 ">Welcome to the Country Info App</h1>
        <Link className="text-2xl md:text-3xl text-blue-700 hover:underline" href="/country">
          Go to Country List
        </Link>
      </div>
    </div>
  );
}
