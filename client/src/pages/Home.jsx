import React from 'react';
import Sidebar from '../components/Sidebar';
import NavBar from '../components/NavBar';
import PathBreadcrumb from '../components/PathBreadcrumb';
import Toolbar from '../components/Toolbar';
import FileList from '../components/FileList';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="h-screen bg-zinc-950 overflow-hidden">
      {/* Fixed Sidebar */}
      <div className="fixed top-0 left-0 bottom-0 w-64 z-20">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="ml-64 flex flex-col h-full">
        {/* Fixed Navbar */}
        <div className="fixed top-0 left-64 right-0 z-10">
          <NavBar />
        </div>

        {/* Scrollable Center */}
        <div className="flex-1 mt-[70px] mb-[60px] px-6 overflow-hidden">
          <div className="h-full border border-slate-400 rounded-2xl p-6 flex flex-col bg-slate-950">
            <PathBreadcrumb />
            {/* <Toolbar /> */}
            <div className="flex-1 min-h-0 overflow-hidden">
              <FileList />
            </div>
          </div>
        </div>

        {/* Fixed Footer */}
        <div className="fixed bottom-0 left-64 right-0 z-10 w-ful">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
