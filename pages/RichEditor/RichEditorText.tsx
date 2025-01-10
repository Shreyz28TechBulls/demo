import React, { useState } from 'react';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { RichTextEditor } from '@mantine/tiptap';
import Dropdown from '../table/DropdownComponent';
import useTableComponentStyles from '../table/useTableComponentStyles';

const DUMMY_OBJECT_NAMES = [
  'apple', 'application', 'aptitude', 'antelope',
  'banana', 'berry', 'cat', 'catalog', 'dog', 'dolphin',
];

const RichEditorText: React.FC = () => {
  const [tags, setTags] = useState<string[]>([]); // Store tags
  const [dropdownTag, setDropdownTag] = useState<string | null>(null); // Track active dropdown tag
  const [inputText, setInputText] = useState(''); // Text typed in the input field
  const editor = useEditor({
    extensions: [StarterKit],
    content: '', // Initial empty content for RichTextEditor
  });

  const { classes } = useTableComponentStyles();

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  // Handle key press (Enter and Backspace)
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputText.trim() !== '') {
      const newTags = [...tags, inputText.trim()];
      setTags(newTags);
      setInputText(''); // Clear input field after pressing Enter

      // Add the new tag to the RichTextEditor content
      editor?.commands.insertContent(`<span class="tag">${inputText.trim()}</span>&nbsp;`);
    } else if (e.key === 'Backspace' && inputText === '') {
      // Remove the last tag if backspace is pressed and input is empty
      const updatedTags = [...tags];
      const removedTag = updatedTags.pop(); // Remove the last tag
      setTags(updatedTags);

      // Remove the last tag from the RichTextEditor content
      if (removedTag) {
        const content = editor?.getHTML() || '';
        const newContent = content.replace(`<span class="tag">${removedTag}</span>&nbsp;`, '');
        editor?.commands.setContent(newContent); // Update editor content
      }
    }
  };

  // Handle dropdown icon click
  const handleDropdownClick = (tag: string) => {
    setDropdownTag(dropdownTag === tag ? null : tag); // Toggle dropdown
  };

  // Handle selecting a dropdown item
  const handleDropdownItemClick = (item: string, tag: string) => {
    const updatedTags = tags.map((t) => (t === tag ? item : t)); // Replace the tag with the selected item
    setTags(updatedTags);
    setDropdownTag(null); // Close the dropdown
  };

  // Calculate dynamic input width based on text length
  const inputWidth = `${Math.max(inputText.length, 1) * 8}px`; // Minimum width of 1 character, increase with text length

  return (
    <div>
      {/* Rich Text Editor */}
      <RichTextEditor editor={editor}>
        {/* Tags and Input Field */}
        <div className={classes.tagInputContainer}>
          {/* Tags List */}
          <div className={classes.tags}>
            {tags.map((tag, index) => (
              <div key={index} className={classes.tag}>
                <span>{tag}</span>
                <button
                  onClick={() => handleDropdownClick(tag)}
                  className={classes.dropdownButton}
                >
                  {dropdownTag === tag ? '▲' : '▼'}
                </button>
                {dropdownTag === tag && (
                  <Dropdown
                    tag={tag}
                    words={DUMMY_OBJECT_NAMES}
                    onSelect={(item) => handleDropdownItemClick(item, tag)}
                    inputBoxWidth={300} // Set dropdown max width
                  />
                )}
              </div>
            ))}
          </div>

          {/* Input field with preview span next to it */}
          <div className={classes.inputContainer}>
            <input
              type="text"
              value={inputText}
              onChange={handleInputChange}
              onKeyDown={handleKeyPress}
              className={classes.inputBox}
              style={{ width: inputWidth }} // Dynamically set the width based on input text length
            />
            {/* Preview span */}
            {inputText && (
              <span className={classes.previewSpan}>{inputText}</span> // Display the preview text
            )}
          </div>
        </div>
      </RichTextEditor>
    </div>
  );
};

export default RichEditorText;
