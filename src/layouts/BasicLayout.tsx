import { Outlet } from "react-router-dom";
import { ArrowLeft } from 'lucide-react';

const Basicayout = () => {
  return (
    <>
      <nav className="px-10 py-5 text-lg font-medium flex flex-row gap-5">
        <ArrowLeft className="text-[hsl(218,8%,50%,1)]"/>
        Details
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Basicayout;
