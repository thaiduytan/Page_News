import React from "react";
import { INavigationItem } from ".";
import { NavLink } from "@mantine/core";
import Link from "next/link";
import classes from "./Navlink.module.css";
import { montserrat } from "@/theme/fonts";

const Navlink: React.FC<INavigationItem> = ({
  title,
  href,
  subItems,
  Icon,
  i,
}) => {
  return subItems ? (
    <NavLink
      label={title}
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
      {subItems.map((item, i) => (
        <NavLink
          key={`${item?.title}-${i + 1}`}
          component={Link}
          href={"#"}
          label={item?.title}
          pl={10}
          my={15}
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
      label={title}
      //   leftSection={Icon && <Icon size={18} stroke={1.5} />}
      pl={0}
    />
  );
};

export default Navlink;
