interface MenuButtonProps {
  label?: string,
  children?: React.ComponentType;
}

const MenuButton = ({ label, children } : MenuButtonProps) =>
    <button className="flex border border-gray-200 rounded-md h-[32px] p-2 items-center">
      <span className="font-semibold text-xs">{label}</span>
      <div>{children}</div>
    </button>

export default MenuButton;
