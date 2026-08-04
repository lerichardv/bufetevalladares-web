"use client";

import { useState } from "react";

export default function ConsultationForm() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		area: "legales",
		message: "",
	});
	const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
	const [errorMessage, setErrorMessage] = useState("");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setStatus("submitting");
		setErrorMessage("");

		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (!res.ok) {
				const data = await res.json();
				throw new Error(data.error || "Ocurrió un error al enviar el mensaje.");
			}

			setStatus("success");
			setFormData({
				name: "",
				email: "",
				phone: "",
				area: "legales",
				message: "",
			});
		} catch (err: any) {
			console.error("Error submitting form:", err);
			setErrorMessage(err.message || "Ocurrió un error inesperado. Por favor, intente de nuevo.");
			setStatus("error");
		}
	};

	return (
		<div className="w-full max-w-xl mx-auto bg-brand-navy-medium/70 backdrop-blur-xl border border-brand-navy-light/60 p-8 rounded-2xl shadow-2xl relative overflow-hidden gold-border-glow">
			{/* Decorative background gold glow */}
			<div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

			{status === "success" ? (
				<div className="py-12 text-center animate-fade-in">
					<div className="w-16 h-16 bg-brand-gold/15 border border-brand-gold/30 rounded-full flex items-center justify-center mx-auto mb-6">
						<svg
							className="w-8 h-8 text-brand-gold"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={1.5}
								d="M5 13l4 4L19 7"
							/>
						</svg>
					</div>
					<h3 className="text-2xl font-serif text-brand-gold-light mb-3">Solicitud Recibida</h3>
					<p className="text-zinc-300 text-sm max-w-sm mx-auto leading-relaxed">
						Gracias por su confianza. Un especialista de nuestra firma revisará su caso de manera confidencial y le contactará en la brevedad posible.
					</p>
					<button
						onClick={() => setStatus("idle")}
						className="mt-8 px-6 py-2.5 border border-brand-navy-light hover:border-brand-gold text-sm text-zinc-300 hover:text-white rounded-lg transition-all duration-300 cursor-pointer"
					>
						Enviar otra consulta
					</button>
				</div>
			) : (
				<form onSubmit={handleSubmit} className="space-y-6">
					<div className="space-y-2">
						<h3 className="text-2xl font-serif text-white tracking-wide">Consulta Legal</h3>
						<p className="text-zinc-400 text-xs leading-relaxed">
							Complete el siguiente formulario. Toda la información enviada está estrictamente protegida bajo secreto profesional.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div className="space-y-1">
							<label htmlFor="name" className="text-xs font-semibold text-zinc-400 tracking-widest uppercase">
								Nombre Completo
							</label>
							<input
								type="text"
								id="name"
								required
								value={formData.name}
								onChange={(e) => setFormData({ ...formData, name: e.target.value })}
								placeholder="ej. Santiago Valladares"
								className="w-full bg-brand-navy-dark/90 border border-brand-navy-light/80 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-all duration-300"
							/>
						</div>

						<div className="space-y-1">
							<label htmlFor="email" className="text-xs font-semibold text-zinc-400 tracking-widest uppercase">
								Correo Electrónico
							</label>
							<input
								type="email"
								id="email"
								required
								value={formData.email}
								onChange={(e) => setFormData({ ...formData, email: e.target.value })}
								placeholder="ej. contacto@empresa.com"
								className="w-full bg-brand-navy-dark/90 border border-brand-navy-light/80 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-all duration-300"
							/>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div className="space-y-1">
							<label htmlFor="phone" className="text-xs font-semibold text-zinc-400 tracking-widest uppercase">
								Teléfono de Contacto
							</label>
							<input
								type="tel"
								id="phone"
								required
								value={formData.phone}
								onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
								placeholder="ej. +504 3349-4077"
								className="w-full bg-brand-navy-dark/90 border border-brand-navy-light/80 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-all duration-300"
							/>
						</div>

						<div className="space-y-1">
							<label htmlFor="area" className="text-xs font-semibold text-zinc-400 tracking-widest uppercase">
								Área de Consulta
							</label>
							<select
								id="area"
								value={formData.area}
								onChange={(e) => setFormData({ ...formData, area: e.target.value })}
								className="w-full bg-brand-navy-dark/90 border border-brand-navy-light/80 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-lg px-4 py-3 text-sm text-white outline-none transition-all duration-300 cursor-pointer"
							>
								<option value="legales">Servicios Legales</option>
								<option value="notariales">Servicios Notariales</option>
								<option value="administrativos">Servicios Administrativos</option>
							</select>
						</div>
					</div>

					<div className="space-y-1">
						<label htmlFor="message" className="text-xs font-semibold text-zinc-400 tracking-widest uppercase">
							Descripción de su Situación Legal
						</label>
						<textarea
							id="message"
							required
							rows={4}
							value={formData.message}
							onChange={(e) => setFormData({ ...formData, message: e.target.value })}
							placeholder="Describa brevemente los hechos para una primera valoración..."
							className="w-full bg-brand-navy-dark/90 border border-brand-navy-light/80 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-all duration-300 resize-none"
						/>
					</div>

					{status === "error" && (
						<div className="bg-red-950/40 border border-red-900/50 text-red-200 text-xs px-4 py-2.5 rounded-lg text-center leading-relaxed">
							{errorMessage}
						</div>
					)}

					<button
						type="submit"
						disabled={status === "submitting"}
						className="w-full bg-gradient-to-r from-brand-gold-dark via-brand-gold to-brand-gold-light hover:brightness-110 text-brand-navy-dark font-bold py-3 px-6 rounded-lg text-sm transition-all duration-300 shadow-lg shadow-brand-gold/10 disabled:opacity-50 cursor-pointer text-center tracking-wider uppercase"
					>
						{status === "submitting" ? (
							<span className="flex items-center justify-center">
								<svg
									className="animate-spin -ml-1 mr-3 h-5 w-5 text-brand-navy-dark"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
								>
									<circle
										className="opacity-25"
										cx="12"
										cy="12"
										r="10"
										stroke="currentColor"
										strokeWidth="4"
									/>
									<path
										className="opacity-75"
										fill="currentColor"
										d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
									/>
								</svg>
								Procesando envío seguro...
							</span>
						) : (
							"Enviar Mensaje Confidencial"
						)}
					</button>

					<p className="text-[10px] text-zinc-500 text-center leading-relaxed">
						* Al enviar este mensaje, usted autoriza el procesamiento de sus datos con el único fin de evaluar su consulta, bajo el amparo de la legislación de secreto profesional.
					</p>
				</form>
			)}
		</div>
	);
}
