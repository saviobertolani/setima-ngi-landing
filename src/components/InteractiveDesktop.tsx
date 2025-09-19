import { useState, useEffect, useCallback, useMemo, memo, useRef } from "react";
import { createPortal } from "react-dom";
import type { MouseEvent, CSSProperties } from "react";
import { Instagram, Linkedin, Volume2, VolumeX } from "lucide-react";
import { useScrollParallax } from "./hooks/useScrollParallax";
import svgPaths from "../imports/svg-opxanfmkh6";
import imgAquamarine31 from "figma:asset/86d3063cb2abbf00887077f00ed48a7f75469ca4.png";
import img250127AlmapStillTeraTheTownFrenteV081 from "figma:asset/0e4c4fe22e1cb5636a33462c5ac2022a711c0f36.png";
import imgVwConstelattion313206X4CacambaPsb1 from "figma:asset/982534bd46b9e568691c0e5652a818ec5954a309.png";
import imgEmbaixo from "figma:asset/8c05f1bb3639a901cae85d722430ef33a62e7d28.png";
import imgAiToolsWaistUpPortraitAmericanShotOfASmilingPersonW47B472C7205A4D66Bacf38F70Faa6D811 from "figma:asset/705cc0dc55d0d5a68388c772e2b6117b6c99cd0f.png";
import imgAiToolsWaistUpPortraitAmericanShotOfASmilingPersonW47B472C7205A4D66Bacf38F70Faa6D813 from "figma:asset/363d73ec33595dde3285b1f284098774998f5dac.png";
import imgAiToolsWaistUpPortraitAmericanShotOfASmilingPersonW47B472C7205A4D66Bacf38F70Faa6D814 from "figma:asset/9a654ce0bbc1b437282de0c696914374ed89f641.png";
import imgAiToolsWaistUpPortraitAmericanShotOfASmilingPersonW47B472C7205A4D66Bacf38F70Faa6D815 from "figma:asset/8fca1f53bb6c91dfa7bb390285d6e25c4fdabb30.png";
import imgEmCima from "figma:asset/00bd12579795674c4cb2b293530ca5101339ddb5.png";
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
  // +2px para cobrir artefatos de arredondamento; -1px para centralizar
  width: "calc(max(1440px, 100vw) + 2px)",
  marginLeft: "-1px",
};

