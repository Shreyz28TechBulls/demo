import React, { useState } from 'react';
import { Table, ScrollArea } from '@mantine/core';
import useTableComponentStyles from './useTableComponentStyles'; // Import the Mantine styles
import TagsHorizontalScrollableInputField from './TagsHorizontalScrollableInputField';

interface RowData {
  categoryId: string;
  materialId: string;
  materialDesc: string;
  unitOfMeasure: string;
  bomQty: number;
  unitCost: number;
  standardCost: number;
}

const data: RowData[] = [
  { categoryId: 'C001', materialId: 'M001', materialDesc: 'Material 1', unitOfMeasure: 'kg', bomQty: 10, unitCost: 15.5, standardCost: 155.0 },
  { categoryId: 'C002', materialId: 'M002', materialDesc: 'Material 2', unitOfMeasure: 'ltr', bomQty: 20, unitCost: 10.0, standardCost: 200.0 },
  { categoryId: 'C003', materialId: 'M003', materialDesc: 'Material 3', unitOfMeasure: 'pcs', bomQty: 5, unitCost: 25.0, standardCost: 125.0 },
  { categoryId: 'C004', materialId: 'M004', materialDesc: 'Material 4', unitOfMeasure: 'kg', bomQty: 15, unitCost: 12.5, standardCost: 187.5 },
  { categoryId: 'C005', materialId: 'M005', materialDesc: 'Material 5', unitOfMeasure: 'ltr', bomQty: 8, unitCost: 20.0, standardCost: 160.0 },
];

export function TableComponent() {
  const { classes } = useTableComponentStyles(); // Use Mantine styles
  const [editableRow, setEditableRow] = useState<string | null>(null);
  const [editedData, setEditedData] = useState<RowData[]>(data);
  const [tags, setTags] = useState<string[]>([]);

  const handleEdit = (id: string) => {
    setEditableRow(id);
  };

  const handleTagsChange = (newTags: string[]) => {
    setTags(newTags);
    console.log('Updated Tags:', newTags); // Debugging to verify tag updates
  };

  const handleMaterialDescChange = (id: string, value: string) => {
    setEditedData((prevData) =>
      prevData.map((row) =>
        row.materialId === id ? { ...row, materialDesc: value } : row
      )
    );
  };

  return (
    <ScrollArea>
      <Table className={classes.table}>
        <thead>
          <tr>
            <th>Category ID</th>
            <th>Material ID</th>
            <th>Material Desc</th>
            <th>U/M</th>
            <th>BOM Qty</th>
            <th>Unit Cost</th>
            <th>Standard Cost</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {editedData.map((row) => (
            <tr
              key={row.materialId}
              className={editableRow === row.materialId ? classes.editableRow : ''}
            >
              <td>{row.categoryId}</td>
              <td>{row.materialId}</td>
              <td>
                {editableRow === row.materialId ? (
                  <div style={{ padding: '20px' }}>
                    <TagsHorizontalScrollableInputField onTagsChange={handleTagsChange} />
                  </div>
                ) : (
                  row.materialDesc
                )}
              </td>
              <td>{row.unitOfMeasure}</td>
              <td>{row.bomQty}</td>
              <td>{row.unitCost.toFixed(2)}</td>
              <td>{row.standardCost.toFixed(2)}</td>
              <td>
                <span
                  onClick={() => handleEdit(row.materialId)}
                  className={classes.editText}
                >
                  Edit
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </ScrollArea>
  );
}
