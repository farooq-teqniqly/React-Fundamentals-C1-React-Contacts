import PropTypes from "prop-types";
import { useState } from "react";

export const ListContacts = ({ contacts, onDelete }) => {
  const [query, setQuery] = useState("");

  const updateQuery = (query) => {
    setQuery(query.trim());
  };

  const contactsToShow =
    query.length === 0
      ? contacts
      : contacts.filter((c) =>
          c.name.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <div className="list-contacts">
      <div className="list-contacts-top">
        <input
          type="text"
          placeholder="Search contacts"
          className="search-contacts"
          value={query}
          onChange={(e) => updateQuery(e.target.value)}
        />
      </div>
      <ol>
        {contactsToShow.map((c) => (
          <li key={c.id} className="contact-list-item">
            <div
              className="contact-avatar"
              style={{ backgroundImage: `url(${c.avatarURL})` }}
            ></div>
            <div className="contact-details">
              <p>{c.name}</p>
              <p>@{c.handle}</p>
            </div>
            <button className="contact-remove" onClick={() => onDelete(c.id)}>
              Remove
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

ListContacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      handle: PropTypes.string.isRequired,
      avatarURL: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
