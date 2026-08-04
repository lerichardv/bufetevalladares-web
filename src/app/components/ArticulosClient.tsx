"use client";

import { useState } from "react";
import Link from "next/link";
import Breadcrumbs from "./Breadcrumbs";

export interface ListingArticle {
	title: string;
	excerpt: string;
	date: string;
	readTime: string;
	category: string;
	slug: string;
}

interface ArticulosClientProps {
	initialArticles: ListingArticle[];
}

function getCategoryIcon(category: string) {
	switch (category) {
		case "notarial":
			return (
				<svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
				</svg>
			);
		case "laboral":
			return (
				<svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
				</svg>
			);
		case "corporativo":
			return (
				<svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
				</svg>
			);
		default:
			// Default icon for other categories e.g. news / general
			return (
				<svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 4h2a2 2 0 012 2v3a2 2 0 01-2 2h-2m-2-5v-1a3 3 0 00-3-3H9m1.5 12.5A3 3 0 118 13.5m0 0l-3 3" />
				</svg>
			);
	}
}

export default function ArticulosClient({ initialArticles }: ArticulosClientProps) {
	const [selectedCategory, setSelectedCategory] = useState("all");

	const categories = [
		{ id: "all", name: "Todos" },
		{ id: "notarial", name: "Derecho Notarial" },
		{ id: "laboral", name: "Derecho Laboral" },
		{ id: "corporativo", name: "Derecho Corporativo" },
	];

	const filteredArticles = selectedCategory === "all"
		? initialArticles
		: initialArticles.filter((a) => a.category === selectedCategory);

	return (
		<div className="bg-brand-navy-dark min-h-screen text-zinc-100">
			{/* Background glow effects */}
			<div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-[#1b1b3a]/30 to-transparent pointer-events-none z-0" />
			<div className="absolute top-64 right-1/4 w-[300px] h-[300px] rounded-full bg-[#bab668]/5 blur-[120px] pointer-events-none z-0" />
			<div className="absolute top-96 left-1/4 w-[350px] h-[350px] rounded-full bg-[#1b1b3a]/25 blur-[150px] pointer-events-none z-0" />

			<div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 md:pt-40 pb-24">

				{/* Breadcrumb & Intro */}
				<div className="mb-12">
					<Breadcrumbs items={[{ label: "Artículos" }]} />

					<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
						<div className="lg:col-span-8">
							<span className="text-xs font-bold tracking-widest text-brand-gold uppercase block mb-2">
								Opinión Legal & Análisis
							</span>
							<h1 className="text-4xl md:text-5xl font-serif text-white font-normal leading-tight">
								Artículos Escritos
							</h1>
							<div className="w-20 h-[2px] bg-brand-gold mt-4" />
						</div>

						<div className="lg:col-span-4 text-xs text-zinc-400 font-mono text-right lg:block hidden">
							DIVULGACIÓN E INVESTIGACIÓN JURÍDICA
						</div>
					</div>
				</div>

				{/* Filter Tabs */}
				<div className="flex flex-wrap gap-2 mb-12 border-b border-brand-navy-light/20 pb-6">
					{categories.map((cat) => (
						<button
							key={cat.id}
							onClick={() => setSelectedCategory(cat.id)}
							className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase rounded-lg transition-all duration-300 border cursor-pointer ${selectedCategory === cat.id
									? "bg-brand-gold text-brand-navy-dark border-brand-gold shadow-lg"
									: "bg-brand-navy-medium/40 text-zinc-400 border-brand-navy-light/40 hover:text-white hover:border-zinc-700"
								}`}
						>
							{cat.name}
						</button>
					))}
				</div>

				{/* Articles Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{filteredArticles.map((article, index) => (
						<Link
							key={index}
							href={`/articulos/${article.slug}`}
							className="group bg-[#1a1a35]/30 border border-brand-navy-light/30 rounded-2xl p-8 hover:border-brand-gold/30 hover:bg-[#1a1a35]/50 transition-all duration-300 flex flex-col justify-between shadow-xl relative overflow-hidden cursor-pointer"
						>
							<div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-2xl pointer-events-none group-hover:bg-brand-gold/10 transition-all duration-500" />

							<div>
								<div className="flex items-center justify-between mb-6">
									<div className="w-10 h-10 rounded-lg bg-brand-navy-medium border border-brand-navy-light/50 flex items-center justify-center">
										{getCategoryIcon(article.category)}
									</div>
									<span className="text-[10px] font-mono tracking-wider text-brand-gold/80 bg-brand-gold/5 border border-brand-gold/10 px-2.5 py-1 rounded-md uppercase">
										{article.category}
									</span>
								</div>

								<h2 className="text-xl md:text-2xl font-serif text-white group-hover:text-brand-gold transition-colors duration-300 leading-tight mb-4">
									{article.title}
								</h2>

								<p className="text-zinc-400 text-xs leading-relaxed font-light mb-6">
									{article.excerpt}
								</p>
							</div>

							<div className="pt-6 border-t border-brand-navy-light/20 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
								<span>{article.date}</span>
								<span className="flex items-center gap-1">
									<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
									{article.readTime}
								</span>
							</div>
						</Link>
					))}
				</div>

			</div>
		</div>
	);
}
