import NavBar from "@/components/NavBar";
import Footer from "@/components/footer";

export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <NavBar />
      {children}
      <Footer/>
    </div>
  );
}
