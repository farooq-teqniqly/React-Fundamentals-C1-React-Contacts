import "./App.css";
import { ListContacts } from "./components/ListContacts";
import { useState } from "react";
import { db } from "./data/db";

const App = () => {
  const [contacts, setContacts] = useState(db["contacts"]);

  const deleteContact = (contactId) => {
    setContacts((prev) => prev.filter((c) => c.id !== contactId));
  };

  return (
    <ListContacts contacts={contacts} onDelete={deleteContact}></ListContacts>
  );
};

export default App;
