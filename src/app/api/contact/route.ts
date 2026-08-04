import { NextResponse } from "next/server";
import { Resend } from "resend";
import { ContactEmailTemplate } from "../../../emails/ContactEmailTemplate";
import { render } from "@react-email/components";
import * as React from "react";

export async function POST(request: Request) {
	try {
		const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy");
		const { name, email, phone, area, message } = await request.json();

		if (!name || !email || !message) {
			return NextResponse.json(
				{ error: "Los campos Nombre, Correo y Mensaje son requeridos." },
				{ status: 400 }
			);
		}

		const toEmails = (process.env.TO_ADMIN_EMAIL || "ricardo.valladares.triminio@gmail.com")
			.split(",")
			.map((email) => email.trim());
		const fromEmail = process.env.FROM_ADMIN_EMAIL || "Contacto Bufete Valladares <onboarding@resend.dev>";

		const emailHtml = await render(
			React.createElement(ContactEmailTemplate, {
				name,
				email,
				phone,
				area,
				message,
			})
		);

		const data = await resend.emails.send({
			from: fromEmail,
			to: toEmails,
			replyTo: email,
			subject: `Nueva Consulta Legal: ${area.toUpperCase()} - ${name}`,
			html: emailHtml,
		});

		return NextResponse.json({ success: true, data });
	} catch (error: any) {
		console.error("Resend API error:", error);
		return NextResponse.json(
			{ error: error.message || "Error al enviar el correo." },
			{ status: 500 }
		);
	}
}
