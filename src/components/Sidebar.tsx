import { FC } from "react";
import Sider from "antd/es/layout/Sider";
import { sidebarItems } from "../utils/data";
import SidebarItem from "./SidebarItem";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => {
  return (
    <Sider
      className="sidebar"
      style={{
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
        backgroundColor: "#fff",
        paddingTop: "24px",
      }}
      width={72}
    >
      <div
        className=""
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        {sidebarItems.map((item, i) => (
          <SidebarItem item={item} key={item.title} index={i} />
        ))}
      </div>
    </Sider>
  );
};

export default Sidebar;
