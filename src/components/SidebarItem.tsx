import { FC } from "react";
import { ISidebarItem } from "../utils/types";

interface SidebarItemProps {
  item: ISidebarItem;
  index: number;
}

const SidebarItem: FC<SidebarItemProps> = ({ item, index }) => {
  return (
    <div
      style={{
        cursor: "pointer",
        backgroundColor: `${item.isActive ? "#E9EFFF" : ""}`,
        borderRadius: "4px",
        padding: "4px",
        marginTop: index === 9 ? "100px" : "0px",
      }}
      className="sidebar-item"
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
