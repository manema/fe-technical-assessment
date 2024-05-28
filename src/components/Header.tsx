import IconButton from './IconButton';
import SearchInput from './SearchInput';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const Header = () => {

  return (
    <div className="flex justify-between items-center p-5 border-b h-[80px]">
      <h1 className="text-3xl font-bold">Workflows</h1>
      <div className="flex items-center gap-2">
        <IconButton label="Sort">
          <ChevronDownIcon className='h-[20px]' />
        </IconButton>
        <SearchInput placeholder="Search workflows" />
      </div>
    </div>
  )
}

export default Header;
