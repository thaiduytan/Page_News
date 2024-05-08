import {
  Input,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import React from "react";
import classes from "./Search.module.css"

const Search = () => {
  return (
    <Input classNames={{
      input: classes.inputSearch
    }} placeholder="Search" leftSection={<IconSearch size={18} />} size="md"/>
  );
};

export default Search;
