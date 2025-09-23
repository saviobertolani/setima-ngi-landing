import React, { useEffect, useState } from 'react';

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

// Importando componentes
import FluxoNGISection from '../FluxoNGISection';
import { getFullBleedStyles, getResponsiveContainer, getResponsivePadding } from '../ResponsiveUtils';

export default function LandingPageSetima3DMobile() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroImages = [heroImg1, heroImg2, heroImg3, heroImg4, heroImg5];

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
        position: 'relative',
        width: '100%',
        minHeight: '774px',
        padding: '88px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        {/* full-bleed background color */}
        <div aria-hidden style={{
          ...getFullBleedStyles(),
          position: 'absolute',
          inset: 0,
          backgroundColor: '#131A1A'
        }} />
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
        position: 'relative',
        width: '100%',
        minHeight: '674px',
        padding: '86px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        {/* full-bleed background color */}
        <div aria-hidden style={{
          ...getFullBleedStyles(),
          position: 'absolute',
          inset: 0,
          backgroundColor: '#F8F8F2'
        }} />
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

        {/* Interactive 3D demo */}
        <div style={{
          width: '100%',
          maxWidth: '352px',
          height: '176px',
          backgroundColor: '#D9D9D9',
          borderRadius: '12px',
          marginBottom: '32px',
          backgroundImage: 'linear-gradient(45deg, #00F5B9 0%, #131A1A 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FFFFFF',
          fontSize: '16px',
          fontWeight: 500
        }}>
          EXPERIÊNCIA INTERATIVA 3D
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
        position: 'relative',
        width: '100%',
        minHeight: '1136px',
        padding: '88px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        {/* full-bleed background color */}
        <div aria-hidden style={{
          ...getFullBleedStyles(),
          position: 'absolute',
          inset: 0,
          backgroundColor: '#131A1A'
        }} />
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
        position: 'relative',
        width: '100%',
        minHeight: '448px',
        padding: '43px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        {/* full-bleed background color */}
        <div aria-hidden style={{
          ...getFullBleedStyles(),
          position: 'absolute',
          inset: 0,
          backgroundColor: '#F8F8F2'
        }} />
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
        position: 'relative',
        width: '100%',
        minHeight: '782px',
        padding: '78px 22px 10px 22px'
      }}>
        {/* full-bleed background color */}
        <div aria-hidden style={{
          ...getFullBleedStyles(),
          position: 'absolute',
          inset: 0,
          backgroundColor: '#F8F8F2'
        }} />
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
        position: 'relative',
        width: '100%',
        height: '200px',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}>
        {/* full-bleed background color */}
        <div aria-hidden style={{
          ...getFullBleedStyles(),
          position: 'absolute',
          inset: 0,
          backgroundColor: '#131A1A'
        }} />
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