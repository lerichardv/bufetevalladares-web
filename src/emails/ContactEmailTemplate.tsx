import {
	Body,
	Container,
	Head,
	Heading,
	Hr,
	Html,
	Img,
	Preview,
	Section,
	Text,
	Link,
} from "@react-email/components";
import * as React from "react";

interface ContactEmailTemplateProps {
	name: string;
	email: string;
	phone?: string;
	area: string;
	message: string;
}

export const ContactEmailTemplate = ({
	name,
	email,
	phone,
	area,
	message,
}: ContactEmailTemplateProps) => {
	const previewText = `Nueva Consulta Legal: ${area.toUpperCase()} - ${name}`;
	const logoUrl = "https://bufetevalladares.com/images/bufete-logo-wide.png";

	return (
		<Html>
			<Head />
			<Preview>{previewText}</Preview>
			<Body style={main}>
				<Container style={container}>
					<Section style={headerSection}>
						<Img
							src={logoUrl}
							width="180"
							height="45"
							alt="Bufete y Notaría Valladares"
							style={logo}
						/>
						<Text style={subtitle}>Nueva Consulta Recibida - Portal Web</Text>
					</Section>

					<Section style={contentSection}>
						<Text style={paragraph}>
							Se ha recibido una nueva solicitud de consulta legal a través del formulario de contacto del sitio web. A continuación los detalles del caso:
						</Text>

						<Section style={detailsBox}>
							<Text style={detailItem}>
								<strong>Nombre Completo:</strong> {name}
							</Text>
							<Text style={detailItem}>
								<strong>Correo Electrónico:</strong>{" "}
								<Link href={`mailto:${email}`} style={link}>
									{email}
								</Link>
							</Text>
							<Text style={detailItem}>
								<strong>Teléfono de Contacto:</strong> {phone || "No proporcionado"}
							</Text>
							<Text style={detailItem}>
								<strong>Área de Interés:</strong> <span style={capitalize}>{area}</span>
							</Text>
						</Section>

						<Hr style={hr} />

						<Heading as="h3" style={messageHeading}>
							Descripción del Asunto Legal:
						</Heading>
						<Text style={messageText}>{message}</Text>
					</Section>

					<Hr style={hr} />

					<Section style={footerSection}>
						<Text style={footerText}>
							Este correo fue enviado de manera automática y confidencial desde el portal de Bufete y Notaría Valladares.
						</Text>
						<Text style={footerText}>
							© {new Date().getFullYear()} Bufete y Notaría Valladares S.C. Todos los derechos reservados.
						</Text>
					</Section>
				</Container>
			</Body>
		</Html>
	);
};

// Styles
const main = {
	backgroundColor: "#fafafa",
	fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',
};

const container = {
	margin: "40px auto",
	padding: "0",
	width: "580px",
	backgroundColor: "#ffffff",
	border: "1px solid #e5e7eb",
	overflow: "hidden" as const,
	boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
};

const headerSection = {
	backgroundColor: "#1b1b3a",
	padding: "32px 24px",
	textAlign: "center" as const,
	borderBottom: "4px solid #bab668",
};

const logo = {
	margin: "0 auto 12px auto",
	display: "block",
};

const subtitle = {
	color: "#bab668",
	fontSize: "13px",
	margin: "8px 0 0 0",
	textTransform: "uppercase" as const,
	letterSpacing: "1.5px",
	fontWeight: "500",
};

const contentSection = {
	padding: "32px 32px 16px 32px",
};

const paragraph = {
	color: "#374151",
	fontSize: "14px",
	lineHeight: "1.6",
	margin: "0 0 20px 0",
};

const detailsBox = {
	backgroundColor: "#f9fafb",
	border: "1px solid #f3f4f6",
	padding: "16px 20px",
	margin: "0 0 24px 0",
};

const detailItem = {
	color: "#4b5563",
	fontSize: "13px",
	lineHeight: "1.6",
	margin: "0",
};

const link = {
	color: "#1b1b3a",
	textDecoration: "underline",
};

const capitalize = {
	textTransform: "capitalize" as const,
};

const hr = {
	borderColor: "#e5e7eb",
	margin: "24px 0",
};

const messageHeading = {
	color: "#1b1b3a",
	fontSize: "15px",
	fontWeight: "600",
	margin: "0 0 10px 0",
};

const messageText = {
	color: "#1f2937",
	fontSize: "13px",
	lineHeight: "1.6",
	backgroundColor: "#f9fafb",
	padding: "16px",
	borderLeft: "4px solid #bab668",
	whiteSpace: "pre-wrap" as const,
	margin: "0",
};

const footerSection = {
	padding: "0 32px 32px 32px",
	textAlign: "center" as const,
};

const footerText = {
	color: "#9ca3af",
	fontSize: "11px",
	lineHeight: "1.5",
	margin: "8px 0 0 0",
};
