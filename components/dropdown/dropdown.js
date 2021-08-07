import { useState, useEffect, useRef } from 'react';

// Hooks
import useOnClickOutside from '../../hooks/clickOutside';

// Components
import { toast } from 'react-toastify';

const Dropdown = ({ classname, options, selectedValue, onSelect }) => {
  const dropdownRef = useRef();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [query, setQuery] = useState(selectedValue);
  const [updatedOptions, setUpdatedOptions] = useState(options);

  useEffect(() => {
    setQuery(selectedValue.name || '');
    setUpdatedOptions(options);
  }, [options, selectedValue]);

  useOnClickOutside(dropdownRef, () => setDropdownOpen(false));

  const updateDropdownOptions = (value) => {
    const data = value
      ? options.filter((option) => {
          return option.name
            ?.toString()
            .toLowerCase()
            .match(value.toLowerCase());
        })
      : options;
    // Triggers while removing characters from dropdown
    if (query.length > value.length && data.length > 1) {
      return onSelect(classname, {});
    }
    // Triggers while adding the characters in dropdown
    if (value.length > query.length && data.length === 1) {
      setDropdownOpen(false);
      onSelect(classname, data[0]);
      setQuery(data[0].name);
      toast.success('Our AI selected the planet for you!');
    }
    // Updating the state
    setUpdatedOptions(data);
  };

  const filterFunction = (value) => {
    if (value.length === 0) {
      return onSelect(classname, {});
    }
    // Updating the state
    setQuery(value);
    setDropdownOpen(true);
    updateDropdownOptions(value);
  };

  const handleSelect = (event, value) => {
    event.stopPropagation();
    if (value.selected === false) {
      onSelect(classname, value);
      setQuery(value.name);
      setDropdownOpen(false);
    }
  };

  const handleDropdownClick = () => {
    updateDropdownOptions(query);
    setDropdownOpen(true);
  };

  const getOptions = () => {
    return (
      <>
        {updatedOptions.map((item, index) => {
          return (
            <div
              key={`${index}-${item.name}`}
              className={
                'dropdown__options ' +
                (item.selected ? 'dropdown__options--disabled' : '')
              }
              onClick={(event) => handleSelect(event, item)}
            >
              <div className="dropdown__options__option">
                <p className="dropdown__options__option__content">
                  {item.name}
                </p>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div
      id={`searchableDropdown-${classname}`}
      ref={dropdownRef}
      className={`dropdown ${classname}`}
      onClick={() => handleDropdownClick()}
    >
      <div
        className={
          `dropdown__container ` +
          (isDropdownOpen ? 'dropdown__container--focus' : '')
        }
      >
        <input
          id={`searchableDropdown-input-${classname}`}
          type="text"
          placeholder="Search planets"
          className="dropdown__container__input"
          value={query}
          onChange={(event) => filterFunction(event.target.value)}
        />
      </div>
      {isDropdownOpen && (
        <div className="dropdown__options__container">
          {updatedOptions.length === 0 ? (
            <div className="dropdown__options">No planets found</div>
          ) : (
            getOptions()
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
