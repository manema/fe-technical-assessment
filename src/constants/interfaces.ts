interface SidebarLink {
  href: string,
  label: string,
  decorator?: React.ComponentType;
}

interface Tag {
  color: string,
  name: string
}

interface WorkflowItem {
  type: string,
  name: string,
  emoji?: string,
  tags: Tag[],
  updated: string
}

export {
  SidebarLink,
  Tag,
  WorkflowItem
}
