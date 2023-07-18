'use client'
import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";
import {
	ChevronLeft,
	ChevronRight,
	Play,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
	function getCurrentTime() {
		const today = new Date();
		if (today.getHours() >= 18) {
			return "Night"
		} else if (today.getHours() >= 12) {
			return "Afternoon"
		}
		return "Morning"
	}

	return (
		<div className="min-h-screen flex flex-col absolute inset-0">
			<div className="flex flex-1">
				<Sidebar />
				<main className="flex-1 p-6 overflow-y-auto h-[calc(100vh-113px)]">
					<div className="flex items-center gap-4 max-sm:hidden">
						<button className="rounded-full bg-black/40 p-1">
							<ChevronLeft />
						</button>
						<button className="rounded-full bg-black/40 p-1">
							<ChevronRight />
						</button>
					</div>
					<h1 className="font-semibold text-3xl mt-10 max-sm:mt-2">
						Good {getCurrentTime()}
					</h1>
					<div className="grid grid-cols-3 gap-4 mt-4 max-md:grid-cols-2">
						<a href="#" className="bg-white/5 rounded-md gap-4 flex items-center overflow-hidden hover:bg-white/10 transition-colors group">
							<Image src="/album.jpg" width={104} height={104} alt="Exemplo de capa de album" />
							<strong>Album</strong>
							<button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
								<Play fill="bg-black" />
							</button>
						</a>
						<a href="#" className="bg-white/5 rounded gap-4 flex items-center overflow-hidden hover:bg-white/10 transition-colors group">
							<Image src="/album.jpg" width={104} height={104} alt="Exemplo de capa de album" />
							<strong>Album</strong>
							<button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
								<Play fill="bg-black" />
							</button>
						</a>
						<a href="#" className="bg-white/5 rounded gap-4 flex items-center overflow-hidden hover:bg-white/10 transition-colors group">
							<Image src="/album.jpg" width={104} height={104} alt="Exemplo de capa de album" />
							<strong>Album</strong>
							<button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
								<Play fill="bg-black" />
							</button>
						</a>
						<a href="#" className="bg-white/5 rounded gap-4 flex items-center overflow-hidden hover:bg-white/10 transition-colors group">
							<Image src="/album.jpg" width={104} height={104} alt="Exemplo de capa de album" />
							<strong>Album</strong>
							<button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
								<Play fill="bg-black" />
							</button>
						</a>
						<a href="#" className="bg-white/5 rounded gap-4 flex items-center overflow-hidden hover:bg-white/10 transition-colors group">
							<Image src="/album.jpg" width={104} height={104} alt="Exemplo de capa de album" />
							<strong>Album</strong>
							<button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
								<Play fill="bg-black" />
							</button>
						</a>
						<a href="#" className="bg-white/5 rounded gap-4 flex items-center overflow-hidden hover:bg-white/10 transition-colors group">
							<Image src="/album.jpg" width={104} height={104} alt="Exemplo de capa de album" />
							<strong>Album</strong>
							<button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
								<Play fill="bg-black" />
							</button>
						</a>
					</div>
					<h2 className="font-semibold text-2xl mt-10">
						Made for Vinicius Medeiros
					</h2>
					<div className="grid grid-cols-8 gap-4 mt-4">
						<a href="#" className="bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10">
							<Image src="/album.jpg" className="w-full" width={120} height={120} alt="Exemplo de capa de album" />
							<strong className="font-semibold">Daily Mix 1</strong>
							<span className="text-sm text-zinc-400">Artista 1, Artista 2, Artista 3 and more</span>
						</a>
						<a href="#" className="bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10">
							<Image src="/album.jpg" className="w-full" width={120} height={120} alt="Exemplo de capa de album" />
							<strong className="font-semibold">Daily Mix 1</strong>
							<span className="text-sm text-zinc-400">Artista 1, Artista 2, Artista 3 and more</span>
						</a>
						<a href="#" className="bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10">
							<Image src="/album.jpg" className="w-full" width={120} height={120} alt="Exemplo de capa de album" />
							<strong className="font-semibold">Daily Mix 1</strong>
							<span className="text-sm text-zinc-400">Artista 1, Artista 2, Artista 3 and more</span>
						</a>
						<a href="#" className="bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10">
							<Image src="/album.jpg" className="w-full" width={120} height={120} alt="Exemplo de capa de album" />
							<strong className="font-semibold">Daily Mix 1</strong>
							<span className="text-sm text-zinc-400">Artista 1, Artista 2, Artista 3 and more</span>
						</a>
						<a href="#" className="bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10">
							<Image src="/album.jpg" className="w-full" width={120} height={120} alt="Exemplo de capa de album" />
							<strong className="font-semibold">Daily Mix 1</strong>
							<span className="text-sm text-zinc-400">Artista 1, Artista 2, Artista 3 and more</span>
						</a>
					</div>
				</main>
			</div>
			<Footer />
		</div>
	);
}
