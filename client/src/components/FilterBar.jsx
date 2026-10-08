function FilterBar({ onCategoryChange, onStatusChange }) {
  return (
    <div className="flex justify-between gap-150 items-center absolute top-20 w-full">
      <div className="flex gap-10">
        <button onClick={() => onCategoryChange("All")}>All</button>
        <button onClick={() => onCategoryChange("Urgent")}>Urgent</button>
        <button onClick={() => onCategoryChange("Important")}>Important</button>
      </div>

      <div className="flex gap-10">
        <button onClick={() => onStatusChange("All")}>All</button>
        <button onClick={() => onStatusChange("Completed")}>Completed</button>
        <button onClick={() => onStatusChange("Pending")}>Pending</button>
      </div>
    </div>
  );
}

export default FilterBar;
