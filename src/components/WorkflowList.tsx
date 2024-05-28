
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import WorkflowItem from './WorkflowItem';
import WorkflowSkeleton from './WorkflowSkeleton';
import ErrorBanner from './ErrorBanner';
import { WorkflowItem as WorkflowItemProps  } from './../constants/interfaces';


dayjs.extend(relativeTime);

interface WorkflowListProps { 
  workflows: WorkflowItemProps[],
  loading: boolean,
  error: Error
}

const WorkflowList = ({ workflows, loading, error } : WorkflowListProps) => {

  return (
    <main className="flex flex-col w-full h-screen-minus-80 overflow-y-auto">
      {loading && <WorkflowSkeleton />}
      {!loading && error && <ErrorBanner error={error}/>}
      {!loading && workflows &&
        <>
          <div className="flex min-h-[56px] mx-3 border-b items-center">
            <span className="block text-sm font-semibold w-[107px] px-2">Type</span>
            <span className="block text-sm font-semibold flex-1 px-2">Name</span>
            <span className="block text-sm font-semibold w-[180px] px-2">Tags</span>
            <span className="block text-sm font-semibold w-[134px] px-2">Last Updated</span>
            <span className="block text-sm font-semibold w-[88px] px-2">Actions</span>
          </div>
          {workflows?.map(({ type, name, id, tags, updated_at, emoji }) => 
            <WorkflowItem type={type} name={name} key={id} tags={tags} updated={updated_at} emoji={emoji} />
          )}
        </>
      }
    </main>
  )
}

export default WorkflowList;
