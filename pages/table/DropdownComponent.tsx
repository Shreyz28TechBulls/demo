import React, { useEffect, useState } from "react";
import useTableComponentStyles from "./useTableComponentStyles";

interface DropdownProps {
  tag: string;
  words: string[];
  onSelect: (word: string) => void;
  inputBoxWidth: number; // Editable text input width for max width
}

const Dropdown: React.FC<DropdownProps> = ({ tag, words, onSelect, inputBoxWidth }) => {
  const { classes } = useTableComponentStyles();
  const [dropdownWidth, setDropdownWidth] = useState(0);

  // Filter words that match the tag
  const filteredWords = words.filter((word) => word.includes(tag));

  useEffect(() => {
    // Calculate the dynamic width based on the largest word
    const longestWord = filteredWords.reduce((longest, word) => 
      word.length > longest.length ? word : longest, "");
    const calculatedWidth = Math.min(
      Math.max(longestWord.length * 8 + 16, 150), // Dynamic width based on word length
      inputBoxWidth // Restrict max width to input box width
    );
    setDropdownWidth(calculatedWidth);
  }, [filteredWords, inputBoxWidth]);

  return (
    <div
      className={classes.dropdown}
      style={{
        width: `${dropdownWidth}px`,
        maxWidth: `${inputBoxWidth}px`,
        zIndex: 1000, // Ensure visibility over other components
      }}
    >
      {filteredWords.map((word) => (
        <div
          key={word}
          className={classes.dropdownItem}
          onClick={() => onSelect(word)}
        >
          {word}
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
