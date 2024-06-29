import css from "../SearchBox/SearchBox.module.css";
import { useId } from "react";

export default function SearchBox({ value, onFilter }) {
  const filterFrendsdId = useId();
  return (
    <div className={css.container}>
      <label htmlFor={filterFrendsdId} className={css.label}>
        Find contacts by name
      </label>
      <input
        id={filterFrendsdId}
        name="filter"
        type="text"
        value={value}
        onChange={(event) => onFilter(event.target.value)}
        placeholder="Enter name..."
      />
    </div>
  );
}
