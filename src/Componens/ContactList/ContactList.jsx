import Contact from "../Contact/Contact";
import css from "../ContactList/ContactList.module.css";

export default function ContactList({ frends, onDelete }) {
  // console.log(frends);

  return (
    <ul className={css.list}>
      {frends.map((frend) => (
        <li key={frend.id} className={css.item}>
          <Contact contactFrend={frend} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
