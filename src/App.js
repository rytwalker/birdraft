import React, { createContext, useContext, useEffect, useState } from "react";
import Layout from "./layout/Layout";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import { dummyData } from "./dummyData";

export const TweetContext = createContext([]);

function App() {
  const [tweetDrafts, setTweetDrafts] = useState([]);

  useEffect(() => {
    setTweetDrafts(dummyData);
  }, [tweetDrafts]);

  return (
    <TweetContext.Provider value={tweetDrafts}>
      <Layout>
        <Sidebar />
        <Main />
        <Sidebar />
      </Layout>
    </TweetContext.Provider>
  );
}

export default App;
