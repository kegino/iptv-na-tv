export interface FaqItem {
  q: string;
  a: string;
}

export const HOME_FAQ: FaqItem[] = [
  {
    q: "Como funciona o IPTV na TV e preciso de aparelho extra?",
    a: "Se você tem uma Smart TV (Samsung, LG, TCL, Philips, Philco ou com sistema Android TV), não precisa de nenhum aparelho extra! Basta instalar o aplicativo diretamente pela loja oficial da sua televisão, inserir suas credenciais de login e assistir imediatamente em 4K.",
  },
  {
    q: "Minha TV é antiga e não é Smart, ainda posso usar?",
    a: "Com certeza! Basta conectar qualquer dispositivo reprodutor HDMI na sua TV, como Amazon Fire TV Stick, Xiaomi Mi TV Stick, Chromecast com Google TV ou aparelho TV Box homologado para transformar sua TV antiga em uma central completa de IPTV.",
  },
  {
    q: "Como recebo o passo a passo para instalar na minha marca de TV?",
    a: "Ao chamar nosso suporte no WhatsApp ou solicitar seu teste cortesia, nossa equipe pergunta a marca e o modelo do seu televisor e envia o tutorial exato com fotos e vídeos explicativos para você configurar em poucos minutos.",
  },
  {
    q: "O sinal de IPTV na TV trava durante os jogos de futebol?",
    a: "Não. Nossos servidores são otimizados com redes CDN distribuídas que mantêm conexões diretas e balanceamento dinâmico de tráfego, garantindo sinal limpo e sem congelamentos mesmo durante transmissões ao vivo de alta audiência.",
  },
  {
    q: "Qual velocidade de internet preciso ter na minha Smart TV?",
    a: "Para canais em Full HD, recomendamos no mínimo 15 Mbps a 20 Mbps de internet estável. Para assistir filmes e partidas em 4K Ultra HD a 60 FPS, recomendamos uma conexão a partir de 30 Mbps a 40 Mbps, preferencialmente ligada via cabo de rede.",
  },
  {
    q: "Posso fazer um teste grátis na minha TV antes de assinar?",
    a: "Sim! Liberamos um teste cortesia com acesso completo a mais de 35.000 canais, filmes e séries para você comprovar a velocidade na sua própria televisão sem pagar nada.",
  },
];

export const FULL_FAQ: FaqItem[] = [
  ...HOME_FAQ,
  {
    q: "Quais são os melhores aplicativos de IPTV para TV Samsung e LG?",
    a: "Para Samsung (Tizen) e LG (webOS), recomendamos aplicativos leves como Smart One IPTV, IBO Player, IPTV Smarters Pro, SS IPTV e Bob Player. Orientamos o melhor app conforme o ano de fabricação da sua TV.",
  },
  {
    q: "Como organizar canais favoritos pelo controle remoto da TV?",
    a: "Nos reprodutores compatíveis, basta pressionar o botão de seleção ou segurar o botão 'OK' do controle sobre o canal desejado para marcá-lo com estrela e adicioná-lo à aba de Favoritos.",
  },
  {
    q: "Os planos para TV possuem fidelidade ou multa?",
    a: "Não há nenhuma fidelidade. Você escolhe o plano (mensal, trimestral, semestral ou anual) e só renova se estiver plenamente satisfeito com a entrega do sinal na sua TV.",
  },
  {
    q: "Posso usar a mesma assinatura na TV da sala e do quarto ao mesmo tempo?",
    a: "Cada assinatura padrão permite 1 tela simultânea. Você pode instalar o aplicativo nas duas televisões e assistir alternadamente, ou contratar um ponto adicional com desconto exclusivo para assistir simultaneamente.",
  },
];
