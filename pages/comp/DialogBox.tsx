import { useState } from "react";
import classes from "./DialogBox.module.css";

interface DialogBoxProps {
  onAdd: (categoryName: string) => void;
  onClose: () => void;
}

export default function DialogBox({ onAdd, onClose }: DialogBoxProps) {
  const [categoryName, setCategoryName] = useState("");

  const handleAdd = () => {
    if (categoryName.trim()) {
      onAdd(categoryName); // Pass the category name to the parent
      setCategoryName(""); // Reset input field
    } else {
      alert("Please enter a category name.");
    }
  };

  return (
    <div className={classes.overlay}>
      <div className={classes.modal}>
        <div className={classes.modalHeader}>
          <h2 className={classes.modalTitle}>Add New Category</h2>
          <button className={classes.closeButton} onClick={onClose}>
            &times;
          </button>
        </div>
        <div className={classes.underline}></div>
        <div className={classes.inputContainer}>
          <input
            type="text"
            placeholder="Enter the category name"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            className={classes.textInput}
          />
        </div>
        <div className={classes.buttonContainer}>
          <button onClick={handleAdd} className={classes.addButton}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
