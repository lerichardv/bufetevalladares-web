"use client";

import { useState } from "react";
import Link from "next/link";
import Breadcrumbs from "./Breadcrumbs";

export default function ArticulosClient() {
	const [selectedCategory, setSelectedCategory] = useState("all");

	const categories = [
		{ id: "all", name: "Todos" },
		{ id: "notarial", name: "Derecho Notarial" },
		{ id: "laboral", name: "Derecho Laboral" },
		{ id: "corporativo", name: "Derecho Corporativo" },
	];

	const articles = [
		{
			title: "El Rol de la Función Notarial en el Clima de Negocios en Honduras",
			excerpt: "La certeza jurídica y la fe pública como pilares fundamentales para la inversión extranjera directa y la formalización de sociedades mercantiles.",
			date: "Julio 12, 2026",
			readTime: "5 min de lectura",
			category: "notarial",
			icon: (
				<svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
				</svg>
			)
		},
		{
			title: "La Protección del Empleador ante Demandas Laborales Infundadas",
			excerpt: "Análisis de la experiencia defensiva del patrono, la correcta documentación de despidos justificados y actas de descargo ante la Secretaría de Trabajo.",
			date: "Junio 28, 2026",
			readTime: "7 min de lectura",
			category: "laboral",
			icon: (
				<svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
				</svg>
			)
		},
		{
			title: "Estructuración de Fideicomisos de Garantía y Administración Corporativa",
			excerpt: "Cómo resguardar activos patrimoniales, garantizar financiamientos y estructurar vehículos corporativos seguros bajo la legislación hondureña.",
			date: "Mayo 15, 2026",
			readTime: "6 min de lectura",
			category: "corporativo",
			icon: (
				<svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
				</svg>
			)
		},
		{
			title: "Los Regímenes de Propiedad Horizontal en el Desarrollo Urbano de Tegucigalpa",
			excerpt: "Claves legales, trámites notariales y requisitos administrativos obligatorios para la constitución exitosa de condominios residenciales y comerciales.",
			date: "Abril 02, 2026",
			readTime: "8 min de lectura",
			category: "notarial",
			icon: (
				<svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
				</svg>
			)
		}
	];

	const filteredArticles = selectedCategory === "all"
		? articles
		: articles.filter(a => a.category === selectedCategory);

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
						<article
							key={index}
							className="group bg-[#1a1a35]/30 border border-brand-navy-light/30 rounded-2xl p-8 hover:border-brand-gold/30 hover:bg-[#1a1a35]/50 transition-all duration-300 flex flex-col justify-between shadow-xl relative overflow-hidden"
						>
							<div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-2xl pointer-events-none group-hover:bg-brand-gold/10 transition-all duration-500" />

							<div>
								<div className="flex items-center justify-between mb-6">
									<div className="w-10 h-10 rounded-lg bg-brand-navy-medium border border-brand-navy-light/50 flex items-center justify-center">
										{article.icon}
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
						</article>
					))}
				</div>

			</div>
		</div>
	);
}
