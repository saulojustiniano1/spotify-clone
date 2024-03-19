import {
  Expand,
  Heart,
  LaptopMinimal,
  ListVideo,
  Play,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume2,
} from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="flex justify-between bg-zinc-800 p-5">
      <div className="flex gap-4 justify-center items-center">
        <div>
          <Image
            src="/mini-music.png"
            width={58}
            height={58}
            alt="mini-music"
          />
        </div>
        <div className="flex justify-center place-items-center gap-4">
          <div>
            <p className="text-zinc-50 text-lg">I Didnt know</p>
            <p className="text-zinc-400">Curren$y</p>
          </div>
          <Heart className="text-zinc-50" />
        </div>
      </div>

      <div className="w-2/4">
        <div className="flex justify-center items-center gap-8">
          <button>
            <Shuffle className="text-green-500" />
          </button>
          <button>
            <SkipBack className="text-zinc-400" />
          </button>
          <button className="bg-zinc-50 font-bold rounded-full p-3">
            <Play className="text-zinc-950" />
          </button>
          <button>
            <SkipForward className="text-zinc-400" />
          </button>
          <button>
            <Repeat className="text-zinc-400" />
          </button>
        </div>

        <div className="flex justify-between items-center pt-4 text-zinc-400">
          <p>1:42</p>
          <div className="bg-zinc-400 w-4/5 h-2 rounded-full pr-72">
            <div className="bg-zinc-50 rounded-full h-2"></div>
          </div>
          <p>4:00</p>
        </div>
      </div>

      <div className="flex justify-center items-center gap-4 text-zinc-400">
        <button>
          <ListVideo />
        </button>
        <button>
          <LaptopMinimal />
        </button>
        <button>
          <Volume2 />
        </button>
        <div>
          <div className="bg-zinc-400 w-20 h-2 rounded-full pr-6">
            <div className="bg-zinc-50 rounded-full h-2"></div>
          </div>
        </div>
        <button>
          <Expand />
        </button>
      </div>
    </footer>
  );
}
