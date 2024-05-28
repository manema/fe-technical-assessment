import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

interface SearchInputProps {
  placeholder?: string
}

const SearchInput = ({ placeholder } : SearchInputProps) =>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <MagnifyingGlassIcon className='h-[20px]' />
        </div>
        <input type="search" id="default-search" className="h-[32px] block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder={placeholder} />
    </div>

    


export default SearchInput;
