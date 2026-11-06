import { Check, Sparkles } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

export interface Plan {
  id: string;
  name: string;
  duration: string;
  price: string;
  period: string;
  description: string;
  popular?: boolean;
  features: string[];
  ctaKeyword: string;
}

export const PLANS: Plan[] = [
  {
    id: "mensal",
    name: "TV Mensal",
    duration: "30 dias para Smart TV",
    price: "R$ 35",
    period: "/mês",
    description: "Perfeito para experimentar a qualidade e velocidade de carregamento na sua televisão.",
    popular: false,
    ctaKeyword: "Plano Mensal IPTV na TV",
    features: [
      "+35.000 canais em 4K e Full HD",
      "Filmes e séries on demand atualizados",
      "Futebol ao vivo sem travamento",
      "Compatível com Samsung, LG e Android",
      "Suporte passo a passo para instalar",
    ],
  },
  {
    id: "trimestral",
    name: "TV Trimestral",
    duration: "90 dias para Smart TV",
    price: "R$ 90",
    period: "/trimestre",
    description: "3 meses de entretenimento sem interrupções com excelente desconto para sua TV.",
    popular: false,
    ctaKeyword: "Plano Trimestral IPTV na TV",
    features: [
      "+35.000 canais em 4K e Full HD",
      "Filmes e séries on demand atualizados",
      "Futebol ao vivo sem travamento",
      "Economia garantida na mensalidade",
      "Guia EPG configurado na TV",
    ],
  },
  {
    id: "semestral",
    name: "TV Semestral",
    duration: "180 dias para Smart TV",
    price: "R$ 170",
    period: "/semestre",
    description: "O mais escolhido! 6 meses de filmes e esportes com servidores prioritários para TV.",
    popular: true,
    ctaKeyword: "Plano Semestral IPTV na TV",
    features: [
      "+35.000 canais em 4K e Full HD",
      "Filmes e séries on demand atualizados",
      "Futebol ao vivo sem travamento",
      "Suporte VIP dedicado para Smart TV",
      "Troca rápida de canais sem congelar",
    ],
  },
  {
    id: "anual",
    name: "TV Anual",
    duration: "365 dias para Smart TV",
    price: "R$ 280",
    period: "/ano",
    description: "Maior economia! 1 ano inteiro de streaming na sua TV por apenas R$ 23,33 por mês.",
    popular: false,
    ctaKeyword: "Plano Anual IPTV na TV",
    features: [
      "+35.000 canais em 4K e Full HD",
      "Filmes e séries on demand atualizados",
      "Futebol ao vivo sem travamento",
      "Acesso VIP a todas as estreias",
      "Suporte dedicado 365 dias do ano",
    ],
  },
];

export function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={`relative glass-card rounded-2xl p-6 sm:p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
        plan.popular ? "border-red-500/60 shadow-red-950/40 ring-1 ring-red-500/50" : ""
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-red-500 to-amber-500 px-3.5 py-1 text-xs font-bold text-slate-950 shadow-md">
          <Sparkles className="size-3.5" aria-hidden="true" />
          MAIS ESCOLHIDO PARA TV
        </div>
      )}

      <div>
        <h3 className="font-display text-xl font-bold text-white">{plan.name}</h3>
        <p className="mt-1 text-xs text-slate-300">{plan.duration}</p>
        <div className="mt-4 flex items-baseline gap-1">
          <span className="font-display text-3xl sm:text-4xl font-extrabold text-white">{plan.price}</span>
          <span className="text-xs text-slate-300">{plan.period}</span>
        </div>
        <p className="mt-3 text-xs text-slate-300 leading-relaxed">{plan.description}</p>
      </div>

      <ul className="mt-6 space-y-2.5 text-xs text-slate-200 flex-1 border-t border-white/10 pt-5">
        {plan.features.map((feat) => (
          <li key={feat} className="flex items-start gap-2">
            <Check className="size-4 shrink-0 text-red-400 mt-0.5" aria-hidden="true" />
            <span>{feat}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 pt-2">
        <WhatsAppButton
          keyword={plan.ctaKeyword}
          label="Assinar Para Minha TV"
          variant={plan.popular ? "primary" : "whatsapp"}
          size="md"
          className="w-full"
        />
      </div>
    </div>
  );
}
