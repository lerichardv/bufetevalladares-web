import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-navy-dark border-t border-brand-navy-light/40 py-16 mt-auto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <Link href="/">
            <img
              src="/images/bufete-logo-wide-gold.png"
              alt="Bufete y Notaría Valladares"
              className="h-10 w-auto object-contain cursor-pointer"
            />
          </Link>
          <p className="text-zinc-500 text-[11px] leading-relaxed font-light">
            Asesoría jurídica y representación de alto nivel para personas y corporaciones de excelencia. Trayectoria, honradez y ética profesional indiscutible.
          </p>
        </div>

        <div>
          <h5 className="text-[10px] font-bold text-brand-gold tracking-widest uppercase mb-4">Áreas de Enfoque</h5>
          <ul className="space-y-2 text-xs text-zinc-400 font-light">
            <li><Link href="/#servicios" className="hover:text-white transition-colors">Servicios Legales</Link></li>
            <li><Link href="/#servicios" className="hover:text-white transition-colors">Servicios Notariales</Link></li>
            <li><Link href="/#servicios" className="hover:text-white transition-colors">Servicios Administrativos</Link></li>
            <li><a href="mailto:bufete_valladares@yahoo.com?subject=Solicitud%20de%20Cita%20%2F%20Consulta%20Legal&body=Deseo%20agendar%20una%20cita%20de%20asesor%C3%ADa%20legal." className="hover:text-white transition-colors text-brand-gold-light">Agendar Asesoría</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-[10px] font-bold text-brand-gold tracking-widest uppercase mb-4">Enlaces Rápidos</h5>
          <ul className="space-y-2 text-xs text-zinc-400 font-light">
            <li><Link href="/#inicio" className="hover:text-white transition-colors">Inicio</Link></li>
            <li><Link href="/#nosotros" className="hover:text-white transition-colors">Acerca de la Firma</Link></li>
            <li><Link href="/#valores" className="hover:text-white transition-colors">Nuestros Valores</Link></li>
            <li><Link href="/#equipo" className="hover:text-white transition-colors">Nuestros Socios</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="text-[10px] font-bold text-brand-gold tracking-widest uppercase mb-4">Aviso Legal</h5>
          <p className="text-zinc-500 text-[10px] leading-relaxed font-light">
            La información disponible en este sitio no constituye asesoría jurídica oficial. El envío de información a través del formulario no establece una relación cliente-abogado.
          </p>
          <p className="text-zinc-500 text-[10px] mt-4 font-mono">
            © {new Date().getFullYear()} Bufete y Notaría Valladares S.C. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
