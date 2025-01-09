import React, { useState, useRef, useEffect } from "react";
import useTableComponentStyles from "./useTableComponentStyles";
import Dropdown from "./DropdownComponent";

interface TagInputProps {
  onTagsChange: (tags: string[]) => void;
}

// Sample words for the dropdown
const SAMPLE_WORDS = ["apple", "application", "aptitude", "antelope", "banana", "berry", "cat", "catalog", "dog"];

const TagsHorizontalScrollableInputField: React.FC<TagInputProps> = ({ onTagsChange }) => {
  const [input, setInput] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [dropdownWords, setDropdownWords] = useState<string[]>(SAMPLE_WORDS); // Maintain dropdown words in state
  const [dropdownTag, setDropdownTag] = useState<string | null>(null); // Active dropdown
  const tagRef = useRef<HTMLDivElement | null>(null); // Reference for the dropdown
  const inputRef = useRef<HTMLInputElement | null>(null); // Reference for input box
  const { classes } = useTableComponentStyles();
  const [inputBoxWidth, setInputBoxWidth] = useState(0);

  useEffect(() => {
    if (inputRef.current) {
      setInputBoxWidth(inputRef.current.offsetWidth); // Capture the editable text input's width
    }
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && input.trim()) {
      if (!tags.includes(input.trim())) {
        const newTags = [...tags, input.trim()];
        setTags(newTags);
        onTagsChange(newTags);
        setDropdownWords((prevWords) => prevWords.filter((word) => word !== input.trim())); // Remove from dropdown
      }
      setInput("");
    }
  };

  const handleRemoveTag = (label: string) => {
    const newTags = tags.filter((tag) => tag !== label);
    setTags(newTags);
    onTagsChange(newTags);
    setDropdownWords((prevWords) => [...prevWords, label]); // Add back to dropdown
  };

  const handleDropdownClick = (tag: string) => {
    setDropdownTag(dropdownTag === tag ? null : tag); // Toggle dropdown visibility
  };

  const handleDropdownItemClick = (word: string) => {
    if (!tags.includes(word)) {
      const newTags = [...tags, word];
      setTags(newTags);
      onTagsChange(newTags);
      setDropdownWords((prevWords) => prevWords.filter((w) => w !== word)); // Remove selected word from dropdown
    }
    setDropdownTag(null); // Close dropdown after selection
  };

  return (
    <div className={classes.tagInputContainer}>
      <div className={classes.tags}>
        {tags.map((tag) => (
          <div
            key={tag}
            className={classes.tag}
            ref={dropdownTag === tag ? tagRef : null} // Set reference for active tag
          >
            <span>{tag}</span>
            <button
              onClick={() => handleDropdownClick(tag)}
              className={classes.dropdownButton}
            >
              ▼
            </button>
            {dropdownTag === tag && (
              <Dropdown
                tag={tag}
                words={dropdownWords}
                onSelect={handleDropdownItemClick}
                inputBoxWidth={inputBoxWidth}
              />
            )}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className={classes.input}
        ref={inputRef}
      />
    </div>
  );
};

export default TagsHorizontalScrollableInputField;
