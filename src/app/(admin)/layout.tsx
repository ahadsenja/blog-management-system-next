import Navbar from "../components/Dashboard/Navbar";
import Sidebar from "../components/Dashboard/Sidebar";

export default function AdminPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>
        <Sidebar />
        <div>
          <Navbar />
          <main className="grow ml-60 mt-16 p-6">{children}</main>
        </div>
      </div>
    </>
  )
}
