import { HomeIcon, Library, Search } from "lucide-react";

export function Sidebar() {
  return (
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
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">80s Japonese City Pop</a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Pfvr Não Eu Tenho Família</a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Minha playlist #9</a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Vibe Manhã 😴🥱</a>
      </nav>

    </aside>
  )
}