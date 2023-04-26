import './App.css'
import MainContent from './components/MainContent'
import Sidebar from './components/Sidebar'
import React from 'react'

function App() {


  return (
    <div className='dashboard-container1 min-h-screen lg:overflow-hidden sm:overflow-visible flex'>
      <>
         {/*dashboard sidebar*/}
         <Sidebar />
         {/* main content */}
         <MainContent />
      </>
    </div>
  )
}

export default App
