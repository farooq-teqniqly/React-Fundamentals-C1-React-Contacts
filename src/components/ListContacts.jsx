import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState } from "react";
import { SearchBar } from "./SearchBar";
import { ContactList } from "./ContactList";

export const ListContacts = ({ contacts = [], onDelete }) => {
  const [query, setQuery] = useState("");

  const updateQuery = (newQuery) => {
    const newQueryTrimmed = newQuery.trim().toLowerCase();
    const queryTrimmed = query.trim().toLowerCase();

    if (newQueryTrimmed !== queryTrimmed) {
      setQuery(newQueryTrimmed);
    }
  };

  const clearQuery = () => setQuery("");

  const contactsToShow =
    query.length === 0
      ? contacts
      : contacts.filter((c) =>
          c.name.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <div className="list-contacts">
      <SearchBar
        query={query}
        onQueryChange={updateQuery}
        onClearQuery={clearQuery}
        filteredContactsCount={contactsToShow.length}
        totalContactsCount={contacts.length}
      ></SearchBar>
      <Link to="/create">Add Contact</Link>
      <ContactList contacts={contactsToShow} onDelete={onDelete}></ContactList>
    </div>
  );
};

ListContacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      handle: PropTypes.string.isRequired,
      avatarURL: PropTypes.string,
    }).isRequired
  ),
  onDelete: PropTypes.func.isRequired,
};
