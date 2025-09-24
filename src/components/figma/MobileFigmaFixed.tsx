import React from "react";

// Importação dos assets
import imgAiToolsWaistUpPortraitAmericanShotOfASmilingPersonW47B472C7205A4D66Bacf38F70Faa6D812 from "@/figma/mobile-assets/705cc0dc55d0d5a68388c772e2b6117b6c99cd0f.png";
import imgAiToolsWaistUpPortraitAmericanShotOfASmilingPersonW47B472C7205A4D66Bacf38F70Faa6D814 from "@/figma/mobile-assets/363d73ec33595dde3285b1f284098774998f5dac.png";
import imgAiToolsWaistUpPortraitAmericanShotOfASmilingPersonW47B472C7205A4D66Bacf38F70Faa6D815 from "@/figma/mobile-assets/012759f13f56517f1097b1fc4887ce210daa0750.png";
import imgAiToolsWaistUpPortraitAmericanShotOfASmilingPersonW47B472C7205A4D66Bacf38F70Faa6D816 from "@/figma/mobile-assets/8fca1f53bb6c91dfa7bb390285d6e25c4fdabb30.png";
import imgAiToolsWaistUpPortraitAmericanShotOfASmilingPersonW47B472C7205A4D66Bacf38F70Faa6D817 from "@/figma/mobile-assets/982534bd46b9e568691c0e5652a818ec5954a309.png";
import imgEmCima from "@/figma/mobile-assets/c5bf77151a8866fa78db0df8dde0114c259578fa.png";
import imgAquamarine41 from "@/figma/mobile-assets/6f46d9eac5f0e6717c6f749ddb7cef9b8551351a.png";
import img250127AlmapStillTeraTheTownFrenteV081 from "@/figma/mobile-assets/0e4c4fe22e1cb5636a33462c5ac2022a711c0f36.png";
import imgEmbaixo from "@/figma/mobile-assets/5112680c7f40d23f48f8876eb2dc44893c6f5a26.png";
import imgIconeSeta from "@/figma/mobile-assets/7d81ad28ec29517142c61263569911e56b5bf8b1.svg";
import imgBotao from "@/figma/mobile-assets/a4c6c6d2eaa486caf6f1c3c20b372c4a3e46e1e6.svg";
import imgLogoSetima from "@/figma/mobile-assets/e3673b553c424c6b2648267f7e48b6843fc09b6b.svg";
import imgLogoSetima1 from "@/figma/mobile-assets/7674cae785697e8381e7c52cd1935cc4128a49d2.svg";
import imgGroup from "@/figma/mobile-assets/6225e7201df464b6a08b03339a7f5840b8630a79.svg";
import imgLinkedin from "@/figma/mobile-assets/cee4173fa836977c0c829c200d5affe5043cbc21.svg";

function BotaoCall() {
	return (
		<div className="relative h-9 w-full max-w-[315px] rounded-[30px] bg-[#00f5b9] flex items-center justify-center px-4">
			<p className="text-black text-[12px] font-normal leading-none text-center whitespace-nowrap">
				MARQUE UM CALL E SAIBA COMO FUNCIONA
			</p>
			<div className="ml-2">
				<img alt="" className="w-3 h-3" src={imgIconeSeta} />
			</div>
		</div>
	);
}

function BackMobile() {
	return (
		<div className="relative w-full h-[874px] overflow-hidden">
			{/* Hero background com pessoas */}
			<div className="absolute inset-0 flex">
				<div className="relative flex-1 min-w-0">
					<img 
						src={imgAiToolsWaistUpPortraitAmericanShotOfASmilingPersonW47B472C7205A4D66Bacf38F70Faa6D812} 
						alt="" 
						className="w-full h-full object-cover"
					/>
				</div>
				<div className="relative flex-1 min-w-0">
					<img 
						src={imgAiToolsWaistUpPortraitAmericanShotOfASmilingPersonW47B472C7205A4D66Bacf38F70Faa6D814} 
						alt="" 
						className="w-full h-full object-cover"
					/>
				</div>
			</div>
		</div>
	);
}

