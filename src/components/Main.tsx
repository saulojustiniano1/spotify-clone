import { HeaderMain } from '@/components/HeaderMain';
import { RecentSearches } from '@/components/RecentSearches';

export function Main() {
  return (
    <main className="h-screen w-screen">
      <HeaderMain />
      <RecentSearches />
    </main>
  );
}
