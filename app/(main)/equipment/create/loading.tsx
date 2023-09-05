export default function Loading() {
  return (
    <div className="w-full mt-4">
      <div className="h-6 w-48 bg-zinc-800 rounded-lg animate-pulse flex font-bold text-lg antialiased mb-2 items-center " />
      <div className="flex flex-col gap-2 w-full lg:w-96 mt-2">
        <div className="flex flex-col w-full mt-2">
          <div className="h-8 bg-zinc-900 animate-puls  rounded-none bg-transparent py-1 px-2" />
        </div>
        <div className="flex flex-col w-full mt-2">
          <div className="h-8 bg-zinc-900 animate-puls  rounded-none bg-transparent py-1 px-2" />
        </div>
        <div className="flex flex-col w-full mt-2">
          <div className="h-8 bg-zinc-900 animate-puls  rounded-none bg-transparent py-1 px-2" />
        </div>
        <div className="mt-4 h-8 animate-pulse flex text-lg font-bold mb-2 items-center bg-zinc-800 border border-white/20" />
      </div>
    </div>
  );
}
