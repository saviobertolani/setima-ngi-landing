import React, { useEffect, useMemo, useRef, useState } from 'react';
import { YT } from '@/content/youtubeIds';
import { getGalleryAssets } from '@/utils/gallerySources';

// Placeholders para as 5 imagens verticais da hero mobile (você enviará as finais)
const HERO_MOBILE_PLACEHOLDERS: string[] = [
  'https://picsum.photos/402/874?1',
  'https://picsum.photos/402/874?2',
  'https://picsum.photos/402/874?3',
  'https://picsum.photos/402/874?4',
  'https://picsum.photos/402/874?5',
];

// Reuso da lista da galeria do desktop via utilitário
const localGallery = getGalleryAssets();
const galleryListMobile = (localGallery.images.length
  ? (localGallery.images.map((src, idx) => ({
      id: idx,
      src,
      alt: `gallery-${String(idx + 1).padStart(2, '0')}`,
      mobileSrc: src,
      mobileThumb: localGallery.thumbs?.[idx] ?? src,
    })))
  : []
);

// Crop hints opcionais (preencher se necessário)
const galleryCropHints: Record<string, string> = {};

function FadeSlider({ images, interval = 3500 }: { images: string[]; interval?: number }) {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(1);
  useEffect(() => {
    const t = setInterval(() => {
      setFade(0);
      setTimeout(() => {
        setIndex((i) => (i + 1) % images.length);
        setFade(1);
      }, 220);
    }, interval);
    return () => clearInterval(t);
  }, [images.length, interval]);
  const url = images[index] ?? images[0];
  return (
    <div className="relative w-[402px] h-[874px]">
      <div
        className="absolute inset-0 bg-no-repeat bg-center transition-opacity duration-300"
        style={{
          backgroundImage: `url('${url}')`,
          backgroundSize: 'cover',
          opacity: fade,
        }}
      />
      {/* Gradiente inferior para legibilidade do CTA */}
      <div className="absolute inset-x-0 bottom-0 h-[240px] bg-gradient-to-t from-[#0b0d0f] to-transparent" />
    </div>
  );
}

