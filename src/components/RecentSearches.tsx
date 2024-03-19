import { Artist } from '@/components/Artist';

export function RecentSearches() {
  return (
    <div>
      <div className="flex justify-between items-center text-zinc-50 pt-12 px-8">
        <h1 className="text-3xl">Recent Searches</h1>
        <p className="text-xs">SEE ALL</p>
      </div>
      <div className="flex justify-center gap-3 pt-5">
        <Artist nameImage="beyonce" name="Beyonce" role="Artist" />
        <Artist nameImage="cardi-b" name="Cardi B" role="Artist" />
        <Artist nameImage="diana-ross" name="Diana Ross" role="Artist" />
        <Artist nameImage="usher" name="Usher" role="Artist" />
        <Artist nameImage="charlie-puth" name="Charlie Puth" role="Artist" />
        <Artist nameImage="marvin-gaye" name="Marvin Gaye" role="Artist" />
      </div>
    </div>
  );
}
