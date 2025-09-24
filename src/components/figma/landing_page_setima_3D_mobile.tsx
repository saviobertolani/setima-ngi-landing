import React, { useEffect, useState, useRef, useCallback } from 'react';

// Importando as imagens reais das animações
import heroImg1 from '../../assets/705cc0dc55d0d5a68388c772e2b6117b6c99cd0f.png';
import heroImg2 from '../../assets/363d73ec33595dde3285b1f284098774998f5dac.png';
import heroImg3 from '../../assets/012759f13f56517f1097b1fc4887ce210daa0750.png';
import heroImg4 from '../../assets/8fca1f53bb6c91dfa7bb390285d6e25c4fdabb30.png';
import heroImg5 from '../../assets/982534bd46b9e568691c0e5652a818ec5954a309.png';

// Importando os ícones do Figma
import LogoSetimaIcon from '../icons/LogoSetimaIcon';
import ArrowRightIcon from '../icons/ArrowRightIcon';
import PlusIcon from '../icons/PlusIcon';
import SocialMediaIcon from '../icons/SocialMediaIcon';
import ImageGridIcon from '../icons/ImageGridIcon';
import VolumeIcon from '../icons/VolumeIcon';

// Importando componentes
import FluxoNGISection from '../FluxoNGISection';
import { getFullBleedStyles, getResponsiveContainer, getResponsivePadding } from '../ResponsiveUtils';

