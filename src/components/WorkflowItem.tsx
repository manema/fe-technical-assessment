import { PencilIcon, TrashIcon } from '@heroicons/react/20/solid';
import TagBadge from './TagBadge';
import IconButton from './IconButton';

import { SidebarLink } from './../constants/interfaces';

interface WorkflowItemProps {
  type: string,
  name: string,
  tags: string,
  updated: string
}

const tags1 = [{ color: '#D27DFF', name: 'aasdas'}, { color: '#FF33FF', name: 'aas234das'}]
// { links } : SidebarLinksProps

const WorkflowItem = ({ type = 'Workflow', name = 'Planner', tags, updated } : WorkflowItemProps) => {

  return (
    <div className="flex w-full">
      <div className="flex w-full h-[56px] mx-3 border-b items-center">
        <div className="text-sm w-[107px] px-2 text-gray-400">{type}</div>
        <div className="text-sm flex-1 px-2 flex gap-2">
          <div>{String.fromCodePoint(parseInt('1f556', 16))}</div>
          {name}
        </div>
        <div className="text-sm font-semibold w-[180px] px-2"><TagBadge tags={tags1} /></div>
        
        <div className="text-sm w-[134px] px-2 text-gray-400">Last Updated</div>
        <div className="text-sm font-semibold w-[88px] px-2 gap-1 flex">
          <IconButton>
            <PencilIcon className="h-[12px]"/>
          </IconButton>
          <IconButton>
            <TrashIcon className="h-[12px]"/>
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default WorkflowItem;
