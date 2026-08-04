import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Perfil Profesional y Experiencia | Bufete y Notaría Valladares",
  description: "Conozca nuestra trayectoria de más de 35 años. Especializados en derecho civil, laboral, trámites administrativos, licencias ambientales, registros sanitarios y derecho notarial en Honduras.",
  keywords: [
    "trayectoria legal Honduras",
    "Santiago Valladares Argueta",
    "abogado derecho civil Tegucigalpa",
    "exequatur notario Honduras",
    "constitución de sociedades",
    "tramites ambientales SERNA",
    "registros sanitarios ARSA Honduras",
    "personeria juridica ONG"
  ],
  openGraph: {
    title: "Perfil Profesional y Experiencia | Bufete y Notaría Valladares",
    description: "Trayectoria y credenciales de nuestro equipo legal liderado por el Abogado y Notario Santiago Valladares Argueta en Tegucigalpa, Honduras.",
    url: "https://bufetevalladares.com/perfil-profesional",
    siteName: "Bufete y Notaría Valladares",
    locale: "es_HN",
    type: "website",
    images: [
      {
        url: "/images/torre-alianza.webp",
        width: 1200,
        height: 630,
        alt: "Trayectoria Profesional - Bufete Valladares"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Perfil Profesional y Experiencia | Bufete y Notaría Valladares",
    description: "Conozca las credenciales y la amplia experiencia legal, notarial y administrativa de nuestra firma boutique en Honduras.",
    images: ["/images/torre-alianza.webp"]
  }
};

export default function PerfilProfesional() {
  return (
    <div className="bg-brand-navy-dark min-h-screen text-zinc-100 relative">
      {/* Background glow effects */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-[#1b1b3a]/30 to-transparent pointer-events-none z-0" />
      <div className="absolute top-48 left-1/4 w-[300px] h-[300px] rounded-full bg-[#bab668]/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-96 right-1/4 w-[350px] h-[350px] rounded-full bg-[#1b1b3a]/25 blur-[150px] pointer-events-none z-0" />

      {/* Top Header Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 md:pt-40 pb-12">
        <Breadcrumbs items={[{ label: "Perfil Profesional" }]} />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <span className="text-xs font-bold tracking-widest text-brand-gold uppercase block mb-2">
              Nuestra Trayectoria
            </span>
            <h1 className="text-4xl md:text-5xl font-serif text-white font-normal leading-tight">
              Perfil Profesional
            </h1>
            <div className="w-20 h-[2px] bg-brand-gold mt-4" />
          </div>
          
          <div className="lg:col-span-4 text-xs text-zinc-400 font-mono text-right lg:block hidden">
            BUFETE Y NOTARÍA VALLADARES
          </div>
        </div>
      </div>

      {/* Full Width Light Paper Container */}
      <div className="relative z-10 bg-[#fcfbf7] border-t border-b border-brand-gold/20 shadow-2xl py-16 md:py-24 text-zinc-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 text-sm leading-relaxed font-light">
            
            {/* Column 1 */}
            <div className="space-y-8">
              <div className="bg-brand-navy-dark/[0.03] border border-brand-navy-dark/10 rounded-xl p-6 md:p-8 shadow-sm">
                <h2 className="text-2xl font-serif text-brand-navy-dark mb-4 border-b border-brand-navy-dark/10 pb-3">
                  Bufete y Notaría Valladares
                </h2>
                <p className="text-zinc-700">
                  El Bufete y Notaría Valladares, esta ubicado en el Edificio Torre Alianza Anexo local 710, Boulevard San Juan Bosco, colonia lomas del guijarro sur, Tegucigalpa, celular <a href="tel:+50499821117" className="text-brand-navy-dark font-medium hover:text-brand-gold transition-colors">+504 9982-1117</a>, correo electrónico <a href="mailto:bufete_valladares@yahoo.com" className="text-brand-navy-dark font-medium hover:text-brand-gold transition-colors">bufete_valladares@yahoo.com</a>, de la Ciudad de Tegucigalpa.
                </p>
              </div>

              <div className="space-y-6">
                <p className="text-zinc-700">
                  Desde su creación nos especializamos para ofrecer a nuestros clientes: Personas naturales y jurídicas los servicios profesionales en materias civil, laboral, trámites administrativos, debidamente colegiado como Abogado bajo el número 02921 del Colegio de Abogados de Honduras, así como la materia de derecho notarial como fedatario público, esta última función autorizado según Exequátur de notario registrado bajo el número 1428 extendido por la Honorable Corte Suprema de Justicia. Contamos con abogados que forman parte del equipo que pueden atender con eficiencia cualquier servicio legal de su interés.
                </p>

                <div className="border-l-2 border-brand-gold pl-4 py-1">
                  <p className="text-zinc-700">
                    <strong className="text-brand-navy-dark font-serif tracking-wide block mb-1">EN MATERIA CIVIL</strong>
                    se manejan demandas ordinarias de pago, ejecución de garantías hipotecarias y prendarias, así como derechos de sucesión.
                  </p>
                </div>

                <div className="border-l-2 border-brand-gold pl-4 py-1">
                  <p className="text-zinc-700">
                    <strong className="text-brand-navy-dark font-serif tracking-wide block mb-1">EN MATERIA LABORAL</strong>
                    se manejan demandas, cuando se representa al trabajador para el pago de prestaciones laborales, se ha tenido la experiencia de representar al Patrono para la defensa de despidos justificados.
                  </p>
                </div>

                <div className="border-l-2 border-brand-gold pl-4 py-1">
                  <p className="text-zinc-700">
                    <strong className="text-brand-navy-dark font-serif tracking-wide block mb-1">EN MATERIA NOTARIAL</strong>
                    La creación y elaboración Jurídica de diversos contratos interpretando y dándole forma legal a la voluntad de las partes contratantes.
                  </p>
                </div>

                <div className="border-l-2 border-brand-gold pl-4 py-1">
                  <p className="text-zinc-700">
                    <strong className="text-brand-navy-dark font-serif tracking-wide block mb-1">OPERACIONES RELACIONADAS CON PERSONAS JURÍDICAS</strong>
                    a) comerciantes individuales; b) comerciantes sociales, constitución de sociedades anónimas y sociedades de responsabilidad limitada, fusión de sociedades, escisión de sociedades, protocolización de asambleas para incorporar acuerdos e inscribirlos en el Registro Público de Comercio. Otorgamiento y revocación de poderes de personas naturales y jurídicas, generales, especiales, irrevocables, ratificaciones de firma, diligencias de fe pública de hechos incorporados en actas y copias certificadas.
                  </p>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-6 md:mt-4">
              <div className="border-l-2 border-brand-gold pl-4 py-1">
                <p className="text-zinc-700">
                  <strong className="text-brand-navy-dark font-serif tracking-wide block mb-1">DIVERSOS TRÁMITES ADMINISTRATIVOS</strong>
                  en materia laboral se han representadoz trabajadores y patronos en las audiencias de conciliación ante la Secretaría de Trabajo y Previsión Social; en materia fiscal se han representado Personas Jurídicas ante el Servicio de Administración de Rentas SAR para impugnación de cobros indebidos, devolución de impuestos pagados de más, solicitudes de exoneraciones de impuestos a las instituciones que la ley le atribuye este beneficio; en materia de Registros Sanitarios ante la Secretaría de Salud Pública; Licencias Ambientales ante la Secretaria de Energía, Recursos Naturales Ambientes y Minas, SERNA, en materia de legalización de permanencia legal de extranjeros ante la Dirección de Migración y Extranjería ahora Instituto de Migración, en los casos de residencia y naturalizaciones ante la Secretaría de Derechos Humanos, Justica, Gobernación y Descentralización. Así como la tramitación de Personerías Jurídicas ONG, registro de empresas ante la Oficina Normativa de Contratación y Adquisiciones del Estado ONCAE y SIAFI.
                </p>
              </div>

              <div className="border-l-2 border-brand-gold pl-4 py-1">
                <p className="text-zinc-700">
                  <strong className="text-brand-navy-dark font-serif tracking-wide block mb-1">OPERACIONES AFINES CON GARANTÍAS</strong>
                  Fideicomisos, hipotecas, prendas, reconocimiento de adeudo.
                </p>
              </div>

              <div className="border-l-2 border-brand-gold pl-4 py-1">
                <p className="text-zinc-700">
                  <strong className="text-brand-navy-dark font-serif tracking-wide block mb-1">OPERACIONES RELACIONADAS CON INMUEBLES</strong>
                  Compra Ventas, Daciones en pago, agrupación de predios, individualizaciones, particiones de co propietarios extrajudiciales, constitución de Régimen de Propiedad Horizontal o Condominios, constitución de Usufructo temporal o Vitalicio.
                </p>
              </div>

              <div className="border-l-2 border-brand-gold pl-4 py-1">
                <p className="text-zinc-700">
                  <strong className="text-brand-navy-dark font-serif tracking-wide block mb-1">OTRAS ACTUACIONES</strong>
                  De asuntos no Contenciones autorizados en Sede Notarial: Rectificación de inscripciones en el Registro Civil, Constitución de Patrimonio Familiar, Habilitación para comparecer en juicio, Emancipación voluntaria, Habilitación de Edad, Información Ad Perpetuam, Divorcio por mutuo consentimiento, Separación de Hecho, Conciliación y Arbitraje, Ejecución de garantías, Autorización para contraer segundas y ulteriores nupcias, Autorización para enajenar bienes de menores, Deslinde y amojonamiento, Celebración de matrimonios, Calificación de edad, Cesación de comunidad, y Partición de bienes, tramites de Herencia Ab-Intestato o, Testamentaria.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
