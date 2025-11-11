import { useNavigate } from "react-router";

export function Header() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-12 flex justify-between items-center">
      <button
        className="w-10 h-10 flex items-center justify-center cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <img src="/src/assets/icons/goBack.svg" width={20} height={10} />
      </button>
    </div>
  );
}
