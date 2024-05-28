import { SidebarLink } from './interfaces';
import { ChartBarIcon } from '@heroicons/react/20/solid';
import { CircleStackIcon } from '@heroicons/react/20/solid';
import { Cog6ToothIcon } from '@heroicons/react/20/solid';

export const sideBarLinks : SidebarLink[] = [
  {
    href: '/',
    label: 'Data Name',
    decorator: ChartBarIcon
  },
  {
    href: '/',
    label: 'Monitoring',
    decorator: CircleStackIcon
  },
  {
    href: '/',
    label: 'Settings',
    decorator: Cog6ToothIcon
  }
] 