function IconeSeta() {
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


function LogoSetima() {
  return (
    <button 
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
      className="absolute h-[50px] left-[77px] top-[6280px] w-[120px] cursor-pointer hover:opacity-80 transition-opacity duration-200 bg-transparent border-none p-0" 
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
          <path d={svgPaths.pa05aa00} fill="#F8F8F2" id="Vector_9" />
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

function SocialIcons() {
  const openInNewTab = useCallback((url: string) => {
    try {
      const w = window.open(url, '_blank', 'noopener,noreferrer');
      if (!w) window.location.assign(url);
    } catch {
      window.location.href = url;
    }
  }, []);

  const handleInstagramClick = useCallback(() => {
    openInNewTab('https://instagram.com/setima');
  }, [openInNewTab]);

  const handleLinkedInClick = useCallback(() => {
    openInNewTab('https://linkedin.com/company/setima');
  }, [openInNewTab]);

  return (
    <div className="absolute flex items-center gap-4 left-[1280px] top-[6290px]" data-name="social icons">
      <button
        onClick={handleInstagramClick}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-[#f8f8f2] hover:bg-[#00f5b9] transition-all duration-300 cursor-pointer group"
        data-name="instagram button"
      >
        <Instagram size={20} className="text-black group-hover:text-black transition-colors duration-300" />
      </button>
      <button
        onClick={handleLinkedInClick}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-[#f8f8f2] hover:bg-[#00f5b9] transition-all duration-300 cursor-pointer group"
        data-name="linkedin button"
      >
        <Linkedin size={20} className="text-black group-hover:text-black transition-colors duration-300" />
      </button>
    </div>
  );
}

function CopyrightText() {
  return (
    <div className="absolute left-[77px] top-[6350px] w-[600px]" data-name="copyright text">
  <p className="fig-ubuntu-light fig-caption-12 fig-light not-italic whitespace-nowrap">
        © 2025 Setima. Todos os direitos reservados. Todo o conteúdo deste site é protegido por leis de propriedade intelectual.
      </p>
    </div>
  );
}

const Bloco08 = memo(() => {
  return (
    <div className="absolute contents left-0 top-[6238px]" data-name="Bloco 08">
      <div
        className="absolute h-[228px] top-[6238px] bg-black"
        style={fullBleedBackground}
      />
      <LogoSetima />
      <SocialIcons />
      <CopyrightText />
    </div>
  );
});

function Botao({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // Previne propagação para o header
    onClick();
  };

  return (
    <button 
      onClick={handleClick}
      className="relative shrink-0 size-[18px] cursor-pointer transition-all duration-300 hover:scale-110 group" 
      data-name="botao +"
      aria-label={isOpen ? "Fechar resposta" : "Abrir resposta"}
    >
      <div className={`transform transition-transform duration-500 ease-out ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <g id="botao +">
            {/* Linha vertical - desaparece quando aberto */}
            <line 
              id="Line 9" 
              stroke="var(--stroke-0, black)" 
              strokeWidth="2" 
              x1="9" 
              x2="9" 
              y1="4.37114e-08" 
              y2="18" 
              className={`transition-all duration-300 ease-out ${
                isOpen ? 'opacity-0 scale-75' : 'opacity-100 scale-100'
              }`}
            />
            {/* Linha horizontal - sempre visível, rotaciona para formar X */}
            <line 
              id="Line 10" 
              stroke="var(--stroke-0, black)" 
              strokeWidth="2" 
              x1="18" 
              x2="-4.37114e-08" 
              y1="9" 
              y2="9" 
              className="transition-all duration-300 ease-out"
            />
          </g>
        </svg>
      </div>
      
      {/* Indicador visual sutil para interatividade */}
      <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
        isOpen 
          ? 'bg-black/5 scale-125' 
          : 'bg-black/0 scale-100 group-hover:bg-black/5 group-hover:scale-125'
      }`} />
    </button>
  );
}

const Header = memo(({ question, isOpen, onToggle }: { question: string; isOpen: boolean; onToggle: () => void }) => {
  return (
    <div className={`box-border content-stretch flex items-start justify-between px-0 py-[12px] relative shrink-0 w-full cursor-pointer group transition-all duration-200 ${
      isOpen ? 'pb-2' : ''
    }`} data-name="header" onClick={onToggle}>
      <div className={`fig-ubuntu-bold fig-body-23 leading-[normal] not-italic relative flex-1 fig-dark pr-4 transition-colors duration-200 ${
        isOpen ? 'text-[#13171a]' : 'group-hover:text-[#13171a]'
      }`}>
        <p className="leading-[normal] m-0" dangerouslySetInnerHTML={{ __html: question }} />
      </div>
      <div className="flex-none pt-1">
        <Botao isOpen={isOpen} onClick={onToggle} />
      </div>
    </div>
  );
});

const Panel = memo(({ answer, isOpen }: { answer: string; isOpen: boolean }) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number>(0);

  useEffect(() => {
    if (panelRef.current) {
      // Mede a altura real do conteúdo
      const scrollHeight = panelRef.current.scrollHeight;
      setContentHeight(scrollHeight);
    }
  }, [answer]);

  return (
    <div 
      ref={panelRef}
      className="accordion-panel overflow-hidden transition-all duration-500 ease-out"
      style={{
        maxHeight: isOpen ? `${contentHeight + 20}px` : '0px', // +20px para padding
        opacity: isOpen ? 1 : 0,
        paddingBottom: isOpen ? '12px' : '0px'
      }}
      data-name="panel"
    >
  <div className={`fig-ubuntu-light fig-body-23 leading-[normal] not-italic fig-dark w-full transition-transform duration-300 ease-out ${
        isOpen ? 'transform translate-y-0' : 'transform -translate-y-2'
      }`}>
        <p className="m-0 leading-[normal] pt-2">{answer}</p>
      </div>
    </div>
  );
});

const Acordeon = memo(({ question, answer, isOpen, onToggle }: { 
  question: string; 
  answer: string; 
  isOpen: boolean; 
  onToggle: () => void;
}) => {
  return (
    <div className={`relative shrink-0 w-full accordion-item transition-all duration-300 ease-out border-b border-black ${
      isOpen ? 'bg-black/1' : 'bg-transparent'
    }`} data-name="Acordeon">
      <div className="content-stretch flex flex-col items-start justify-start relative w-full">
        <Header question={question} isOpen={isOpen} onToggle={onToggle} />
        <Panel answer={answer} isOpen={isOpen} />
      </div>
      

    </div>
  );
});

const Frame1 = memo(({ openAccordion, toggleAccordion }: { 
  openAccordion: number | null; 
  toggleAccordion: (index: number) => void;
}) => {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-start left-[63px] top-[5843px] w-[1280px]">
      {faqData.map((item, i) => (
        <Acordeon 
          key={`faq-${i}`}
          question={item.question}
          answer={item.answer}
          isOpen={openAccordion === i}
          onToggle={() => toggleAccordion(i)}
        />
      ))}
    </div>
  );
});

const Bloco07 = memo(({ openAccordion, toggleAccordion }: { 
  openAccordion: number | null; 
  toggleAccordion: (index: number) => void;
}) => {
  // Calcula altura adicional baseada no accordion aberto
  const extraHeight = openAccordion !== null ? 200 : 0; // Estimativa de altura extra quando expandido
  
  return (
    <div className="absolute contents left-0 top-[5630px]" data-name="Bloco 07">
      <div 
        className="absolute bg-[#f8f8f2] top-[5630px] transition-all duration-500 ease-out" 
        style={{ ...fullBleedBackground, height: `${608 + extraHeight}px` }}
      >
        {/* Efeitos visuais sutis para indicar interatividade */}
        
        {/* Pontos decorativos que "pulsam" sutilmente para indicar interatividade */}
        <div className="absolute right-16 top-20">
          <div className="w-2 h-2 bg-[#00f5b9]/30 rounded-full animate-pulse" 
               style={{ animationDelay: '0s', animationDuration: '3s' }} />
        </div>
        <div className="absolute right-20 top-32">
          <div className="w-1.5 h-1.5 bg-[#00f5b9]/20 rounded-full animate-pulse" 
               style={{ animationDelay: '1s', animationDuration: '3s' }} />
        </div>
        <div className="absolute right-12 top-44">
          <div className="w-1 h-1 bg-[#00f5b9]/25 rounded-full animate-pulse" 
               style={{ animationDelay: '2s', animationDuration: '3s' }} />
        </div>
        
        {/* Linha decorativa sutil que "se move" para chamar atenção */}
        <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#00f5b9]/20 to-transparent opacity-60">
          <div className="relative h-full">
            <div className="absolute top-0 right-0 w-full h-8 bg-[#00f5b9]/40 animate-pulse" 
                 style={{ 
                   animation: 'float 4s ease-in-out infinite',
                   animationDelay: '0.5s' 
                 }} />
          </div>
        </div>
        
        {/* Sombra interna sutil para dar profundidade */}
        <div className="absolute inset-0 shadow-inner opacity-20 pointer-events-none" 
             style={{ 
               boxShadow: 'inset 0 2px 8px rgba(0, 245, 185, 0.1)' 
             }} />
        

      </div>
      {/* Título da seção (posicionado absoluto como no design) */}
      <div className="absolute left-[63px] top-[5764px] w-[1314px] z-[10] fig-ubuntu-light fig-title-45 fig-dark text-smooth not-italic">
        <p className="m-0">DÚVIDAS FREQUENTES</p>
      </div>
      <Frame1 openAccordion={openAccordion} toggleAccordion={toggleAccordion} />
    </div>
  );
});

const Bloco06 = memo(() => {
  const titleParallax = useScrollParallax({ speed: -0.06 });
  const bulletParallax = useScrollParallax({ speed: -0.04 });
  const bgParallax = useScrollParallax({ speed: -0.05 });
  const clampY = (v: number) => Math.max(-30, Math.min(30, v));
  return (
    <div className="absolute contents left-[-132px] top-[4380px]" data-name="Bloco 06">
      <div
        className="absolute bg-[#13171a] h-[1250px] top-[4380px]"
        style={{ ...fullBleedBackground, zIndex: 0 }}
      />
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[852px] left-[-132px] top-[4656px] w-[1515px]"
        data-name="aquamarine (3) 1"
        style={{
          backgroundImage: `url('${imgAquamarine31}')`,
          backgroundPosition: `50% calc(50% + ${clampY(bgParallax.offsetY).toFixed(2)}px)`,
        }}
      />
      <div className="absolute left-[77px] top-[4530px] w-[987px] fig-ubuntu-light fig-title-45 fig-light text-smooth not-italic" style={titleParallax.tw}>
        <p className="m-0">O FLUXO NGI: DA ESTRATÉGIA À PRODUÇÃO, CRIATIVIDADE E TÉCNICA ACELERADAS PELA IA.</p>
      </div>
      <div className="absolute left-[1082px] top-[5497px] w-[326px] fig-subtitle-32-bold fig-light leading-[0] not-italic" style={bulletParallax.tw}>
        <p className="leading-[normal]">+ IMPACTANTE</p>
      </div>
      <div className="absolute left-[1082px] top-[5455px] w-[288px] fig-subtitle-32-bold fig-light leading-[0] not-italic" style={bulletParallax.tw}>
        <p className="leading-[normal]">+ ESCALÁVEL</p>
      </div>
      <div className="absolute left-[1082px] top-[5412px] w-[256px] fig-subtitle-32-bold fig-light leading-[0] not-italic" style={bulletParallax.tw}>
        <p className="leading-[normal]">+ RÁPIDO</p>
      </div>
    </div>
  );
});

const Bloco05 = memo(() => {
  const titleParallax = useScrollParallax({ speed: -0.06 });
  const bodyParallax = useScrollParallax({ speed: -0.04 });
  return (
    <div className="absolute contents left-0 top-[3780px]" data-name="Bloco 05">
  <div
    className="absolute bg-[#f8f8f2] h-[600px] left-0 top-[3780px] w-[1440px]"
  />
  <div className="absolute left-[816px] top-[4136px] w-[421px] fig-body-23 fig-dark text-smooth not-italic leading-[26px]" style={bodyParallax.tw}>
    <p className="m-0 leading-[26px]">Integramos criatividade, estratégia e tecnologia em um só fluxo, criando conteúdos relevantes de maneira mais rápida, escalável e impactante.</p>
      </div>
  <div className="absolute left-[181px] top-[3933px] w-[590px] fig-ubuntu-light fig-title-45 fig-dark text-smooth not-italic leading-[52px]" style={titleParallax.tw}>
    <p className="mb-0 leading-[52px]">MAIS DE 60 PROJETOS</p>
    <p className="mb-0 leading-[52px]">EM 2025 QUE AJUDARAM NOSSOS CLIENTES A ECONOMIZAR MILHÕES</p>
    <p className="mb-0 leading-[52px]">EM COMPARAÇÃO A PRODUÇÕES TRADICIONAIS.</p>
      </div>
    </div>
  );
});

// Array de imagens da galeria - prefere ativos locais do Figma se existirem
const localGallery = getGalleryAssets();
const galleryList = (localGallery.images.length
  ? localGallery.images.map((src, idx) => ({
      id: idx,
      src,
      mask: localGallery.mask ?? img250127AlmapStillTeraTheTownFrenteV82,
      thumbnail: localGallery.thumbs?.[idx] ?? src,
      alt: `gallery-${String(idx + 1).padStart(2, '0')}`
    }))
  : []
);

function ImagemGrande({ activeIndex = 0 }: { activeIndex?: number }) {
  const fallback = { src: '', mask: localGallery.mask ?? img250127AlmapStillTeraTheTownFrenteV82 } as any;
  const activeImage = galleryList[activeIndex] ?? galleryList[0] ?? fallback;
  // Sutil parallax interno via background-position (não move o container)
  const imgParallax = useScrollParallax({ speed: -0.05 });
  const clampImg = (v:number) => Math.max(-30, Math.min(30, v));
  // Escala responsiva: 1 em >=1440px, diminui proporcionalmente abaixo disso
  const [scale, setScale] = useState(1);
  // Fit inteligente por imagem
  const [bgSize, setBgSize] = useState<'cover' | 'contain'>('cover');
  const WINDOW_W = 1440;
  const WINDOW_H = 970;
  const WINDOW_RATIO = WINDOW_W / WINDOW_H; // ~1.4845
  const THRESH = 0.06; // 6% de tolerância
  // Mantemos a janela visível exatamente em top=2510 independente do scale.
  const deltaFix = 0;
  useEffect(() => {
    const update = () => {
      const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
      setScale(Math.min(1, vw / 1440));
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // Atualiza background-size conforme aspect ratio da imagem ativa
  useEffect(() => {
    let cancelled = false;
    const src = activeImage?.src;
    if (!src) return;
    const img = new Image();
    img.onload = () => {
      if (cancelled) return;
      const ratio = img.width / img.height;
      const diff = Math.abs(ratio - WINDOW_RATIO) / WINDOW_RATIO;
      // Se a diferença de aspecto for pequena, usamos cover para evitar barras; senão contain para não cortar demais
      setBgSize(diff <= THRESH ? 'cover' : 'contain');
    };
    img.src = src;
    return () => { cancelled = true; };
  }, [activeImage?.src]);

  return (
    <div className="absolute contents left-0" data-name="imagem grande">
      {/* Wrapper centralizado e escalável */}
      <div
        className="absolute left-1/2"
        style={{
          // Mantém a janela interna (top 292 dentro do wrapper) sempre ancorada em 2510px na página,
          // independente do scale aplicado ao wrapper.
          top: `${2510 - 292 * scale + deltaFix}px`,
          width: '2122px',
          height: '1274px',
          transform: `translateX(-50%) scale(${scale})`,
          transformOrigin: 'top center',
          willChange: 'transform'
        }}
      >
        {/* Janela centralizada 1440x970 com clipping retangular estável */}
        <div
          className="absolute left-1/2 top-[292px] translate-x-[-50%] overflow-hidden"
          style={{
            width: '1440px',
            height: '970px',
            backgroundColor: '#13171a',
            borderRadius: '0px'
          }}
        >
          <div
            className="absolute inset-0 bg-no-repeat"
            style={{
              backgroundImage: `url('${activeImage.src}')`,
              backgroundPosition: `50% calc(50% + ${clampImg(imgParallax.offsetY).toFixed(2)}px)`,
              backgroundSize: bgSize,
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden'
            }}
          />
        </div>
      </div>
    </div>
  );
}

function ImagensCarrossel({ activeIndex, onThumbnailClick }: { 
  activeIndex: number; 
  onThumbnailClick: (index: number) => void; 
}) {
  const [showNavHint, setShowNavHint] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);
  
  // Posições exatas das miniaturas do design original
  // Conforme Figma (lefts absolutos para botões com w=98)
  const thumbnailLefts = [289, 398, 507, 616, 725, 834, 943, 1052];

  // Animação de dica de navegação após scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Mostra dica após 1 segundo de visualização
            const timer = setTimeout(() => {
              setShowNavHint(true);
              // Remove a dica após 3 segundos
              setTimeout(() => setShowNavHint(false), 3000);
            }, 1000);
            
            return () => clearTimeout(timer);
          }
        });
      },
      { threshold: 0.6 }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => {
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current);
      }
    };
  }, []);

  const count = Math.min(8, galleryList.length);
  return (
    <div
      ref={galleryRef}
      className="absolute"
  style={{ left: 0, top: '3370px', zIndex: 10 }}
      data-name="imagens carrossel"
    >
      {Array.from({ length: count }).map((_, index) => {
        const image = galleryList[index];
        return (
          <button
            key={image.id}
            onClick={() => onThumbnailClick(index)}
            className={`absolute size-[98px] top-0 cursor-pointer rounded-lg overflow-hidden transition-all duration-500 ease-out transform-gpu thumbnail-nav-hint ${
              activeIndex === index 
                ? 'scale-105 shadow-lg shadow-black/20' 
                : 'hover:scale-110 hover:shadow-xl hover:shadow-black/25 hover:-translate-y-1'
            } ${
              showNavHint && index !== activeIndex ? 'thumbnail-breathing' : ''
            }`}
            style={{ 
              left: `${thumbnailLefts[index]}px`,
              animationDelay: `${index * 150}ms`,
              boxShadow: activeIndex === index ? '0 0 0 2px #00f5b9' : undefined
            }}
            data-name={`thumbnail-${index}`}
            aria-pressed={activeIndex === index}
            tabIndex={0}
            title={image.alt}
          >
            <div 
              className="absolute inset-0 bg-center bg-cover bg-no-repeat transition-all duration-300"
              style={{ 
                backgroundImage: `url('${image.thumbnail}')`,
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden'
              }}
            />
            <div className="absolute inset-0 transition-all duration-300 bg-black/0 hover:bg-black/5" />
          </button>
        );
      })}
    </div>
  );
}

