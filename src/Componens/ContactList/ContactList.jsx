import Contact from "../Contact/Contact";

export default function ContactList({ frends, onDelete }) {
  // console.log(frends);
  return (
    <ul>
      {frends.map((frend) => (
        <li key={frend.id}>
          <Contact contactFrend={frend} />
        </li>
      ))}
    </ul>
  );
}
// console.log(frend.id);
