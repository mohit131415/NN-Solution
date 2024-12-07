import ClipPathImg from "../../assets/svg/ClipPathImg";
import Button from "../../components/Button";

export default function FilterOption({ label, isSelected, onClick }) {
  return (
    <>
      <Button
        onClick={onClick}
        white={!isSelected} // Pass `white` when not selected
        className={`px-4 py-2 rounded-lg`}
      >
        {label}
      </Button>
      <ClipPathImg />
    </>
  );
}
