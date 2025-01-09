import React, { useState } from 'react';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { RichTextEditor } from '@mantine/tiptap';
import useTableComponentStyles from '../table/useTableComponentStyles';

const RichEditorText: React.FC = () => {
  const [tags, setTags] = useState<string[]>([]); // To store tags
  const [inputText, setInputText] = useState(''); // To store input text
  const [inputWidth, setInputWidth] = useState(0); // To track input width for dynamic adjustments

  const editor = useEditor({
    extensions: [StarterKit],
    content: '', // Start with empty content
  });

  const { classes } = useTableComponentStyles();

  // Dynamically adjust the width of the input field based on input text
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
    setInputWidth(e.target.scrollWidth); // Update width based on scrollWidth
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputText.trim() !== '') {
      // Concatenate the input text with existing text and clear the input field
      setTags([...tags, inputText.trim()]);
      setInputText(''); // Reset input field
    }
  };

  return (
    <div className={classes.tagInputContainer}>
      <div className={classes.inputWrapper}>
        {/* Mantine RichTextEditor */}
        <RichTextEditor editor={editor}>
          <RichTextEditor.Content />
        </RichTextEditor>

        {/* Tags List */}
        <div className={classes.tags}>
          {tags.map((tag, index) => (
            <div key={index} className={classes.tag}>
              <span>{tag}</span>
            </div>
          ))}
        </div>

        {/* Input field with preview span */}
        <div className={classes.inputContainer}>
          <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            className={classes.inputBox}
            placeholder="Type your tag"
            style={{ width: inputWidth }} // Dynamically adjust width
          />
          {/* Preview Span */}
          <span className={classes.previewSpan} style={{ width: inputWidth }}>
            {inputText}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RichEditorText;
