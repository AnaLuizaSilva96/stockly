import MenuItems from "./menu-item";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white">
      <div className="py-6 ps-8 text-2xl font-bold">
        <h1>STOCKLY</h1>
      </div>
      <div className="flex flex-col gap-2 p-2">
        <MenuItems />
      </div>
    </div>
  );
};

export default Sidebar;
