import React from "react";
import Layout from "./layout/Layout";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Layout>
      <Sidebar>Left</Sidebar>
      <Main>Birdraft</Main>
      <Sidebar>Right</Sidebar>
    </Layout>
  );
}

export default App;
