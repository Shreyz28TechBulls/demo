import { TableComponent, TableHeader, TableRowComponent } from './comp/ExportComponent';
import { Button } from "@mantine/core";
import classes from "./index.module.css";
import { useState } from "react";
import cx from "clsx";

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
  }
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
  
    setData(updatedData); 
  };
  
  return (
    <>
      <div className={classes["root-container"]}>
        <div className={classes["main-parent-container"]}>
          <div className={classes["header-container"]}>
            <h2 className={classes["header-title"]}>Review BOM</h2>
            <Button className={classes["contact-support-button"]}>24/7 Contact Support</Button>
          </div>
  
          <div className={classes["main-div"]}>
            <table className={cx(classes.MantineTable)} >
              <TableHeader />
              <tbody>
                
                {data.map((category, index) => (
                  <tr key={index}>
                    <td >
                      <TableComponent
                        data={category.items}
                        categoryId={category.categoryId}
                        handleAddItem={handleAddItem}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
  
            {/* Add new Category button */}
            <div className={classes["add-button"]} onClick={handleAddCategory}>
              + Add new Category
            </div>
          </div>



        </div>
      </div>
    </>
  );
}
