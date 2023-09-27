import { FC } from "react";
import Sider from "antd/es/layout/Sider";
import { sidebarItems } from "../utils/data";
import SidebarItem from "./SidebarItem";
import settingsIcon from "../assets/Settings.svg";

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
        {sidebarItems.map((item) => (
          <SidebarItem item={item} key={item.title} />
        ))}
      </div>

      <div
        style={{
          marginTop: "auto",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img
          src={settingsIcon}
          alt=""
          style={{
            width: "34px",
            height: "34px",
          }}
        />
      </div>
    </Sider>
  );
};

export default Sidebar;
