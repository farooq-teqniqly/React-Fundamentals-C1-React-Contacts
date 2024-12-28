import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import serializeForm from "form-serialize";
import ImageInput from "./ImageInput";

export const CreateContact = ({ onCreate }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const values = serializeForm(e.target, { hash: true });

    if (onCreate) {
      onCreate(values);
    }
  };

  return (
    <div>
      <Link className="close-create-contact" to="/">
        Close
      </Link>
      <form onSubmit={handleSubmit} className="create-contact-form">
        <ImageInput
          className="create-contact-avatar-input"
          name="avatarURL"
          maxHeight={64}
        ></ImageInput>
        <div className="create-contact-details">
          <input type="text" name="name" placeholder="Name" />
          <input type="text" name="handle" placeholder="Handle" />
          <button>Add Contact</button>
        </div>
      </form>
    </div>
  );
};

CreateContact.propTypes = {
  onCreate: PropTypes.func.isRequired,
};
