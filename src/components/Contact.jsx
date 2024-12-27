import PropTypes from "prop-types";

export const Contact = ({ contact }) => {
  return (
    <li key={contact.id} className="contact-list-item">
      <div
        className="contact-avatar"
        style={{ backgroundImage: `url(${contact.avatarURL})` }}
      ></div>
      <div className="contact-details">
        <p>{contact.name}</p>
        <p>@{contact.handle}</p>
      </div>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    handle: PropTypes.string.isRequired,
    avatarURL: PropTypes.string.isRequired,
  }).isRequired,
};
