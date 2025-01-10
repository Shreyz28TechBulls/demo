import React, { useState } from 'react';
import { Table, ScrollArea } from '@mantine/core';
import useTableComponentStyles from './useTableComponentStyles';
import RichEditorText from '../RichEditor/RichEditorText';
import { setDefaultHighWaterMark } from 'stream';

const data = [
  { categoryId: "C001", materialId: "M001", materialDesc: "Material 1", unitOfMeasure: "kg", bomQty: 10, unitCost: 15.5, standardCost: 155.0 },
  { categoryId: "C002", materialId: "M002", materialDesc: "Material 2", unitOfMeasure: "ltr", bomQty: 20, unitCost: 10.0, standardCost: 200.0 },
  { categoryId: "C003", materialId: "M003", materialDesc: "Material 3", unitOfMeasure: "pcs", bomQty: 50, unitCost: 5.0, standardCost: 250.0 },
  { categoryId: "C004", materialId: "M004", materialDesc: "Material 4", unitOfMeasure: "m", bomQty: 100, unitCost: 2.5, standardCost: 250.0 },
  { categoryId: "C005", materialId: "M005", materialDesc: "Material 5", unitOfMeasure: "kg", bomQty: 5, unitCost: 50.0, standardCost: 250.0 },
  { categoryId: "C006", materialId: "M006", materialDesc: "Material 6", unitOfMeasure: "ltr", bomQty: 10, unitCost: 20.0, standardCost: 200.0 },
  { categoryId: "C007", materialId: "M007", materialDesc: "Material 7", unitOfMeasure: "pcs", bomQty: 30, unitCost: 8.0, standardCost: 240.0 },
];


export function TableComponent() {
  const { classes } = useTableComponentStyles();
  const [editableRow, setEditableRow] = useState<string | null>(null);
  const [editedData, setEditedData] = useState(data);

  const handleEdit = (id: string) => {
    setEditableRow(id);
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
            <tr key={row.materialId} className={editableRow === row.materialId ? classes.editableRow : ""}>
              <td>{row.categoryId}</td>
              <td>{row.materialId}</td>
              <td>
                {editableRow === row.materialId ? (
                  <RichEditorText />  
                ) : (
                  row.materialDesc
                )}
              </td>
              <td>{row.unitOfMeasure}</td>
              <td>{row.bomQty}</td>
              <td>{row.unitCost.toFixed(2)}</td>
              <td>{row.standardCost.toFixed(2)}</td>
              <td>
                <span onClick={() => handleEdit(row.materialId)} className={classes.editText}>
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
