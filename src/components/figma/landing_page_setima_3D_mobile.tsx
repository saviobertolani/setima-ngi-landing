import React, { useEffect, useState } from 'react';

// Importando as imagens reais das animações
import heroImg1 from '../../assets/705cc0dc55d0d5a68388c772e2b6117b6c99cd0f.png';
import heroImg2 from '../../assets/363d73ec33595dde3285b1f284098774998f5dac.png';
import heroImg3 from '../../assets/012759f13f56517f1097b1fc4887ce210daa0750.png';
import heroImg4 from '../../assets/8fca1f53bb6c91dfa7bb390285d6e25c4fdabb30.png';
import heroImg5 from '../../assets/982534bd46b9e568691c0e5652a818ec5954a309.png';

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
        width: '402px',
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
        width: '402px',
        height: '87px',
        background: 'linear-gradient(180deg, rgba(19, 23, 26, 0.4) 0%, rgba(19, 23, 26, 0) 100%)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px'
      }}>
        {/* Logo Sétima */}
        <div style={{
          color: '#F8F8F2',
          fontSize: '16px',
          fontWeight: 700,
          letterSpacing: '2px'
        }}>
          SÉTIMA
        </div>

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
          <svg width="12" height="6" viewBox="0 0 16 8" fill="none">
            <path d="M12.01 3.5L8.5 0M12.01 3.5L8.5 7M12.01 3.5H0" stroke="#131A1A"/>
          </svg>
        </div>
      </div>

      {/* Bloco 01 - Hero */}
      <div style={{
        width: '402px',
        height: '874px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Hero com animação */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${heroImages[currentImageIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'background-image 0.5s ease-in-out'
        }} />

        {/* Gradient overlay */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '173px',
          background: 'linear-gradient(180deg, rgba(19, 23, 26, 0) 0%, rgba(19, 23, 26, 0.4) 100%)'
        }} />

        {/* Content */}
        <div style={{
          position: 'absolute',
          bottom: '80px',
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
          color: '#FFFFFF',
          zIndex: 2
        }}>
          <div style={{
            fontSize: '15px',
            fontWeight: 500,
            marginBottom: '20px',
            letterSpacing: '0px',
            lineHeight: '17.2px'
          }}>
            SOMOS UMA CONTENT-TECH
          </div>
          
          <h1 style={{
            fontSize: '30px',
            fontWeight: 300,
            lineHeight: '32.3px',
            margin: '0 0 40px 0',
            maxWidth: '296px'
          }}>
            A NOVA MATEMÁTICA<br />
            DO MARKETING:<br />
            MENOS CUSTO,<br />
            MAIS IMPACTO.
          </h1>

          <div style={{
            backgroundColor: '#00F5B9',
            borderRadius: '30px',
            padding: '12px 32px',
            fontSize: '12px',
            fontWeight: 400,
            color: '#000',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            MARQUE UM CALL E SAIBA COMO FUNCIONA
            <svg width="16" height="8" viewBox="0 0 16 8" fill="none">
              <path d="M12.01 3.5L8.5 0M12.01 3.5L8.5 7M12.01 3.5H0" stroke="#131A1A"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Bloco 02 - O CGI AGORA É NGI */}
      <div style={{
        width: '402px',
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
          width: '355px',
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
        width: '402px',
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

        {/* Interactive 3D demo */}
        <div style={{
          width: '352px',
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
        width: '402px',
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
          width: '402px',
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
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 74px)',
          gap: '19px',
          marginBottom: '40px'
        }}>
          {[...Array(8)].map((_, i) => (
            <div key={i} style={{
              width: '74px',
              height: '74px',
              backgroundColor: '#D9D9D9',
              borderRadius: '4px'
            }} />
          ))}
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
        width: '402px',
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
      <div style={{
        width: '402px',
        minHeight: '836px',
        backgroundColor: '#131A1A',
        padding: '71px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative'
      }}>
        {/* Background image */}
        <div style={{
          position: 'absolute',
          top: '250px',
          left: '-183px',
          width: '898px',
          height: '506px',
          backgroundImage: 'linear-gradient(135deg, #00F5B9 0%, #131A1A 100%)',
          opacity: 0.3
        }} />

        <h2 style={{
          color: '#FFFFFF',
          fontSize: '30px',
          fontWeight: 300,
          lineHeight: '34.5px',
          margin: '0 0 40px 0',
          maxWidth: '354px',
          position: 'relative',
          zIndex: 2
        }}>
          O FLUXO NGI: DA ESTRATÉGIA À PRODUÇÃO, CRIATIVIDADE E TÉCNICA ACELERADAS PELA IA.
        </h2>

        <div style={{
          position: 'relative',
          zIndex: 2,
          marginTop: '200px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          <div style={{
            color: '#FFFFFF',
            fontSize: '18px',
            fontWeight: 700,
            textAlign: 'center'
          }}>+ RÁPIDO</div>
          <div style={{
            color: '#FFFFFF',
            fontSize: '18px',
            fontWeight: 700,
            textAlign: 'center'
          }}>+ ESCALÁVEL</div>
          <div style={{
            color: '#FFFFFF',
            fontSize: '18px',
            fontWeight: 700,
            textAlign: 'center'
          }}>+ IMPACTANTE</div>
        </div>
      </div>

      {/* Bloco 07 - DÚVIDAS FREQUENTES */}
      <div style={{
        width: '402px',
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
          {[...Array(6)].map((_, i) => (
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
                  O que é uma content-tech?
                </span>
                <div style={{
                  width: '18px',
                  height: '18px',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '8px',
                    left: '0',
                    width: '18px',
                    height: '2px',
                    backgroundColor: '#000'
                  }} />
                  <div style={{
                    position: 'absolute',
                    top: '0',
                    left: '8px',
                    width: '2px',
                    height: '18px',
                    backgroundColor: '#000'
                  }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bloco 08 - Footer */}
      <div style={{
        width: '402px',
        height: '200px',
        backgroundColor: '#131A1A',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}>
        {/* Logo Sétima Real */}
        <div style={{
          width: '137px',
          height: '58px',
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <svg width="137" height="58" viewBox="0 0 137 58" fill="none">
            <path d="M31 0C31 12.344 31 12.344 31 12.344" fill="#F8F8F2"/>
            <path d="M32 0C32 12.344 32 12.344 32 12.344" fill="#F8F8F2"/>
            <path d="M33 0C33 12.344 33 12.344 33 12.344" fill="#F8F8F2"/>
            <path d="M34 0C34 12.344 34 12.344 34 12.344" fill="#F8F8F2"/>
            <path d="M35 0C35 12.344 35 12.344 35 12.344" fill="#F8F8F2"/>
            <path d="M60 20C60 25.401 60 25.401 60 25.401" fill="#F8F8F2"/>
            <text x="10" y="35" fill="#F8F8F2" fontSize="12" fontFamily="Ubuntu">SÉTIMA</text>
          </svg>
        </div>

        {/* Redes sociais */}
        <div style={{
          display: 'flex',
          gap: '67px',
          marginBottom: '20px'
        }}>
          <div style={{
            width: '49px',
            height: '49px',
            borderRadius: '12px',
            backgroundColor: 'rgba(248, 248, 242, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
              <path d="M7.5 2.5h11c2.75 0 5 2.25 5 5v11c0 2.75-2.25 5-5 5h-11c-2.75 0-5-2.25-5-5v-11c0-2.75 2.25-5 5-5z" stroke="#F8F8F2" strokeWidth="2"/>
              <circle cx="13" cy="13" r="4" stroke="#F8F8F2" strokeWidth="2"/>
              <circle cx="19" cy="7" r="1" fill="#F8F8F2"/>
            </svg>
          </div>
          
          <div style={{
            width: '49px',
            height: '49px',
            borderRadius: '12px',
            backgroundColor: 'rgba(248, 248, 242, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
              <path d="M20.5 7.5h-15v11h15v-11z" stroke="#F8F8F2" strokeWidth="2"/>
              <path d="M7.5 10.5v-3h4v13h-4v-10z" fill="#F8F8F2"/>
              <path d="M14.5 10.5c0-1 0.8-2 2-2s2 1 2 2v7h-4v-7z" fill="#F8F8F2"/>
            </svg>
          </div>
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
