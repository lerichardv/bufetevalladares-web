"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Close dropdown on click outside
	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setIsDropdownOpen(false);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	// Close menus when pathname changes
	useEffect(() => {
		setIsDropdownOpen(false);
		setIsMobileMenuOpen(false);
	}, [pathname]);

	const navItems = [
		{ label: "Inicio", href: "/#inicio" },
		{ label: "Nosotros", href: "/#nosotros" },
		{ label: "Servicios", href: "/#servicios" },
		{ label: "Valores", href: "/#valores" },
		{ label: "Equipo", href: "/#equipo" },
	];

	const isHomeActive = pathname === "/";
	const isPerfilActive = pathname === "/perfil-profesional";
	const isArticulosActive = pathname === "/articulos";
	const isContactoActive = pathname === "/contacto";

	return (
		<div className="fixed top-0 left-0 w-full z-[9999] animate-slide-down">
			{/* Top bar info */}
			<div
				className={`w-full bg-[#1b1b3a] border-b border-brand-navy-light/40 px-6 hidden sm:block transition-all duration-500 ease-in-out ${isScrolled ? "max-h-0 py-0 border-b-0 opacity-0 pointer-events-none" : "max-h-12 py-2.5 opacity-100"
					}`}
			>
				<div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs text-zinc-300 font-light tracking-wide gap-2">
					<div className="flex items-center gap-6">
						<span className="flex items-center gap-1.5">
							<svg className="w-3.5 h-3.5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
							</svg>
							Torre Alianza Anexo 2, séptimo piso, local 710, Tegucigalpa, Honduras
						</span>
						<span className="flex items-center gap-1.5">
							<svg className="w-3.5 h-3.5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
							</svg>
							<a href="https://wa.me/50433494077" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors font-medium">+504 3349-4077</a>
						</span>
					</div>
					<div className="flex items-center gap-6">
						<span className="flex items-center gap-1.5">
							<svg className="w-3.5 h-3.5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
							Lunes a Viernes 8AM - 5PM | Sábados con Cita
						</span>
						<a
							href="https://wa.me/50433494077"
							target="_blank"
							rel="noopener noreferrer"
							className="text-brand-gold hover:text-brand-gold-light transition-colors font-medium border-l border-zinc-700 pl-6"
						>
							Contáctenos
						</a>
					</div>
				</div>
			</div>

			{/* Main Header navigation */}
			<header
				className={`w-full bg-[#1b1b3a]/90 backdrop-blur-md border-b border-brand-navy-light/30 transition-all duration-500 ease-in-out ${isScrolled ? "py-2 shadow-2xl shadow-brand-navy-dark/40" : "py-4.5"
					}`}
			>
				<div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
					<Link href="/" className="flex items-center gap-2">
						<img
							src="/images/bufete-logo-wide-gold.png"
							alt="Bufete y Notaría Valladares"
							className={`w-auto object-contain transition-all duration-500 ease-in-out cursor-pointer ${isScrolled ? "h-8 md:h-9" : "h-10 md:h-12"
								}`}
							fetchPriority="high"
						/>
					</Link>

					<nav className="hidden lg:flex items-center gap-8">
						{/* INICIO DROPDOWN */}
						<div
							className="relative py-2.5 my-[-10px] flex items-center"
							ref={dropdownRef}
							onMouseEnter={() => setIsDropdownOpen(true)}
							onMouseLeave={() => setIsDropdownOpen(false)}
						>
							<button
								onClick={() => setIsDropdownOpen(!isDropdownOpen)}
								className={`text-xs font-semibold tracking-widest uppercase transition-colors flex items-center gap-1 cursor-pointer outline-none ${isHomeActive ? "text-brand-gold" : "text-zinc-300 hover:text-brand-gold"
									}`}
							>
								Inicio
								<svg
									className={`w-3.5 h-3.5 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
								</svg>
							</button>
							{/* Dropdown Menu */}
							<div
								className={`absolute left-0 top-full pt-2 w-48 shadow-2xl transition-all duration-300 origin-top-left ${isDropdownOpen
									? "opacity-100 scale-100 pointer-events-auto translate-y-0"
									: "opacity-0 scale-95 pointer-events-none -translate-y-2"
									}`}
							>
								<div className="rounded-lg bg-[#1b1b3a]/95 backdrop-blur-md border border-brand-gold/20 overflow-hidden py-1">
									{navItems.map((item) => (
										<Link
											key={item.label}
											href={item.href}
											className="block px-4 py-2.5 text-xs font-medium text-zinc-300 hover:text-brand-gold hover:bg-brand-gold/5 transition-all duration-200 border-l-2 border-transparent hover:border-brand-gold"
										>
											{item.label}
										</Link>
									))}
								</div>
							</div>
						</div>

						<Link
							href="/perfil-profesional"
							className={`text-xs font-semibold tracking-widest uppercase transition-colors ${isPerfilActive ? "text-brand-gold" : "text-zinc-300 hover:text-brand-gold"
								}`}
						>
							Perfil Profesional
						</Link>

						<Link
							href="/articulos"
							className={`text-xs font-semibold tracking-widest uppercase transition-colors ${isArticulosActive ? "text-brand-gold" : "text-zinc-300 hover:text-brand-gold"
								}`}
						>
							Artículos
						</Link>

						<Link
							href="/contacto"
							className={`text-xs font-semibold tracking-widest uppercase transition-colors ${isContactoActive ? "text-brand-gold" : "text-zinc-300 hover:text-brand-gold"
								}`}
						>
							Contacto
						</Link>
					</nav>

					<div className="hidden lg:block">
						<a
							href="mailto:bufete_valladares@yahoo.com?subject=Solicitud%20de%20Cita%20%2F%20Consulta%20Legal&body=Deseo%20agendar%20una%20cita%20de%20asesor%C3%ADa%20legal."
							className={`inline-flex text-xs font-bold tracking-widest uppercase border border-brand-gold/30 bg-brand-gold/5 text-brand-gold hover:bg-brand-gold hover:text-brand-navy-dark rounded-lg transition-all duration-300 ${isScrolled ? "px-4.5 py-2.5" : "px-5 py-3"
								}`}
						>
							Agendar Consulta
						</a>
					</div>

					{/* Mobile Menu Toggle */}
					<button
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						className="lg:hidden text-zinc-300 hover:text-brand-gold focus:outline-none transition-colors cursor-pointer"
						aria-label="Toggle menu"
					>
						{isMobileMenuOpen ? (
							<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
							</svg>
						) : (
							<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
							</svg>
						)}
					</button>
				</div>

				{/* Mobile Navigation Drawer */}
				<div
					className={`lg:hidden fixed inset-x-0 top-[inherit] w-full bg-[#1b1b3a]/98 backdrop-blur-lg border-b border-brand-gold/10 shadow-2xl transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? "max-h-[85vh] py-6 opacity-100 visible" : "max-h-0 py-0 opacity-0 invisible"
						}`}
				>
					<div className="px-6 flex flex-col gap-5">
						<div className="space-y-2">
							<p className="text-[10px] font-bold tracking-widest text-brand-gold uppercase">Inicio Secciones</p>
							<div className="grid grid-cols-2 gap-2 pl-2">
								{navItems.map((item) => (
									<Link
										key={item.label}
										href={item.href}
										onClick={() => setIsMobileMenuOpen(false)}
										className="text-xs text-zinc-300 hover:text-brand-gold py-1.5 transition-colors"
									>
										{item.label}
									</Link>
								))}
							</div>
						</div>

						<div className="h-[1px] bg-brand-navy-light/40" />

						<Link
							href="/perfil-profesional"
							onClick={() => setIsMobileMenuOpen(false)}
							className={`text-xs font-semibold tracking-widest uppercase transition-colors ${isPerfilActive ? "text-brand-gold" : "text-zinc-300"
								}`}
						>
							Perfil Profesional
						</Link>

						<Link
							href="/articulos"
							onClick={() => setIsMobileMenuOpen(false)}
							className={`text-xs font-semibold tracking-widest uppercase transition-colors ${isArticulosActive ? "text-brand-gold" : "text-zinc-300"
								}`}
						>
							Artículos
						</Link>

						<Link
							href="/contacto"
							onClick={() => setIsMobileMenuOpen(false)}
							className={`text-xs font-semibold tracking-widest uppercase transition-colors ${isContactoActive ? "text-brand-gold" : "text-zinc-300"
								}`}
						>
							Contacto
						</Link>

						<div className="pt-2">
							<a
								href="mailto:bufete_valladares@yahoo.com?subject=Solicitud%20de%20Cita%20%2F%20Consulta%20Legal&body=Deseo%20agendar%20una%20cita%20de%20asesor%C3%ADa%20legal."
								className="w-full text-center block text-xs font-bold tracking-widest uppercase border border-brand-gold/30 bg-brand-gold/5 text-brand-gold hover:bg-brand-gold hover:text-brand-navy-dark rounded-lg py-3 transition-all duration-300"
							>
								Agendar Consulta
							</a>
						</div>
					</div>
				</div>
			</header>
		</div>
	);
}