const Bloco03 = memo(() => {
  return (
    <div className="absolute contents left-0 top-[1540px]" data-name="Bloco 03">
      <div
        className="absolute bg-[#f8f8f2] h-[970px] top-[1540px]"
        data-name="background"
        style={fullBleedBackground}
      />
      <VideoTera3D />
  <div className="absolute left-1/2 top-[2390px] translate-x-[-50%] w-[715px] text-center fig-body-23 fig-dark text-smooth not-italic">
        <p className="m-0">O 3D já trascende o universo de stills e CGI: tornou-se linguagem, experiência e presença digital que é capaz de capturar e converter.</p>
      </div>
  <div className="absolute left-1/2 top-[1692px] translate-x-[-50%] w-[1121px] text-center fig-title-45 fig-dark text-smooth not-italic">
        <p className="mb-0 fig-ubuntu-light">{titles.section3.line1}</p>
        <p className="fig-ubuntu-bold">{titles.section3.line2}</p>
      </div>
    </div>
  );
});

function Bloco04() {
  const [galleryActiveIndex, setGalleryActiveIndex] = useState(0);
  const handleGalleryThumbnailClick = useCallback((index: number) => {
    setGalleryActiveIndex(index);
  }, []);
  // Garante limite pelo total disponível
  const maxIndex = Math.max(0, Math.min(galleryList.length - 1, galleryActiveIndex));
  return (
    <div className="absolute contents left-0 top-[2510px]" data-name="Bloco 04">
  {/* Faixa de fundo abaixo da imagem grande (branca como no layout) */}
  <div className="absolute bg-[#13171a] h-[300px] top-[3480px]" data-name="background" style={fullBleedBackground} />
      <ImagemGrande activeIndex={maxIndex} />
      <ImagensCarrossel activeIndex={maxIndex} onThumbnailClick={handleGalleryThumbnailClick} />
    <div className="absolute left-1/2 top-[3653px] translate-x-[-50%] w-[905px] text-center fig-body-23 fig-light text-smooth not-italic">
        <p className="m-0">Tenha um digital twin do seu produto e desdobre-o em conteúdos para redes sociais, e-commerce, experiências interativas, mídia OOH, propaganda, filmes, fotos e muito mais.</p>
      </div>
  <div className="absolute left-1/2 top-[3533px] translate-x-[-50%] w-[1121px] text-center fig-ubuntu-light fig-title-45 fig-light text-smooth not-italic">
        <p className="mb-0">UM ASSET, INFINITAS POSSIBILIDADES.</p>
        <p className="fig-ubuntu-bold">SEU BUDGET OTIMIZADO AO MÁXIMO.</p>
      </div>
    </div>
  );
}

