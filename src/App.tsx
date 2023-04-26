import './App.css'
import MainContent from './components/MainContent'
import Sidebar from './components/Sidebar'

function App() {


  return (
    <div className='dashboard-container1 min-h-screen overflow-hidden md:overflow-visible flex'>
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
