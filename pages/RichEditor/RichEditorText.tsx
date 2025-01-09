import React, { useState, useRef } from 'react';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { RichTextEditor } from '@mantine/tiptap';
import useTableComponentStyles from '../table/useTableComponentStyles';

const RichEditorText: React.FC = () => {
  const [tags, setTags] = useState<string[]>([]); // To store the list of tags
  const [inputText, setInputText] = useState(''); // Text typed in the input field
  const inputRef = useRef<HTMLInputElement | null>(null);

  const editor = useEditor({
    extensions: [StarterKit],
    content: '', // Initial empty content for RichTextEditor
  });

  const { classes } = useTableComponentStyles();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputText.trim() !== '') {
      const newTags = [...tags, inputText.trim()];
      setTags(newTags);
      setInputText(''); // Clear input field after pressing Enter

      // Add the new tag to the RichTextEditor content
      editor?.commands.insertContent(`<span class="tag">${inputText.trim()}</span>&nbsp;`);
    }
  };

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
              </div>
            ))}
          </div>

          {/* Input field */}
          <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            ref={inputRef}
            className={classes.inputBox}
            placeholder="Type and press Enter"
            style={{ marginLeft: tags.length * 2 + 'px' }} // Dynamically shift the input field
          />
        </div>
      </RichTextEditor>
    </div>
  );
};

export default RichEditorText;
