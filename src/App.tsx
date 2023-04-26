import "./App.css";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import React, { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [appData, setAppData] = useState<any>(null);
  const [error,setError] = useState(false)

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
          setError(true)
        }
      }
    };

    fetchData();

    return () => {
      source.cancel("Request canceled");
      setError(false)
    };
  }, []);

  console.log(appData);

  return (
    <div className="dashboard-container1 h-screen lg:overflow-hidden sm:overflow-visible flex">
      <>
        {/*dashboard sidebar*/}
        <Sidebar />
        {/* main content */}
        {appData ? <MainContent appData={appData} /> : error ? <div className='w-full h-screen flex items-center justify-center text-[indianred] bold-font '>
        error, something went nuts 🥜🥜, please refresh...</div> : <div className='w-full h-screen flex items-center justify-center text-[#FF5403] bold-font '>
        loading...</div>}
      </>
    </div>
  );
}

export default App;
