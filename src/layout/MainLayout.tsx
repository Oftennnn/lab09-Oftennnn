import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div className="container-fluid min-vh-100">
      <div className="row h-100">
        <div className="col-2 col-md-2 p-0">
          {/* Sidebar ซ้าย */}
          <Sidebar userName="Kamin" type="admin" />
        </div>
        <div className="col-10 col-md-10 p-0">
          {/* Header ด้านบน */}
          <Header />
          {/* เนื้อหาหลัก */}
          <main className="flex-grow-1 p-4 min-vh-100">
           <Outlet />
          </main>

          {/* Footer ด้านล่าง */}
          <Footer year="2025" fullName="Kamin" studentId="670610677" />
        </div>
      </div>
    </div>
  );
}
