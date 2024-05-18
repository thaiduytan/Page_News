import React from "react";
import Navlink from "./Navlink";

export type NavigationProps = {
  data: ICategorys | null;
};
const Navigation: React.FC<NavigationProps> = ({ data }) => {
  return data?.major_type.map((category, index) => {
    return (
      <Navlink
        key={`${category.name}-${index + 1}`}
        category={category}
        i={index}
      />
    );
  });
};

export default Navigation;
