import React from 'react';
import useTableComponentStyles from './useTableComponentStyles';

interface TagsProps {
  label: string;
  onRemove: (label: string) => void;
}

const Tags: React.FC<TagsProps> = ({ label, onRemove }) => {
  const { classes } = useTableComponentStyles();

  return (
    <div className={classes.tag}>
      <span className={classes.tagLabel}>{label}</span>
      <button
        className={classes.removeButton}
        onClick={() => onRemove(label)}
        aria-label={`Remove tag ${label}`}
      >
        &times;
      </button>
    </div>
  );
};

export default Tags;
