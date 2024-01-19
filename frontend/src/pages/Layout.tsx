import { Outlet } from "react-router-dom";

import { Sidebar } from "../components";

const Layout = () => {
  return (
    <>
      <Sidebar />
      <div className="lg:pl-60">
        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
};

export default Layout;
