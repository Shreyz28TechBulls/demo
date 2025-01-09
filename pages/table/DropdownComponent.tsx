import React, { useEffect, useState } from "react";
import useTableComponentStyles from "./useTableComponentStyles";

interface DropdownProps {
  tag: string;
  words: string[];
  onSelect: (word: string) => void;
  inputBoxWidth: number;
}

const Dropdown: React.FC<DropdownProps> = ({ tag, words, onSelect, inputBoxWidth }) => {
  const { classes } = useTableComponentStyles();
  const [dropdownWidth, setDropdownWidth] = useState(0);

  // Filter words that start with the tag
  const filteredWords = words.filter((word) =>
    word.toLowerCase().startsWith(tag.toLowerCase())
  );

  useEffect(() => {
    // Calculate the dynamic width based on the longest word
    const longestWord = filteredWords.reduce(
      (longest, word) => (word.length > longest.length ? word : longest),
      ""
    );
    const calculatedWidth = Math.min(
      Math.max(longestWord.length * 8 + 16, 150), // Dynamic width
      inputBoxWidth // Restrict max width
    );
    setDropdownWidth(calculatedWidth);
  }, [filteredWords, inputBoxWidth]);

  return (
    <div
      className={classes.dropdown}
      style={{
        width: `${dropdownWidth}px`,
        maxWidth: `${inputBoxWidth}px`,
        zIndex: 1000,
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
