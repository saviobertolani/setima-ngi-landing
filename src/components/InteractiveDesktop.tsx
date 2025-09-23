import React from "react";

// Stub temporário para desbloquear o build. TODO: restaurar versão completa após correção.
export default function InteractiveDesktop({ headerScale }: { headerScale: number }) {
  return null;
}

/*
import { useState, useEffect, useCallback, useMemo, memo, useRef, forwardRef } from "react";
import { createPortal } from "react-dom";
import type { MouseEvent, CSSProperties } from "react";
import { Instagram, Linkedin, Volume2, VolumeX } from "lucide-react";
import VolumeIcon from "./icons/VolumeIcon";
import { useScrollParallax } from "./hooks/useScrollParallax";
import svgPaths from "../imports/svg-opxanfmkh6";
import imgAquamarine31 from "@/assets/86d3063cb2abbf00887077f00ed48a7f75469ca4.webp";
import img250127AlmapStillTeraTheTownFrenteV081 from "@/assets/0e4c4fe22e1cb5636a33462c5ac2022a711c0f36.webp";
import imgVwConstelattion313206X4CacambaPsb1 from "@/assets/982534bd46b9e568691c0e5652a818ec5954a309.png";
import imgEmbaixo from "@/assets/8c05f1bb3639a901cae85d722430ef33a62e7d28.webp";
// Hero images - suas imagens PNG reais
import heroImage1 from "@/assets/hero-image-1.png"; // Ônibus transparente
import heroImage2 from "@/assets/hero-image-2.png"; // Mulher com óculos
import heroImage3 from "@/assets/hero-image-3.png"; // Evento ifood MOVE
import heroImage4 from "@/assets/hero-image-4.png"; // Caminhões de construção
import heroImage5 from "@/assets/hero-image-5.png"; // Carro VW no lago
import heroImage6 from "@/assets/hero-image-6.png"; // Fundo escuro texturizado
import imgEmCima from "@/assets/00bd12579795674c4cb2b293530ca5101339ddb5.webp";
import { img250127AlmapStillTeraTheTownFrenteV82, imgVwConstelattion313206X4CacambaPsb2, imgAiToolsWaistUpPortraitAmericanShotOfASmilingPersonW47B472C7205A4D66Bacf38F70Faa6D812 } from "../imports/svg-o73ic";
import { titles } from "../content/texts";
import { getGalleryAssets } from "../utils/gallerySources";

const faqData = [
  {
    question: "O que é uma content-tech?",
    answer: "Uma content-tech é uma empresa que combina criatividade, estratégia e tecnologia para criar conteúdos de forma mais eficiente, escalável e impactante. Utilizamos inteligência artificial, automação e outras tecnologias avançadas para otimizar todo o processo de produção de conteúdo."
  },
  {
    question: "Como a IA pode ajudar na produção de conteúdo?",
    answer: "A IA acelera o processo criativo através de geração automatizada de variações, otimização de workflows, análise preditiva de performance e personalização em massa. Isso permite criar mais conteúdo de qualidade em menos tempo."
  },
  {
    question: "Qual é a diferença entre CGI e NGI?",
    answer: "NGI (Next-Gen Imagery) representa a evolução do CGI tradicional, integrando inteligência artificial, automação e tecnologias emergentes para criar imagens e experiências mais realistas, interativas e eficientes de produzir."
  },
  {
    question: "Como vocês garantem a qualidade do conteúdo produzido?",
    answer: "Mantemos a qualidade através de processos rigorosos de QA, revisão criativa em múltiplas etapas, testes A/B contínuos e métricas de performance detalhadas. Nossa equipe combina expertise criativa com validação tecnológica."
  },
  {
    question: "Quais tipos de projeto vocês atendem?",
    answer: "Atendemos desde campanhas publicitárias e conteúdo para redes sociais até experiências interativas em 3D, e-commerce, mídia OOH e produção audiovisual. Nosso foco é em projetos que se beneficiem da integração entre criatividade e tecnologia."
  },
  {
    question: "Como funciona o processo de trabalho?",
    answer: "Nosso processo vai da estratégia inicial até a distribuição final, passando por conceituação, produção assistida por IA, refinamento criativo e análise de performance. Tudo integrado em um fluxo tecnológico otimizado."
  }
];

const fullBleedBackground: CSSProperties = {
  left: "50%",
  transform: "translateX(-50%)",
  // Componente temporário para desbloquear o build enquanto corrigimos o arquivo original corrompido.
  // TODO: restaurar a versão completa do InteractiveDesktop a partir do commit WIP anterior.
  export default function InteractiveDesktop({ headerScale }: { headerScale: number }) {
    return null;

  const sendCommand = useCallback((func: string, args: any[] = []) => {
    const win = iframeRef.current?.contentWindow;
    if (!win) return;
    const message = JSON.stringify({ event: 'command', func, args });
    win.postMessage(message, '*');
  }, []);

  const toggleMute = useCallback(() => {
    const Bloco04 = memo(() => {
      // Temporariamente desabilitado até refatorar o carrossel interno deste bloco
      return null;
    });
        style={{ 
          transform: 'translateZ(0) scale(1.2)',
          transformOrigin: 'center center',
          backfaceVisibility: 'hidden',
          pointerEvents: 'none',
          width: '100%',
          height: '100%',
          left: '0',
          top: '0'
        }}
        src={src}
        title="Sétima Tera 3D Experiência Argentina"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        loading="eager"
      />
      <button
        type="button"
        onClick={togglePlay}
        aria-label={isPlaying ? 'Pausar vídeo' : 'Reproduzir vídeo'}
        className="absolute left-[16px] bottom-[16px] z-[10] w-10 h-10 rounded-full bg-[rgba(0,0,0,0.55)] flex items-center justify-center text-white hover:bg-[rgba(0,0,0,0.75)] transition-colors cursor-pointer"
      >
        {isPlaying ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="4" width="4" height="16" fill="currentColor"/>
            <rect x="14" y="4" width="4" height="16" fill="currentColor"/>
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 5v14l11-7L8 5z" fill="currentColor"/>
          </svg>
        )}
      </button>
      {/* Botão de volume conforme especificações do Figma */}
      <button
        type="button"
        onClick={toggleMute}
        aria-label={muted ? 'Ativar som' : 'Mutar vídeo'}
        className="absolute z-[10] rounded-full transition-all duration-200 cursor-pointer hover:scale-110"
        style={{ 
          left: '94.14%',
          right: '1.86%',
          top: '83.48%',
          bottom: '8.96%',
          pointerEvents: 'auto'
        }}
      >
        {/* Círculo verde do Figma */}
        <div 
          className="absolute inset-0 rounded-full"
          style={{ 
            backgroundColor: '#00F5B9'
          }}
        />
        {/* Ícone de volume conforme Figma */}
        <div
          className="absolute"
          style={{
            left: '16.28%',
            right: '13.95%',
            top: '20.93%',
            bottom: '18.6%'
          }}
        >
          <VolumeIcon width="100%" height="100%" color="#13171A" muted={muted} />
        </div>
      </button>
    </div>
  );
});

