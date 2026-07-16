"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ConsultationForm from "./ConsultationForm";

export default function HomeClient() {
	const containerRef = useRef<HTMLDivElement>(null);
	const [isMounted, setIsMounted] = useState(false);

	// Hero elements
	const heroBgRef = useRef<HTMLVideoElement>(null);
	const logoRef = useRef<HTMLDivElement>(null);
	const heroTitleRef = useRef<HTMLHeadingElement>(null);
	const heroSubtitleRef = useRef<HTMLParagraphElement>(null);
	const heroCtaRef = useRef<HTMLDivElement>(null);
	const heroScalesContainerRef = useRef<HTMLDivElement>(null);

	// Interactive mouse tracking for hero scales
	const leftPanRef = useRef<SVGGElement>(null);

	useEffect(() => {
		setIsMounted(true);

		// Dynamically inject Twitter script on mount
		const script = document.createElement("script");
		script.src = "https://platform.twitter.com/widgets.js";
		script.async = true;
		script.charset = "utf-8";
		document.body.appendChild(script);
	}, []);
	const rightPanRef = useRef<SVGGElement>(null);
	const beamRef = useRef<SVGGElement>(null);

	useEffect(() => {
		if (typeof window !== "undefined") {
			gsap.registerPlugin(ScrollTrigger);

			const ctx = gsap.context(() => {
				// --- 1. HERO ENTRANCE ANIMATIONS ---
				const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

				// Background zoom in first
				tl.fromTo(
					heroBgRef.current,
					{ opacity: 0, scale: 1.25 },
					{ opacity: 1, scale: 1, duration: 2.2, ease: "power2.out" }
				);

				tl.fromTo(
					logoRef.current,
					{ opacity: 0, y: -20 },
					{ opacity: 1, y: 0, duration: 1.0 },
					"-=1.8"
				);

				tl.fromTo(
					heroTitleRef.current,
					{ opacity: 0, y: 35 },
					{ opacity: 1, y: 0, duration: 1.2 },
					"-=1.5"
				);

				tl.fromTo(
					heroSubtitleRef.current,
					{ opacity: 0, y: 25 },
					{ opacity: 1, y: 0, duration: 1.2 },
					"-=1.3"
				);

				tl.fromTo(
					heroCtaRef.current,
					{ opacity: 0, y: 20 },
					{ opacity: 1, y: 0, duration: 1.0 },
					"-=1.1"
				);

				tl.fromTo(
					heroScalesContainerRef.current,
					{ opacity: 0, scale: 0.9, rotateY: -15 },
					{ opacity: 1, scale: 1, rotateY: 0, duration: 1.5 },
					"-=1.2"
				);

				// Ambients pulsing glow
				gsap.to(".ambient-glow-1", {
					x: "30px",
					y: "30px",
					duration: 8,
					repeat: -1,
					yoyo: true,
					ease: "sine.inOut"
				});
				gsap.to(".ambient-glow-2", {
					x: "-40px",
					y: "20px",
					duration: 10,
					repeat: -1,
					yoyo: true,
					ease: "sine.inOut"
				});

				// --- 2. SCROLL TRIGGER ANIMATIONS ---

				// Counter Odometer Numbers
				const counters = document.querySelectorAll(".counter-number");
				counters.forEach((counter) => {
					const target = parseInt(counter.getAttribute("data-target") || "0", 10);
					gsap.fromTo(
						counter,
						{ textContent: "0" },
						{
							textContent: target,
							duration: 2,
							ease: "power2.out",
							snap: { textContent: 1 },
							scrollTrigger: {
								trigger: counter,
								start: "top 85%",
								toggleActions: "restart none none reset",
							}
						}
					);
				});

				// Feature cards entrance
				gsap.fromTo(
					".gsap-feature-card",
					{ opacity: 0, y: 50 },
					{
						opacity: 1,
						y: 0,
						duration: 1.0,
						stagger: 0.2,
						ease: "power3.out",
						scrollTrigger: {
							trigger: ".gsap-features-section",
							start: "top 80%",
							toggleActions: "play reverse play reverse"
						}
					}
				);

				// Philosophy section content reveal
				gsap.fromTo(
					".gsap-philosophy-text",
					{ opacity: 0, x: -50 },
					{
						opacity: 1,
						x: 0,
						duration: 1.2,
						ease: "power3.out",
						scrollTrigger: {
							trigger: ".gsap-philosophy-section",
							start: "top 75%",
							toggleActions: "play reverse play reverse"
						}
					}
				);

				gsap.fromTo(
					".gsap-mission-card",
					{ opacity: 0, x: 50 },
					{
						opacity: 1,
						x: 0,
						duration: 1.2,
						ease: "power3.out",
						scrollTrigger: {
							trigger: ".gsap-philosophy-section",
							start: "top 75%",
							toggleActions: "play reverse play reverse"
						}
					}
				);

				// Detailed service cards reveal
				gsap.fromTo(
					".gsap-service-card",
					{ opacity: 0, y: 60 },
					{
						opacity: 1,
						y: 0,
						duration: 1.0,
						stagger: 0.25,
						ease: "power3.out",
						scrollTrigger: {
							trigger: ".gsap-services-breakdown",
							start: "top 75%",
							toggleActions: "play reverse play reverse"
						}
					}
				);

				// Values cards reveal
				gsap.fromTo(
					".gsap-value-card",
					{ opacity: 0, scale: 0.9 },
					{
						opacity: 1,
						scale: 1,
						duration: 0.8,
						stagger: 0.15,
						ease: "back.out(1.2)",
						scrollTrigger: {
							trigger: ".gsap-values-section",
							start: "top 75%",
							toggleActions: "play reverse play reverse"
						}
					}
				);

				// Team members reveal
				gsap.fromTo(
					".gsap-team-card",
					{ opacity: 0, y: 40 },
					{
						opacity: 1,
						y: 0,
						duration: 1.0,
						stagger: 0.2,
						ease: "power3.out",
						scrollTrigger: {
							trigger: ".gsap-team-section",
							start: "top 75%",
							toggleActions: "play reverse play reverse"
						}
					}
				);

				// Social Feeds container reveal
				gsap.fromTo(
					".gsap-social-panel",
					{ opacity: 0, y: 30 },
					{
						opacity: 1,
						y: 0,
						duration: 1.2,
						stagger: 0.3,
						ease: "power3.out",
						scrollTrigger: {
							trigger: ".gsap-social-section",
							start: "top 80%",
							toggleActions: "play reverse play reverse"
						}
					}
				);

				// Contact Section elements
				gsap.fromTo(
					".gsap-contact-info",
					{ opacity: 0, x: -30 },
					{
						opacity: 1,
						x: 0,
						duration: 1.0,
						ease: "power2.out",
						scrollTrigger: {
							trigger: ".gsap-contact-section",
							start: "top 75%",
							toggleActions: "play reverse play reverse"
						}
					}
				);
				gsap.fromTo(
					".gsap-contact-form",
					{ opacity: 0, x: 30 },
					{
						opacity: 1,
						x: 0,
						duration: 1.0,
						ease: "power2.out",
						scrollTrigger: {
							trigger: ".gsap-contact-section",
							start: "top 75%",
							toggleActions: "play reverse play reverse"
						}
					}
				);

			}, containerRef);

			// --- 3. SCALES INTERACTIVE MOUSE ROTATION ---
			const handleMouseMove = (e: MouseEvent) => {
				const { clientX, clientY } = e;
				const width = window.innerWidth;
				const height = window.innerHeight;

				// Calculate factor from -1 to 1 based on cursor position
				const xFactor = (clientX / width) * 2 - 1;
				const yFactor = (clientY / height) * 2 - 1;

				// Animate the beam rotation
				gsap.to(beamRef.current, {
					rotate: xFactor * 8 * -1, // rotate beam up to 8 degrees
					transformOrigin: "center center",
					duration: 0.6,
					ease: "power2.out"
				});

				// Translate the left pan down and right pan up depending on the rotation angle
				const angle = xFactor * 8 * (Math.PI / 180);
				const radius = 140; // half beam length approx
				const yOffset = radius * Math.sin(angle);

				gsap.to(leftPanRef.current, {
					y: yOffset,
					x: radius * (1 - Math.cos(angle)),
					duration: 0.6,
					ease: "power2.out"
				});

				gsap.to(rightPanRef.current, {
					y: -yOffset,
					x: -radius * (1 - Math.cos(angle)),
					duration: 0.6,
					ease: "power2.out"
				});
			};

			window.addEventListener("mousemove", handleMouseMove);

			return () => {
				ctx.revert();
				window.removeEventListener("mousemove", handleMouseMove);
			};
		}
	}, []);

	return (
		<div ref={containerRef} className="min-h-screen flex flex-col justify-between selection:bg-brand-gold/30 selection:text-brand-gold-light bg-brand-navy-dark text-zinc-100">
			{/* Main Content */}
			<main className="flex-1 overflow-x-hidden pt-20 sm:pt-32">

				{/* HERO SECTION */}
				<section
					id="inicio"
					className="relative min-h-[85vh] flex items-center justify-center py-20 overflow-hidden bg-gradient-to-b from-brand-navy-dark via-[#090918] to-brand-navy-dark"
				>
					{/* Background video overlay */}
					<video
						ref={heroBgRef}
						autoPlay
						loop
						muted
						playsInline
						className="absolute inset-0 w-full h-full object-cover opacity-[0.7] brightness-[0.7] saturate-[0.8] mix-blend-overlay pointer-events-none"
					>
						<source src="/video/bg.mp4" type="video/mp4" />
					</video>

					{/* Ambient Glows */}
					<div className="ambient-glow-1 absolute -top-40 -left-40 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl opacity-30 pointer-events-none" />
					<div className="ambient-glow-2 absolute top-1/2 -right-40 w-96 h-96 bg-brand-navy-light/10 rounded-full blur-3xl opacity-30 pointer-events-none" />

					<div className="relative max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

						{/* Left Column Content */}
						<div className="lg:col-span-7 space-y-8 text-center lg:text-left">
							<div ref={logoRef} className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full border border-brand-gold/20 bg-brand-gold/5 text-brand-gold text-xs font-semibold uppercase tracking-widest mx-auto lg:mx-0">
								<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
									<path fillRule="evenodd" d="M6.267 3.455a.75.75 0 00-.708-.523H4.5a.75.75 0 00-.75.75v3a.75.75 0 00.75.75h1.06a.75.75 0 00.708-.523L6.5 6.5h3v3h-3a.75.75 0 00-.75.75v1.06a.75.75 0 00.523.708l.412.137-.412.138a.75.75 0 00-.523.708v1.06a.75.75 0 00.75.75h3v3h-3a.75.75 0 00-.75.75v1.06a.75.75 0 00.523.708l.412.137A1.5 1.5 0 008.25 20h3.5a1.5 1.5 0 001.463-1.137l.412-1.37a.75.75 0 00-.523-.708v-1.06a.75.75 0 00.75-.75h3v-3h-3a.75.75 0 00-.75-.75v-1.06a.75.75 0 00.523-.708l.412-.138-.412-.137A.75.75 0 0013.5 10.25v-1.06a.75.75 0 00-.75-.75h-3v-3h3a.75.75 0 00.75-.75V3.682a.75.75 0 00-.75-.75h-1.06a.75.75 0 00-.708.523L11.5 4.5h-3L8.267 3.455z" clipRule="evenodd" />
								</svg>
								Bufete Legal y Notarial • 40+ Años de Excelencia
							</div>

							<h1 ref={heroTitleRef} className="text-4xl sm:text-4xl md:text-6xl font-serif text-white tracking-tight leading-[1.25] font-bold">
								Servicios Legales, Notariales <br className="hidden sm:inline" />
								y Administrativos de la <br className="hidden sm:inline" />
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold-light via-brand-gold to-brand-gold-dark text-glow">
									Más Alta Calidad
								</span>
							</h1>

							<p ref={heroSubtitleRef} className="text-zinc-300 text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
								Somos un Bufete de reconocida honorabilidad en Tegucigalpa, Honduras. Nos caracterizamos por actuar con total transparencia, ética jurídica y responsabilidad social.
							</p>

							<div ref={heroCtaRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
								<a
									href="mailto:bufete_valladares@yahoo.com?subject=Solicitud%20de%20Cita%20%2F%20Consulta%20Legal&body=Deseo%20agendar%20una%20cita%20de%20asesor%C3%ADa%20legal."
									className="px-8 py-4.5 bg-gradient-to-r from-brand-gold-dark via-brand-gold to-brand-gold-light hover:brightness-110 text-brand-navy-dark font-bold rounded-lg shadow-lg shadow-brand-gold/10 hover:shadow-brand-gold/25 transition-all duration-300 text-center tracking-wider text-sm uppercase"
								>
									Agendar Cita en Línea
								</a>
								<a
									href="#servicios"
									className="px-8 py-4.5 border border-brand-navy-light hover:border-brand-gold bg-brand-navy-medium/40 text-zinc-300 hover:text-white rounded-lg transition-all duration-300 text-center tracking-wider text-sm uppercase"
								>
									Nuestros Servicios
								</a>
							</div>
						</div>

						{/* Right Column: Interactive vector Scales of Justice */}
						<div ref={heroScalesContainerRef} className="lg:col-span-5 relative w-full flex justify-center perspective-[1000px] select-none">
							<div className="relative w-80 h-96 md:w-[380px] md:h-[440px] flex items-center justify-center overflow-hidden">

								{/* SVG SCALE OF JUSTICE */}
								<svg
									viewBox="0 0 400 450"
									className="w-full h-full p-6 text-brand-gold"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
								>
									{/* Base / Pedestal */}
									<path d="M120 390 L280 390 M140 390 L140 370 L260 370 L260 390 Z" strokeWidth="6" strokeLinecap="round" />
									<path d="M165 370 L165 350 L235 350 L235 370 Z" strokeWidth="4" />

									{/* Central Pillar */}
									<line x1="200" y1="350" x2="200" y2="100" strokeWidth="8" strokeLinecap="round" />
									<circle cx="200" cy="85" r="15" strokeWidth="5" fill="#0c0c1e" />

									{/* Beam / Arm (We will apply GSAP rotation to this group) */}
									<g ref={beamRef}>
										<line x1="60" y1="130" x2="340" y2="130" strokeWidth="8" strokeLinecap="round" />
										{/* Hanger connectors */}
										<circle cx="60" cy="130" r="4" fill="currentColor" />
										<circle cx="340" cy="130" r="4" fill="currentColor" />
										<circle cx="200" cy="130" r="6" fill="#0c0c1e" strokeWidth="4" />
									</g>

									{/* Left Pan Group (Tied to GSAP motion) */}
									<g ref={leftPanRef}>
										{/* Hanging chains */}
										<line x1="60" y1="130" x2="30" y2="240" strokeWidth="2" />
										<line x1="60" y1="130" x2="90" y2="240" strokeWidth="2" />
										{/* Left Scale Pan */}
										<path d="M20 240 L100 240 C100 270 20 270 20 240 Z" strokeWidth="4" fill="currentColor" fillOpacity="0.05" />
										<line x1="60" y1="240" x2="60" y2="252" strokeWidth="3" />
									</g>

									{/* Right Pan Group (Tied to GSAP motion) */}
									<g ref={rightPanRef}>
										{/* Hanging chains */}
										<line x1="340" y1="130" x2="310" y2="240" strokeWidth="2" />
										<line x1="340" y1="130" x2="370" y2="240" strokeWidth="2" />
										{/* Right Scale Pan */}
										<path d="M300 240 L380 240 C380 270 300 270 300 240 Z" strokeWidth="4" fill="currentColor" fillOpacity="0.05" />
										<line x1="340" y1="240" x2="340" y2="252" strokeWidth="3" />
									</g>
								</svg>

								{/* Subtext info */}
								<div className="absolute bottom-6 left-6 right-6 text-center">
									<span className="text-[10px] text-brand-gold/60 tracking-widest uppercase font-semibold">Iustitia, Veritas, Probitas</span>
								</div>
							</div>
						</div>

					</div>
				</section>

				{/* TRUST STATISTICS COUNTERS */}
				<section className="bg-brand-navy-medium border-y border-brand-navy-light/40 py-16">
					<div className="max-w-7xl mx-auto px-6">
						<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">

							<div className="space-y-2">
								<div className="text-4xl md:text-5xl font-serif font-bold text-brand-gold leading-none">
									<span className="counter-number" data-target="40">0</span>+
								</div>
								<p className="text-xs text-zinc-400 uppercase tracking-widest font-semibold mt-1">Años Experiencia Legal</p>
							</div>

							<div className="space-y-2">
								<div className="text-4xl md:text-5xl font-serif font-bold text-brand-gold leading-none">
									<span className="counter-number" data-target="30">0</span>+
								</div>
								<p className="text-xs text-zinc-400 uppercase tracking-widest font-semibold mt-1">Años Experiencia Notarial</p>
							</div>

							<div className="space-y-2">
								<div className="text-4xl md:text-5xl font-serif font-bold text-brand-gold leading-none">
									<span className="counter-number" data-target="40">0</span>+
								</div>
								<p className="text-xs text-zinc-400 uppercase tracking-widest font-semibold mt-1">Años Gestión Administrativa</p>
							</div>

							<div className="space-y-2">
								<div className="text-4xl md:text-5xl font-serif font-bold text-brand-gold leading-none">
									<span className="counter-number" data-target="40">0</span>+
								</div>
								<p className="text-xs text-zinc-400 uppercase tracking-widest font-semibold mt-1">Años Trayectoria Laboral</p>
							</div>

						</div>
					</div>
				</section>

				{/* INTRODUCTORY BRAND BANNER */}
				<section className="py-24 bg-brand-navy-dark relative gsap-features-section">
					<div className="max-w-7xl mx-auto px-6 relative">

						<div className="text-center space-y-4 mb-16">
							<span className="text-xs font-bold tracking-widest text-brand-gold uppercase">Bufete y Notaría Valladares</span>
							<h2 className="text-3xl md:text-4.5xl font-serif text-white max-w-xl mx-auto leading-tight">
								Nuestros Pilares Operativos
							</h2>
							<div className="w-16 h-[2px] bg-brand-gold mx-auto mt-4" />
						</div>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

							{/* Pillar 1 */}
							<div className="gsap-feature-card bg-brand-navy-medium/40 border border-brand-navy-light/60 p-8 rounded-2xl flex flex-col items-center text-center space-y-6 gold-border-glow">
								<div className="w-20 h-20 rounded-2xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold">
									{/* Balance Scale SVG */}
									<svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
									</svg>
								</div>
								<div className="space-y-3">
									<span className="text-xs md:text-sm text-brand-gold font-semibold uppercase tracking-widest">Área Civil & Laboral</span>
									<h3 className="text-2xl md:text-3xl font-serif text-white font-medium">Servicios <br /> Legales</h3>
								</div>
							</div>

							{/* Pillar 2 */}
							<div className="gsap-feature-card bg-brand-navy-medium/40 border border-brand-navy-light/60 p-8 rounded-2xl flex flex-col items-center text-center space-y-6 gold-border-glow">
								<div className="w-20 h-20 rounded-2xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold">
									{/* Quill SVG */}
									<svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
									</svg>
								</div>
								<div className="space-y-3">
									<span className="text-xs md:text-sm text-brand-gold font-semibold uppercase tracking-widest">Seguridad y Fe Pública</span>
									<h3 className="text-2xl md:text-3xl font-serif text-white font-medium">Servicios <br /> Notariales</h3>
								</div>
							</div>

							{/* Pillar 3 */}
							<div className="gsap-feature-card bg-brand-navy-medium/40 border border-brand-navy-light/60 p-8 rounded-2xl flex flex-col items-center text-center space-y-6 gold-border-glow">
								<div className="w-20 h-20 rounded-2xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold">
									{/* Folder SVG */}
									<svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
									</svg>
								</div>
								<div className="space-y-3">
									<span className="text-xs md:text-sm text-brand-gold font-semibold uppercase tracking-widest">Trámites y Permisos</span>
									<h3 className="text-2xl md:text-3xl font-serif text-white font-medium">Servicios <br /> Administrativos</h3>
								</div>
							</div>

						</div>
					</div>
				</section>

				{/* PHILOSOPHY & ABOUT US */}
				<section id="nosotros" className="py-24 bg-white border-y border-zinc-200/80 relative gsap-philosophy-section">
					<div className="max-w-7xl mx-auto px-6 relative">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

							{/* Text philosophy */}
							<div className="space-y-8 gsap-philosophy-text">
								<div className="space-y-3">
									<span className="text-xs font-bold tracking-widest text-brand-gold uppercase">La Firma</span>
									<h2 className="text-3xl md:text-4.5xl font-serif text-brand-navy-dark leading-tight">
										Acerca de Nosotros
									</h2>
									<div className="w-12 h-[2px] bg-brand-gold mt-2" />
								</div>

								<div className="space-y-5 text-zinc-700 text-sm leading-relaxed font-light">
									<p>
										Somos un bufete legal de reconocida honorabilidad ya que además de resolver problemas legales, también nos interesamos por el bienestar común de nuestros clientes.
									</p>
									<p>
										Nos caracterizamos por actuar con total transparencia, ética jurídica y responsabilidad social en cada uno de nuestros trabajos cotidianos.
									</p>
								</div>

								<div className="pt-6 border-t border-zinc-200 flex flex-col gap-4">
									<div className="flex items-center gap-4">
										<div className="italic">
											<h4 className="text-sm font-bold text-brand-navy-dark tracking-wide">Santiago Valladares Argueta</h4>
											<p className="text-xs text-zinc-500 uppercase tracking-wider mt-0.5 font-medium">Director Legal, Abogado y Notario</p>
										</div>
									</div>
									<div className="pt-5">
										<img
											src="/images/bufete-logo-wide.png"
											alt="Bufete y Notaría Valladares Logo"
											className="h-12 w-auto object-contain opacity-80"
										/>
									</div>
								</div>
							</div>

							{/* Graphic cards / mission - vision */}
							<div className="space-y-6 gsap-mission-card">

								{/* Office Image Card */}
								<div className="relative h-44 rounded-2xl overflow-hidden border border-zinc-200 shadow-lg">
									<img
										src="/images/torre-alianza.webp"
										alt="Oficina Bufete Valladares"
										className="w-full h-full object-cover opacity-85"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark via-brand-navy-dark/40 to-transparent" />
									<div className="absolute bottom-4 left-6">
										<span className="text-[10px] text-brand-gold font-semibold uppercase tracking-widest">Compromiso y Solidez</span>
										<h4 className="text-sm font-serif text-white font-medium">Oficina Profesional en Torre Alianza</h4>
									</div>
								</div>

								{/* Mission Card */}
								<div className="bg-zinc-50/80 border border-zinc-200 p-8 rounded-2xl shadow-md relative overflow-hidden">
									<div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/5 rounded-full blur-2xl pointer-events-none" />
									<div className="flex gap-4">
										<div className="w-10 h-10 rounded-lg bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold shrink-0">
											<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
											</svg>
										</div>
										<div className="space-y-2">
											<h3 className="text-lg font-serif text-brand-navy-dark font-medium">Nuestra Misión</h3>
											<p className="text-zinc-600 text-xs leading-relaxed font-light">
												Prestar servicios legales, notariales y administrativos enmarcados con el derecho civil a las personas de manera ágil, ética y humana, procurando obtener resultados favorables y mantener una buena relación para y con los clientes.
											</p>
										</div>
									</div>
								</div>

								{/* Vision Card */}
								<div className="bg-zinc-50/80 border border-zinc-200 p-8 rounded-2xl shadow-md relative overflow-hidden">
									<div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/5 rounded-full blur-2xl pointer-events-none" />
									<div className="flex gap-4">
										<div className="w-10 h-10 rounded-lg bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold shrink-0">
											<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
											</svg>
										</div>
										<div className="space-y-2">
											<h3 className="text-lg font-serif text-brand-navy-dark font-medium">Nuestra Visión</h3>
											<p className="text-zinc-600 text-xs leading-relaxed font-light">
												Ser reconocido nacional e internacionalmente como uno de los Bufetes Legales con orientación Civil, Laboral y Notarial de más prestigio de Honduras.
											</p>
										</div>
									</div>
								</div>

							</div>

						</div>
					</div>
				</section>

				{/* DETAILED SERVICES BREAKDOWN */}
				<section id="servicios" className="py-24 bg-brand-navy-dark relative gsap-services-breakdown">
					<div className="max-w-7xl mx-auto px-6 relative">

						<div className="text-center space-y-4 mb-20">
							<span className="text-xs font-bold tracking-widest text-brand-gold uppercase">Nuestra Práctica</span>
							<h2 className="text-3xl md:text-4.5xl font-serif text-white max-w-xl mx-auto leading-tight">
								Servicios Profesionales de Excelencia
							</h2>
							<div className="w-16 h-[2px] bg-brand-gold mx-auto mt-4" />
						</div>

						<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

							{/* Service 1 */}
							<div className="gsap-service-card bg-brand-navy-medium/60 border border-brand-navy-light/60 p-8 rounded-2xl flex flex-col justify-between min-h-[380px] shadow-xl gold-border-glow">
								<div className="space-y-6">
									<div className="w-12 h-12 bg-brand-gold/10 border border-brand-gold/20 text-brand-gold rounded-xl flex items-center justify-center shrink-0">
										<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
										</svg>
									</div>
									<div className="space-y-3">
										<h3 className="text-xl font-serif text-white font-medium">Servicios Legales</h3>
										<p className="text-zinc-300 text-xs leading-relaxed font-light">
											Bufete y Notaría Valladares cuenta con un equipo de trabajo profesional y con vasta experiencia para realizar y resolver diferentes conflictos de índole legal que suceden día con día.
										</p>
										<ul className="text-[11px] text-zinc-400 space-y-1.5 pt-2 list-disc pl-4 font-light">
											<li>Litigio y defensa en Derecho Civil</li>
											<li>Conflictos de Derecho Laboral</li>
											<li>Consultoría corporativa estratégica</li>
										</ul>
									</div>
								</div>
								<a href="#contacto" className="text-[10px] text-brand-gold hover:text-brand-gold-light tracking-wider font-bold uppercase mt-8 flex items-center gap-1.5 transition-colors">
									Contactar especialista
									<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
								</a>
							</div>

							{/* Service 2 */}
							<div className="gsap-service-card bg-brand-navy-medium/60 border border-brand-navy-light/60 p-8 rounded-2xl flex flex-col justify-between min-h-[380px] shadow-xl gold-border-glow">
								<div className="space-y-6">
									<div className="w-12 h-12 bg-brand-gold/10 border border-brand-gold/20 text-brand-gold rounded-xl flex items-center justify-center shrink-0">
										<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
										</svg>
									</div>
									<div className="space-y-3">
										<h3 className="text-xl font-serif text-white font-medium">Servicios Notariales</h3>
										<p className="text-zinc-300 text-xs leading-relaxed font-light">
											Un Notario Público, investido por la Corte Suprema de Justicia como Ministro de fe pública, garantiza la legalidad y seguridad jurídica de sus contratos, actas y declaraciones de acuerdo con la ley.
										</p>
										<ul className="text-[11px] text-zinc-400 space-y-1.5 pt-2 list-disc pl-4 font-light">
											<li>Autenticaciones e instrumentos públicos</li>
											<li>Escrituras públicas de sociedades y propiedades</li>
											<li>Actas notariales y declaraciones juradas</li>
										</ul>
									</div>
								</div>
								<a href="#contacto" className="text-[10px] text-brand-gold hover:text-brand-gold-light tracking-wider font-bold uppercase mt-8 flex items-center gap-1.5 transition-colors">
									Contactar especialista
									<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
								</a>
							</div>

							{/* Service 3 */}
							<div className="gsap-service-card bg-brand-navy-medium/60 border border-brand-navy-light/60 p-8 rounded-2xl flex flex-col justify-between min-h-[380px] shadow-xl gold-border-glow">
								<div className="space-y-6">
									<div className="w-12 h-12 bg-brand-gold/10 border border-brand-gold/20 text-brand-gold rounded-xl flex items-center justify-center shrink-0">
										<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
										</svg>
									</div>
									<div className="space-y-3">
										<h3 className="text-xl font-serif text-white font-medium">Servicios Administrativos</h3>
										<p className="text-zinc-300 text-xs leading-relaxed font-light">
											Agilizamos la tramitación burocrática y regulatoria, garantizando que su empresa u organización opere en pleno cumplimiento con los entes gubernamentales locales.
										</p>
										<ul className="text-[11px] text-zinc-400 space-y-1.5 pt-2 list-disc pl-4 font-light">
											<li>Constitución de Fundaciones y ONGs</li>
											<li>Marcas de fábrica, patentes y propiedad intelectual</li>
											<li>Registros sanitarios, licencias ambientales y trámites migratorios</li>
										</ul>
									</div>
								</div>
								<a href="#contacto" className="text-[10px] text-brand-gold hover:text-brand-gold-light tracking-wider font-bold uppercase mt-8 flex items-center gap-1.5 transition-colors">
									Contactar especialista
									<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
								</a>
							</div>

						</div>

						<div className="mt-16 text-center">
							<p className="text-sm text-zinc-400 font-light mb-6">
								Si desea conocer más a fondo el alcance de nuestros servicios jurídicos, puede descargar nuestro perfil completo.
							</p>
							<a
								href="/perfil-profesional"
								className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase border border-brand-gold/30 hover:border-brand-gold bg-brand-gold/5 text-brand-gold hover:bg-brand-gold hover:text-brand-navy-dark px-7 py-3.5 rounded-lg transition-all duration-300"
							>
								<svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
								</svg>
								Ver Perfil Profesional
							</a>
						</div>
					</div>
				</section>

				{/* CORE VALUES */}
				<section id="valores" className="py-24 bg-zinc-50 border-t border-zinc-200 relative gsap-values-section">
					<div className="max-w-7xl mx-auto px-6 relative">

						<div className="text-center space-y-4 mb-20">
							<span className="text-xs font-bold tracking-widest text-brand-gold uppercase">Integridad y Compromiso</span>
							<h2 className="text-3xl md:text-4.5xl font-serif text-brand-navy-dark max-w-xl mx-auto leading-tight">
								Nuestros Valores Fundamentales
							</h2>
							<div className="w-16 h-[2px] bg-brand-gold mx-auto mt-4" />
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

							{/* Value 1: Responsabilidad */}
							<div className="gsap-value-card bg-white border border-zinc-200/80 p-8 rounded-2xl text-center space-y-4 shadow-md transition-shadow hover:shadow-lg">
								<div className="w-12 h-12 bg-brand-gold/10 border border-brand-gold/20 text-brand-gold rounded-full flex items-center justify-center mx-auto">
									<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
								</div>
								<h3 className="text-lg font-serif text-brand-navy-dark font-medium">Responsabilidad</h3>
								<p className="text-zinc-600 text-xs leading-relaxed font-light">
									Asumir y cumplir nuestros deberes y obligaciones consientes de los resultados que ocasionará aquello que hagamos o dejemos de hacer para alcanzar los propósitos de la Organización.
								</p>
							</div>

							{/* Value 2: Respeto */}
							<div className="gsap-value-card bg-white border border-zinc-200/80 p-8 rounded-2xl text-center space-y-4 shadow-md transition-shadow hover:shadow-lg">
								<div className="w-12 h-12 bg-brand-gold/10 border border-brand-gold/20 text-brand-gold rounded-full flex items-center justify-center mx-auto">
									<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
									</svg>
								</div>
								<h3 className="text-lg font-serif text-brand-navy-dark font-medium">Respeto</h3>
								<p className="text-zinc-600 text-xs leading-relaxed font-light">
									Una persona íntegra es aquella que piensa, dice y sus actuaciones están enmarcadas bajo un enfoque de justicia y transparencia, para cumplir a cabalidad los compromisos adquiridos.
								</p>
							</div>

							{/* Value 3: Ética */}
							<div className="gsap-value-card bg-white border border-zinc-200/80 p-8 rounded-2xl text-center space-y-4 shadow-md transition-shadow hover:shadow-lg">
								<div className="w-12 h-12 bg-brand-gold/10 border border-brand-gold/20 text-brand-gold rounded-full flex items-center justify-center mx-auto">
									<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
									</svg>
								</div>
								<h3 className="text-lg font-serif text-brand-navy-dark font-medium">Ética</h3>
								<p className="text-zinc-600 text-xs leading-relaxed font-light">
									Actuamos con el máximo profesionalismo y honestidad, siempre bajo los principios de la buena fe y conducta impecable en el desarrollo de todas nuestras labores cotidianas.
								</p>
							</div>

							{/* Value 4: Honestidad */}
							<div className="gsap-value-card bg-white border border-zinc-200/80 p-8 rounded-2xl text-center space-y-4 shadow-md transition-shadow hover:shadow-lg">
								<div className="w-12 h-12 bg-brand-gold/10 border border-brand-gold/20 text-brand-gold rounded-full flex items-center justify-center mx-auto">
									<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.757a1 1 0 00.707-1.707l-5.414-5.414a1 1 0 00-.707-.293V3M3 14h4.757a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V21" />
									</svg>
								</div>
								<h3 className="text-lg font-serif text-brand-navy-dark font-medium">Honestidad</h3>
								<p className="text-zinc-600 text-xs leading-relaxed font-light">
									Actuamos con rectitud, honorabilidad, transparencia y decoro, en concordancia con la verdad, equidad y la justicia entre lo que se piensa, se expresa y se hace.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* PROFESSIONAL TEAM */}
				<section id="equipo" className="py-24 bg-zinc-100 border-y border-zinc-200/80 relative gsap-team-section">
					<div className="max-w-7xl mx-auto px-6 relative">

						<div className="text-center space-y-4 mb-20">
							<span className="text-xs font-bold tracking-widest text-brand-gold uppercase">Dirección Profesional</span>
							<h2 className="text-3xl md:text-4.5xl font-serif text-brand-navy-dark leading-tight">
								Nuestros Profesionales
							</h2>
							<div className="w-16 h-[2px] bg-brand-gold mx-auto mt-4" />
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

							{/* Member 1 */}
							<div className="gsap-team-card bg-white border border-zinc-200/80 rounded-2xl overflow-hidden shadow-md text-center p-8 space-y-6 transition-shadow hover:shadow-lg">
								<div className="w-24 h-24 rounded-full bg-[#1b1b3a] border-2 border-brand-gold flex items-center justify-center text-2xl font-serif font-bold text-brand-gold mx-auto shadow-md">
									SV
								</div>
								<div className="space-y-1">
									<h3 className="text-lg font-serif font-bold text-brand-navy-dark tracking-wide">Santiago Valladares</h3>
									<p className="text-xs text-brand-gold-dark font-semibold uppercase tracking-wider">Director Legal, Abogado y Notario</p>
								</div>
								<p className="text-zinc-600 text-xs leading-relaxed font-light">
									Socio Fundador. Lidera el bufete con más de 40 años de experiencia legal y 30 años en el ejercicio notarial en Honduras.
								</p>
							</div>

							{/* Member 2 */}
							<div className="gsap-team-card bg-white border border-zinc-200/80 rounded-2xl overflow-hidden shadow-md text-center p-8 space-y-6 transition-shadow hover:shadow-lg">
								<div className="w-24 h-24 rounded-full bg-[#1b1b3a] border-2 border-brand-gold flex items-center justify-center text-2xl font-serif font-bold text-brand-gold mx-auto shadow-md">
									IT
								</div>
								<div className="space-y-1">
									<h3 className="text-lg font-serif font-bold text-brand-navy-dark tracking-wide">Isis Yolanda Triminio</h3>
									<p className="text-xs text-brand-gold-dark font-semibold uppercase tracking-wider">Asistente Administrativa</p>
								</div>
								<p className="text-zinc-600 text-xs leading-relaxed font-light">
									Coordina todas las operaciones internas, facturación gubernamental y soporte en registros corporativos y ONGs.
								</p>
							</div>

							{/* Member 3 */}
							<div className="gsap-team-card bg-white border border-zinc-200/80 rounded-2xl overflow-hidden shadow-md text-center p-8 space-y-6 transition-shadow hover:shadow-lg">
								<div className="w-24 h-24 rounded-full bg-[#1b1b3a] border-2 border-brand-gold flex items-center justify-center text-2xl font-serif font-bold text-brand-gold mx-auto shadow-md">
									SF
								</div>
								<div className="space-y-1">
									<h3 className="text-lg font-serif font-bold text-brand-navy-dark tracking-wide">Santiago F. Valladares</h3>
									<p className="text-xs text-brand-gold-dark font-semibold uppercase tracking-wider">Abogado, Asistente Legal</p>
								</div>
								<p className="text-zinc-600 text-xs leading-relaxed font-light">
									Dedicado a la investigación de jurisprudencia civil y laboral, redacción de contratos y trámites migratorios.
								</p>
							</div>

							{/* Member 4 */}
							<div className="gsap-team-card bg-white border border-zinc-200/80 rounded-2xl overflow-hidden shadow-md text-center p-8 space-y-6 transition-shadow hover:shadow-lg">
								<div className="w-24 h-24 rounded-full bg-[#1b1b3a] border-2 border-brand-gold flex items-center justify-center text-2xl font-serif font-bold text-brand-gold mx-auto shadow-md">
									MM
								</div>
								<div className="space-y-1">
									<h3 className="text-lg font-serif font-bold text-brand-navy-dark tracking-wide">Maria Isabel Maradiaga</h3>
									<p className="text-xs text-brand-gold-dark font-semibold uppercase tracking-wider">Abogada, Auxiliar Jurídico</p>
								</div>
								<p className="text-zinc-600 text-xs leading-relaxed font-light">
									Brinda asesoramiento inicial, estructuración de actas notariales, preparación de defensas procesales y escrituras.
								</p>
							</div>

						</div>
					</div>
				</section>

				{/* SOCIAL NETWORKS SECTIONS */}
				<section className="py-24 bg-white border-y border-zinc-200/80 relative gsap-social-section">
					<div className="max-w-7xl mx-auto px-6 relative">

						<div className="text-center space-y-4 mb-20">
							<span className="text-xs font-bold tracking-widest text-brand-gold uppercase">Canales de Comunicación</span>
							<h2 className="text-3xl md:text-4.5xl font-serif text-brand-navy-dark max-w-xl mx-auto leading-tight">
								Nuestra Actividad Digital
							</h2>
							<div className="w-16 h-[2px] bg-brand-gold mx-auto mt-4" />
						</div>

						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

							{/* Facebook Box */}
							<div className="gsap-social-panel bg-zinc-50 border border-zinc-200 rounded-2xl overflow-hidden shadow-lg p-6">
								<div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-200">
									<div className="flex items-center gap-3">
										<div className="w-9 h-9 rounded-lg bg-blue-600/10 flex items-center justify-center text-blue-500">
											<svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
												<path d="M9 8H7v3h2v9h4v-9h3.6l.4-3h-4V6.5c0-.8.2-1.5 1.5-1.5H17V1.1c-.8-.1-2.2-.2-3.6-.2C10.6.9 8.5 2.6 8.5 5.8V8H9z" />
											</svg>
										</div>
										<div>
											<h4 className="text-sm font-bold text-brand-navy-dark">Facebook Oficial</h4>
											<p className="text-xs text-zinc-500 font-medium">@bufetevalladares</p>
										</div>
									</div>
									<a
										href="https://www.facebook.com/bufetevalladares"
										target="_blank"
										rel="noopener noreferrer"
										className="text-xs font-bold text-brand-gold hover:text-brand-gold-light transition-colors uppercase tracking-wider"
									>
										Visitar Página
									</a>
								</div>
								<div className="w-full h-[400px] overflow-y-auto bg-white rounded-xl border border-zinc-200 relative">
									<iframe
										src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fbufetevalladares&tabs=timeline&width=500&height=400&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true"
										width="100%"
										height="100%"
										style={{ border: "none", overflow: "hidden" }}
										scrolling="no"
										frameBorder="0"
										allowFullScreen={true}
										allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
										title="Facebook Page Feed"
									/>
								</div>
							</div>

							{/* Twitter Box */}
							<div className="gsap-social-panel bg-zinc-50 border border-zinc-200 rounded-2xl overflow-hidden shadow-lg p-6">
								<div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-200">
									<div className="flex items-center gap-3">
										<div className="w-9 h-9 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-400">
											<svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
												<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
											</svg>
										</div>
										<div>
											<h4 className="text-sm font-bold text-brand-navy-dark">Twitter / X</h4>
											<p className="text-xs text-zinc-500 font-medium">@BufeteHn</p>
										</div>
									</div>
									<a
										href="https://twitter.com/BufeteHn"
										target="_blank"
										rel="noopener noreferrer"
										className="text-xs font-bold text-brand-gold hover:text-brand-gold-light transition-colors uppercase tracking-wider"
									>
										Visitar Cuenta
									</a>
								</div>
								<div className="w-full h-[400px] overflow-y-auto bg-white rounded-xl border border-zinc-200 p-4 relative">
									{isMounted ? (
										<a className="twitter-timeline" data-height="100%" data-theme="light" href="https://twitter.com/BufeteHn?ref_src=twsrc%5Etfw">Tweets by BufeteHn</a>
									) : (
										<div className="flex items-center justify-center h-full text-zinc-400 text-xs">Cargando publicaciones...</div>
									)}
								</div>
							</div>

						</div>
					</div>
				</section>

				{/* CONTACT & MAP SECTION */}
				<section id="contacto" className="py-24 bg-brand-navy-dark relative gsap-contact-section">

					<div className="max-w-7xl mx-auto px-6 relative">
						<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

							{/* Contact info column */}
							<div className="lg:col-span-5 space-y-8 text-center lg:text-left gsap-contact-info">
								<div className="space-y-4">
									<span className="text-xs font-bold tracking-widest text-brand-gold uppercase">Agendar Asuntos</span>
									<h3 className="text-3xl md:text-5xl font-serif text-white leading-tight">
										Inicie Su Consulta
									</h3>
									<div className="w-12 h-[2px] bg-brand-gold mt-2 mx-auto lg:mx-0" />
								</div>

								<p className="text-zinc-300 text-sm leading-relaxed max-w-md mx-auto lg:mx-0 font-light">
									Para consultas confidenciales, por favor complete nuestro formulario protegido. Si lo prefiere, visítenos en nuestras oficinas o contáctenos directamente por WhatsApp/Línea telefónica.
								</p>

								<div className="space-y-6 pt-4 text-left max-w-sm mx-auto lg:mx-0">

									<div className="flex gap-4">
										<div className="w-10 h-10 rounded-lg bg-brand-navy-medium border border-brand-navy-light flex items-center justify-center text-brand-gold shrink-0">
											<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
										</div>
										<div>
											<p className="text-[10px] text-zinc-500 tracking-wider uppercase font-semibold">Líneas Directas</p>
											<a href="tel:+50422357306" className="text-sm font-semibold text-white hover:text-brand-gold font-serif mt-0.5 transition-colors block">+504 2235-7306</a>
											<p className="text-xs text-zinc-400 font-mono mt-0.5">Celular: <a href="https://wa.me/50433494077" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors font-medium font-sans">+504 3349-4077</a></p>
										</div>
									</div>

									<div className="flex gap-4">
										<div className="w-10 h-10 rounded-lg bg-brand-navy-medium border border-brand-navy-light flex items-center justify-center text-brand-gold shrink-0">
											<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
										</div>
										<div>
											<p className="text-[10px] text-zinc-500 tracking-wider uppercase font-semibold">Correo Electrónico</p>
											<a href="mailto:bufete_valladares@yahoo.com" className="text-sm font-semibold text-white hover:text-brand-gold font-serif mt-0.5 transition-colors block">bufete_valladares@yahoo.com</a>
										</div>
									</div>

									<div className="flex gap-4">
										<div className="w-10 h-10 rounded-lg bg-brand-navy-medium border border-brand-navy-light flex items-center justify-center text-brand-gold shrink-0">
											<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
										</div>
										<div>
											<p className="text-[10px] text-zinc-500 tracking-wider uppercase font-semibold">Dirección Sede Central</p>
											<p className="text-sm font-semibold text-white font-serif mt-0.5">Edificio Torre Alianza Anexo local 710, Boulevard San Juan Bosco, colonia lomas del guijarro sur, Tegucigalpa.</p>
											<a
												href="https://www.google.com/maps/place/Torre+Alianza+2/@14.0888173,-87.180086,17z/data=!3m1!4b1!4m6!3m5!1s0x8f6fa36ab600f6c7:0x48f7b1ad6e405175!8m2!3d14.0888173!4d-87.1775111!16s%2Fg%2F11svghrbbc?entry=ttu&g_ep=EgoyMDI2MDcxNC4wIKXMDSoASAFQAw%3D%3D"
												target="_blank"
												rel="noopener noreferrer"
												className="inline-flex items-center gap-1 text-[10px] text-brand-gold hover:text-brand-gold-light uppercase tracking-wider font-bold mt-1.5 transition-colors"
											>
												Ver en Google Maps
												<svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
											</a>
										</div>
									</div>

								</div>
							</div>

							{/* Contact form column */}
							<div className="lg:col-span-7 gsap-contact-form">
								<ConsultationForm />
							</div>

						</div>
					</div>
				</section>

				{/* MAP EMBED SECTION */}
				<section className="w-full h-[450px] relative border-t border-brand-navy-light/30">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.8972944321743!2d-87.18008602490538!3d14.088817286337575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6fa36ab600f6c7%3A0x48f7b1ad6e405175!2sTorre%20Alianza%202!5e0!3m2!1ses!2shn!4v1721160000000!5m2!1ses!2shn"
						width="100%"
						height="100%"
						style={{ border: 0 }}
						allowFullScreen={true}
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						title="Ubicación Bufete Valladares"
					></iframe>
				</section>

			</main>
		</div>
	);
}
