import { Outlet } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f7f9fc]">
      {/* Top Navbar */}
      <nav className="bg-white p-4 shadow-md flex items-center justify-between">
        <div className="text-lg text-[#343C6A] font-semibold">All Enquiries</div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
