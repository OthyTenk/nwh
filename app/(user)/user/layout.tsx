import Header from "@/app/components/common/Header";
import SideBar from "@/app/components/common/SideBar";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <SideBar />
      {children}
    </div>
  );
}
