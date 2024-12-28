import PropTypes from "prop-types";
import { Contact } from "./Contact";

export const ContactList = ({ contacts = [], onDelete }) => {
  if (contacts.length === 0) {
    return <span>No contacts in database.</span>;
  }

  return (
    <div>
      <ol>
        {contacts.map((c) => (
          <div key={c.id}>
            <Contact contact={c}></Contact>
            <button className="contact-remove" onClick={() => onDelete(c.id)}>
              Remove
            </button>
          </div>
        ))}
      </ol>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      handle: PropTypes.string.isRequired,
      avatarURL: PropTypes.string,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
