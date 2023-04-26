import "./App.css";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import React, { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [appData, setAppData] = useState<any>(null);

  useEffect(() => {
    let source = axios.CancelToken.source();
    const fetchData = async () => {
      try {
        const { data } = await axios.get("https://fe-task-api.mainstack.io/", {
          cancelToken: source.token,
        });
        setAppData(data);
      } catch (error) {
        if (!axios.isCancel(error)) {
          console.log(error);
        }
      }
    };

    fetchData();

    return () => {
      source.cancel("Request canceled");
    };
  }, []);

  console.log(appData);

  return (
    <div className="dashboard-container1 min-h-screen lg:overflow-hidden sm:overflow-visible flex">
      <>
        {/*dashboard sidebar*/}
        <Sidebar />
        {/* main content */}
        {appData ? <MainContent appData={appData} /> : "loading"}
      </>
    </div>
  );
}

export default App;
