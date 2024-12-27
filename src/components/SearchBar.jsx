import PropTypes from "prop-types";

export const SearchBar = ({
  query,
  onQueryChange,
  onClearQuery,
  filteredContactsCount,
  totalContactsCount,
}) => {
  const renderNumberOfContacts = () => {
    let message = null;

    if (totalContactsCount === 0) {
      return null;
    }

    if (filteredContactsCount === 0) {
      message = <span>Search yielded no results.</span>;
    } else if (filteredContactsCount !== totalContactsCount) {
      message = (
        <span>
          Showing {filteredContactsCount} of {totalContactsCount} contacts.
        </span>
      );
    } else {
      return null;
    }

    return (
      <div className="showing-contacts">
        {message}
        <button onClick={onClearQuery}>Show all contacts</button>
      </div>
    );
  };

  return (
    <div className="list-contacts-top">
      <input
        type="text"
        placeholder="Search contacts"
        className="search-contacts"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
      />
      {renderNumberOfContacts()}
    </div>
  );
};

SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  onQueryChange: PropTypes.func.isRequired,
  onClearQuery: PropTypes.func.isRequired,
  filteredContactsCount: PropTypes.number.isRequired,
  totalContactsCount: PropTypes.number.isRequired,
};
