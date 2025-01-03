import Head from "next/head";
import TableComponent from "./comp/TableComponent";
import { Button } from "@mantine/core";
import classes from "./index.module.css";
import { useState } from "react";

// Example initial data (dummy data)
const initialData = [
  {
    categoryId: "CAT001",
    materialId: "MAT001",
    description: "Material A",
    unitOfMeasure: "KG",
    bomQuality: 10,
    unitCost: 5.5,
    standardCost: 55,
    items: [], // Empty array for items initially
  },
  {
    categoryId: "CAT003",
    materialId: "MAT003",
    description: "Material C",
    unitOfMeasure: "M",
    bomQuality: 15,
    unitCost: 3.7,
    standardCost: 55.5,
    items: [], // Empty array for items initially
  },
];

export default function Home() {
  const [data, setData] = useState(initialData); // Managing dynamic data for table

  // Function to handle adding a new category
  const handleAddCategory = () => {
    const newCategory = {
      categoryId: `CAT00${data.length + 1}`,
      materialId: `MAT00${data.length + 1}`,
      description: `Material ${data.length + 1}`,
      unitOfMeasure: "KG",
      bomQuality: 5,
      unitCost: 5.5,
      standardCost: 27.5,
      items: [], // Empty array for items
    };
    setData([...data, newCategory]); // Add new category to the data
  };

  const handleAddItem = (categoryId: string) => {
    const newItem = {
      materialId: `xyz`, 
      description: `Item ${Date.now()}`, 
      unitOfMeasure: "KG",
      bomQuality: 10,
      unitCost: 3.0,
      standardCost: 30.0,
    };
  
    const updatedData = data.map((category) => {
      if (category.categoryId === categoryId) {
        return {
          ...category,
          items: [...category.items, newItem], // Add new item to the category
        };
      }
      return category;
    });
  
    setData(updatedData); // Update the data with the new item added
  };
  

  return (
    <>
      <div>
        <div className={classes["header-container"]}>
          <h2 className={classes["header-title"]}>Review BOM</h2>
          <Button className={classes["contact-support-button"]}>24/7 Contact Support</Button>
        </div>

        {data.map((category, index) => (
          <TableComponent
            key={index}
            data={category.items} 
            categoryId={category.categoryId}
            handleAddItem={handleAddItem} 
          />
        ))}

        {/* Add new Category button */}
        <span className={classes["add-button"]} onClick={handleAddCategory}>
          + Add new Category
        </span>
      </div>
    </>
  );
}
