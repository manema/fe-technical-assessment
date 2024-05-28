import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SideBarLinks  from './components/SidebarLinks';
import WorkflowList from './components/WorkflowList';

import { sideBarLinks } from './constants';


function App() {

  return (
    <div className="flex h-full">
          <Sidebar>
            <SideBarLinks links={sideBarLinks} />
        </Sidebar>
        <div className="w-full">
          <Header />
          <WorkflowList />
        </div>
    </div>
  )
}

export default App