function Bloco02() {
  // Parallax sutil para títulos e textos
  const h1Parallax = useScrollParallax({ speed: -0.06 });
  const p1Parallax = useScrollParallax({ speed: -0.04 });
  const p2Parallax = useScrollParallax({ speed: -0.04 });
  const debug = typeof window !== 'undefined' && new URLSearchParams(window.location.search).has('videoDebug');
  return (
  <div className="absolute contents left-0 top-[700px] z-[500]" data-name="Bloco 02">
      <div
        className="absolute bg-[#13171a] h-[840px] top-[700px]"
        data-name="background"
        style={fullBleedBackground}
      />
      {/* Âncora invisível usada para posicionar o vídeo via portal (position: fixed) */}
      <div
        id="video1-anchor"
  className="absolute left-[404px] top-[836px] w-[958px] h-[538px] z-[10]"
        aria-hidden="false"
        style={{ 
          pointerEvents: debug ? 'auto' : 'none', 
          outline: debug ? '2px solid red' : undefined, 
          outlineOffset: debug ? '2px' : undefined,
          boxShadow: debug ? 'inset 0 0 0 2px rgba(255,0,0,0.7), 0 0 0 2px rgba(255,0,0,0.35)' : undefined,
          background: debug ? 'rgba(255,0,0,0.08)' : undefined
        }}
      />
      
  <div className="absolute fig-ubuntu-light fig-title-45 fig-white text-smooth left-[77px] not-italic top-[887px] w-[271px]" style={h1Parallax.tw}>
        <p className="mb-0">O CGI AGORA É NGI:</p>
        <p>NEXT-GEN IMAGERY.</p>
      </div>
      
  <div className="absolute fig-ubuntu-light fig-body-23 fig-white text-smooth left-[77px] not-italic top-[1180px] w-[271px]" style={p1Parallax.tw}>
        <p className="m-0">Um novo fluxo de produção aonde 3D, IA e outras tecnologias trabalham juntas para escalar conteúdo com impacto e consistência.</p>
      </div>
      
  <div className="absolute fig-ubuntu-light fig-body-23 fig-white text-smooth left-[77px] not-italic top-[1396px] w-[1285px]" style={p2Parallax.tw}>
        <p className="m-0">Como uma content-tech, podemos atuar desde o conceito criativo até a distribuição multicanal e a análise de desempenho. Um fluxo sustentado por um stack tecnológico integrado que vai de IA à automação, do CMS/DAM ao analytics e além.</p>
      </div>
      
      <VideoAqui />
    </div>
  );
}

