import React from 'react';

// Assets gerados pelo Figma get_code (ajustados para imports relativos)
import imgAi1 from '../../../docs/figma-assets/705cc0dc55d0d5a68388c772e2b6117b6c99cd0f.png';
import imgAi2 from '../../../docs/figma-assets/363d73ec33595dde3285b1f284098774998f5dac.png';
import imgAi3 from '../../../docs/figma-assets/012759f13f56517f1097b1fc4887ce210daa0750.png';
import imgAi4 from '../../../docs/figma-assets/8fca1f53bb6c91dfa7bb390285d6e25c4fdabb30.png';
import imgAi5 from '../../../docs/figma-assets/982534bd46b9e568691c0e5652a818ec5954a309.png';
import imgEmCima from '../../../docs/figma-assets/c5bf77151a8866fa78db0df8dde0114c259578fa.png';
import imgAquamarine from '../../../docs/figma-assets/6f46d9eac5f0e6717c6f749ddb7cef9b8551351a.png';
import imgAlmapStill from '../../../docs/figma-assets/0e4c4fe22e1cb5636a33462c5ac2022a711c0f36.png';
import imgEmbaixo from '../../../docs/figma-assets/5112680c7f40d23f48f8876eb2dc44893c6f5a26.png';
import svgIconeSeta from '../../../docs/figma-assets/7d81ad28ec29517142c61263569911e56b5bf8b1.svg';
import svgMaskHero from '../../../docs/figma-assets/0aa0fffca858a707ff143e0af17fd4a0c981c966.svg';
import svgBotao from '../../../docs/figma-assets/a4c6c6d2eaa486caf6f1c3c20b372c4a3e46e1e6.svg';
import svgLogoSetima from '../../../docs/figma-assets/e3673b553c424c6b2648267f7e48b6843fc09b6b.svg';
import svgLogoSetima1 from '../../../docs/figma-assets/7674cae785697e8381e7c52cd1935cc4128a49d2.svg';
import svgGroup from '../../../docs/figma-assets/6225e7201df464b6a08b03339a7f5840b8630a79.svg';
import svgLinkedin from '../../../docs/figma-assets/cee4173fa836977c0c829c200d5affe5043cbc21.svg';
import svgMaskImagemGrande from '../../../docs/figma-assets/db7fef7f28a65df6eff5e06e19440a9b50550bf4.svg';
import svgMaskVideo from '../../../docs/figma-assets/85739bc9aff55a55c211190c1a7ee5e3be0295e8.svg';

function BotaoCall() {
  return (
    <div className="relative size-full" data-name="Botao call" data-node-id="0:174">
      <div className="absolute bg-[#00f5b9] inset-0 rounded-[30px]" data-node-id="0:175" />
      <div className="absolute font-['Ubuntu:Regular',_sans-serif] inset-[30.56%_6.67%_30.56%_13.65%] leading-[0] not-italic text-[12px] text-black text-nowrap" data-node-id="0:176">
        <p className="leading-[normal] whitespace-pre">MARQUE UM CALL E SAIBA COMO FUNCIONA</p>
      </div>
      <div className="absolute inset-[39.86%_88.44%_38.19%_6.67%]" data-name="icone seta" data-node-id="0:177">
        <div className="absolute bottom-[-4.47%] left-0 right-[-4.59%] top-[-4.47%]">
          <img alt="" className="block max-w-none size-full" src={svgIconeSeta} />
        </div>
      </div>
    </div>
  );
}

interface BackMobileProps { propriedade1?: 'Frame 2' | 'Frame 3' | 'Frame 4' | 'Frame 5' | 'Frame 6'; }

