import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { ListContacts } from "./components/ListContacts";
import { useState, useEffect } from "react";
import * as ContactsAPI from "./utils/ContactsAPI";
import { CreateContact } from "./components/CreateContact";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;

    const getContacts = async () => {
      const response = await ContactsAPI.getAll();

      if (isMounted) {
        setContacts(response);
      }
    };

    getContacts();

    return () => (isMounted = false);
  }, []);

  const [contacts, setContacts] = useState([]);

  const deleteContact = async (contactId) => {
    const allContacts = await ContactsAPI.getAll();
    const contactToDelete = allContacts.filter((c) => c.id === contactId);
    await ContactsAPI.remove(contactToDelete[0]);

    setContacts((prev) => prev.filter((c) => c.id !== contactId));
  };

  const createContact = async (contact) => {
    const createdContact = await ContactsAPI.create(contact);
    setContacts((prev) => [...prev, createdContact]);
    navigate("/");
  };

  return (
    <Routes>
      <Route
        path="/"
        exact
        element={
          <ListContacts
            contacts={contacts}
            onDelete={deleteContact}
          ></ListContacts>
        }
      />
      <Route
        path="/create"
        exact
        element={<CreateContact onCreate={createContact}></CreateContact>}
      />
    </Routes>
  );
};

export default App;
