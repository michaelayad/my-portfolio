import AdminNavBar from "@/components/admin/navBar";
import AdminSideBar from "@/components/admin/sideBar";

export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full bg-primary-bg3 min-h-lvh">
      <AdminNavBar />
      <AdminSideBar />
      <div className="p-5 sm:ml-64">
        admin sideBar
        {children}
      </div>
    </div>
  );
}
