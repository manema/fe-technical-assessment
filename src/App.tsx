import { useEffect } from 'react';

import Sidebar from './components/Sidebar';
import SideBarLinks  from './components/SidebarLinks';

import { sideBarLinks } from './constants';



function App() {

  return (
    <div className="flex h-full flex-col">
          <Sidebar>
            <SideBarLinks links={sideBarLinks} />
        </Sidebar>
    </div>
  )
}

export default App