export default function LandingPageSetima3DMobile() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroImages = [heroImg1, heroImg2, heroImg3, heroImg4, heroImg5];

  // Estados para o vídeo do bloco 3
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [muted, setMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [loaded, setLoaded] = useState(false);

  const videoId = '_9ZzNlJ9-FQ';
  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://example.com';
  const videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&disablekb=1&fs=0&iv_load_policy=3&modestbranding=1&playsinline=1&rel=0&showinfo=0&enablejsapi=1&origin=${encodeURIComponent(origin)}`;

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

  // Garantir que o vídeo inicie mutado
  useEffect(() => {
    const muteTimer = window.setTimeout(() => sendCommand('mute'), 500);
    return () => window.clearTimeout(muteTimer);
  }, [sendCommand]);

  // Handler de mensagens do player do YouTube
  useEffect(() => {
    const onMessage = (evt: MessageEvent) => {
      try {
        const allowed = typeof evt.origin === 'string' && 
          (evt.origin.includes('youtube.com') || evt.origin.includes('youtube-nocookie.com'));
        if (!allowed) return;
        
        const data = typeof evt.data === 'string' ? JSON.parse(evt.data) : evt.data;
        if (!data) return;
        
        if (data.event === 'infoDelivery' && !loaded) {
          setLoaded(true);
        }
      } catch {}
    };
    
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, [loaded]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div 
      data-figma-node="1:75" 
      style={{
        ...getResponsiveContainer('402px'),
        minHeight: '5714px',
        backgroundColor: '#FFFFFF',
        position: 'relative',
        fontFamily: 'Ubuntu, -apple-system, BlinkMacSystemFont, sans-serif'
      }}
    >
      {/* Header Fixo */}
    <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '87px',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        background: 'linear-gradient(180deg, rgba(19, 23, 26, 0.4) 0%, rgba(19, 23, 26, 0) 100%)'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '402px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
      padding: '0 clamp(16px, 6vw, 24px)'
        }}>
          {/* Logo Sétima */}
          <LogoSetimaIcon width={39} height={35} color="#FFFFFF" />

          {/* CTA Button */}
          <div style={{
            backgroundColor: '#00F5B9',
            borderRadius: '30px',
            padding: '8px 16px',
            fontSize: '10px',
            fontWeight: 400,
            color: '#000',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            MARQUE UM CALL
            <ArrowRightIcon width={15} height={8} color="#000000" />
          </div>
        </div>
      </div>

      {/* Bloco 01 - Hero (full-bleed, sem barras laterais) */}
      <div
        style={{
          ...getFullBleedStyles(),
          height: '874px',
          position: 'relative'
        }}
      >
        {/* Background Hero com animação */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${heroImages[currentImageIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'opacity 400ms ease-in-out'
          }}
        />

        {/* Top gradient (Figma) */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '175px',
            background:
              'linear-gradient(180deg, rgba(19, 23, 26, 0.4) 0%, rgba(19, 23, 26, 0) 100%)'
          }}
        />

        {/* Bottom gradient (Figma) */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '173px',
            background:
              'linear-gradient(180deg, rgba(19, 23, 26, 0) 0%, rgba(19, 23, 26, 0.4) 100%)'
          }}
        />

        {/* Content (Figma spacing/line-height) */}
        <div
          style={{
            position: 'absolute',
            bottom: '80px',
            left: '50%',
            transform: 'translateX(-50%)',
            color: '#FFFFFF',
            zIndex: 2,
            width: '100%',
            maxWidth: '402px',
            padding: `0 ${getResponsivePadding()}`
          }}
        >
          <div
            style={{
              fontSize: '15px',
              fontWeight: 500,
              lineHeight: '17.235px',
              letterSpacing: '0px',
              marginBottom: '20px',
              textAlign: 'left'
            }}
          >
            SOMOS UMA CONTENT-TECH
          </div>

          <h1
            style={{
              fontSize: '30px',
              fontWeight: 300,
              lineHeight: '32.312px',
              letterSpacing: '0px',
              margin: '0 0 30px 0',
              maxWidth: '296px',
              textAlign: 'left'
            }}
          >
            A NOVA MATEMÁTICA<br />
            DO MARKETING:<br />
            MENOS CUSTO,<br />
            MAIS IMPACTO.
          </h1>

          <div
            style={{
              backgroundColor: '#00F5B9',
              borderRadius: '30px',
              padding: '12px 32px',
              fontSize: '12px',
              lineHeight: '13.788px',
              fontWeight: 400,
              color: '#000',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px'
            }}
          >
            MARQUE UM CALL E SAIBA COMO FUNCIONA
            <ArrowRightIcon width={16} height={8} color="#000000" />
          </div>
        </div>
      </div>

      {/* Bloco 02 - O CGI AGORA É NGI */}
      <div style={{
  width: '100%',
        minHeight: '774px',
        backgroundColor: '#131A1A',
        padding: '88px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        <h2 style={{
          color: '#FFFFFF',
          fontSize: '30px',
          fontWeight: 300,
          lineHeight: '34.5px',
          margin: '0 0 40px 0',
          maxWidth: '297px'
        }}>
          O CGI AGORA É NGI:<br />
          NEXT-GEN IMAGERY.
        </h2>

        <p style={{
          color: '#FFFFFF',
          fontSize: '20px',
          fontWeight: 300,
          lineHeight: '23px',
          margin: '0 0 32px 0',
          maxWidth: '354px'
        }}>
          Um novo fluxo de produção aonde 3D, IA e outras tecnologias trabalham juntas para escalar conteúdo com impacto e consistência.
        </p>

        {/* Video placeholder */}
        <div style={{
          width: '100%',
          maxWidth: '355px',
          height: '199px',
          backgroundColor: '#D9D9D9',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '32px',
          backgroundImage: `url(${heroImg5})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          <div style={{
            color: '#EF0F0F',
            fontSize: '45px',
            fontWeight: 700,
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}>
            vídeo
          </div>
        </div>

        <p style={{
          color: '#FFFFFF',
          fontSize: '20px',
          fontWeight: 300,
          lineHeight: '23px',
          margin: 0,
          maxWidth: '354px'
        }}>
          Como uma content-tech, podemos atuar desde o conceito criativo até a distribuição multicanal e a análise de desempenho. Um fluxo sustentado por um stack tecnológico integrado que vai de IA à automação, do CMS/DAM ao analytics e além.
        </p>
      </div>

      {/* Bloco 03 - O PODER DAS EXPERIÊNCIAS INTERATIVAS EM 3D */}
      <div style={{
  width: '100%',
        minHeight: '674px',
        backgroundColor: '#F8F8F2',
        padding: '86px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        <h2 style={{
          color: '#131A1A',
          fontSize: '30px',
          fontWeight: 300,
          lineHeight: '34.5px',
          margin: '0 0 40px 0',
          maxWidth: '352px'
        }}>
          <span>O PODER DAS EXPERIÊNCIAS INTERATIVAS EM 3D:</span><br />
          <span style={{ fontWeight: 700 }}>+66% DE ENGAJAMENTO, +9% EM VENDAS.</span>
        </h2>

        {/* Interactive 3D video */}
        <div style={{
          position: 'relative',
          width: '100%',
          maxWidth: '352px',
          height: '176px',
          borderRadius: '12px',
          overflow: 'hidden',
          marginBottom: '32px',
          backgroundColor: '#0b0d0f'
        }}>
          <iframe
            ref={iframeRef}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none',
              pointerEvents: 'none'
            }}
            src={videoSrc}
            title="Experiência Interativa 3D"
            allow="autoplay; encrypted-media"
            loading="eager"
            onLoad={() => setLoaded(true)}
          />
          
          {/* Botão de Play/Pause */}
          <button
            type="button"
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pausar vídeo' : 'Reproduzir vídeo'}
            style={{
              position: 'absolute',
              left: '12px',
              bottom: '12px',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: 'rgba(0,0,0,0.55)',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              cursor: 'pointer',
              transition: 'background-color 0.2s',
              zIndex: 10
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.75)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.55)';
            }}
          >
            {isPlaying ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <rect x="6" y="4" width="4" height="16" fill="currentColor"/>
                <rect x="14" y="4" width="4" height="16" fill="currentColor"/>
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M8 5v14l11-7L8 5z" fill="currentColor"/>
              </svg>
            )}
          </button>

          {/* Botão de Volume Verde - Conforme Figma */}
          <button
            type="button"
            onClick={toggleMute}
            aria-label={muted ? 'Ativar som' : 'Mutar vídeo'}
            style={{
              position: 'absolute',
              right: '12px',
              bottom: '12px',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: '#00F5B9',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'transform 0.2s',
              zIndex: 10
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <VolumeIcon width="16" height="16" color="#131A1A" muted={muted} />
          </button>
        </div>

        <p style={{
          color: '#131A1A',
          fontSize: '20px',
          fontWeight: 300,
          lineHeight: '23px',
          margin: 0,
          maxWidth: '352px'
        }}>
          O 3D já trascende o universo de stills e CGI: tornou-se linguagem, experiência e presença digital que é capaz de capturar e converter.
        </p>
      </div>

      {/* Bloco 04 - UM ASSET, INFINITAS POSSIBILIDADES */}
      <div style={{
        width: '100%',
        minHeight: '1136px',
        backgroundColor: '#131A1A',
        padding: '88px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        {/* Main hero image */}
        <div style={{
          width: '100%',
          height: '536px',
          backgroundImage: `url(${heroImg2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          marginBottom: '40px',
          marginTop: '-88px',
          marginLeft: '-24px',
          marginRight: '-24px'
        }} />

        <h2 style={{
          color: '#F8F8F2',
          fontSize: '30px',
          fontWeight: 300,
          lineHeight: '34.5px',
          margin: '0 0 32px 0',
          maxWidth: '353px'
        }}>
          <span>UM ASSET, INFINITAS POSSIBILIDADES.</span><br />
          <span style={{ fontWeight: 700 }}>SEU BUDGET OTIMIZADO AO MÁXIMO.</span>
        </h2>

        {/* Gallery grid */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '40px',
          width: '100%'
        }}>
          <ImageGridIcon width={353} height={167} color="#D9D9D9" />
        </div>

        <p style={{
          color: '#F8F8F2',
          fontSize: '20px',
          fontWeight: 300,
          lineHeight: '23px',
          margin: 0,
          maxWidth: '350px'
        }}>
          Tenha um digital twin do seu produto e desdobre-o em conteúdos para redes sociais, e-commerce, experiências interativas, mídia OOH, propaganda, filmes, fotos e muito mais.
        </p>
      </div>

      {/* Bloco 05 - MAIS DE 60 PROJETOS EM 2025 */}
      <div style={{
  width: '100%',
        minHeight: '448px',
        backgroundColor: '#F8F8F2',
        padding: '43px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        <h2 style={{
          color: '#131A1A',
          fontSize: '30px',
          fontWeight: 300,
          lineHeight: '34.5px',
          margin: '0 0 40px 0',
          maxWidth: '353px'
        }}>
          MAIS DE 60 PROJETOS<br />
          EM 2025 QUE AJUDARAM NOSSOS CLIENTES A ECONOMIZAR MILHÕES<br />
          EM COMPARAÇÃO A PRODUÇÕES TRADICIONAIS.
        </h2>

        <p style={{
          color: '#131A1A',
          fontSize: '20px',
          fontWeight: 300,
          lineHeight: '23px',
          margin: 0,
          maxWidth: '352px'
        }}>
          Integramos criatividade, estratégia e tecnologia em um só fluxo, criando conteúdos relevantes de maneira mais rápida, escalável e impactante.
        </p>
      </div>

      {/* Bloco 06 - O FLUXO NGI */}
      <FluxoNGISection />

      {/* Bloco 07 - DÚVIDAS FREQUENTES */}
      <div style={{
  width: '100%',
        minHeight: '782px',
        backgroundColor: '#F8F8F2',
        padding: '78px 22px 10px 22px'
      }}>
        <h2 style={{
          color: '#131A1A',
          fontSize: '30px',
          fontWeight: 300,
          lineHeight: '34.5px',
          textAlign: 'center',
          margin: '0 0 80px 0'
        }}>
          DÚVIDAS FREQUENTES
        </h2>

        {/* Accordion items */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0'
        }}>
          {[
            'O que é uma content-tech?',
            'Como a IA pode ajudar na produção de conteúdo?',
            'Qual é a diferença entre CGI e NGI?',
            'Como vocês garantem a qualidade do conteúdo produzido?',
            'Quais tipos de projeto vocês atendem?',
            'Como funciona o processo de trabalho?'
          ].map((question, i) => (
            <div key={i} style={{
              borderBottom: '1px solid #000',
              padding: '12px 0'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{
                  color: '#131A1A',
                  fontSize: '20px',
                  fontWeight: 700,
                  lineHeight: '23px'
                }}>
                  {question}
                </span>
                <PlusIcon width={18} height={18} color="#000000" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bloco 08 - Footer */}
      <div style={{
  width: '100%',
        height: '200px',
        backgroundColor: '#131A1A',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}>
        {/* Logo Sétima */}
        <LogoSetimaIcon width={137} height={58} color="#F8F8F2" style={{ marginBottom: '20px' }} />

        {/* Redes sociais */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '20px'
        }}>
          <SocialMediaIcon width={116} height={49} color="#F8F8F2" />
        </div>

        {/* Copyright */}
        <p style={{
          color: '#F8F8F2',
          fontSize: '12px',
          fontWeight: 400,
          textAlign: 'center',
          margin: 0,
          maxWidth: '351px'
        }}>
          @2025 Sétima. Todos os direitos reservados. Todo o conteúdo deste site é protegido por leis de propriedade intelectual.
        </p>
      </div>
    </div>
  );
}
