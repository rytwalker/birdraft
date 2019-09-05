import React from "react";
import Layout from "./layout/Layout";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Layout>
      <Sidebar />
      <Main />
      <Sidebar />
    </Layout>
  );
}

export default App;
