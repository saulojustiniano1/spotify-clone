import { ChevronDown, ChevronLeft, ChevronRight, Search } from 'lucide-react';
import Image from 'next/image';

export function HeaderMain() {
  return (
    <div className="flex pt-4 justify-between">
      <div className="flex">
        <div className="flex gap-2 px-2">
          <button className="bg-zinc-950 rounded-full text-zinc-300">
            <ChevronLeft />
          </button>
          <button className="bg-zinc-950 rounded-full text-zinc-300">
            <ChevronRight />
          </button>
        </div>
        <div className="bg-zinc-50 rounded-full px-12 py-1">
          <div className="flex text-zinc-600 justify-center items-center gap-1">
            <Search className="w-5 h-5" />
            <p className="text-xs">Artists, songs, or podcasts</p>
          </div>
        </div>
      </div>
      <div className="flex gap-2 justify-center items-center">
        <button>
          <Image
            src="/perfil.png"
            width={20}
            height={20}
            alt="Foto de perfil do Spotify"
          />
        </button>
        <div className="flex text-zinc-50 pr-4 text-sm justify-center items-center gap-3">
          Cody Fisher
          <button>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
