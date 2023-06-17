import Footer from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";
imimport { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2 } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">

        <Sidebar />

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
              <span className="text-sm text-zinc-400">Leat eq</span>
            </a>
            <a href="" className="bg-white/5 p-3 flex flex-col gap-1 rounded-md hover:bg-white/10">
              <Image src="/album_cover.jpg" className="w-full" width={120} height={120} alt="Album Cover" />
Footer />
    </div>
  );
}
