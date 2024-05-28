import dayjs from 'dayjs';
import { PencilIcon, TrashIcon } from '@heroicons/react/20/solid';

import TagBadge from './TagBadge';
import IconButton from './IconButton';

import { WorkflowItem as WorkflowItemProps } from './../constants/interfaces';

const WorkflowItem = ({ type, name, emoji, tags, updated } : WorkflowItemProps) => {
  const date = dayjs(updated);

  return (
    <div className="flex w-full">
      <div className="flex w-full h-[56px] mx-3 border-b items-center">
        <div className="text-sm w-[107px] px-2 text-gray-400">{type}</div>
        <div className="text-sm flex-1 px-2 flex gap-2">
          {emoji && <div>{String.fromCodePoint(parseInt(emoji, 16))}</div>}
          {name}
        </div>
        <div className="text-sm font-semibold w-[180px] px-2">
          <TagBadge tags={tags} />
        </div>
        <div className="text-sm w-[134px] px-2 text-gray-400">{date.fromNow()}</div>
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
