import React, { useState } from 'react';
import Tag from './Tags';
import useTableComponentStyles from './useTableComponentStyles';

interface TagInputProps {
  onTagsChange: (tags: string[]) => void;
}

const TagsHorizontalScrollableInputField: React.FC<TagInputProps> = ({ onTagsChange }) => {
  const [input, setInput] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const { classes } = useTableComponentStyles();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && input.trim()) {
      if (!tags.includes(input.trim())) {
        const newTags = [...tags, input.trim()];
        setTags(newTags);
        onTagsChange(newTags);
      }
      setInput('');
    }
  };

  const handleRemoveTag = (label: string) => {
    const newTags = tags.filter((tag) => tag !== label);
    setTags(newTags);
    onTagsChange(newTags);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <div className={classes.tagInputContainer}>
      <div className={classes.tags}>
        {tags.map((tag) => (
          <Tag key={tag} label={tag} onRemove={handleRemoveTag} />
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className={classes.input}
        placeholder="Enter a tag and press Enter"
      />
    </div>
  );
};

export default TagsHorizontalScrollableInputField;
