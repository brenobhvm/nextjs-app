import Layout from '../components/layout/Layout'
export default function Home() {
  return (
    <>
        {/*<!-- start:mobile menu -->*/}
        <div className="hidden absolute mobile-menu overflow-none flex w-full">
          <div className="h-screen w-64 bg-opacity-90 bg-gray-300">mobile menu
            {/*<button onclick="toggleMobileMenu()" class="border h-8 px-2 ml-4 bg-gray-100 shadow rounded-full hover:bg-gray-200">toggle mobile</button>*/}
            <button className="border h-8 px-2 ml-4 bg-gray-100 shadow rounded-full hover:bg-gray-200">toggle mobile</button>
          </div>
            <div className="w-full h-screen bg-opacity-80 bg-indigo-300"></div>
        </div>
        {/*<!-- end:mobile menu -->*/}

        <div className="flex flex-col h-screen">
        {/*<!--  start::navbar   -->*/}
          <nav className="flex bg-pink-500 h-16 items-center">
            Full Width Header 
            {/*<button onclick="toggleSidebar()" class="border h-8 px-2 ml-4 bg-gray-100 shadow rounded-full hover:bg-gray-200">
              toggle sidebar
            </button>
            <button onclick="toggleMobileMenu()" class="border h-8 px-2 ml-4 bg-gray-100 shadow rounded-full hover:bg-gray-200">
              toggle mobile
            </button>
            */}
            <button className="border h-8 px-2 ml-4 bg-gray-100 shadow rounded-full hover:bg-gray-200">
              toggle sidebar
            </button>
            <button className="border h-8 px-2 ml-4 bg-gray-100 shadow rounded-full hover:bg-gray-200">
              toggle mobile
            </button>
          </nav>
          {/*<!--  end::navbar   -->*/}
          <div className="flex flex-1 overflow-hidden">
            {/*<!--   start::Sidebar    -->*/}
            <aside className="hidden sm:block bg-green-300 w-32 overflow-y-auto">
                Sidebar content (I should hide on small screens but still be toggleable)
            </aside>
            {/*<!--   end::Sidebar    -->*/}
            {/*<!--   start::Main Content     -->*/}
            <div className='flex flex-col w-full'>
              <div className="flex bg-red-400 h-8 items-center">Full Width Subheader </div>
              <main className="flex flex-1 bg-blue-300 overflow-y-auto paragraph px-4">
                {/*<!--    text set from JS file  -->*/}
              </main>
            </div>
            
            {/*<!--   end::Main Content     -->*/}
          </div>
          <div className="flex bg-yellow-300">Footer</div>
        </div>
    </>
  )
}