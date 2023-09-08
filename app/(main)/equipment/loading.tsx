export default function Loading() {
  return (
    <div className="w-full mt-0 mb-40">
      <div className="ACTIONS">
        <h1 className="text-3xl font-bold animate-pulse">Actions</h1>
        <div className="flex lg:flex-row md:flex-row flex-col mt-2 gap-1">
          <div className="animate-pulse h-[66px] bg-white py-2 px-4 rounded-2xl shadow-md lg:w-64 md:w-64 w-full border border-white hover:border-primary-500" />
          <div className="animate-pulse h-[66px] bg-white py-2 px-4 rounded-2xl shadow-md lg:w-64 md:w-64 w-full border border-white hover:border-primary-500" />
        </div>
      </div>
      <div className="EQUIPMENT mt-4 py-4 px-4 rounded-2xl shadow-md bg-white min-h-screen animate-pulse">
        <h1 className="text-3xl font-bold">Equipment</h1>
      </div>
    </div>
  );
}
