
import { Tag } from './../constants/interfaces';

interface TagBadgeProps {
  tags?: Tag[];
}

const TagBadge = ({ tags = [] } : TagBadgeProps) => {
  const count = tags.length;

  return (
    <div className="flex w-fit items-center px-2 py-1 text-sm font-semibold border rounded-3xl">
      {tags.map(({ color }, index) => 
        <div className="w-[8px] h-[8px] rounded-sm mr-1" key={index} style={{ backgroundColor: color }} />
      )}
      {count > 1 ? `${count} tags` : tags[0]?.name}
    </div>
  )
}

export default TagBadge;
