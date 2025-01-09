import React, { useState } from 'react';
import useTableComponentStyles from './useTableComponentStyles';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'; // Icon for dropdown

interface TagsProps {
  label: string;
  onRemove: (label: string) => void;
  items: string[]; // List of items to filter for dropdown
}

const Tags: React.FC<TagsProps> = ({ label, onRemove, items }) => {
  const { classes } = useTableComponentStyles();
  const [inputValue, setInputValue] = useState<string>(''); // For input field
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false); // Dropdown visibility state
  const [filteredItems, setFilteredItems] = useState<string[]>([]); // Filtered items to show

  // Handle input change to filter items
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    
    // Filter items that start with the input value
    const filtered = items.filter((item) =>
      item.toLowerCase().startsWith(value.toLowerCase())
    );
    setFilteredItems(filtered);
    setDropdownVisible(value.length > 0 && filtered.length > 0); // Show dropdown if there are matching items
  };

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className={classes.tagInputContainer}>
      <div className={classes.inputContainer}>
        {/* Tag Label */}
        <div className={classes.tag}>
          <span>{label}</span>
          <button onClick={() => onRemove(label)} className={classes.dropdownButton}>
            {/* You can add a remove icon here */}
            Remove
          </button>
        </div>

        {/* Input field to search and filter items */}
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className={classes.inputBox}
          placeholder="Search items..."
        />
        
        {/* Dropdown toggle button */}
        <button
          className={`${classes.dropdownButton} ${dropdownVisible ? 'dropdown-open' : ''}`}
          onClick={toggleDropdown}
        >
          {dropdownVisible ? <FaCaretUp /> : <FaCaretDown />}
        </button>

        {/* Dropdown list */}
        {dropdownVisible && (
          <div className={classes.dropdown}>
            {filteredItems.map((item, index) => (
              <div key={index} className={classes.dropdownItem}>
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Tags;