function Transparencias() {
  return (
    <div className="absolute contents left-0 top-[527px]" data-name="Transparências">
      {/* Full-bleed stripe to avoid lateral bars */}
      <div className="absolute h-[173px] top-[527px] full-bleed">
        <div className="flex-none scale-y-[-100%] h-full">
          <div className="bg-cover-center h-full w-full" data-name="embaixo" style={{ 
            backgroundImage: `url('${imgEmbaixo}')`,
            transform: 'translateZ(0) scaleY(-1)',
            backfaceVisibility: 'hidden',
            imageRendering: 'pixelated'
          }} />
        </div>
      </div>
    </div>
  );
}

// Array com as imagens do carrossel - 6 PNGs, render via <img> 1440x700 com máscara, sem distorção
const carouselImages = [
  {
    src: heroImage1,
    mask: imgAiToolsWaistUpPortraitAmericanShotOfASmilingPersonW47B472C7205A4D66Bacf38F70Faa6D812,
    alt: "Ônibus transparente com componentes internos visíveis",
  },
  {
    src: heroImage2,
    mask: imgAiToolsWaistUpPortraitAmericanShotOfASmilingPersonW47B472C7205A4D66Bacf38F70Faa6D812,
    alt: "Mulher profissional com óculos sorrindo",
  },
  {
    src: heroImage3,
    mask: imgAiToolsWaistUpPortraitAmericanShotOfASmilingPersonW47B472C7205A4D66Bacf38F70Faa6D812,
    alt: "Evento ifood MOVE com tapete vermelho",
  },
  {
    src: heroImage4,
    mask: imgAiToolsWaistUpPortraitAmericanShotOfASmilingPersonW47B472C7205A4D66Bacf38F70Faa6D812,
    alt: "Caminhões VW de construção com betoneiras",
  },
  {
    src: heroImage5,
    mask: imgAiToolsWaistUpPortraitAmericanShotOfASmilingPersonW47B472C7205A4D66Bacf38F70Faa6D812,
    alt: "Carro VW T-Cross estacionado próximo ao lago",
  },
  {
    src: heroImage6,
    mask: imgAiToolsWaistUpPortraitAmericanShotOfASmilingPersonW47B472C7205A4D66Bacf38F70Faa6D812,
    alt: "Fundo escuro texturizado com elementos sutis",
  },
];

