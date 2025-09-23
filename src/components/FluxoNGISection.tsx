import React from 'react';

export default function FluxoNGISection() {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      minHeight: '836px',
      padding: '71px 24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      {/* full-bleed background color */}
      <div aria-hidden style={{
        position: 'absolute',
        inset: 0,
        width: '100vw',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: '#131A1A'
      }} />
      {/* Background gradient effect */}
      <div style={{
        position: 'absolute',
        top: '250px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '120vw',
        height: '506px',
        background: 'linear-gradient(135deg, #00F5B9 0%, #131A1A 100%)',
        opacity: 0.1,
        borderRadius: '50%',
        filter: 'blur(100px)'
      }} />

      <h2 style={{
        color: '#FFFFFF',
        fontSize: '30px',
        fontWeight: 300,
        lineHeight: '34.5px',
        textAlign: 'center',
        margin: '0 0 60px 0',
        maxWidth: '354px',
        position: 'relative',
        zIndex: 2,
        fontFamily: 'Ubuntu, sans-serif'
      }}>
        O FLUXO NGI: DA ESTRATÉGIA À PRODUÇÃO, CRIATIVIDADE E TÉCNICA ACELERADAS PELA IA.
      </h2>

      {/* Fluxo visual */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '40px',
        position: 'relative',
        zIndex: 2,
        marginTop: '40px'
      }}>
        {/* Caixas superiores */}
        <div style={{
          display: 'flex',
          gap: '12px',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          {['DATA', 'ESTRATÉGIA', 'CRIAÇÃO'].map((item) => (
            <div key={item} style={{
              backgroundColor: '#FFFFFF',
              color: '#000000',
              padding: '8px 16px',
              borderRadius: '4px',
              fontSize: '12px',
              fontWeight: 700,
              fontFamily: 'Ubuntu, sans-serif',
              textAlign: 'center',
              minWidth: '70px'
            }}>
              {item}
            </div>
          ))}
        </div>

        {/* Conectores visuais */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px'
        }}>
          <div style={{
            width: '2px',
            height: '30px',
            backgroundColor: '#FFFFFF',
            opacity: 0.3
          }} />
          <div style={{
            width: '20px',
            height: '2px',
            backgroundColor: '#FFFFFF',
            opacity: 0.3
          }} />
          <div style={{
            width: '2px',
            height: '30px',
            backgroundColor: '#FFFFFF',
            opacity: 0.3
          }} />
        </div>

        {/* Caixas inferiores */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '8px',
          maxWidth: '280px',
          width: '100%'
        }}>
          {['FOTO', 'FILME', 'MOTION', 'ANIMAÇÃO', 'VFX', '3D'].map((item) => (
            <div key={item} style={{
              backgroundColor: '#FFFFFF',
              color: '#000000',
              padding: '6px 12px',
              borderRadius: '4px',
              fontSize: '10px',
              fontWeight: 700,
              fontFamily: 'Ubuntu, sans-serif',
              textAlign: 'center'
            }}>
              {item}
            </div>
          ))}
        </div>

        {/* Conectores para IA */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px'
        }}>
          <div style={{
            width: '2px',
            height: '20px',
            backgroundColor: '#FFFFFF',
            opacity: 0.3
          }} />
          <div style={{
            width: '40px',
            height: '2px',
            backgroundColor: '#FFFFFF',
            opacity: 0.3
          }} />
          <div style={{
            width: '2px',
            height: '20px',
            backgroundColor: '#FFFFFF',
            opacity: 0.3
          }} />
        </div>

        {/* IA central */}
        <div style={{
          backgroundColor: '#FFFFFF',
          color: '#000000',
          padding: '12px 24px',
          borderRadius: '4px',
          fontSize: '16px',
          fontWeight: 700,
          fontFamily: 'Ubuntu, sans-serif',
          textAlign: 'center'
        }}>
          IA
        </div>

        {/* Textos finais */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          marginTop: '40px',
          textAlign: 'center'
        }}>
          <div style={{
            color: '#FFFFFF',
            fontSize: '18px',
            fontWeight: 700,
            fontFamily: 'Ubuntu, sans-serif'
          }}>
            + RÁPIDO
          </div>
          <div style={{
            color: '#FFFFFF',
            fontSize: '18px',
            fontWeight: 700,
            fontFamily: 'Ubuntu, sans-serif'
          }}>
            + ESCALÁVEL
          </div>
          <div style={{
            color: '#FFFFFF',
            fontSize: '18px',
            fontWeight: 700,
            fontFamily: 'Ubuntu, sans-serif'
          }}>
            + IMPACTANTE
          </div>
        </div>
      </div>
    </div>
  );
}