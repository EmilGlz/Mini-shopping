import React from "react";
import "./Filterbox.css";

interface FilterBoxProps {
  isSelected: boolean;
  name: string;
  onClick(name: string): void;
}
function FilterBox({ isSelected, name, onClick }: FilterBoxProps) {
  function onSelect(): void {
    onClick(name);
  }
  const mirt = isSelected ? " Filterbox-selected" : "";
  const boxClassName = "Filterbox" + mirt;

  return (
    <div className="Filterbox-container">
      <div onClick={onSelect} className={boxClassName}>
        <p>{name}</p>
      </div>
    </div>
  );
}

export default FilterBox;
