import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2 } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <nav className="space-y-5">
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <HomeIcon />
              Home
            </a>
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <Search />
              Search
            </a>
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <Library />
              Your Library
            </a>
          </nav>

          <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">METAL GUEAR RISING: REVENGEANCE</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">You Give Love A Bad Name</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Pop Internacional</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">80's Japonese City Pop</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Pfvr Não Eu Tenho Família</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Minha playlist #9</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Vibe Manhã 😴🥱</a>
          </nav>

        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-bold text-3xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a href="" className="bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/album_cover.jpg" width={104} height={104} alt="Album Cover" />
              <strong>Wasting Light</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="" className="bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/album_cover.jpg" width={104} height={104} alt="Album Cover" />
              <strong>Wasting Light</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="" className="bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/album_cover.jpg" width={104} height={104} alt="Album Cover" />
              <strong>Wasting Light</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="" className="bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/album_cover.jpg" width={104} height={104} alt="Album Cover" />
              <strong>Wasting Light</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="" className="bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/album_cover.jpg" width={104} height={104} alt="Album Cover" />
              <strong>Wasting Light</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="" className="bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/album_cover.jpg" width={104} height={104} alt="Album Cover" />
              <strong>Wasting Light</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>

          <h2 className="font-bold text-2xl mt-10">Tocado recentemente</h2>

          <div className="grid grid-cols-6 gap-4 mt-4">
            <a href="" className="bg-white/5 p-3 flex flex-col gap-1 rounded-md hover:bg-white/10">
              <Image src="/album_cover.jpg" className="w-full" width={120} height={120} alt="Album Cover" />
              <strong className="font-semibold">my life is a movie</strong>
              <span className="text-sm text-zinc-400">every main character needs...</span>
            </a>
            <a href="" className="bg-white/5 p-3 flex flex-col gap-1 rounded-md hover:bg-white/10">
              <Image src="/album_cover.jpg" className="w-full" width={120} height={120} alt="Album Cover" />
              <strong className="font-semibold">Dive Time</strong>
              <span className="text-sm text-zinc-400">De Kastanha</span>
            </a>
            <a href="" className="bg-white/5 p-3 flex flex-col gap-1 rounded-md hover:bg-white/10">
              <Image src="/album_cover.jpg" className="w-full" width={120} height={120} alt="Album Cover" />
              <strong className="font-semibold">Aviancloud</strong>
              <span className="text-sm text-zinc-400">Minhas favoritas do Aviancloud</span>
            </a>
            <a href="" className="bg-white/5 p-3 flex flex-col gap-1 rounded-md hover:bg-white/10">
              <Image src="/album_cover.jpg" className="w-full" width={120} height={120} alt="Album Cover" />
              <strong className="font-semibold">Tokyo</strong>
              <span className="text-sm text-zinc-400">Leat'eq</span>
            </a>
            <a href="" className="bg-white/5 p-3 flex flex-col gap-1 rounded-md hover:bg-white/10">
              <Image src="/album_cover.jpg" className="w-full" width={120} height={120} alt="Album Cover" />
              <strong className="font-semibold">Vitroles</strong>
              <span className="text-sm text-zinc-400">Artista</span>
            </a>
          </div>
        </main>
      </div>

      <footer className="bg-zinc-900 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="/album_cover.jpg" width={56} height={56} alt="Album Cover" />
          <div className="flex flex-col">
            <strong className="text-normal">Rope</strong>
            <span className="text-xs text-zinc-400">Foo Fighters</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-6">
            <Shuffle size={20} className="text-zinc-200" />
            <SkipBack size={20} className="text-zinc-200" />
            <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
              <Play />
            </button>
            <SkipForward size={20} className="text-zinc-200" />
            <Repeat size={20} className="text-zinc-200" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400">0:31</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
            </div>
            <span className="text-xs text-zinc-400">2:14</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Mic2 size={20} />
          <LayoutList size={20} />
          <Laptop2 size={20} />
          <div className="flex items-center gap-2">
            <Volume size={20} />
            <div className="h-1 rounded-full w-24 bg-zinc-600">
              <div className="bg-zinc-200 w-10 h-1 rounded-full"></div>
            </div>
          </div>
          <Maximize2 size={20} />
        </div>
      </footer>
    </div>
  );
}
