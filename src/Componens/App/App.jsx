import { useState, useEffect } from "react";
import InitialList from "../../InitialList.json";
import ContactList from "../ContactList/ContactList";
import Contact from "../Contact/Contact";
// import ContactForm from "../ContactForm/ContactForm";
// import SearchBox from "../SearchBox/SearchBox";

export default function App() {
  const [frends, setFrends] = useState(InitialList);
  // console.log(frends);

  return (
    <div>
      <h1>Phonebook</h1>
      <Contact />
      {/* <ContactForm />
      <SearchBox /> */}
      <ContactList frends={frends} />
    </div>
  );
}
