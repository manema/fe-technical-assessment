
const Sidebar = ({ children }) => {
  return (
    <aside className="h-full w-[240px] p-3 border-gray-200 border-r">
      <div className="flex items-center">
        <div className="w-[36px] h-[36px] bg-[--melrose] rounded-md" />
        <span className="font-bold pl-3">AirOps</span>
      </div>
      <button className="w-full text-sm bg-transparent text-bold-700 font-semibold py-1 px-4 my-2 border border-[--scorpion]-500 rounded-md hover:bg-gray-100">New +</button>
      {children}
    </aside>
  )
}

export default Sidebar;
