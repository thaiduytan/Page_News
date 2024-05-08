import React from "react";
import Navlink from "./Navlink";
import { IconCategory } from "@tabler/icons-react";

export interface INavigationItem {
  title: string;
  href?: string;
  description?: string;
  Icon?: React.ReactNode;
  subItems?: INavigationItem[];
  i?:number
}

const Navigation = () => {
  const navigationItems: INavigationItem[] = [
    {
      title: "DTN News",
      subItems: [
        {
          title: "Calendara and Reports",
        },
        {
          title: "Quote List Change",
        },
        {
          title: "Derivatives - Selected Futures and Options",
        },
        {
          title: "Treasuries, Most Actives, Gainers, Losers",
        },
      ],
    },
    {
      title: "PR Newswire",
      subItems: [
        {
          title: "Calendara and Reports",
        },
        {
          title: "Quote List Change",
        },
        {
          title: "Derivatives - Selected Futures and Options",
        },
        {
          title: "Treasuries, Most Actives, Gainers, Losers",
        },
      ],
    },
    {
      title: "Business Wire",
      subItems: [
        {
          title: "Calendara and Reports",
        },
        {
          title: "Quote List Change",
        },
        {
          title: "Derivatives - Selected Futures and Options",
        },
        {
          title: "Treasuries, Most Actives, Gainers, Losers",
        },
      ],
    },
    {
      title: "Real - Time Trader",
      subItems: [
        {
          title: "Calendara and Reports",
        },
        {
          title: "Quote List Change",
        },
        {
          title: "Derivatives - Selected Futures and Options",
        },
        {
          title: "Treasuries, Most Actives, Gainers, Losers",
        },
      ],
    },
    {
      title: "Golbe Newswire Inc",
      subItems: [
        {
          title: "Calendara and Reports",
        },
        {
          title: "Quote List Change",
        },
        {
          title: "Derivatives - Selected Futures and Options",
        },
        {
          title: "Treasuries, Most Actives, Gainers, Losers",
        },
      ],
    },
    {
      title: "Benzinga Pro",
      subItems: [
        {
          title: "Calendara and Reports",
        },
        {
          title: "Quote List Change",
        },
        {
          title: "Derivatives - Selected Futures and Options",
        },
        {
          title: "Treasuries, Most Actives, Gainers, Losers",
        },
      ],
    },
  ];

  return navigationItems.map((item, index) => (
    <Navlink key={`${item.title}-${index + 1}`} {...item} i={index}/>
  ));
};

export default Navigation;