const AnimatedCarousel = memo(({ currentIndex, parallaxOffsetY }: { currentIndex: number; parallaxOffsetY?: number }) => {
  return (
    <div className="absolute h-[700px] w-[1440px] left-0 top-0">
      {carouselImages.map((image, index) => {
        const isActive = index === currentIndex;
        const clampedY = Math.max(-40, Math.min(40, parallaxOffsetY ?? 0));

        return (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            decoding="async"
            className="absolute left-0 top-0 carousel-image-smooth"
            style={{
              width: '1440px',
              height: '700px',
              objectFit: 'contain', // preserva o recorte original sem esticar
              opacity: isActive ? 1 : 0,
              zIndex: isActive ? 2 : 1,
              // Parallax sutil movendo o conteúdo, sem alterar o box
              transform: `translateZ(0) translateY(${clampedY.toFixed(2)}px)`,
              willChange: 'transform, opacity',
              backfaceVisibility: 'hidden',
              transition: 'opacity 800ms cubic-bezier(0.25, 0.1, 0.25, 1)',
              pointerEvents: 'none',
              // Máscara alinhada 1:1 com o canvas 1440x700
              WebkitMaskImage: `url('${image.mask}')`,
              maskImage: `url('${image.mask}')`,
              WebkitMaskRepeat: 'no-repeat',
              maskRepeat: 'no-repeat',
              WebkitMaskSize: '1440px 700px',
              maskSize: '1440px 700px',
              WebkitMaskPosition: '0 0',
              maskPosition: '0 0',
            }}
          />
        );
      })}
    </div>
  );
});

const BackInicial = memo(({ currentImageIndex }: { currentImageIndex: number }) => {
  // Parallax sutil aplicado via background-position nas camadas internas
  const imagesParallax = useScrollParallax({ speed: -0.08 });
  return (
    <div
      className="absolute h-[700px] left-1/2 overflow-clip top-0 translate-x-[-50%] w-[1440px]"
      data-name="Back_inicial"
    >
      <AnimatedCarousel currentIndex={currentImageIndex} parallaxOffsetY={imagesParallax.offsetY} />
    </div>
  );
});

