import React from "react";
import { Pagination as PaginationComponent } from "@mantine/core";

const Pagination = () => {
  return (
    <PaginationComponent
      total={10}
      size={"xs"}
      styles={{
        dots: {
          color: "var(--mantine-color-white)",
        },
      }}
    />
  );
};

export default Pagination;
