
import WorkflowItem from './WorkflowItem';
import { SidebarLink } from './../constants/interfaces';

const WorkflowList = () => {

  return (
    <main className="flex flex-col w-full h-screen-minus-80 overflow-y-auto">
      <div className="flex min-h-[56px] mx-3 border-b items-center">
        <span className="block text-sm font-semibold w-[107px] px-2">Type</span>
        <span className="block text-sm font-semibold flex-1 px-2">Name</span>
        <span className="block text-sm font-semibold w-[180px] px-2">Tags</span>
        <span className="block text-sm font-semibold w-[134px] px-2">Last Updated</span>
        <span className="block text-sm font-semibold w-[88px] px-2">Actions</span>
      </div>
      <WorkflowItem />
    </main>
  )
}

export default WorkflowList;
