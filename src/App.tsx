import { Layout } from "antd";
import "./App.css";
import { Header } from "antd/es/layout/layout";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Layout hasSider>
      <Sidebar />
      <Header
        style={{
          backgroundColor: "#F9FAFF",
          marginLeft: "72px",
          width: "100%",
        }}
      ></Header>
    </Layout>
  );
}

export default App;
