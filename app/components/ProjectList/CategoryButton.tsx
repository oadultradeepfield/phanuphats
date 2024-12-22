const CategoryButton: React.FC<{
  category: string;
  isSelected: boolean;
  onClick: () => void;
}> = ({ category, isSelected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`btn rounded-2xl text-base hover:bg-gray-600 ${
        isSelected ? "btn-neutral" : "btn-outline"
      }`}
    >
      {category}
    </button>
  );
};

export default CategoryButton;