function Bloco01() {
  return (
    <section className="w-[402px] h-[874px] relative">
      <FadeSlider images={HERO_MOBILE_PLACEHOLDERS} />
      {/* Títulos centralizados (valores aproximados, afinaremos com o Figma) */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[120px] w-[350px] text-center text-white">
        <div className="font-['Ubuntu:Light',_sans-serif] text-[15px] leading-[17px]">SOMOS UMA CONTENT-TECH</div>
        <h1 className="mt-3 font-['Ubuntu:Light',_sans-serif] text-[30px] leading-[32px]">CRIATIVIDADE, TECNOLOGIA E IA PARA PRODUZIR CONTEÚDO</h1>
      </div>
      <button
        className="absolute left-1/2 -translate-x-1/2 top-[804px] h-[36px] w-[315px] rounded-[6px] bg-[#00F5B9] text-[#0b0d0f] font-['Ubuntu:Medium',_sans-serif] text-[14px] leading-[36px] text-center hover:opacity-90 transition"
        aria-label="Falar com a Sétima"
      >
        FALAR COM A SÉTIMA
      </button>
    </section>
  );
}

function VideoCard({ videoId, width, height }: { videoId: string; width: number; height: number }) {
  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://example.com';
  const src = `https://www.youtube.com/embed/${videoId}?autoplay=0&mute=1&playsinline=1&controls=1&modestbranding=1&rel=0&origin=${encodeURIComponent(origin)}`;
  return (
    <div className="relative" style={{ width, height }}>
      <iframe
        title="YouTube player"
        className="rounded-[12px] w-full h-full"
        src={src}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}

function Bloco02() {
  return (
    <section className="w-[402px] bg-[#13171A] text-white px-4 py-8">
      <h2 className="text-center font-['Ubuntu:Light',_sans-serif] text-[30px] leading-[34px] mb-3">O CGI AGORA É NGI</h2>
      <p className="text-center font-['Ubuntu:Light',_sans-serif] text-[20px] leading-[23px] mb-6">Integramos criatividade, estratégia e tecnologia em um só fluxo.</p>
      <div className="mx-auto" style={{ width: 355 }}>
        <VideoCard videoId={YT.heroSecondary} width={355} height={199} />
      </div>
    </section>
  );
}

function Bloco03() {
  return (
    <section className="w-[402px] bg-[#F8F8F2] text-[#13171A] px-4 py-8">
      <h2 className="text-center font-['Ubuntu:Light',_sans-serif] text-[30px] leading-[34px] mb-3">INTERATIVAS E EM ESCALA</h2>
      <p className="text-center font-['Ubuntu:Light',_sans-serif] text-[20px] leading-[23px] mb-6">Conteúdos mais rápidos e impactantes.</p>
      <div className="mx-auto" style={{ width: 352 }}>
        <VideoCard videoId={YT.section3} width={352} height={176} />
      </div>
    </section>
  );
}

function Bloco04() {
  const [active, setActive] = useState(0);
  const current = galleryListMobile[active] ?? galleryListMobile[0];
  const [overlay, setOverlay] = useState<null | { src: string; alt: string }>(null);

  const change = (i: number) => {
    if (i === active) return;
    const next = galleryListMobile[i];
    if (!next) return;
    setOverlay({ src: next.mobileSrc, alt: next.alt });
    setTimeout(() => {
      setActive(i);
      setOverlay(null);
    }, 320);
  };

  const count = Math.min(8, galleryListMobile.length);
  const thumbs = Array.from({ length: count }, (_, i) => galleryListMobile[i] ?? current);

  return (
    <section className="w-[402px] bg-[#0b0d0f] text-white">
      {/* Stage 402x536 */}
      <div className="relative w-[402px] h-[536px] overflow-hidden">
        <div
          className="absolute inset-0 bg-no-repeat"
          style={{
            backgroundImage: `url('${current?.mobileSrc}')`,
            backgroundSize: 'cover',
            backgroundPosition: current ? (galleryCropHints[current.alt] ?? '50% 50%') : '50% 50%',
          }}
        />
    {overlay && (
          <div
            className="absolute inset-0 bg-no-repeat opacity-0 animate-[fadeIn_0.3s_ease_forwards]"
            style={{
      backgroundImage: `url('${overlay.src}')`,
      backgroundSize: 'cover',
      backgroundPosition: galleryCropHints[overlay.alt] ?? '50% 50%',
            }}
          />
        )}
      </div>
      {/* Tarja com grade 2x4 de thumbs */}
      <div className="bg-[#13171A] px-4 py-6">
        <div className="grid grid-cols-4 gap-3 place-items-center">
          {thumbs.map((g, i) => {
            const isActive = i === active;
            return (
              <button
                key={i}
                aria-label={`Imagem ${i + 1}`}
                onClick={() => change(i)}
                aria-pressed={isActive}
                className={`relative w-[74px] h-[74px] rounded-lg overflow-hidden transition-transform ${isActive ? 'scale-105' : 'hover:scale-105'}`}
                style={{ outline: isActive ? '2px solid #00F5B9' : 'none', outlineOffset: '2px' }}
              >
                <div
                  className="absolute inset-0 bg-no-repeat bg-center"
                  style={{ backgroundImage: `url('${g.mobileThumb}')`, backgroundSize: 'cover' }}
                />
              </button>
            );
          })}
        </div>
      </div>
      {/* Título e parágrafo (spacing ajustável com Figma) */}
      <div className="px-4 py-6 text-center text-white">
        <h3 className="font-['Ubuntu:Light',_sans-serif] text-[30px] leading-[34px] mb-3">PRODUZIR MAIS, GASTAR MENOS</h3>
        <p className="font-['Ubuntu:Light',_sans-serif] text-[20px] leading-[23px]">Em 2025, ajudamos nossos clientes a economizar milhões em comparação a produções tradicionais.</p>
      </div>
    </section>
  );
}

export default function InteractiveMobile() {
  return (
    <main className="mx-auto w-[402px] bg-[#0b0d0f] overflow-x-hidden">
      <Bloco01 />
      <Bloco02 />
      <Bloco03 />
      <Bloco04 />
      {/* Blocos 05–08 serão adicionados na próxima entrega da PR */}
    </main>
  );
}
