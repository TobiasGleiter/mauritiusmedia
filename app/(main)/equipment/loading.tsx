export default function Loading() {
  return (
    <div className="w-full mt-4">
      <div className="flex flex-col lg:flex-row align-middle gap-2 ">
        <div className="h-8 animate-pulse bg-zinc-900 w-full text-zinc-400 p-1 rounded-none flex lg:w-48 text-center border border-zinc-600" />
        <div className="h-8 animate-pulse flex flex-row w-full items-center border border-white/20 py-1 px-2" />
      </div>
      <div className="mt-6">
        <div className="h-8 w-32 rounded-xl animate-pulse flex text-lg font-bold mb-2 items-center bg-zinc-900" />
      </div>
    </div>
  );
}
