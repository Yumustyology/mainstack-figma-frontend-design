import "./App.css";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import React, { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [appData, setAppData] = useState<any>(null);
  const [error, setError] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


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
          setError(true);
        }
      }
    };

    fetchData();

    return () => {
      source.cancel("Request canceled");
      setError(false);
    };
  }, []);


 
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (windowSize.width > 910) {
    setIsMenuOpen(true)
    }
  }, [windowSize]);




  console.log(appData);

  return (
    <div className="dashboard-container1 h-screen lg:overflow-hidden sm:overflow-visible flex">
      <>
        {/*dashboard sidebar*/}
        <Sidebar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
        {/* main content */}
        {appData ? (
          <MainContent isMenuOpen={isMenuOpen} appData={appData} toggleMenu={toggleMenu} />
        ) : error ? (
          <div className="w-full h-screen flex items-center justify-center text-[indianred] bold-font ">
            error, something went nuts 🥜🥜, please refresh...
          </div>
        ) : (
          <div className="w-full h-screen flex items-center justify-center text-[#FF5403] bold-font ">
            loading...
          </div>
        )}
      </>
    </div>
  );
}

export default App;
