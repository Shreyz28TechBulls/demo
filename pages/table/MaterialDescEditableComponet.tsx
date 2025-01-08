import React, { useState, useRef } from 'react';
import { DropdownComponent } from './DropdownComponent';
import styles from './MaterialDescEditableComponet.module.css';

interface MaterialDescEditableComponentProps {
  id: string;
  value: string;
  isEditable: boolean;
  onChange: (id: string, value: string) => void;
}

export const MaterialDescEditableComponent: React.FC<MaterialDescEditableComponentProps> = ({
  id,
  value,
  isEditable,
  onChange,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const dummyOptions = [
    'Material A',
    'Material B',
    'Material C',
    'Material D',
    'Material E',
    'Material F',
    'Material G',
    'Material H',
    'Material I',
    'Material J',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(id, e.target.value);
    setShowDropdown(true); // Show dropdown on typing
  };

  const handleSelect = (option: string) => {
    onChange(id, option);
    setShowDropdown(false); // Hide dropdown after selection
  };

  return (
    <div style={{ position: 'relative' }}>
      {isEditable ? (
        <input
          type="text"
          value={value}
          onChange={handleInputChange}
          className={styles.materialInputEditable}
          ref={inputRef}
        />
      ) : (
        <span className={styles.materialInputNonEditable}>{value}</span>
      )}
      {isEditable && showDropdown && inputRef.current && (
        <DropdownComponent
          options={dummyOptions}
          onSelect={handleSelect}
          inputWidth={inputRef.current.offsetWidth}
        />
      )}
    </div>
  );
};
