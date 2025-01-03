// TableHeader.tsx
import React from "react";
import classes from "./TableComponent.module.css";
import cx from "clsx";

const TableHeader = () => (
  <thead className={cx(classes.header)}>
    <tr>
      <th>Category ID</th>
      <th>Material ID</th>
      <th>Description</th>
      <th>Unit of Measure</th>
      <th>BOM Quality</th>
      <th>Unit Cost</th>
      <th>Standard Cost</th>
    </tr>
  </thead>
);

export default TableHeader;
