import PropTypes from "prop-types";

export const ListContacts = ({ contacts }) => {
  return (
    <ul>
      {contacts.map((c) => (
        <li key={c.id}>
          <p>{c.name}</p>
          <p>{c.handle}</p>
          <p>{c.avatarURL}</p>
        </li>
      ))}
    </ul>
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
};