function BackMobile({ propriedade1 = 'Frame 2' }: BackMobileProps) {
  // 5 layers mascaradas como no Figma
  return (
    <div className="relative size-full" data-name="Propriedade 1=Frame 2" data-node-id="1:270">
      {/* Layer 1 */}
      <div className="absolute left-0 top-0">
        <div
          className="absolute bg-center bg-cover bg-no-repeat"
          style={{
            height: 1008,
            width: 1577,
            left: -559,
            top: -58,
            backgroundImage: `url('${imgAi1}')`,
            maskImage: `url('${svgMaskHero}')`,
            WebkitMaskImage: `url('${svgMaskHero}')`,
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
            maskSize: '402px 874px',
            WebkitMaskSize: '402px 874px',
            maskPosition: '559px 58px',
            WebkitMaskPosition: '559px 58px',
          }}
          data-node-id="1:176"
        />
      </div>
      {/* Layer 2 */}
      <div className="absolute" style={{ left: 432, top: 0 }}>
        <div
          className="absolute bg-center bg-cover bg-no-repeat"
          style={{
            height: 910.843,
            width: 1425,
            left: -128,
            top: -13,
            backgroundImage: `url('${imgAi2}')`,
            maskImage: `url('${svgMaskHero}')`,
            WebkitMaskImage: `url('${svgMaskHero}')`,
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
            maskSize: '402px 874px',
            WebkitMaskSize: '402px 874px',
            maskPosition: '560px 13px',
            WebkitMaskPosition: '560px 13px',
          }}
          data-node-id="1:180"
        />
      </div>
      {/* Layer 3 */}
      <div className="absolute" style={{ left: 864, top: 0 }}>
        <div
          className="absolute bg-center bg-cover bg-no-repeat"
          style={{
            height: 907.008,
            width: 1419,
            left: 283,
            top: -18,
            backgroundImage: `url('${imgAi3}')`,
            maskImage: `url('${svgMaskHero}')`,
            WebkitMaskImage: `url('${svgMaskHero}')`,
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
            maskSize: '402px 874px',
            WebkitMaskSize: '402px 874px',
            maskPosition: '581px 18px',
            WebkitMaskPosition: '581px 18px',
          }}
          data-node-id="1:183"
        />
      </div>
      {/* Layer 4 */}
      <div className="absolute" style={{ left: 1296, top: 0 }}>
        <div
          className="absolute bg-center bg-cover bg-no-repeat"
          style={{
            height: 907.008,
            width: 1419,
            left: 1015,
            top: -18,
            backgroundImage: `url('${imgAi4}')`,
            maskImage: `url('${svgMaskHero}')`,
            WebkitMaskImage: `url('${svgMaskHero}')`,
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
            maskSize: '402px 874px',
            WebkitMaskSize: '402px 874px',
            maskPosition: '281px 18px',
            WebkitMaskPosition: '281px 18px',
          }}
          data-node-id="1:192"
        />
      </div>
      {/* Layer 5 */}
      <div className="absolute" style={{ left: 1728, top: 0 }}>
        <div
          className="absolute bg-center bg-cover bg-no-repeat"
          style={{
            height: 907.008,
            width: 1419,
            left: 1099,
            top: -18,
            backgroundImage: `url('${imgAi5}')`,
            maskImage: `url('${svgMaskHero}')`,
            WebkitMaskImage: `url('${svgMaskHero}')`,
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
            maskSize: '402px 874px',
            WebkitMaskSize: '402px 874px',
            maskPosition: '629px 18px',
            WebkitMaskPosition: '629px 18px',
          }}
          data-node-id="1:195"
        />
      </div>
    </div>
  );
}

