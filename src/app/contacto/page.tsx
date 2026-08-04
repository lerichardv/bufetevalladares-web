import type { Metadata } from "next";
import Link from "next/link";
import ConsultationForm from "../components/ConsultationForm";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata: Metadata = {
	title: "Contacto | Bufete y Notaría Valladares en Tegucigalpa",
	description: "Agende su consulta legal o notarial en Tegucigalpa, Honduras. Póngase en contacto a través de WhatsApp, teléfono o nuestro formulario en línea.",
	keywords: [
		"contacto abogados Tegucigalpa",
		"telefono Bufete Valladares",
		"correo Bufete Valladares",
		"agendar cita abogado Honduras",
		"Torre Alianza Tegucigalpa",
		"abogados confiables Honduras",
		"asesoramiento legal Honduras"
	],
	openGraph: {
		title: "Contacto | Bufete y Notaría Valladares en Tegucigalpa",
		description: "Medios de contacto, dirección en Torre Alianza y formulario de consultas confidenciales para asesoramiento legal y notarial.",
		url: "https://bufetevalladares.com/contacto",
		siteName: "Bufete y Notaría Valladares",
		locale: "es_HN",
		type: "website",
		images: [
			{
				url: "/images/torre-alianza.webp",
				width: 1200,
				height: 630,
				alt: "Sede Bufete Valladares - Lomas del Guijarro"
			}
		]
	},
	twitter: {
		card: "summary_large_image",
		title: "Contacto | Bufete y Notaría Valladares",
		description: "Póngase en contacto con nosotros para asesoría legal y notarial en Honduras.",
		images: ["/images/torre-alianza.webp"]
	}
};

export default function ContactoPage() {
	return (
		<div className="bg-brand-navy-dark min-h-screen text-zinc-100 relative">
			{/* Background glow effects */}
			<div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-[#1b1b3a]/30 to-transparent pointer-events-none z-0" />
			<div className="absolute top-48 left-1/4 w-[300px] h-[300px] rounded-full bg-[#bab668]/5 blur-[120px] pointer-events-none z-0" />
			<div className="absolute top-96 right-1/4 w-[350px] h-[350px] rounded-full bg-[#1b1b3a]/25 blur-[150px] pointer-events-none z-0" />

			{/* Main Container */}
			<div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 md:pt-40 pb-24">

				{/* Breadcrumb & Intro */}
				<div className="mb-16">
					<Breadcrumbs items={[{ label: "Contacto" }]} />

					<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
						<div className="lg:col-span-8">
							<span className="text-xs font-bold tracking-widest text-brand-gold uppercase block mb-2">
								Agendar Asuntos & Consultas
							</span>
							<h1 className="text-4xl md:text-5xl font-serif text-white font-normal leading-tight">
								Canales de Contacto
							</h1>
							<div className="w-20 h-[2px] bg-brand-gold mt-4" />
						</div>

						<div className="lg:col-span-4 text-xs text-zinc-400 font-mono text-right lg:block hidden">
							ATENCIÓN PERSONALIZADA Y CONFIDENCIAL
						</div>
					</div>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

					{/* Column 1: Contact Details */}
					<div className="lg:col-span-5 space-y-8">
						<div className="space-y-4">
							<h2 className="text-2xl md:text-3xl font-serif text-white leading-tight">
								Inicie Su Consulta Legal
							</h2>
							<p className="text-zinc-300 text-sm leading-relaxed font-light">
								Para consultas confidenciales, por favor complete nuestro formulario protegido. Si lo prefiere, visítenos en nuestras oficinas o contáctenos directamente por WhatsApp o línea telefónica.
							</p>
						</div>

						<div className="space-y-6 pt-2">
							<div className="flex gap-4">
								<div className="w-10 h-10 rounded-lg bg-[#1b1b3a] border border-brand-navy-light flex items-center justify-center text-brand-gold shrink-0">
									<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
									</svg>
								</div>
								<div>
									<p className="text-[10px] text-zinc-500 tracking-wider uppercase font-semibold">Línea Directa</p>
									<a href="https://wa.me/50433494077" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white hover:text-brand-gold font-serif mt-0.5 transition-colors block">+504 3349-4077</a>
									<p className="text-xs text-zinc-400 font-mono mt-0.5">WhatsApp / Celular</p>
								</div>
							</div>

							<div className="flex gap-4">
								<div className="w-10 h-10 rounded-lg bg-[#1b1b3a] border border-brand-navy-light flex items-center justify-center text-brand-gold shrink-0">
									<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
									</svg>
								</div>
								<div>
									<p className="text-[10px] text-zinc-500 tracking-wider uppercase font-semibold">Correo Electrónico</p>
									<a href="mailto:bufete_valladares@yahoo.com" className="text-sm font-semibold text-white hover:text-brand-gold font-serif mt-0.5 transition-colors block">bufete_valladares@yahoo.com</a>
								</div>
							</div>

							<div className="flex gap-4">
								<div className="w-10 h-10 rounded-lg bg-[#1b1b3a] border border-brand-navy-light flex items-center justify-center text-brand-gold shrink-0">
									<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
									</svg>
								</div>
								<div>
									<p className="text-[10px] text-zinc-500 tracking-wider uppercase font-semibold">Dirección Sede Central</p>
									<p className="text-sm font-semibold text-white font-serif mt-0.5">Edificio Torre Alianza Anexo local 710, Boulevard San Juan Bosco, colonia lomas del guijarro sur, Tegucigalpa.</p>
									<a
										href="https://www.google.com/maps/place/Torre+Alianza+2/@14.0888173,-87.180086,17z/data=!3m1!4b1!4m6!3m5!1s0x8f6fa36ab600f6c7:0x48f7b1ad6e405175!8m2!3d14.0888173!4d-87.1775111!16s%2Fg%2F11svghrbbc?entry=ttu&g_ep=EgoyMDI2MDcxNC4wIKXMDSoASAFQAw%3D%3D"
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-1 text-[10px] text-brand-gold hover:text-brand-gold-light uppercase tracking-wider font-bold mt-2.5 transition-colors"
									>
										Ver en Google Maps
										<svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
										</svg>
									</a>
								</div>
							</div>
						</div>

						{/* Embed Map Preview Card */}
						<div className="bg-[#1b1b3a]/30 border border-brand-navy-light/40 rounded-xl p-5 backdrop-blur-sm">
							<h3 className="text-xs font-bold tracking-widest text-brand-gold uppercase mb-3">Horario de Oficina</h3>
							<p className="text-xs text-zinc-300 font-light leading-relaxed">
								Lunes a Viernes: 8:00 AM - 5:00 PM <br />
								Sábados: Solo con cita previa <br />
								Domingos: Cerrado (Atención de emergencias vía telefónica)
							</p>
						</div>
					</div>

					{/* Column 2: Form */}
					<div className="lg:col-span-7 relative">
						<ConsultationForm />
					</div>

				</div>

				{/* MAP EMBED SECTION */}
				<div className="mt-16 w-full h-[400px] border border-brand-navy-light/30 rounded-2xl overflow-hidden shadow-2xl relative z-10">
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
				</div>

			</div>
		</div>
	);
}
