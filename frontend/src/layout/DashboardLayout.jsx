import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const DashboardLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileSidebar = () => setMobileOpen(!mobileOpen);

  return (
    <div className="flex min-h-screen relative">
      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 z-40 h-full w-64 bg-white shadow-[4px_0_10px_rgba(0,0,0,0.1)] transform transition-transform duration-300 ease-in-out ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <span className="text-xl font-bold text-indigo-600">BankDash</span>
          <button onClick={toggleMobileSidebar} className="text-2xl text-gray-600">
            <HiX />
          </button>
        </div>
        <nav className="flex flex-col p-4 gap-4 text-gray-700">
          <a href="#" className="hover:text-indigo-500">Dashboard</a>
        </nav>
      </div>

      {/* Backdrop Overlay */}
   {mobileOpen && (
  <div
    className="fixed inset-0 bg-opacity-30 backdrop-blur-sm z-30 md:hidden"
    onClick={toggleMobileSidebar}
  ></div>
)}

      {/* Desktop Sidebar */}
      <aside className="w-64 bg-white hidden md:block shadow-[4px_0_10px_rgba(0,0,0,0.1)] z-10 relative">
        <div className="p-4 text-xl font-bold text-indigo-600">BankDash</div>
        <nav className="flex flex-col p-4 gap-4 text-gray-700">
          <a href="#" className="hover:text-indigo-500">Dashboard</a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 bg-[#f7f9fc] relative z-0 w-full">
        {/* Top Navbar */}
        <nav className="bg-white p-4 shadow-md flex items-center justify-between">
          <button
            className="text-2xl md:hidden text-gray-700"
            onClick={toggleMobileSidebar}
          >
            <HiMenu />
          </button>
          <div className="text-lg text-[#343C6A] font-semibold">Navbar</div>
        </nav>

        {/* Page Content */}
        <main className="p-4 md:p-8 h-[90vh] overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
