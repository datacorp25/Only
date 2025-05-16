import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";

export const ElementLight = (): JSX.Element => {
  // Feature cards data
  const featureCards = [
    {
      image: "/privacidade-total--png.png",
      title: "Privacidade Total:",
      description:
        "Sua identidade será 100% protegida no nosso grupo, sem vazamentos, compartilhamentos ou exposição de informações. Aqui, você participa sem preocupações!",
    },
    {
      image: "/conteudo-premium-e-exclusivo-png.png",
      title: "Conteúdo Premium e Exclusivo:",
      description:
        "Receba todos os vídeos inéditos e organizados, tudo já incluso, sem mensalidades ou taxas extras. Atualizações diárias, sem repetição e sem surpresas.",
    },
    {
      image: "/acesso-imediato-e-facil-2048x2010-png.png",
      title: "Acesso Imediato e Fácil:",
      description:
        "Basta se tornar membro! Com apenas um clique, você já estará dentro do grupo com o melhor conteúdo do OnlyFans brasileiro.",
    },
  ];

  return (
    <main className="relative bg-black">
      {/* Hero Section */}
      <section className="flex flex-col w-full items-start gap-5 px-5 md:px-20 lg:px-[390px] py-2.5 [background:url(..//background.png)_50%_50%_/_cover]">
        <div className="h-[139px]" />

        <div className="flex flex-col items-start w-full">
          <h1 className="mt-[-1px] font-['Poppins',Helvetica] font-semibold text-canalviptelegramsitewhite text-4xl tracking-[0.70px] leading-[43px]">
            O Melhor Grupo de
            <br />
            OnlyFans no Telegram:
            <br />
            Exclusivo e 100% Brasileiro!
          </h1>
        </div>

        <div className="flex flex-col items-start pt-5 w-full">
          <p className="mt-[-1px] font-['Poppins',Helvetica] font-light text-canalviptelegramsitewhite text-[19px] tracking-[0.50px] leading-[25px]">
            As melhores criadoras brasileiras do OnlyFans,
            <br />
            com conteúdos exclusivos e total privacidade.
          </p>
        </div>

        <a 
          href="https://t.me/Superonlyprivacybot?start=ADS" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full sm:w-auto"
        >
          <Button className="w-[286.8px] h-[52px] rounded-[10px] [background:linear-gradient(163deg,rgba(0,166,230,1)_38%,rgba(1,113,156,1)_85%)] relative">
            <img
              className="absolute w-[18px] h-[18px] top-3.5 left-6"
              alt="Telegram icon"
              src="/component-1.svg"
            />
            <span className="absolute w-[218px] h-7 top-[11px] left-[45px] font-canalviptelegram-site-poppins-regular text-canalviptelegramsitewhite text-center tracking-[var(--canalviptelegram-site-poppins-regular-letter-spacing)] leading-[var(--canalviptelegram-site-poppins-regular-line-height)]">
              Entrar no Grupo Agora
            </span>
          </Button>
        </a>

        <div className="h-[77px]" />
      </section>

      {/* Banner Section */}
      <section className="min-h-9 p-2.5 w-full [background:linear-gradient(90deg,rgba(11,179,243,1)_0%,rgba(0,71,98,1)_75%)] flex justify-center items-center">
        <p className="font-['Poppins',Helvetica] font-normal text-canalviptelegramsitewhite text-base text-center tracking-[2.50px] leading-[23px]">
          PARE AGORA DE PAGAR PARA TER ACESSO A ESSES CONTEÚDOS!
        </p>
      </section>

      {/* Features Section */}
      <section className="flex flex-col items-center py-10">
        <h2 className="font-['Poppins',Helvetica] font-semibold text-canalviptelegramsitewhite text-2xl text-center tracking-[0.50px] leading-[38px] mb-8">
          Por que entrar no nosso grupo?
        </h2>

        <div className="flex flex-wrap justify-center gap-5">
          {featureCards.map((feature, index) => (
            <Card
              key={index}
              className="w-[304px] h-[298px] bg-transparent border-0"
            >
              <CardContent className="p-0 h-full flex flex-col">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${feature.image})` }}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Warning Section */}
      <section className="flex justify-center my-8">
        <div className="w-[365px] text-center">
          <p className="font-canalviptelegram-site-semantic-heading-2-upper text-canalviptelegramsitecerulean tracking-[var(--canalviptelegram-site-semantic-heading-2-upper-letter-spacing)] leading-[var(--canalviptelegram-site-semantic-heading-2-upper-line-height)]">
            ESTE GRUPO SERÁ
            <br />
            CENSURADO EM BREVE
          </p>
        </div>
      </section>

      {/* Telegram Access Section */}
      <section className="min-h-[596px] w-full flex justify-center items-center [background:url(..//background-1.png)_50%_50%_/_cover]">
        <div className="flex flex-col w-full max-w-[1299px] items-start justify-center gap-5 pl-5 md:pl-[133px] pr-5 md:pr-[581.45px] py-2.5">
          <div className="w-full">
            <h2 className="mt-[-1px] font-canalviptelegram-site-semantic-heading-1 text-canalviptelegramsiteblack tracking-[var(--canalviptelegram-site-semantic-heading-1-letter-spacing)] leading-[var(--canalviptelegram-site-semantic-heading-1-line-height)]">
              Seu telegram
              <br />
              Aparece Esse Aviso?
            </h2>
          </div>

          <div className="w-full">
            <p className="mt-[-1px] font-['Poppins',Helvetica] font-medium text-canalviptelegramsiteblack text-[22px] tracking-[0.50px] leading-[25px]">
              Clique no botão abaixo para desbloquear o<br />
              acesso ao nosso grupo exclusivo +18!
            </p>
          </div>

          <a 
            href="https://t.me/tgdesbloqueio" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button className="w-[258.75px] h-[52px] [background:linear-gradient(161deg,rgba(51,51,51,1)_38%,rgba(0,0,0,1)_85%)] relative">
              <img
                className="absolute w-[18px] h-[18px] top-3.5 left-6"
                alt="Telegram icon"
                src="/component-1.svg"
              />
              <span className="absolute w-[190px] h-7 top-2.5 left-[45px] font-canalviptelegram-site-poppins-regular text-canalviptelegramsitewhite text-center tracking-[var(--canalviptelegram-site-poppins-regular-letter-spacing)] leading-[var(--canalviptelegram-site-poppins-regular-line-height)]">
                Desabilitar censura
              </span>
            </Button>
          </a>
        </div>
      </section>

      {/* Separator */}
      <Separator className="w-[1140px] h-[3px] mx-auto border-t-[3px] border-[#0bb3f3]" />

      {/* Footer */}
      <footer className="pt-px pb-2.5 px-2.5 bg-canalviptelegramsitecod-gray flex flex-col items-center w-full">
        <div className="flex justify-center items-center gap-4 mb-4">
          <a 
            href="https://play.google.com/store/apps/details?id=org.telegram.messenger&hl=pt_BR"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <img
              src="/google-play-png.png"
              alt="Play Store"
              className="w-[252px] h-[75px] object-contain"
            />
          </a>
          <a 
            href="https://apps.apple.com/br/app/telegram-messenger/id686449807"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <img
              src="/app-store-png.png"
              alt="App Store"
              className="w-[252px] h-[75px] object-contain"
            />
          </a>
        </div>
        <p className="font-canalviptelegram-site-semantic-heading-6 text-canalviptelegramsitegray text-center tracking-[var(--canalviptelegram-site-semantic-heading-6-letter-spacing)] leading-[var(--canalviptelegram-site-semantic-heading-6-line-height)]">
          Todos os direitos reservados © 2025 - Grupo Onlyfans no Telegram.
        </p>
      </footer>
    </main>
  );
};
