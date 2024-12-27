import PropTypes from "prop-types";

export const ListContacts = ({ contacts, onDelete }) => {
  return (
    <ol>
      {contacts.map((c) => (
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
