import { Link } from "@tanstack/react-router";
import { Tv } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-red-500/20 bg-stone-950 text-slate-400">
      <div className="container-page py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3">
              <div className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-red-500 to-amber-400 text-slate-950 font-black">
                <Tv className="size-4" />
              </div>
              <span className="font-display text-lg font-bold text-white">
                IPTV <span className="text-amber-400">na TV</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-slate-400 max-w-md leading-relaxed">
              Especialistas em streaming e ativação de IPTV para televisores Samsung Tizen, LG webOS, Android TV, Fire TV Stick e TV Box. Conexão estável e suporte humanizado diário.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">Smart TV</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/planos" className="hover:text-red-400 transition-colors">Planos para TV</Link></li>
              <li><Link to="/beneficios" className="hover:text-red-400 transition-colors">Vantagens na TV</Link></li>
              <li><Link to="/como-funciona" className="hover:text-red-400 transition-colors">Instalar na TV</Link></li>
              <li><Link to="/teste" className="hover:text-red-400 transition-colors">Teste na sua TV</Link></li>
              <li><Link to="/faq" className="hover:text-red-400 transition-colors">Dúvidas Frequentes</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">Atendimento</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/contato" className="hover:text-red-400 transition-colors">WhatsApp Suporte</Link></li>
              <li><Link to="/blog" className="hover:text-red-400 transition-colors">Tutoriais de TV</Link></li>
              <li><Link to="/politica-de-privacidade" className="hover:text-red-400 transition-colors">Privacidade</Link></li>
              <li><Link to="/termos-de-uso" className="hover:text-red-400 transition-colors">Termos de Uso</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-8 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} IPTV na TV. Todos os direitos reservados. Otimizado para Smart TVs de todas as marcas.</p>
        </div>
      </div>
    </footer>
  );
}
