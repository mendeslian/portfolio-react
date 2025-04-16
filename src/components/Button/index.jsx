import Loader from "../Loader";

export default function Button({
  onClick = () => {},
  children = <></>,
  type = "button",
  contained = false,
  loading = false,
  "aria-label": ariaLabel,
}) {
  return (
    <button
      className={`h-[64px] flex items-center justify-center gap-[8px] py-[16px] px-[30px] rounded-full cursor-pointer duration-200 drop-shadow-md text-[22px] font-semibold disabled:cursor-default hover:scale-[101%] ${
        contained
          ? "bg-neutral-50 hover:bg-neutral-200 disabled:bg-neutral-300 text-neutral-900"
          : "bg-transparent border-[2px] border-neutral-100 hover:bg-neutral-800 disabled:bg-neutral-500 text-neutral-50"
      }`}
      disabled={loading}
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {loading ? <Loader /> : children}
    </button>
  );
}
