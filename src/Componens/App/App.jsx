import { useState, useEffect } from "react";
import InitialList from "../../InitialList.json";
import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import css from "../App/App.module.css";

export default function App() {
  const [frends, setFrends] = useState(() => {
    // console.log(frends);
    const savedFrends = window.localStorage.getItem("frends");
    return savedFrends ? JSON.parse(savedFrends) : InitialList;
  });

  useEffect(() => {
    window.localStorage.setItem("frends", JSON.stringify(frends));
  }, [frends]);

  const [filter, setFilter] = useState("");

  const visibleFrends = frends.filter((frend) =>
    frend.name.toLowerCase().includes(filter.toLowerCase())
  );

  const addFrend = (newFrend) => {
    // console.log(newFrend);
    setFrends((prevFrends) => {
      return [...prevFrends, newFrend];
    });
  };

  const deleteFrend = (frendId) => {
    console.log(frendId);
    setFrends((prevFrends) => {
      return prevFrends.filter((frend) => frend.id !== frendId);
    });
  };

  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAdd={addFrend} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList frends={visibleFrends} onDelete={deleteFrend} />
    </div>
  );
}
