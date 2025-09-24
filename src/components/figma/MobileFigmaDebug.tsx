import React from "react";

// Importações básicas para teste
import imgLogoSetima from "@/figma/mobile-assets/e3673b553c424c6b2648267f7e48b6843fc09b6b.svg";
import imgEmCima from "@/figma/mobile-assets/c5bf77151a8866fa78db0df8dde0114c259578fa.png";

export default function MobileFigmaDebug() {
	return (
		<div className="bg-white relative w-[402px] mx-auto min-h-screen">
			{/* Header simples */}
			<div className="relative h-[87px] w-full bg-gray-100">
				<h1 className="absolute top-4 left-4 text-xl font-bold text-black">
					Debug Mobile Layout
				</h1>
				
				{/* Logo teste */}
				<div className="absolute top-4 right-4 w-8 h-8">
					<img alt="Logo" className="w-full h-full object-contain" src={imgLogoSetima} />
				</div>
			</div>

			{/* Content simples */}
			<div className="p-4 space-y-6">
				<div className="bg-blue-100 p-4 rounded">
					<h2 className="text-lg font-semibold mb-2">Teste Básico</h2>
					<p className="text-sm">Este é um teste simples para verificar se o layout básico funciona.</p>
				</div>

				<div className="bg-green-100 p-4 rounded">
					<h3 className="font-bold mb-2">Assets Test</h3>
					<p className="text-sm mb-2">Testando carregamento de assets:</p>
					<div className="bg-gray-200 h-20 w-full rounded flex items-center justify-center">
						<img 
							alt="Background test" 
							className="h-full object-cover rounded" 
							src={imgEmCima}
							onError={(e) => console.error('Failed to load image:', e)}
							onLoad={() => console.log('Image loaded successfully')}
						/>
					</div>
				</div>

				<div className="bg-yellow-100 p-4 rounded">
					<h3 className="font-bold mb-2">Tailwind Classes Test</h3>
					<div className="grid grid-cols-2 gap-2 text-xs">
						<div className="bg-red-500 text-white p-2 rounded">Red</div>
						<div className="bg-blue-500 text-white p-2 rounded">Blue</div>
						<div className="bg-green-500 text-white p-2 rounded">Green</div>
						<div className="bg-purple-500 text-white p-2 rounded">Purple</div>
					</div>
				</div>

				<div className="bg-gray-100 p-4 rounded">
					<h3 className="font-bold mb-2">Original Problems:</h3>
					<ul className="text-sm space-y-1">
						<li>• HTML nesting issues (button inside button) ✓ FIXED</li>
						<li>• Asset loading problems (404 errors)</li>
						<li>• Custom Tailwind classes not working</li>
						<li>• Layout positioning issues</li>
						<li>• WebSocket connection issues</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
