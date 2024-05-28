interface IconButtonProps {
  children?: React.ComponentType;
}

const IconButton = ({ children } : IconButtonProps) =>
    <button className="border border-gray-200 hover:bg-slate-300 bg-slate-100 rounded-md h-[24px] w-[24px] p-1 items-center">
      <div>{children}</div>
    </button>

export default IconButton;
