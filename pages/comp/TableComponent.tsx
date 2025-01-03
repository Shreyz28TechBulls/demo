import React from "react";
import { ScrollArea, Table } from "@mantine/core";
import cx from "clsx";
import classes from "./TableComponent.module.css";
import TableHeader from "./TableHeader";
import TableRowComponent from "./TableRowComponent";

type DataItem = {
  materialId: string;
  description: string;
  unitOfMeasure: string;
  bomQuality: number;
  unitCost: number;
  standardCost: number;
};

interface TableComponentProps {
  data: DataItem[];
  categoryId: string;
  handleAddItem: (categoryId: string) => void;
}

export default function TableComponent({
  data,
  categoryId,
  handleAddItem,
}: TableComponentProps) {
  return (
    <div className={classes["parent-container"]}>
      <div className={classes["table-container"]}>
        <ScrollArea h={300}>
          <Table className={cx(classes.MantineTable)} miw={700}>
            <TableHeader />
            <tbody>
              {data.map((row, index) => (
                <TableRowComponent
                  key={index}
                  materialId={row.materialId}
                  description={row.description}
                  unitOfMeasure={row.unitOfMeasure}
                  bomQuality={row.bomQuality}
                  unitCost={row.unitCost}
                  standardCost={row.standardCost}
                />
              ))}
            </tbody>
          </Table>
        </ScrollArea>
      </div>
      <div className={classes["add-item-text"]}>
        <span onClick={() => handleAddItem(categoryId)}>+ Add item to category</span>
      </div>
      <div className={classes["underline-container"]}>
        <span className={classes["category-totals-text"]}>Category Totals</span>
      </div>
    </div>
  );
}
