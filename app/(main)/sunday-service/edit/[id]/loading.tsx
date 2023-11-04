export default function Loading() {
  return (
    <div className="flex flex-col w-full">
      <div className="BACK flex items-center bg-secondary-200 h-6 w-20 animate-pulse rounded-md" />
      <div className="CREATE CARD h-[261px] mt-6 py-4 px-4 rounded-2xl shadow-md bg-white">
        <h1 className="text-3xl font-bold">Edit Sunday Service</h1>
        <div className="flex flex-col gap-2 w-full  mt-6">
          <div className="flex flex-row font-bold h-6 w-32 items-center bg-secondary-200 rounded-md" />
          <div className="NAME flex flex-col w-full ">
            <p className=" antialiased text-base text-secondary-600">Name</p>
            <div className="w-full h-[32px] bg-secondary-200 rounded-lg animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
