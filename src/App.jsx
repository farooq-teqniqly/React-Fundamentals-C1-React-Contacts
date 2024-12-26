import "./App.css";
import { ListContacts } from "./components/ListContacts";
import { contacts } from "./data/contacts";

const App = () => {
  return <ListContacts contacts={contacts}></ListContacts>;
};

export default App;
