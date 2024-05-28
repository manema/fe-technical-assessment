import { useEffect } from 'react';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SideBarLinks  from './components/SidebarLinks';

import { sideBarLinks } from './constants';



function App() {

  return (
    <div className="flex h-full">
          <Sidebar>
            <SideBarLinks links={sideBarLinks} />
        </Sidebar>
        <div className="w-full">
          <Header />
        </div>
    </div>
  )
}

export default App