interface AcordeonProps { propriedade1?: 'Retraido' | 'expandido'; }
function Acordeon({ propriedade1 = 'Retraido' }: AcordeonProps) {
  return (
    <button className="relative size-full" data-name="Propriedade 1=Retraido" data-node-id="1:401">
      <div className="content-stretch flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex items-center justify-between px-0 py-[12px] relative shrink-0 w-full" data-name="header" data-node-id="1:402">
          <div className="font-['Ubuntu:Bold',_sans-serif] h-[25px] leading-[0] not-italic relative shrink-0 text-[#13171a] text-[20px] w-[297px]" data-node-id="1:403">
            <p className="leading-[normal]">O que é uma content-tech?</p>
          </div>
          <div className="relative shrink-0 size-[18px]" data-name="botao +" data-node-id="1:404">
            <img alt="" className="block max-w-none size-full" src={svgBotao} />
          </div>
        </div>
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[0.12px] relative shrink-0" data-name="panel" data-node-id="1:407">
          <div className="font-['Ubuntu:Light',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#13171a] text-[23px] w-[1270px]" data-node-id="1:408">
            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus arcu turpis, efficitur in pulvinar eget, volutpat et odio. Quisque sed diam nulla. In eget neque vel nisi iaculis aliquet. Proin sodales molestie quam molestie malesuada. Quisque eu diam risus. Phasellus augue erat, condimentum ut tempus ac, dignissim ac erat. Nulla facilisi.</p>
            <p>&nbsp;</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-solid inset-0 pointer-events-none" />
    </button>
  );
}

