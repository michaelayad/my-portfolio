import NavBar from "@/components/NavBar";

export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="md:container mx-auto">
      <NavBar />
      {children}
    </div>
  );
}
