import React from 'react';
import styles from './DropdownComponent.module.css';

interface DropdownComponentProps {
  options: string[];
  onSelect: (option: string) => void;
  inputWidth: number; // Dynamically passed width of MaterialDescEditableComponent
}

export const DropdownComponent: React.FC<DropdownComponentProps> = ({
  options,
  onSelect,
  inputWidth,
}) => {
  return (
    <div
      className={styles.dropdown}
      style={{
        width: `${inputWidth}px`,
      }}
    >
      {options.map((option, index) => (
        <div
          key={index}
          className={styles.dropdownItem}
          onClick={() => onSelect(option)}
        >
          {option}
        </div>
      ))}
    </div>
  );
};