function Acordeon({ pergunta = "O que é uma content-tech?" }: { pergunta?: string }) {
	return (
		<div className="w-full border-b border-black/20 py-3">
			<button className="flex items-center justify-between w-full text-left">
				<h3 className="text-[#13171a] text-lg font-bold leading-tight">
					{pergunta}
				</h3>
				<div className="ml-4 flex-shrink-0">
					<img alt="" className="w-[18px] h-[18px]" src={imgBotao} />
				</div>
			</button>
		</div>
	);
}

export default function MobileFigmaFixed() {
	return (
		<div className="bg-white w-full min-h-screen">
			{/* Header */}
			<header className="relative">
				<div className="h-[87px] bg-cover bg-center" style={{ backgroundImage: `url('${imgEmCima}')` }}>
					<div className="flex items-center justify-between px-6 py-4 h-full">
						<div className="w-10 h-8">
							<img alt="Logo Setima" className="w-full h-full object-contain" src={imgLogoSetima} />
						</div>
						<div className="flex-1 max-w-[315px] ml-6">
							<BotaoCall />
						</div>
					</div>
				</div>
			</header>

			{/* Hero Section */}
			<section className="relative">
				<BackMobile />
				
				{/* Hero content overlay */}
				<div className="absolute inset-0 flex flex-col justify-end">
					{/* Gradient overlay */}
					<div className="h-[173px] bg-cover bg-center scale-y-[-1]" 
						 style={{ backgroundImage: `url('${imgEmbaixo}')` }}>
					</div>
					
					{/* Hero text */}
					<div className="absolute bottom-16 left-0 right-0 text-center text-white px-6">
						<p className="text-[15px] font-medium mb-2">
							SOMOS UMA CONTENT-TECH
						</p>
						<h1 className="text-[30px] leading-tight font-light">
							A NOVA MATEMÁTICA<br/>
							DO MARKETING:<br/>
							MENOS CUSTO,<br/>
							MAIS IMPACTO.
						</h1>
					</div>
					
					{/* CTA Button */}
					<div className="absolute bottom-4 left-6 right-6">
						<BotaoCall />
					</div>
				</div>
			</section>

			{/* Bloco 02 - CGI/NGI */}
			<section className="bg-[#13171a] text-white px-6 py-16">
				<div className="text-center">
					<h2 className="text-[30px] font-light leading-tight mb-6">
						O CGI AGORA É NGI:<br/>
						NEXT-GEN IMAGERY.
					</h2>
					<p className="text-[20px] leading-relaxed mb-8">
						Um novo fluxo de produção aonde 3D, IA e outras tecnologias trabalham juntas para escalar conteúdo com impacto e consistência.
					</p>
				</div>
				
				{/* Video placeholder */}
				<div className="my-8 rounded-xl overflow-hidden">
					<div className="aspect-video bg-gray-800 flex items-center justify-center">
						<p className="text-red-500 text-[45px] font-bold">vídeo</p>
					</div>
				</div>
				
				<div className="text-center">
					<p className="text-[20px] leading-relaxed">
						Como uma content-tech, podemos atuar desde o conceito criativo até a distribuição multicanal e a análise de desempenho. Um fluxo sustentado por um stack tecnológico integrado que vai de IA à automação, do CMS/DAM ao analytics e além.
					</p>
				</div>
			</section>

			{/* Bloco 03 - Experiências 3D */}
			<section className="bg-[#f8f8f2] px-6 py-16">
				<div className="text-center">
					<h2 className="text-[#13171a] text-[30px] font-light leading-tight mb-12">
						O PODER DAS EXPERIÊNCIAS INTERATIVAS EM 3D:<br/>
						<span className="font-bold">+66% DE ENGAJAMENTO, +9% EM VENDAS.</span>
					</h2>
					
					{/* Video placeholder */}
					<div className="my-8 rounded-xl overflow-hidden">
						<div className="aspect-video bg-gray-300 w-full"></div>
					</div>
					
					<p className="text-[#13171a] text-[20px] leading-relaxed">
						O 3D já trascende o universo de stills e CGI: tornou-se linguagem, experiência e presença digital que é capaz de capturar e converter.
					</p>
				</div>
			</section>

			{/* Bloco 04 - Assets */}
			<section className="relative">
				{/* Main image */}
				<div className="h-[536px] overflow-hidden">
					<img 
						src={img250127AlmapStillTeraTheTownFrenteV081} 
						alt="" 
						className="w-full h-full object-cover"
					/>
				</div>
				
				{/* Dark section */}
				<div className="bg-[#13171a] text-white px-6 py-16">
					{/* Thumbnail grid */}
					<div className="grid grid-cols-4 gap-3 mb-8">
						{Array.from({ length: 8 }, (_, i) => (
							<div key={i} className="aspect-square bg-[#d9d9d9] rounded"></div>
						))}
					</div>
					
					<div className="text-center">
						<h2 className="text-[#f8f8f2] text-[30px] font-light leading-tight mb-6">
							UM ASSET, INFINITAS POSSIBILIDADES.<br/>
							<span className="font-bold">SEU BUDGET OTIMIZADO AO MÁXIMO.</span>
						</h2>
						
						<p className="text-[#f8f8f2] text-[20px] leading-relaxed">
							Tenha um digital twin do seu produto e desdobre-o em conteúdos para redes sociais, e-commerce, experiências interativas, mídia OOH, propaganda, filmes, fotos e muito mais.
						</p>
					</div>
				</div>
			</section>

			{/* Bloco 05 - Projetos */}
			<section className="bg-[#f8f8f2] px-6 py-16">
				<div className="text-center">
					<h2 className="text-[#13171a] text-[30px] font-light leading-tight mb-12">
						MAIS DE 60 PROJETOS<br/>
						EM 2025 QUE AJUDARAM NOSSOS CLIENTES A ECONOMIZAR MILHÕES<br/>
						EM COMPARAÇÃO A PRODUÇÕES TRADICIONAIS.
					</h2>
					
					<p className="text-[#13171a] text-[20px] leading-relaxed">
						Integramos criatividade, estratégia e tecnologia em um só fluxo, criando conteúdos relevantes de maneira mais rápida, escalável e impactante.
					</p>
				</div>
			</section>

			{/* Bloco 06 - NGI Flow */}
			<section className="bg-[#13171a] text-white px-6 py-16 relative">
				<div className="text-center relative z-10">
					<h2 className="text-[30px] font-light leading-tight mb-8">
						O FLUXO NGI: DA ESTRATÉGIA À PRODUÇÃO, CRIATIVIDADE E TÉCNICA ACELERADAS PELA IA.
					</h2>
					
					<div className="space-y-2 text-lg font-bold">
						<p>+ RÁPIDO</p>
						<p>+ ESCALÁVEL</p>
						<p>+ IMPACTANTE</p>
					</div>
				</div>
				
				{/* Background image */}
				<div className="absolute inset-0 opacity-30">
					<img 
						src={imgAquamarine41} 
						alt="" 
						className="w-full h-full object-cover"
					/>
				</div>
			</section>

			{/* FAQ Section */}
			<section className="bg-[#f8f8f2] px-6 py-16">
				<div className="text-center mb-12">
					<h2 className="text-[#13171a] text-[30px] font-light">
						DÚVIDAS FREQUENTES
					</h2>
				</div>
				
				<div className="space-y-4">
					<Acordeon pergunta="O que é uma content-tech?" />
					<Acordeon pergunta="Como funciona o processo de produção?" />
					<Acordeon pergunta="Quais são os benefícios do NGI?" />
					<Acordeon pergunta="Como posso começar um projeto?" />
					<Acordeon pergunta="Qual é o investimento necessário?" />
					<Acordeon pergunta="Quanto tempo leva um projeto?" />
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-[#13171a] text-white px-6 py-12">
				<div className="text-center">
					<div className="mb-6">
						<img alt="Logo Setima" className="h-8 mx-auto mb-4" src={imgLogoSetima1} />
						
						<div className="flex justify-center space-x-4 mb-6">
							<img alt="Instagram" className="w-6 h-6" src={imgGroup} />
							<img alt="LinkedIn" className="w-6 h-6" src={imgLinkedin} />
						</div>
					</div>
					
					<p className="text-[12px] leading-relaxed text-center max-w-sm mx-auto">
						@2025 Setima. Todos os direitos reservados. Todo o conteúdo deste site é protegido por leis de propriedade intelectual.
					</p>
				</div>
			</footer>
		</div>
	);
}
