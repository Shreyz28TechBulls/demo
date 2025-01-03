// TableRowComponent.tsx
import React from "react";

type TableRowProps = {
  materialId: string;
  description: string;
  unitOfMeasure: string;
  bomQuality: number;
  unitCost: number;
  standardCost: number;
};

const TableRowComponent = ({
  materialId,
  description,
  unitOfMeasure,
  bomQuality,
  unitCost,
  standardCost,
}: TableRowProps) => (
  <tr>
    <td>{materialId}</td>
    <td>{description}</td>
    <td>{unitOfMeasure}</td>
    <td>{bomQuality}</td>
    <td>{unitCost.toFixed(2)}</td>
    <td>{standardCost.toFixed(2)}</td>
  </tr>
);

export default TableRowComponent;
