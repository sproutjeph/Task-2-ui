import { FC } from "react";
import { ISidebarItem } from "../utils/types";

interface SidebarItemProps {
  item: ISidebarItem;
}

const SidebarItem: FC<SidebarItemProps> = ({ item }) => {
  return (
    <div
      style={{
        cursor: "pointer",
        backgroundColor: `${item.isActive ? "#F9FAFF" : ""}`,
      }}
    >
      <img
        src={item.icon}
        alt=""
        style={{
          width: "34px",
          height: "34px",
        }}
      />
    </div>
  );
};

export default SidebarItem;
