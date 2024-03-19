import { Footer } from '@/components/Footer';
import { Main } from '@/components/Main';
import { SideBar } from '@/components/SideBar';

export default function Home() {
  return (
    <div className="bg-zinc-900">
      <div className="flex flex-1">
        <SideBar />
        <Main />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
