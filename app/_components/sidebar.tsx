const Sidebar = () => {
  return (
    <div className="w-64 bg-white ">
      <div className="font-bold text-2xl py-6 ps-8">
        <h1>STOCKLY</h1>
      </div>
      <div className="flex flex-col gap-2 p-2">
        <button className="px-6 py-3">Dashboard</button>
        <button className="px-6 py-3">Products</button>
        <button className="px-6 py-3">Sales</button>
      </div>
    </div>
  );
};

export default Sidebar;
