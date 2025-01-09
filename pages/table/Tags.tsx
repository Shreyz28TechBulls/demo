import React from "react";
import useTableComponentStyles from "./useTableComponentStyles";

interface TagsProps {
  label: string;
  onRemove: (label: string) => void;
}

const Tags: React.FC<TagsProps> = ({ label, onRemove }) => {
  const { classes } = useTableComponentStyles();

  return (
    <div className={classes.tag}>
      <span>{label}</span>
      <button onClick={() => onRemove(label)} className={classes.dropdownButton}>
        
      </button>
    </div>
  );
};

export default Tags;