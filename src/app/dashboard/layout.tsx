export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>Header</div>
      <aside id="sidebar-multi-level-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
          <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
              <ul className="space-y-2 font-medium">
                <li>
                    <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                      <span className="ms-3">Dashboard</span>
                    </a>
                </li>
                <li>
                    <button type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                          <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">E-commerce</span>
                          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                          </svg>
                    </button>
                    <ul id="dropdown-example" className=" py-2 space-y-2">
                          <li>
                            <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Products</a>
                          </li>
                          <li>
                            <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Billing</a>
                          </li>
                    </ul>
                </li>
                <li>
                    <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                      <span className="flex-1 ms-3 whitespace-nowrap">Kanban</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                      <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
                    </a>
                </li>
              </ul>
          </div>
      </aside>
      <div>{children}</div>
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