function IconeSeta1() {
  return (
    <div className="absolute inset-[39.86%_88.44%_38.19%_6.67%]" data-name="icone seta">
      <div className="absolute bottom-[-4.47%] left-0 right-[-4.59%] top-[-4.47%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 10">
          <g id="icone seta">
            <path d="M11.46 1L15.4 4.95L11.46 8.9" id="Vector" stroke="var(--stroke-0, #13171A)" strokeMiterlimit="10" />
            <path d="M15.4 4.95H0" id="Vector_2" stroke="var(--stroke-0, #13171A)" strokeMiterlimit="10" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function BotaoCall1({ onClick }: { onClick?: () => void }) {
  const ctaParallax = useScrollParallax({ speed: 0.08 });
  return (
    <div className="absolute h-[36px] left-1/2 translate-x-[-50%] top-[629px] w-[315px] pulse-animation" style={ctaParallax.tw}>
      <button 
        onClick={onClick}
        className="relative h-full w-full cursor-pointer hover:opacity-90 transition-opacity duration-200" 
        data-name="Botao call"
      >
        <div className="absolute bg-[#00f5b9] inset-0 rounded-[30px]" />
    <div className="absolute fig-ubuntu-regular fig-caption-12 text-black inset-[30.56%_6.67%_30.56%_13.65%] leading-[0] not-italic text-nowrap">
          <p className="leading-[normal] whitespace-pre">MARQUE UM CALL E SAIBA COMO FUNCIONA</p>
        </div>
        <IconeSeta1 />
      </button>
    </div>
  );
}

const Bloco01 = memo(({ onCallClick, currentImageIndex }: { 
  onCallClick: () => void; 
  currentImageIndex: number;
}) => {
  // Parallax sutil e aditivo (<= 0.1x), sem alterar posicionamento
  const titleParallax = useScrollParallax({ speed: -0.08 }) // Títulos grandes
  const textParallax = useScrollParallax({ speed: -0.06 }) // Textos normais

  return (
    <div className="absolute contents left-[-1px] top-0" data-name="Bloco 01">
      {/* Full-bleed background para eliminar barras laterais no herói */}
      <div
        className="absolute top-0 h-[700px]"
        style={{
          ...fullBleedBackground,
          zIndex: 0,
          // Gradiente sutil coerente com a arte do herói
      background: 'linear-gradient(180deg, #0f1418 0%, #0b0d0f 100%)'
        }}
        aria-hidden="true"
      />
      <Transparencias />
    <BackInicial currentImageIndex={currentImageIndex} />
    <BotaoCall1 onClick={onCallClick} />
      <div 
        className="absolute fig-ubuntu-light fig-title-40 fig-white text-smooth left-1/2 top-[527px] not-italic text-center translate-x-[-50%] whitespace-pre w-[1100px]"
        style={titleParallax.tw}
      >
        <p className="mb-0">A NOVA MATEMÁTICA DO MARKETING:</p>
        <p>MENOS CUSTO, MAIS IMPACTO.</p>
      </div>
      <div
        className="absolute fig-ubuntu-medium fig-subtitle-18 fig-white text-smooth left-1/2 top-[502px] not-italic text-center translate-x-[-50%] w-[800px]"
        style={textParallax.tw}
      >
        <p className="m-0">SOMOS UMA CONTENT-TECH</p>
      </div>
    </div>
  );
});

function IconeSeta2() {
  return (
    <div className="absolute inset-[39.86%_88.44%_38.19%_6.67%]" data-name="icone seta">
      <div className="absolute bottom-[-4.47%] left-0 right-[-4.59%] top-[-4.47%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 10">
          <g id="icone seta">
            <path d="M11.46 1L15.4 4.95L11.46 8.9" id="Vector" stroke="var(--stroke-0, #13171A)" strokeMiterlimit="10" />
            <path d="M15.4 4.95H0" id="Vector_2" stroke="var(--stroke-0, #13171A)" strokeMiterlimit="10" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function BotaoCall2({ onClick, isVisible }: { onClick?: () => void; isVisible: boolean }) {
  return (
    <div className={`absolute h-[36px] left-[1047px] top-[43px] w-[315px] pulse-animation transition-all duration-500 ease-in-out ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
    }`}>
      <button 
        onClick={onClick}
        className="relative h-full w-full cursor-pointer hover:opacity-90 transition-opacity duration-200" 
        data-name="Botao call"
      >
        <div className="absolute bg-[#00f5b9] inset-0 rounded-[30px]" />
  <div className="absolute fig-ubuntu-regular fig-caption-12 text-black inset-[30.56%_6.67%_30.56%_13.65%] leading-[14px] not-italic text-nowrap">
          <p className="leading-[14px] whitespace-pre">MARQUE UM CALL E SAIBA COMO FUNCIONA</p>
        </div>
        <IconeSeta2 />
      </button>
    </div>
  );
}

function LogoSetima1() {
  return (
    <button
      onClick={() => {
        if (window.scrollY > 0) window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
      className="absolute h-[55.46px] left-[77px] top-[43px] w-[130.16px] cursor-pointer hover:opacity-80 transition-opacity duration-200 bg-transparent border-none p-0"
      data-name="logo setima"
      title="Voltar ao topo"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 131 56">
        <g id="logo setima">
          <path d="M60.36 0V2.58L61.85 0H60.36Z" fill="#F8F8F2" id="Vector" />
          <path d={svgPaths.p29b8e400} fill="#F8F8F2" id="Vector_2" />
          <path d={svgPaths.p1cddd480} fill="#F8F8F2" id="Vector_3" />
          <path d={svgPaths.p150bb300} fill="#F8F8F2" id="Vector_4" />
          <path d={svgPaths.pce10580} fill="#F8F8F2" id="Vector_5" />
          <path d={svgPaths.pc905f70} fill="#F8F8F2" id="Vector_6" />
          <path d={svgPaths.p3d49680} fill="#F8F8F2" id="Vector_7" />
          <path d={svgPaths.p30c6aa00} fill="#F8F8F2" id="Vector_8" />
          <path d={svgPaths.p51f1a00} fill="#F8F8F2" id="Vector_10" />
          <path d={svgPaths.p2cb69700} fill="#F8F8F2" id="Vector_11" />
          <path d={svgPaths.p1fcd5800} fill="#F8F8F2" id="Vector_12" />
          <path d={svgPaths.p1ded8980} fill="#F8F8F2" id="Vector_13" />
          <path d={svgPaths.pd5bc600} fill="#F8F8F2" id="Vector_14" />
          <path d={svgPaths.p1d3a92f0} fill="#F8F8F2" id="Vector_15" />
          <path d={svgPaths.p13cce480} fill="#F8F8F2" id="Vector_16" />
          <path d={svgPaths.p1cb04100} fill="#F8F8F2" id="Vector_17" />
          <path d={svgPaths.p161a1d00} fill="#F8F8F2" id="Vector_18" />
          <path d={svgPaths.p351136f0} fill="#F8F8F2" id="Vector_19" />
          <path d={svgPaths.p2e21dd00} fill="#F8F8F2" id="Vector_20" />
          <path d={svgPaths.p3ed2a500} fill="#F8F8F2" id="Vector_21" />
          <path d={svgPaths.p27d43c00} fill="#F8F8F2" id="Vector_22" />
          <path d={svgPaths.p1ffcc000} fill="#F8F8F2" id="Vector_23" />
          <path d={svgPaths.p3b4e4100} fill="#F8F8F2" id="Vector_24" />
          <path d={svgPaths.p39d87180} fill="#F8F8F2" id="Vector_25" />
          <path d={svgPaths.p7a21f00} fill="#F8F8F2" id="Vector_26" />
          <path d={svgPaths.pb51c280} fill="#F8F8F2" id="Vector_27" />
          <path d={svgPaths.p26f4df80} fill="#F8F8F2" id="Vector_28" />
          <path d={svgPaths.p3a1e9980} fill="#F8F8F2" id="Vector_29" />
          <path d={svgPaths.pa41cf00} fill="#F8F8F2" id="Vector_30" />
          <path d={svgPaths.p2f02f600} fill="#F8F8F2" id="Vector_31" />
          <path d={svgPaths.p24de2400} fill="#F8F8F2" id="Vector_32" />
          <path d={svgPaths.p1e84ff00} fill="#F8F8F2" id="Vector_33" />
          <path d={svgPaths.p3698e200} fill="#F8F8F2" id="Vector_34" />
          <path d={svgPaths.p15bfd180} fill="#F8F8F2" id="Vector_35" />
          <path d={svgPaths.p2a930400} fill="#F8F8F2" id="Vector_36" />
          <path d={svgPaths.p1871cc80} fill="#F8F8F2" id="Vector_37" />
          <path d={svgPaths.p24c88680} fill="#F8F8F2" id="Vector_38" />
          <path d={svgPaths.p32017280} fill="#F8F8F2" id="Vector_39" />
          <path d={svgPaths.p651500} fill="#F8F8F2" id="Vector_40" />
          <path d={svgPaths.p2b0b4d80} fill="#F8F8F2" id="Vector_41" />
          <path d={svgPaths.p8daaf00} fill="#F8F8F2" id="Vector_42" />
          <path d={svgPaths.p25430600} fill="#F8F8F2" id="Vector_43" />
          <path d={svgPaths.p31de7f80} fill="#F8F8F2" id="Vector_44" />
          <path d={svgPaths.p1daeec00} fill="#F8F8F2" id="Vector_45" />
          <path d={svgPaths.p247a2400} fill="#F8F8F2" id="Vector_46" />
          <path d={svgPaths.p3b6a4780} fill="#F8F8F2" id="Vector_47" />
          <path d={svgPaths.p3885300} fill="#F8F8F2" id="Vector_48" />
          <path d={svgPaths.p3fa00cf2} fill="#F8F8F2" id="Vector_49" />
          <path d={svgPaths.p20f83700} fill="#F8F8F2" id="Vector_50" />
          <path d={svgPaths.p25aa34c0} fill="#F8F8F2" id="Vector_51" />
          <path d={svgPaths.p82d0ba8} fill="#F8F8F2" id="Vector_52" />
        </g>
      </svg>
    </button>
  );
}

const Cabecalho = memo(({ onCallClick, isScrolled, showCTA, scale, stageLeft, stageWidth, qa }: { 
  onCallClick: () => void; 
  isScrolled: boolean; 
  showCTA: boolean; 
  scale: number;
  stageLeft?: number;
  stageWidth?: number;
  qa?: boolean;
}) => {
  const backgroundStyle = useMemo(() => ({
    // Gradiente forte para contraste; opacidade será controlada separadamente
    background: 'linear-gradient(360deg, rgba(19, 23, 26, 0.72) 0%, rgba(19, 23, 26, 0.88) 100%)'
  }), []);

  // Largura do header baseada no scale para alinhar com o stage visível
  const headerWidth = stageWidth ?? (1440 * Math.max(0, Math.min(1, scale || 1)));

  return (
    <div 
      className="fixed h-[124px] top-0 z-[9999] transition-all duration-300 ease-out header-container"
      style={{
        left: stageLeft ?? '50%',
        width: `${headerWidth}px`,
        transform: stageLeft !== undefined ? 'none' : 'translateX(-50%)',
        transformOrigin: 'top center',
        boxShadow: isScrolled ? '0 6px 16px rgba(0,0,0,0.20)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.08)' : 'transparent',
        outline: qa ? '1px dashed rgba(0,255,0,0.6)' : 'none',
        outlineOffset: qa ? -1 : 0
      }}
      data-name="cabecalho"
    >
      <div 
        className="relative h-[124px] transition-all duration-300 ease-in-out"
        style={{
          width: '1440px',
          transform: `scale(${headerWidth / 1440})`,
          transformOrigin: 'top left',
          outline: qa ? '1px dashed rgba(255,0,0,0.6)' : 'none'
        }}
        data-name="em cima" 
      >
        {/* Overlay/Máscara de contraste - aparece apenas ao rolar */}
        <div 
          className="absolute h-[124px] left-0 top-0 w-[1440px] transition-all duration-300 ease-in-out" 
          style={{
            ...backgroundStyle,
            opacity: isScrolled ? 1 : 0,
            // Blur e saturação para melhorar legibilidade sobre fundos complexos
            backdropFilter: isScrolled ? 'blur(6px) saturate(120%)' : 'none',
            WebkitBackdropFilter: isScrolled ? 'blur(6px) saturate(120%)' : 'none',
            pointerEvents: 'none'
          }}
        />
        <BotaoCall2 onClick={onCallClick} isVisible={showCTA} />
        <LogoSetima1 />
      </div>
    </div>
  );
});

// Renderiza o header fora do container transformado para garantir position: fixed real
const CabecalhoPortal = (props: { onCallClick: () => void; isScrolled: boolean; showCTA: boolean; scale: number; stageLeft?: number; stageWidth?: number; qa?: boolean; }) => {
  if (typeof document === 'undefined') return null;
  return createPortal(<Cabecalho {...props} />, document.body);
};

export default function InteractiveDesktop({ headerScale = 1 }: { headerScale?: number }) {
  // Estado principal
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showHeaderCTA, setShowHeaderCTA] = useState(false);

  // FAQ toggle
  const toggleAccordion = useCallback((index: number) => {
    setOpenAccordion(prev => (prev === index ? null : index));
  }, []);

  // CTA principal (WhatsApp)
  const handleCallClick = useCallback(() => {
    try {
      const url = 'https://api.whatsapp.com/send/?phone=5511949528682&text&type=phone_number&app_absent=0';
      const w = window.open(url, '_blank', 'noopener,noreferrer');
      if (!w) window.location.assign(url);
    } catch {
      window.location.href = 'https://api.whatsapp.com/send/?phone=5511949528682&text&type=phone_number&app_absent=0';
    }
  }, []);

  // Carrossel automático (3s)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Scroll: header e CTA
  useEffect(() => {
    let ticking = false;
    const handleUpdate = () => {
      if (typeof window === 'undefined') return;
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 10);
      const threshold = Math.max(200, 560 * (headerScale || 1));
      setShowHeaderCTA(scrollY > threshold);
      ticking = false;
    };
    const onEvent = () => {
      if (!ticking) {
        requestAnimationFrame(handleUpdate);
        ticking = true;
      }
    };
    handleUpdate();
    window.addEventListener('scroll', onEvent, { passive: true });
    window.addEventListener('resize', onEvent, { passive: true });
    return () => {
      window.removeEventListener('scroll', onEvent);
      window.removeEventListener('resize', onEvent);
    };
  }, [headerScale]);

  // Altura dinâmica simples (abre espaço para o FAQ)
  const dynamicHeight = useMemo(() => 6466 + (openAccordion !== null ? 200 : 0), [openAccordion]);

  // Bloco 07 (FAQ)
  const Bloco07 = memo(({ openAccordion, toggleAccordion }: { openAccordion: number | null; toggleAccordion: (index: number) => void; }) => {
    const extraHeight = openAccordion !== null ? 200 : 0;
    return (
      <div className="absolute contents left-0 top-[5630px]" data-name="Bloco 07">
        <div
          className="absolute bg-[#f8f8f2] top-[5630px] transition-all duration-500 ease-out"
          style={{ ...fullBleedBackground, height: `${608 + extraHeight}px` }}
        >
          {/* Decor */}
          <div className="absolute right-16 top-20">
            <div className="w-2 h-2 bg-[#00f5b9]/30 rounded-full animate-pulse" style={{ animationDelay: '0s', animationDuration: '3s' }} />
          </div>
          <div className="absolute right-20 top-32">
            <div className="w-1.5 h-1.5 bg-[#00f5b9]/20 rounded-full animate-pulse" style={{ animationDelay: '1s', animationDuration: '3s' }} />
          </div>
          <div className="absolute right-12 top-44">
            <div className="w-1 h-1 bg-[#00f5b9]/25 rounded-full animate-pulse" style={{ animationDelay: '2s', animationDuration: '3s' }} />
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#00f5b9]/20 to-transparent opacity-60">
            <div className="relative h-full">
              <div className="absolute top-0 right-0 w-full h-8 bg-[#00f5b9]/40 animate-pulse" style={{ animation: 'float 4s ease-in-out infinite', animationDelay: '0.5s' }} />
            </div>
          </div>
          <div className="absolute inset-0 shadow-inner opacity-20 pointer-events-none" style={{ boxShadow: 'inset 0 2px 8px rgba(0, 245, 185, 0.1)' }} />
        </div>
        <div className="absolute left-[63px] top-[5764px] w-[1314px] z-[10] fig-ubuntu-light fig-title-45 fig-dark text-smooth not-italic">
          <p className="m-0">DÚVIDAS FREQUENTES</p>
        </div>
        <Frame1 openAccordion={openAccordion} toggleAccordion={toggleAccordion} />
      </div>
    );
  });

  return (
    <div className="bg-[#0b0d0f] min-h-screen w-full overflow-x-hidden" data-name="Desktop - 1">
      {/* Header fixo via Portal */}
      <CabecalhoPortal onCallClick={handleCallClick} isScrolled={isScrolled} showCTA={showHeaderCTA} scale={headerScale} />

      {/* Stage centralizado 1440px */}
      <div id="stage-root" className="relative" style={{ width: '1440px', marginLeft: '50%', transform: 'translateX(-50%)', minHeight: `${dynamicHeight}px` }}>
        <Bloco01 onCallClick={handleCallClick} currentImageIndex={currentImageIndex} />
        <Bloco02 />
        <Bloco03 />
        <Bloco04 />
        <Bloco07 openAccordion={openAccordion} toggleAccordion={toggleAccordion} />
      </div>
    </div>
  );
}