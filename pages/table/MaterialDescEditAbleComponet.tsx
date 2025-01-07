import React from 'react';
import classes from './MaterialDescEditAbleComponet.module.css';

interface MaterialDescEditableProps {
  id: string;
  value: string;
  isEditable: boolean;
  onChange: (id: string, value: string) => void;
}

export const MaterialDescEditableComponent: React.FC<MaterialDescEditableProps> = ({
  id,
  value,
  isEditable,
  onChange,
}) => {
  return isEditable ? (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(id, e.target.value)}
      className={classes.materialInputEditable}
    />
  ) : (
    <span className={classes.materialInputNonEditable}>{value}</span>
  );
};
