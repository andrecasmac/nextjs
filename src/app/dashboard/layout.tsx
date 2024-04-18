import Header from "@/components/header";
import Sidebar from "@/components/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen bg-white dark:bg-slate-900/70">
      <Header />

      <div className="md:flex">
        <Sidebar />
        <div className="md:flex-1"> {children} </div>
      </div>
    </div>
  );
}

interface Link {
  name: string,
  path: string,
  children: Link[]
}

let sideBar: Link[] = [
  {name: "Dashboard", path:"/dashboard", children: [
      {name: "Orders", path:"/orders", children: []},
      {name: "Products", path:"/products", children: [
        {name: " New Product", path:"/new-product", children: []}
      ]},
      {name: "Providers", path:"/providers", children: []}
  ]}
]
