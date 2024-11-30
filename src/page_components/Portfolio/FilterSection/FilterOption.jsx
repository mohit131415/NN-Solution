import ClipPath from "../../assets/svg/ClipPath";

export default function FilterOption({ label, isSelected, onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        className={`px-4 py-2 rounded-lg transition ${
          isSelected
            ? "bg-[#0F4D71] text-white"
            : "bg-gray-200 text-gray-800"
        } hover:bg-[#0F4D71] hover:bg-opacity-100 hover:text-white`}
        style={{ clipPath: "url(#image)" }}
      >
        {label}
      </button>
      <ClipPath />
    </>
  );
}
