
import { SidebarLink } from './../constants/interfaces';

interface SidebarLinksProps {
  links: SidebarLink[];
}

const SidebarLinks = ({ links } : SidebarLinksProps) => {

  return (
    <nav className="flex flex-col w-full">
      {links.map(({ href, label, decorator: Decorator }, index) =>
        <div className='flex items-center h-[32px] hover:bg-gray-100' key={index}>
          {Decorator && <Decorator className="size-3 text-[--scorpion]" />}
          <a href={href} className="text-[--scorpion] pl-2 text-xs">{label}</a>
        </div>
      )}
    </nav>
  )
}

export default SidebarLinks;
