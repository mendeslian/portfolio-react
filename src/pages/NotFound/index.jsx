import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <main className="w-full h-screen flex flex-col justify-center items-center gap-8 bg-[#191919]">
      <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-red-900 to-red-500">
        404
      </h1>
      <p className="text-[#C5C5C5] text-xl">Oops! Page not found</p>
      <button
        onClick={() => navigate("/")}
        className="px-[32px] py-[8px] text-white relative bg-gradient-to-t from-red-900 to-red-500 rounded-full duration-500 cursor-pointer hover:scale-105 "
      >
        Go Back
      </button>
    </main>
  );
}
