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
      <div className="p-5 sm:ml-64 flex flex-row justify-center">
        <div className=" w-full max-w-[1400px] ">{children}</div>{" "}
      </div>
    </div>
  );
}
