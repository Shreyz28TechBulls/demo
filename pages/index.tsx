import { Button } from "@mantine/core";
import cx from "clsx";
import { TableComponent } from "./table/TableComponent";
import ProgressBar from "./table/ProgressBar";
import { Progress } from "@mantine/core";
import TagsHorizontalScrollableInputField from "./table/TagsHorizontalScrollableInputField";
import { useState } from "react";

export default function Home() {
  return (
    <>
      <TableComponent />
    </>
  );
}