export default function MobileFigma() {
  // Contêiner do frame Mobile (402 x 5714)
  return (
    <div className="relative mx-auto" style={{ width: 402, height: 5714 }} data-name="Mobile" data-node-id="1:75">
      {/* cabecalho */}
      <div className="absolute left-0 top-0">
        <div className="absolute" style={{ left: 0, top: 0, width: 402, height: 87 }}>
          <div className="absolute bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url('${imgEmCima}')`, width: 402, height: 87 }} />
          <div className="absolute" style={{ top: 18, left: 'calc(8.333% + 29.5px)', width: 315, height: 36 }}>
            <BotaoCall />
          </div>
          <div className="absolute" style={{ left: '5.97%', top: '0.33%', width: '9.71%', height: '3.78%' }}>
            <img alt="" className="block max-w-none size-full" src={svgLogoSetima} />
          </div>
        </div>
      </div>

      {/* Bloco 08 */}
      <div className="absolute left-0 top-[5514px]">
        <div className="absolute bg-[#13171a]" style={{ width: 402, height: 200, left: 0, top: 5514 }} />
        <div className="absolute font-['Ubuntu:Regular',_sans-serif] text-[#f8f8f2] text-[12px] text-center leading-[0]" style={{ width: 351, height: 27, left: 'calc(50% + 0.5px)', top: 5635.62, transform: 'translateX(-50%)' }}>
          <p className="leading-[normal]">@2025 Setima. Todos os direitos reservados. Todo o conteúdo deste site é protegido por leis de propriedade intelectual.</p>
        </div>
        <div className="absolute" style={{ left: '13.68%', top: '97.34%', width: '33.99%', height: '1.02%' }}>
          <img alt="" className="block max-w-none size-full" src={svgLogoSetima1} />
        </div>
        <div className="absolute" style={{ left: '57.46%', top: '97.41%', width: '28.07%', height: '0.86%' }}>
          <div className="absolute" style={{ left: 0, top: 0, width: '58.63%', height: '100%' }}>
            <img alt="" className="block max-w-none size-full" src={svgGroup} />
          </div>
          <div className="absolute" style={{ right: 0, top: 0, width: '41.37%', height: '100%' }}>
            <img alt="" className="block max-w-none size-full" src={svgLinkedin} />
          </div>
        </div>
      </div>

      {/* Bloco 07 (FAQ) */}
      <div className="absolute" style={{ left: -10, top: 4732, width: 422, height: 576 }}>
        <div className="absolute bg-[#f8f8f2]" style={{ left: 10, top: 10, width: 402, height: 772 }} />
        <div className="absolute font-['Ubuntu:Light',_sans-serif] text-[#13171a] text-[30px] text-center leading-[0]" style={{ left: 209, top: 88, width: 354, transform: 'translateX(-50%)' }}>
          <p className="leading-[normal]">DÚVIDAS FREQUENTES</p>
        </div>
        <div className="absolute content-stretch cursor-pointer flex flex-col items-start" style={{ left: 32, top: 168, width: 356 }}>
          {Array.from({ length: 6 }).map((_, idx) => (
            <button key={idx} className="h-[49px] relative shrink-0 w-full">
              <Acordeon />
            </button>
          ))}
        </div>
      </div>

      {/* Bloco 06 */}
      <div className="absolute" style={{ left: -248, top: 3906 }}>
        <div className="absolute bg-[#13171a]" style={{ left: 0, top: 3906, width: 402, height: 836 }} />
        <div className="absolute bg-center bg-cover bg-no-repeat" style={{ left: -248, top: 4156, width: 898, height: 506, backgroundImage: `url('${imgAquamarine}')` }} />
        <div className="absolute text-white font-['Ubuntu:Bold',_sans-serif] text-[18px] text-center" style={{ left: 'calc(33.333% + 1px)', top: 4610 }}>
          <div className="absolute" style={{ left: 'calc(33.333% + 67px)', top: 4650, width: 132, transform: 'translateX(-50%)' }}>
            <p className="leading-[normal]">+ IMPACTANTE</p>
          </div>
          <div className="absolute" style={{ left: 'calc(33.333% + 67.5px)', top: 4630, width: 123, transform: 'translateX(-50%)' }}>
            <p className="leading-[normal]">+ ESCALÁVEL</p>
          </div>
          <div className="absolute" style={{ left: 'calc(33.333% + 67.5px)', top: 4610, width: 123, transform: 'translateX(-50%)' }}>
            <p className="leading-[normal]">+ RÁPIDO</p>
          </div>
        </div>
        <div className="absolute text-white font-['Ubuntu:Light',_sans-serif] text-[30px] text-center leading-[0]" style={{ left: 201, top: 3977, width: 354, transform: 'translateX(-50%)' }}>
          <p className="leading-[normal]">O FLUXO NGI: DA ESTRATÉGIA À PRODUÇÃO, CRIATIVIDADE E TÉCNICA ACELERADAS PELA IA.</p>
        </div>
      </div>

      {/* Bloco 05 */}
      <div className="absolute" style={{ left: 0, top: 3458, width: 402, height: 448 }}>
        <div className="absolute bg-[#f8f8f2]" style={{ left: 0, top: 3458, width: 402, height: 448 }} />
        <div className="absolute text-[#13171a] font-['Ubuntu:Light',_sans-serif] text-[20px] text-center leading-[0]" style={{ left: 201, top: 3761, width: 352, transform: 'translateX(-50%)' }}>
          <p className="leading-[normal]">Integramos criatividade, estratégia e tecnologia em um só fluxo, criando conteúdos relevantes de maneira mais rápida, escalável e impactante.</p>
        </div>
        <div className="absolute text-[#13171a] font-['Ubuntu:Light',_sans-serif] text-[30px] text-center leading-[normal]" style={{ left: 200.5, top: 3501, width: 353, transform: 'translateX(-50%)' }}>
          <p className="mb-0">MAIS DE 60 PROJETOS</p>
          <p className="mb-0">EM 2025 QUE AJUDARAM NOSSOS CLIENTES A ECONOMIZAR MILHÕES</p>
          <p>EM COMPARAÇÃO A PRODUÇÕES TRADICIONAIS.</p>
        </div>
      </div>

      {/* Bloco 04 */}
      <div className="absolute" style={{ left: 0, top: 2322, width: 402, height: 1136 }}>
        <div className="absolute bg-[#13171a]" style={{ left: 0, top: 2858, width: 402, height: 600 }} />
        {/* Imagem grande com máscara */}
        <div className="absolute" style={{ left: 0, top: 2322, width: 402, height: 536 }}>
          <div
            className="absolute bg-center bg-cover bg-no-repeat"
            style={{
              left: -234,
              top: 2312,
              width: 912,
              height: 547,
              backgroundImage: `url('${imgAlmapStill}')`,
              maskImage: `url('${svgMaskImagemGrande}')`,
              WebkitMaskImage: `url('${svgMaskImagemGrande}')`,
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
              maskSize: '402px 536px',
              WebkitMaskSize: '402px 536px',
              maskPosition: '234px 10px',
              WebkitMaskPosition: '234px 10px',
            }}
          />
        </div>
        {/* Thumbs (como placeholders cinza) */}
        <div className="absolute" style={{ left: 24, top: 2889, width: 353, height: 167 }}>
          {[
            { left: 24, top: 2889 },
            { left: 'calc(25% + 16.5px)', top: 2889 },
            { left: 'calc(50% + 9px)', top: 2889 },
            { left: 'calc(75% + 1.5px)', top: 2889 },
            { left: 24, top: 2982 },
            { left: 'calc(25% + 16.5px)', top: 2982 },
            { left: 'calc(50% + 9px)', top: 2982 },
            { left: 'calc(75% + 1.5px)', top: 2982 },
          ].map((pos, i) => (
            <div key={i} className="absolute bg-[#d9d9d9] size-[74px]" style={pos as any} />
          ))}
        </div>
        <div className="absolute text-white font-['Ubuntu:Light',_sans-serif] text-[20px] text-center leading-[0]" style={{ left: 200, top: 3289, width: 350, transform: 'translateX(-50%)' }}>
          <p className="leading-[normal]">Tenha um digital twin do seu produto e desdobre-o em conteúdos para redes sociais, e-commerce, experiências interativas, mídia OOH, propaganda, filmes, fotos e muito mais.</p>
        </div>
        <div className="absolute text-white font-['Ubuntu:Light',_sans-serif] text-[30px] text-center leading-[normal]" style={{ left: 200.5, top: 3096, width: 353, transform: 'translateX(-50%)' }}>
          <p className="mb-0">UM ASSET, INFINITAS POSSIBILIDADES.</p>
          <p className="font-['Ubuntu:Bold',_sans-serif]">SEU BUDGET OTIMIZADO AO MÁXIMO.</p>
        </div>
      </div>

      {/* Bloco 03 */}
      <div className="absolute" style={{ left: 0, top: 1648, width: 402, height: 674 }}>
        <div className="absolute bg-[#f8f8f2]" style={{ left: 0, top: 1648, width: 402, height: 674 }} />
        <div className="absolute text-[#13171a] font-['Ubuntu:Light',_sans-serif] text-[20px] text-center leading-[0]" style={{ left: 200, top: 2171, width: 352, transform: 'translateX(-50%)' }}>
          <p className="leading-[normal]">O 3D já trascende o universo de stills e CGI: tornou-se linguagem, experiência e presença digital que é capaz de capturar e converter.</p>
        </div>
        <button className="absolute block cursor-pointer object-cover rounded-[12px]" style={{ left: 'calc(50% - 1px)', top: 1968, width: 352, height: 176 }} />
        <div className="absolute text-[#13171a] font-['Ubuntu:Light',_sans-serif] text-[30px] text-center leading-[normal]" style={{ left: 200, top: 1734, width: 352, transform: 'translateX(-50%)' }}>
          <p className="mb-0">O PODER DAS EXPERIÊNCIAS INTERATIVAS EM 3D:</p>
          <p className="font-['Ubuntu:Bold',_sans-serif]">+66% DE ENGAJAMENTO, +9% EM VENDAS.</p>
        </div>
      </div>

      {/* Bloco 02 */}
      <div className="absolute" style={{ left: 0, top: 874, width: 402, height: 774 }}>
        <div className="absolute bg-[#13171a]" style={{ left: 0, top: 874, width: 402, height: 774 }} />
        <div className="absolute text-white font-['Ubuntu:Light',_sans-serif] text-[20px] text-center leading-[0]" style={{ left: 201, top: 1399, width: 354, transform: 'translateX(-50%)' }}>
          <p className="leading-[normal]">Como uma content-tech, podemos atuar desde o conceito criativo até a distribuição multicanal e a análise de desempenho. Um fluxo sustentado por um stack tecnológico integrado que vai de IA à automação, do CMS/DAM ao analytics e além.</p>
        </div>
        <div className="absolute text-white font-['Ubuntu:Light',_sans-serif] text-[20px] text-center leading-[0]" style={{ left: 201, top: 1044, width: 354, transform: 'translateX(-50%)' }}>
          <p className="leading-[normal]">Um novo fluxo de produção aonde 3D, IA e outras tecnologias trabalham juntas para escalar conteúdo com impacto e consistência.</p>
        </div>
        <div className="absolute text-white font-['Ubuntu:Light',_sans-serif] text-[30px] text-center leading-[normal]" style={{ left: 'calc(8.333% + 167px)', top: 962, width: 297, transform: 'translateX(-50%)' }}>
          <p className="mb-0">O CGI AGORA É NGI:</p>
          <p>NEXT-GEN IMAGERY.</p>
        </div>
        {/* Vídeo com máscara */}
        <div className="absolute" style={{ left: 24, top: 1168, width: 355, height: 199.363 }}>
          <div
            className="absolute bg-center bg-cover bg-no-repeat rounded-[12px]"
            style={{
              left: -68.64,
              top: 1127.238,
              width: 520.382,
              height: 291.572,
              backgroundImage: `url('${imgAi5}')`,
              maskImage: `url('${svgMaskVideo}')`,
              WebkitMaskImage: `url('${svgMaskVideo}')`,
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
              maskSize: '355px 199.363px',
              WebkitMaskSize: '355px 199.363px',
              maskPosition: '92.641px 40.762px',
              WebkitMaskPosition: '92.641px 40.762px',
            }}
          />
        </div>
        <div className="absolute font-['Ubuntu:Bold',_sans-serif] text-[#ee0f0f] text-[45px] text-center leading-[0]" style={{ left: 'calc(16.667% + 134.5px)', top: 1242, width: 271, transform: 'translateX(-50%)' }}>
          <p className="leading-[normal]">vídeo</p>
        </div>
      </div>

      {/* Bloco 01 (Hero) */}
      <div className="absolute" style={{ left: 0, top: 0, width: 402, height: 874 }}>
        <div className="absolute overflow-clip" style={{ left: 0, top: 0, width: 402, height: 874 }}>
          <BackMobile />
        </div>
        <div className="absolute" style={{ left: 0, top: 701, width: 402, height: 173 }}>
          <div className="flex items-center justify-center w-[402px] h-[173px]">
            <div className="flex-none scale-y-[-100%]">
              <div className="bg-center bg-cover bg-no-repeat" style={{ width: 402, height: 173, backgroundImage: `url('${imgEmbaixo}')` }} />
            </div>
          </div>
        </div>
        <div className="absolute" style={{ top: 804, left: 'calc(8.333% + 9.5px)', width: 315, height: 36 }}>
          <BotaoCall />
        </div>
        <div className="absolute text-white font-['Ubuntu:Light',_sans-serif] text-[30px] text-center leading-[1.077] whitespace-pre" style={{ left: 'calc(8.333% + 167px)', top: 652.9, transform: 'translateX(-50%)' }}>
          <p className="mb-0">A NOVA MATEMÁTICA</p>
          <p className="mb-0">DO MARKETING:</p>
          <p className="mb-0">MENOS CUSTO,</p>
          <p>MAIS IMPACTO.</p>
        </div>
        <div className="absolute text-white font-['Ubuntu:Medium',_sans-serif] text-[15px] text-center leading-[0] whitespace-pre" style={{ left: 'calc(25% + 100.777px)', top: 631, transform: 'translateX(-50%)' }}>
          <p className="leading-[normal]">SOMOS UMA CONTENT-TECH</p>
        </div>
      </div>
    </div>
  );
}
