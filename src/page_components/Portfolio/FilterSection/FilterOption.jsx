// FilterOption.jsx
 

export default function FilterOption({ label, isSelected, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg transition ${
        isSelected ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
      } hover:bg-blue-500`}
    >
      {label}
    </button>
  );
}
