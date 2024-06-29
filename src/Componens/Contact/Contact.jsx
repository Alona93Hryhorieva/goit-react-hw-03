import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
// import css from "./Contact.module.css";

export default function Contact({
  contactFrend: { id, name, number },
  onDelete,
}) {
  return (
    <div>
      <p>
        <FaPhoneAlt /> {name}
      </p>
      <p>
        <FaUser />
        {number}
      </p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}
