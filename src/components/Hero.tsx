import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Zap, Tv, ShieldCheck, Film } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 -z-20">
        <img
          src="/hero-bg.webp"
          alt="IPTV na TV Background"
          className="h-full w-full object-cover object-center"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0709] via-[#0b0709]/85 to-[#0b0709]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0709] via-transparent to-[#0b0709]/90" />
      </div>

      <div className="container-page py-20 text-center relative z-10 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-950/60 px-4 py-1.5 text-xs font-semibold text-red-300 backdrop-blur-md">
          <Tv className="size-3.5 text-amber-400" />
          <span>Configuração Expressa para Smart TVs Samsung, LG e Android</span>
        </div>

        <h1 className="mt-6 font-display text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl text-white leading-[1.1]">
          Assista ao Melhor do <span className="gradient-text">IPTV na TV</span> em 4K
        </h1>

        <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Transforme sua televisão na melhor central de entretenimento. Mais de 35.000 canais ao vivo, futebol sem travamento e catálogo cinematográfico completo com instalação em minutos.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <WhatsAppButton
            keyword="Teste Rápido IPTV na TV"
            label="Solicitar Teste Grátis na TV"
            variant="whatsapp"
            size="lg"
            className="w-full sm:w-auto"
          />
          <WhatsAppButton
            keyword="Planos IPTV na TV"
            label="Ver Planos para Smart TV"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto"
          />
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/10 text-left">
          <div className="glass-card rounded-xl p-3.5">
            <span className="text-xl font-black text-red-400">Samsung & LG</span>
            <p className="text-xs text-slate-400 mt-0.5">Suporte nativo aos apps</p>
          </div>
          <div className="glass-card rounded-xl p-3.5">
            <span className="text-xl font-black text-amber-400">4K 60 FPS</span>
            <p className="text-xs text-slate-400 mt-0.5">Futebol e cinema lisos</p>
          </div>
          <div className="glass-card rounded-xl p-3.5">
            <span className="text-xl font-black text-red-400">+35.000 Canais</span>
            <p className="text-xs text-slate-400 mt-0.5">Grade completa liberada</p>
          </div>
          <div className="glass-card rounded-xl p-3.5">
            <span className="text-xl font-black text-emerald-400">Instalação Fácil</span>
            <p className="text-xs text-slate-400 mt-0.5">Passo a passo no WhatsApp</p>
          </div>
        </div>
      </div>
    </section>
  );
}
