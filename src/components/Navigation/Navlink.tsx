import React from "react";
import { NavLink } from "@mantine/core";
import Link from "next/link";
import classes from "./Navlink.module.css";
import { montserrat } from "@/theme/fonts";

export type NavLinkType = {
  category: IMajorType;
  i: number;
};

const Navlink: React.FC<NavLinkType> = ({ category, i }) => {
  const { minor_type, name } = category;
  return minor_type ? (
    <NavLink
      label={name}
      disableRightSectionRotation={false}
      childrenOffset={28}
      defaultOpened={i === 0}
      pl={10}
      pr={0}
      className={montserrat.className}
      classNames={{
        root: classes.navlinkParent,
      }}
    >
      {minor_type.map((item: IMinorType, j: number) => (
        <NavLink
          key={`${item?.name}-${j + 1}`}
          component={Link}
          href={"#"}
          label={item?.name}
          pl={10}
          my={{
            base: 5,
            sm: 15,
          }}
          className={montserrat.className}
          classNames={{
            root: classes.navlinkChild,
          }}
        />
      ))}
    </NavLink>
  ) : (
    <NavLink
      component={Link}
      href={"#"}
      label={name}
      pl={10}
      pr={0}
      className={montserrat.className}
      classNames={{
        root: classes.navlinkParent,
      }}
    />
  );
};

export default Navlink;