// (duplicate Bloco06 removed)

const VideoAqui = memo(() => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [muted, setMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  // Portal sempre para o body quando possível; posicionamos o wrapper com "position: fixed"
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null);
  const anchorRef = useRef<HTMLElement | null>(null);
  const [rect, setRect] = useState<{ left: number; top: number; width: number; height: number } | null>(null);
  const [debugHighlight, setDebugHighlight] = useState(false);
  const isDebug = typeof window !== 'undefined' && new URLSearchParams(window.location.search).has('videoDebug');
  const primaryId = 'I9Wcs3Q3d4U';
  const fallbackId = 'M7lc1UVf-VE';
  const [videoId, setVideoId] = useState<string>(primaryId);
  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://example.com';
  const src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&disablekb=1&fs=0&iv_load_policy=3&modestbranding=1&playsinline=1&rel=0&showinfo=0&enablejsapi=1&origin=${encodeURIComponent(origin)}`;

  const sendCommand = useCallback((func: string, args: any[] = []) => {
    const win = iframeRef.current?.contentWindow;
    if (!win) return;
    const message = JSON.stringify({ event: 'command', func, args });
    win.postMessage(message, '*');
  }, []);

  const toggleMute = useCallback(() => {
    if (muted) {
      sendCommand('unMute');
      setMuted(false);
    } else {
      sendCommand('mute');
      setMuted(true);
    }
  }, [muted, sendCommand]);

  const togglePlay = useCallback(() => {
    if (isPlaying) {
      sendCommand('pauseVideo');
      setIsPlaying(false);
    } else {
      sendCommand('playVideo');
      setIsPlaying(true);
    }
  }, [isPlaying, sendCommand]);

  // Mute garantido e fallback simples
  useEffect(() => {
    const muteTimer = window.setTimeout(() => sendCommand('mute'), 500);
    const failTimer = window.setTimeout(() => {
      if (!loaded) setFailed(true);
    }, 3500);
    return () => {
      window.clearTimeout(muteTimer);
      window.clearTimeout(failTimer);
    };
  }, [sendCommand, loaded]);

  // Handler de mensagens do player
  useEffect(() => {
    const onMessage = (evt: MessageEvent) => {
      try {
        const allowed = typeof evt.origin === 'string' && (evt.origin.includes('youtube.com') || evt.origin.includes('youtube-nocookie.com'));
        if (!allowed) return;
        const data = typeof evt.data === 'string' ? JSON.parse(evt.data) : evt.data;
        if (!data) return;
        if (data.event === 'onError' && typeof data.info === 'number') {
          const code = data.info;
          if (code === 101 || code === 150 || code === 2 || code === 5) {
            if (videoId !== fallbackId) {
              setVideoId(fallbackId);
              setLoaded(false);
              setFailed(false);
            } else {
              setFailed(true);
            }
          }
        }
        if (data.event === 'infoDelivery' && !loaded) {
          setLoaded(true);
        }
      } catch {}
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, [loaded, fallbackId, videoId]);

  // Ativa debug opcional
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const active = Array.from(params.keys()).some(key => key.toLowerCase() === 'videodebug');
    if (!active) return;
    setDebugHighlight(true);
    const timer = window.setTimeout(() => setDebugHighlight(false), 30000);
    return () => window.clearTimeout(timer);
  }, []);

  // Portal alvo: usamos a própria âncora (#video1-anchor) para garantir stacking abaixo do header
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const anchor = document.getElementById('video1-anchor') as HTMLElement | null;
    anchorRef.current = anchor;
    // Garante que a âncora esteja interativa/visível
    if (anchor) {
  anchor.setAttribute('aria-hidden', 'false');
  // Fora do modo debug, a âncora não deve interceptar cliques nem sobrepor o player
  anchor.style.pointerEvents = isDebug ? 'auto' : 'none';
  // Força dimensões exatas do design para evitar influências de ancestors
  anchor.style.width = '958px';
  anchor.style.height = '538px';
  // Também persiste valores numéricos via dataset para referência do debug
  (anchor.dataset as any).fallbackWidth = String(anchor.offsetWidth || 958);
  (anchor.dataset as any).fallbackHeight = String(anchor.offsetHeight || 538);
  // Garante position absolute na âncora
  if (getComputedStyle(anchor).position !== 'absolute') anchor.style.position = 'absolute';
    }
  // Portal direto para a âncora
  setPortalTarget(anchor);

    const updateRect = () => {
      const el = anchorRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      let left = r.left;
      let top = r.top;
      let w = r.width;
      let h = r.height;
      const DEFAULT_W = 958;
      const DEFAULT_H = 538;
      // Fallback quando algum estilo externo faz o rect reportar 0 de largura/altura
      if (w < 1 || h < 1) {
        const ow = el.offsetWidth;
        const oh = el.offsetHeight;
        if (ow > 0) w = ow;
        if (oh > 0) h = oh;
      }
      // Fallback adicional: computed styles
      if (w < 1 || h < 1) {
        const cs = window.getComputedStyle(el);
        const cw = parseFloat(cs.width || '0');
        const ch = parseFloat(cs.height || '0');
        if (cw > 0) w = cw;
        if (ch > 0) h = ch;
        // Também tenta recomputar left/top via offsetParent + computed left/top
        const op = (el.offsetParent as HTMLElement | null);
        if (op) {
          const opRect = op.getBoundingClientRect();
          const cleft = parseFloat(cs.left || '0');
          const ctop = parseFloat(cs.top || '0');
          if (isFinite(cleft)) left = opRect.left + cleft;
          if (isFinite(ctop)) top = opRect.top + ctop;
        }
      }
      // Última linha de defesa: usa dimensões padrão conhecidas do design
      if (w < 1 && h >= 1) w = DEFAULT_W;
      if (h < 1 && w >= 1) h = DEFAULT_H;
      if (w < 1 && h < 1) { w = DEFAULT_W; h = DEFAULT_H; }
      // Evita updates desnecessários
      setRect(prev => {
        const same = prev && Math.abs(prev.left - left) < 0.5 && Math.abs(prev.top - top) < 0.5 && Math.abs(prev.width - w) < 0.5 && Math.abs(prev.height - h) < 0.5;
        if (same) return prev;
        return { left, top, width: w, height: h };
      });
    };

  // Observa mudanças da âncora para eventual debug
  updateRect();
  const ro = new ResizeObserver(() => updateRect());
  if (anchor) ro.observe(anchor);
  return () => ro.disconnect();
  }, []);

  // Wrapper absoluto ocupando a âncora inteira (#video1-anchor)
  const videoNode = (
    <div
      className="video-portal-wrapper absolute inset-0"
      style={{
        zIndex: 1,
        // Não deixar o wrapper interceptar cliques; os botões internos têm pointer-events: auto
        pointerEvents: 'none',
        outline: debugHighlight ? '2px solid rgba(0, 200, 255, 0.6)' : undefined,
        outlineOffset: debugHighlight ? '2px' : undefined,
        opacity: portalTarget ? 1 : 0
      }}
      aria-hidden={false}
    >
      <div
        className="absolute inset-0 overflow-hidden rounded-[20px]"
        style={{
          backgroundImage: `url('${imgVwConstelattion313206X4CacambaPsb1}')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          zIndex: 0,
          backgroundColor: '#0b0d0f'
        }}
      >
    <iframe
          ref={iframeRef}
          className="absolute inset-0 w-full h-full object-cover youtube-iframe"
          style={{
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
      // iframe não recebe cliques (para não bloquear CTA do header)
      pointerEvents: 'none'
          }}
          src={src}
          title="Sétima NGI Video"
          frameBorder="0"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen={false}
          referrerPolicy="origin-when-cross-origin"
          loading="eager"
          onLoad={() => setLoaded(true)}
        />
        {failed && (
          <a
            href="https://www.youtube.com/watch?v=I9Wcs3Q3d4U"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute left-1/2 top-1/2 z-[130] -translate-x-1/2 -translate-y-1/2 bg-[rgba(0,0,0,0.55)] text-white px-3 py-2 rounded"
            style={{ textDecoration: 'none' }}
            title="Abrir vídeo no YouTube"
          >
            Problema ao carregar o player — abrir no YouTube
          </a>
        )}
        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pausar vídeo' : 'Reproduzir vídeo'}
          className="absolute left-[24px] bottom-[24px] z-[120] w-10 h-10 rounded-full bg-[rgba(0,0,0,0.55)] flex items-center justify-center text-white hover:bg-[rgba(0,0,0,0.75)] transition-colors cursor-pointer"
          style={{ pointerEvents: 'auto' }}
        >
          {isPlaying ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="6" y="4" width="4" height="16" fill="currentColor" />
              <rect x="14" y="4" width="4" height="16" fill="currentColor" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5v14l11-7L8 5z" fill="currentColor" />
            </svg>
          )}
        </button>
        <button
          type="button"
          onClick={toggleMute}
          aria-label={muted ? 'Ativar som' : 'Mutar vídeo'}
          className="absolute right-[24px] bottom-[24px] z-[120] w-10 h-10 rounded-full bg-[rgba(0,0,0,0.55)] flex items-center justify-center text-white hover:bg-[rgba(0,0,0,0.75)] transition-colors cursor-pointer"
          style={{ pointerEvents: 'auto' }}
        >
          {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>
      </div>
    </div>
  );

  // Se a âncora não foi encontrada por algum motivo, ainda renderiza inline como fallback visível
  if (!portalTarget) return videoNode;
  return (
    <>
    {isDebug && (
        <div style={{ position: 'fixed', left: 8, top: 8, zIndex: 10000, background: 'rgba(0,0,0,0.7)', color: '#fff', padding: '6px 8px', borderRadius: 6, fontSize: 11, lineHeight: '14px', pointerEvents: 'none' }}>
          <div>Video Debug</div>
      <div>portal: {portalTarget?.id ? `#${portalTarget.id}` : (portalTarget?.tagName?.toLowerCase() || 'none')}</div>
          <div>anchorEl: {anchorRef.current ? '#video1-anchor' : 'not-found'}</div>
      <div>rect: {rect ? `${Math.round(rect.left)},${Math.round(rect.top)} ${Math.round(rect.width)}x${Math.round(rect.height)}` : 'null'}</div>
          {anchorRef.current && (
            <div style={{opacity:0.9}}>offset: {anchorRef.current.offsetWidth}x{anchorRef.current.offsetHeight}</div>
          )}
          {anchorRef.current && (
            <div style={{opacity:0.9}}>computed: {parseFloat(getComputedStyle(anchorRef.current).width || '0')}x{parseFloat(getComputedStyle(anchorRef.current).height || '0')}</div>
          )}
          {anchorRef.current && (
            <div style={{opacity:0.8}}>fallback(ds): {anchorRef.current.dataset.fallbackWidth}x{anchorRef.current.dataset.fallbackHeight}</div>
          )}
          <div>loaded: {String(loaded)}</div>
          <div>failed: {String(failed)}</div>
        </div>
      )}
    {portalTarget ? createPortal(videoNode, portalTarget) : null}
    </>
  );
});

