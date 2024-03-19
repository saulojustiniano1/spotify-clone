import { Home, Library, Search } from 'lucide-react';

export function SideBar() {
  return (
    <aside className="bg-zinc-950 w-56 px-4">
      <div className="py-4">
        <div className="hover:bg-zinc-800 hover:rounded-md hover:text-zinc-50 cursor-pointer">
          <button className="flex flex-1 items-center gap-3 pl-4 p-2 text-sm hover:text-zinc-50">
            <Home className="w-6 h-6 text-zinc-400" />
            <p className="text-zinc-300">Home</p>
          </button>
        </div>
        <div className="hover:bg-zinc-800 hover:rounded-md hover:text-zinc-50 cursor-pointer">
          <button className="flex items-center gap-3 pl-4 p-2 text-sm">
            <Search className="w-6 h-6 text-zinc-400" />
            <p className="text-zinc-300">Search</p>
          </button>
        </div>
        <div className="hover:bg-zinc-800 hover:rounded-md hover:text-zinc-50 cursor-pointer">
          <button className="flex items-center gap-3 pl-4 p-2 text-sm">
            <Library className="w-6 h-6 text-zinc-400" />
            <p className="text-zinc-300">Your Library</p>
          </button>
        </div>
      </div>
      <div className="border-t-2 flex flex-col pt-5 text-white">
        <a className="px-4 pt-1 text-zinc-300 hover:text-zinc-50" href="#">
          Ambient
        </a>
        <a className="px-4 pt-1 text-zinc-300 hover:text-zinc-50" href="#">
          Electronic
        </a>
        <a className="px-4 pt-1 text-zinc-300 hover:text-zinc-50" href="#">
          Blues
        </a>
        <a className="px-4 pt-1 text-zinc-300 hover:text-zinc-50" href="#">
          Acoustic
        </a>
        <a className="px-4 pt-1 text-zinc-300 hover:text-zinc-50" href="#">
          Children
        </a>
        <a className="px-4 pt-1 text-zinc-300 hover:text-zinc-50" href="#">
          Ambient
        </a>
        <a className="px-4 pt-1 text-zinc-300 hover:text-zinc-50" href="#">
          Fantasy
        </a>
        <a className="px-4 pt-1 text-zinc-300 hover:text-zinc-50" href="#">
          Funk
        </a>
      </div>
    </aside>
  );
}
