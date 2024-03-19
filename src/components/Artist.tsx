import { X } from 'lucide-react';
import Image from 'next/image';

type props = {
  nameImage: string;
  name: string;
  role: string;
};

export function Artist({ nameImage, name, role }: props) {
  return (
    <div>
      <div className="bg-zinc-800 w-48 h-60 rounded-lg">
        <div className="flex justify-end pr-4 pt-2">
          <div className="flex bg-zinc-950 rounded-full w-5 h-5 justify-center items-center">
            <X className="text-zinc-200 w-3 h-3" />
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src={`/${nameImage}.png`}
            width={150}
            height={150}
            alt={`Foto de perfil ${nameImage}`}
          />
        </div>
        <div className="pl-5">
          <p className="text-zinc-50 text-lg">{name}</p>
          <p className="text-zinc-400 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
}