const VideoTera3D = memo(() => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [muted, setMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://example.com';
  const src = `https://www.youtube.com/embed/sRxnxzG2UzM?autoplay=1&mute=1&loop=1&playlist=sRxnxzG2UzM&controls=0&disablekb=1&fs=0&iv_load_policy=3&modestbranding=1&playsinline=1&rel=0&showinfo=0&enablejsapi=1&origin=${encodeURIComponent(origin)}`;

  const sendCommand = useCallback((func: string, args: any[] = []) => {
    const win = iframeRef.current?.contentWindow;
    if (!win) return;
    const message = JSON.stringify({ event: 'command', func, args });
    win.postMessage(message, '*');
  }, []);

  const toggleMute = useCallback(() => {
    if (muted) {
      sendCommand('unMute');
      setMuted(false);
    } else {
      sendCommand('mute');
      setMuted(true);
    }
  }, [muted, sendCommand]);

  const togglePlay = useCallback(() => {
    if (isPlaying) {
      sendCommand('pauseVideo');
      setIsPlaying(false);
    } else {
      sendCommand('playVideo');
      setIsPlaying(true);
    }
  }, [isPlaying, sendCommand]);

  useEffect(() => {
    const t = setTimeout(() => sendCommand('mute'), 500);
    return () => clearTimeout(t);
  }, [sendCommand]);

  return (
    <div className="absolute block cursor-pointer h-[538px] left-1/2 object-cover top-[1823px] translate-x-[-50%] w-[1076px] rounded-lg overflow-hidden" data-name="video tera 3d exp argentina">
      <iframe
        ref={iframeRef}
        className="absolute inset-0 w-full h-full object-cover youtube-iframe"
        style={{ 
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          pointerEvents: 'none'
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
      <button
        type="button"
        onClick={toggleMute}
        aria-label={muted ? 'Ativar som' : 'Mutar vídeo'}
        className="absolute right-[16px] bottom-[16px] z-[10] w-10 h-10 rounded-full bg-[rgba(0,0,0,0.55)] flex items-center justify-center text-white hover:bg-[rgba(0,0,0,0.75)] transition-colors cursor-pointer"
      >
        {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
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
      <div className="absolute flex h-[173px] items-center justify-center left-0 top-[527px] w-[1440px]">
        <div className="flex-none scale-y-[-100%]">
          <div className="bg-center bg-cover bg-no-repeat h-[173px] w-[1440px]" data-name="embaixo" style={{ 
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

// Array com as imagens do carrossel com valores exatos do Figma
const carouselImages = [
  {
    src: imgAiToolsWaistUpPortraitAmericanShotOfASmilingPersonW47B472C7205A4D66Bacf38F70Faa6D811,
    mask: imgAiToolsWaistUpPortraitAmericanShotOfASmilingPersonW47B472C7205A4D66Bacf38F70Faa6D812,
    className: "absolute bg-center bg-cover bg-no-repeat h-[1116px] left-[-124px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[124px_120px] mask-size-[1440px_700px] top-[-120px] w-[1744px]"
  },
  {
    src: imgAiToolsWaistUpPortraitAmericanShotOfASmilingPersonW47B472C7205A4D66Bacf38F70Faa6D813,
    mask: imgAiToolsWaistUpPortraitAmericanShotOfASmilingPersonW47B472C7205A4D66Bacf38F70Faa6D812,
    className: "absolute bg-center bg-cover bg-no-repeat h-[1116px] left-[-124px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[124px_120px] mask-size-[1440px_700px] top-[-120px] w-[1744px]"
  },
  {
    src: imgAiToolsWaistUpPortraitAmericanShotOfASmilingPersonW47B472C7205A4D66Bacf38F70Faa6D814,
    mask: imgAiToolsWaistUpPortraitAmericanShotOfASmilingPersonW47B472C7205A4D66Bacf38F70Faa6D812,
    className: "absolute bg-center bg-cover bg-no-repeat h-[980px] left-[-10px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[10px_254px] mask-size-[1440px_700px] top-[-254px] w-[1531.47px]"
  },
  {
    src: imgAiToolsWaistUpPortraitAmericanShotOfASmilingPersonW47B472C7205A4D66Bacf38F70Faa6D815,
    mask: imgAiToolsWaistUpPortraitAmericanShotOfASmilingPersonW47B472C7205A4D66Bacf38F70Faa6D812,
    className: "absolute bg-center bg-cover bg-no-repeat h-[1007.22px] left-[-44px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[44px_74px] mask-size-[1440px_700px] top-[-74px] w-[1574px]"
  },
  {
    src: imgVwConstelattion313206X4CacambaPsb1,
    mask: imgAiToolsWaistUpPortraitAmericanShotOfASmilingPersonW47B472C7205A4D66Bacf38F70Faa6D812,
    className: "absolute bg-center bg-cover bg-no-repeat h-[936.894px] left-[-2.11px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[2.107px_138.894px] mask-size-[1440px_700px] top-[-138.89px] w-[1464.11px]"
  }
];

const AnimatedCarousel = memo(({ currentIndex, parallaxOffsetY }: { currentIndex: number; parallaxOffsetY?: number }) => {
  return (
    <div className="absolute h-[700px] w-[1440px] left-0 top-0">
      {carouselImages.map((image, index) => {
        const isActive = index === currentIndex;
    // Parallax interno por background-position-Y evita deslocar o container
    const clampedY = Math.max(-40, Math.min(40, parallaxOffsetY ?? 0));
        
        return (
          <div
            key={index}
            className={`${image.className} carousel-image-smooth`}
            style={{
              backgroundImage: `url('${image.src}')`,
              maskImage: `url('${image.mask}')`,
      // Move somente o conteúdo do background dentro do mesmo box
      backgroundPosition: `50% calc(50% + ${clampedY.toFixed(2)}px)`,
              opacity: isActive ? 1 : 0,
              zIndex: isActive ? 2 : 1,
      // Mantém aceleração via GPU sem alterar posição do elemento
      transform: 'translateZ(0)',
      willChange: 'background-position',
              backfaceVisibility: 'hidden',
              transition: 'opacity 800ms cubic-bezier(0.25, 0.1, 0.25, 1)',
              pointerEvents: 'none'
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
        if (window.scrollY > 0) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }}
      className="absolute h-[55.46px] left-[77px] top-[43px] w-[130.16px] cursor-pointer hover:opacity-80 transition-opacity duration-200 bg-transparent border-none p-0" 
      data-name="logo setima"
      title="Voltar ao topo"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 131 56">
        <g id="logo setima">
          <path d="M60.36 0V2.58L61.85 0H60.36Z" fill="var(--fill-0, #F8F8F2)" id="Vector" />
          <path d={svgPaths.p29b8e400} fill="var(--fill-0, #F8F8F2)" id="Vector_2" />
          <path d={svgPaths.p1cddd480} fill="var(--fill-0, #F8F8F2)" id="Vector_3" />
          <path d={svgPaths.p150bb300} fill="var(--fill-0, #F8F8F2)" id="Vector_4" />
          <path d={svgPaths.pce10580} fill="var(--fill-0, #F8F8F2)" id="Vector_5" />
          <path d={svgPaths.pc905f70} fill="var(--fill-0, #F8F8F2)" id="Vector_6" />
          <path d={svgPaths.p3d49680} fill="var(--fill-0, #F8F8F2)" id="Vector_7" />
          <path d={svgPaths.p30c6aa00} fill="var(--fill-0, #F8F8F2)" id="Vector_8" />
          <path d={svgPaths.pa05aa00} fill="var(--fill-0, #F8F8F2)" id="Vector_9" />
          <path d={svgPaths.p51f1a00} fill="var(--fill-0, #F8F8F2)" id="Vector_10" />
          <path d={svgPaths.p2cb69700} fill="var(--fill-0, #F8F8F2)" id="Vector_11" />
          <path d={svgPaths.p1fcd5800} fill="var(--fill-0, #F8F8F2)" id="Vector_12" />
          <path d={svgPaths.p1ded8980} fill="var(--fill-0, #F8F8F2)" id="Vector_13" />
          <path d={svgPaths.pd5bc600} fill="var(--fill-0, #F8F8F2)" id="Vector_14" />
          <path d={svgPaths.p1d3a92f0} fill="var(--fill-0, #F8F8F2)" id="Vector_15" />
          <path d={svgPaths.p13cce480} fill="var(--fill-0, #F8F8F2)" id="Vector_16" />
          <path d={svgPaths.p1cb04100} fill="var(--fill-0, #F8F8F2)" id="Vector_17" />
          <path d={svgPaths.p161a1d00} fill="var(--fill-0, #F8F8F2)" id="Vector_18" />
          <path d={svgPaths.p351136f0} fill="var(--fill-0, #F8F8F2)" id="Vector_19" />
          <path d={svgPaths.p2e21dd00} fill="var(--fill-0, #F8F8F2)" id="Vector_20" />
          <path d={svgPaths.p3ed2a500} fill="var(--fill-0, #F8F8F2)" id="Vector_21" />
          <path d={svgPaths.p27d43c00} fill="var(--fill-0, #F8F8F2)" id="Vector_22" />
          <path d={svgPaths.p1ffcc000} fill="var(--fill-0, #F8F8F2)" id="Vector_23" />
          <path d={svgPaths.p3b4e4100} fill="var(--fill-0, #F8F8F2)" id="Vector_24" />
          <path d={svgPaths.p39d87180} fill="var(--fill-0, #F8F8F2)" id="Vector_25" />
          <path d={svgPaths.p7a21f00} fill="var(--fill-0, #F8F8F2)" id="Vector_26" />
          <path d={svgPaths.pb51c280} fill="var(--fill-0, #F8F8F2)" id="Vector_27" />
          <path d={svgPaths.p26f4df80} fill="var(--fill-0, #F8F8F2)" id="Vector_28" />
          <path d={svgPaths.p3a1e9980} fill="var(--fill-0, #F8F8F2)" id="Vector_29" />
          <path d={svgPaths.pa41cf00} fill="var(--fill-0, #F8F8F2)" id="Vector_30" />
          <path d={svgPaths.p2f02f600} fill="var(--fill-0, #F8F8F2)" id="Vector_31" />
          <path d={svgPaths.p24de2400} fill="var(--fill-0, #F8F8F2)" id="Vector_32" />
          <path d={svgPaths.p1e84ff00} fill="var(--fill-0, #F8F8F2)" id="Vector_33" />
          <path d={svgPaths.p3698e200} fill="var(--fill-0, #F8F8F2)" id="Vector_34" />
          <path d={svgPaths.p15bfd180} fill="var(--fill-0, #F8F8F2)" id="Vector_35" />
          <path d={svgPaths.p2a930400} fill="var(--fill-0, #F8F8F2)" id="Vector_36" />
          <path d={svgPaths.p1871cc80} fill="var(--fill-0, #F8F8F2)" id="Vector_37" />
          <path d={svgPaths.p24c88680} fill="var(--fill-0, #F8F8F2)" id="Vector_38" />
          <path d={svgPaths.p32017280} fill="var(--fill-0, #F8F8F2)" id="Vector_39" />
          <path d={svgPaths.p651500} fill="var(--fill-0, #F8F8F2)" id="Vector_40" />
          <path d={svgPaths.p2b0b4d80} fill="var(--fill-0, #F8F8F2)" id="Vector_41" />
          <path d={svgPaths.p8daaf00} fill="var(--fill-0, #F8F8F2)" id="Vector_42" />
          <path d={svgPaths.p25430600} fill="var(--fill-0, #F8F8F2)" id="Vector_43" />
          <path d={svgPaths.p31de7f80} fill="var(--fill-0, #F8F8F2)" id="Vector_44" />
          <path d={svgPaths.p1daeec00} fill="var(--fill-0, #F8F8F2)" id="Vector_45" />
          <path d={svgPaths.p247a2400} fill="var(--fill-0, #F8F8F2)" id="Vector_46" />
          <path d={svgPaths.p3b6a4780} fill="var(--fill-0, #F8F8F2)" id="Vector_47" />
          <path d={svgPaths.p3885300} fill="var(--fill-0, #F8F8F2)" id="Vector_48" />
          <path d={svgPaths.p3fa00cf2} fill="var(--fill-0, #F8F8F2)" id="Vector_49" />
          <path d={svgPaths.p20f83700} fill="var(--fill-0, #F8F8F2)" id="Vector_50" />
          <path d={svgPaths.p25aa34c0} fill="var(--fill-0, #F8F8F2)" id="Vector_51" />
          <path d={svgPaths.p82d0ba8} fill="var(--fill-0, #F8F8F2)" id="Vector_52" />
        </g>
      </svg>
    </button>
  );
}

const Cabecalho = memo(({ onCallClick, isScrolled, showCTA, scale }: { 
  onCallClick: () => void; 
  isScrolled: boolean; 
  showCTA: boolean; 
  scale: number;
}) => {
  const backgroundStyle = useMemo(() => ({
    // Gradiente forte para contraste; opacidade será controlada separadamente
    background: 'linear-gradient(360deg, rgba(19, 23, 26, 0.72) 0%, rgba(19, 23, 26, 0.88) 100%)'
  }), []);

  // Largura do header baseada no scale para alinhar com o stage visível
  const headerWidth = typeof window !== 'undefined'
    ? Math.min(1440 * Math.max(0, Math.min(1, scale || 1)), window.innerWidth)
    : 1440 * Math.max(0, Math.min(1, scale || 1));

  return (
    <div 
      className="fixed h-[124px] top-0 z-[9999] transition-all duration-300 ease-out header-container"
      style={{
        left: '50%',
        width: `${headerWidth}px`,
        transform: 'translateX(-50%)',
        transformOrigin: 'top center',
        maxWidth: '100vw',
        boxShadow: isScrolled ? '0 6px 16px rgba(0,0,0,0.20)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.08)' : 'transparent'
      }}
      data-name="cabecalho"
    >
      <div 
        className="relative h-[124px] transition-all duration-300 ease-in-out"
  style={{ width: '1440px' }}
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
const CabecalhoPortal = (props: { onCallClick: () => void; isScrolled: boolean; showCTA: boolean; scale: number; }) => {
  if (typeof document === 'undefined') return null;
  return createPortal(<Cabecalho {...props} />, document.body);
};

export default function InteractiveDesktop({ headerScale = 1 }: { headerScale?: number }) {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  // CTA do header controlado por rolagem para evitar duplicidade com o CTA do herói
  const [showHeaderCTA, setShowHeaderCTA] = useState(false);

  const toggleAccordion = useCallback((index: number) => {
    setOpenAccordion(prev => prev === index ? null : index);
  }, []);

  const handleCallClick = useCallback(() => {
    try {
      const url = 'https://api.whatsapp.com/send/?phone=5511949528682&text&type=phone_number&app_absent=0';
      const w = window.open(url, '_blank', 'noopener,noreferrer');
      if (!w) window.location.assign(url);
    } catch {
      window.location.href = 'https://api.whatsapp.com/send/?phone=5511949528682&text&type=phone_number&app_absent=0';
    }
  }, []);

  // Carrossel simplificado
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % carouselImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Sistema de scroll
  useEffect(() => {
    let ticking = false;

    const handleUpdate = () => {
      if (typeof window === 'undefined') return;
      
      // Scroll tracking
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 10);
      // Threshold baseado no design (~560px de 700px de altura do herói) ajustado pela escala visível
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

    // Inicialização
    handleUpdate();
    
    // Event listeners
    window.addEventListener('scroll', onEvent, { passive: true });
    window.addEventListener('resize', onEvent, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', onEvent);
      window.removeEventListener('resize', onEvent);
    };
  }, [headerScale]);

  // Calcula altura dinâmica baseada no accordion aberto
  const dynamicHeight = useMemo(() => {
    const baseHeight = 6466; // Altura original do design
    const extraHeight = openAccordion !== null ? 200 : 0; // Espaço extra para accordion expandido
    return baseHeight + extraHeight;
  }, [openAccordion]);

  return (
    <div className="bg-white min-h-screen w-full overflow-x-hidden" data-name="Desktop - 1">
      {/* Header fixo via Portal */}
      <CabecalhoPortal 
        onCallClick={handleCallClick}
        isScrolled={isScrolled}
        showCTA={showHeaderCTA}
        scale={headerScale}
      />

      {/* Container interno centralizado - largura base 1440px */}
      <div 
        id="stage-root"
        className="relative"
        style={{
          width: '1440px',
          marginLeft: '50%',
          transform: 'translateX(-50%)',
          minHeight: `${dynamicHeight}px`
        }}
      >
        <Bloco01 
          onCallClick={handleCallClick} 
          currentImageIndex={currentImageIndex}
        />
        <Bloco02 />
        <Bloco03 />
        <Bloco04 />
        <Bloco05 />
        <Bloco06 />
        <Bloco07 openAccordion={openAccordion} toggleAccordion={toggleAccordion} />
        <Bloco08 />
      </div>
    </div>
  );
}
