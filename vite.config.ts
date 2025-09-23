
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react-swc';
  import path from 'path';

  export default defineConfig({
  // Base dinâmico: usa BASE_PATH (GitHub Pages) ou raiz
  base: process.env.BASE_PATH || '/',
  plugins: [react()],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {
        'vaul@1.1.2': 'vaul',
        'sonner@2.0.3': 'sonner',
        'recharts@2.15.2': 'recharts',
        'react-resizable-panels@2.1.7': 'react-resizable-panels',
        'react-hook-form@7.55.0': 'react-hook-form',
        'react-day-picker@8.10.1': 'react-day-picker',
        'next-themes@0.4.6': 'next-themes',
        'lucide-react@0.487.0': 'lucide-react',
        'input-otp@1.4.2': 'input-otp',
  'figma:asset/9a654ce0bbc1b437282de0c696914374ed89f641.png': path.resolve(__dirname, './src/assets/9a654ce0bbc1b437282de0c696914374ed89f641.png'),
  'figma:asset/982534bd46b9e568691c0e5652a818ec5954a309.png': path.resolve(__dirname, './src/assets/982534bd46b9e568691c0e5652a818ec5954a309.png'),
  'figma:asset/8fca1f53bb6c91dfa7bb390285d6e25c4fdabb30.png': path.resolve(__dirname, './src/assets/8fca1f53bb6c91dfa7bb390285d6e25c4fdabb30.png'),
  'figma:asset/8c05f1bb3639a901cae85d722430ef33a62e7d28.png': path.resolve(__dirname, './src/assets/8c05f1bb3639a901cae85d722430ef33a62e7d28.webp'),
  'figma:asset/86d3063cb2abbf00887077f00ed48a7f75469ca4.png': path.resolve(__dirname, './src/assets/86d3063cb2abbf00887077f00ed48a7f75469ca4.webp'),
  'figma:asset/705cc0dc55d0d5a68388c772e2b6117b6c99cd0f.png': path.resolve(__dirname, './src/assets/705cc0dc55d0d5a68388c772e2b6117b6c99cd0f.png'),
  'figma:asset/363d73ec33595dde3285b1f284098774998f5dac.png': path.resolve(__dirname, './src/assets/363d73ec33595dde3285b1f284098774998f5dac.png'),
  'figma:asset/0e4c4fe22e1cb5636a33462c5ac2022a711c0f36.png': path.resolve(__dirname, './src/assets/0e4c4fe22e1cb5636a33462c5ac2022a711c0f36.webp'),
  'figma:asset/00bd12579795674c4cb2b293530ca5101339ddb5.png': path.resolve(__dirname, './src/assets/00bd12579795674c4cb2b293530ca5101339ddb5.webp'),
        'embla-carousel-react@8.6.0': 'embla-carousel-react',
        'cmdk@1.1.1': 'cmdk',
        'class-variance-authority@0.7.1': 'class-variance-authority',
        '@radix-ui/react-tooltip@1.1.8': '@radix-ui/react-tooltip',
        '@radix-ui/react-toggle@1.1.2': '@radix-ui/react-toggle',
        '@radix-ui/react-toggle-group@1.1.2': '@radix-ui/react-toggle-group',
        '@radix-ui/react-tabs@1.1.3': '@radix-ui/react-tabs',
        '@radix-ui/react-switch@1.1.3': '@radix-ui/react-switch',
        '@radix-ui/react-slot@1.1.2': '@radix-ui/react-slot',
        '@radix-ui/react-slider@1.2.3': '@radix-ui/react-slider',
        '@radix-ui/react-separator@1.1.2': '@radix-ui/react-separator',
        '@radix-ui/react-select@2.1.6': '@radix-ui/react-select',
        '@radix-ui/react-scroll-area@1.2.3': '@radix-ui/react-scroll-area',
        '@radix-ui/react-radio-group@1.2.3': '@radix-ui/react-radio-group',
        '@radix-ui/react-progress@1.1.2': '@radix-ui/react-progress',
        '@radix-ui/react-popover@1.1.6': '@radix-ui/react-popover',
        '@radix-ui/react-navigation-menu@1.2.5': '@radix-ui/react-navigation-menu',
        '@radix-ui/react-menubar@1.1.6': '@radix-ui/react-menubar',
        '@radix-ui/react-label@2.1.2': '@radix-ui/react-label',
        '@radix-ui/react-hover-card@1.1.6': '@radix-ui/react-hover-card',
        '@radix-ui/react-dropdown-menu@2.1.6': '@radix-ui/react-dropdown-menu',
        '@radix-ui/react-dialog@1.1.6': '@radix-ui/react-dialog',
        '@radix-ui/react-context-menu@2.2.6': '@radix-ui/react-context-menu',
        '@radix-ui/react-collapsible@1.1.3': '@radix-ui/react-collapsible',
        '@radix-ui/react-checkbox@1.1.4': '@radix-ui/react-checkbox',
        '@radix-ui/react-avatar@1.1.3': '@radix-ui/react-avatar',
        '@radix-ui/react-aspect-ratio@1.1.2': '@radix-ui/react-aspect-ratio',
        '@radix-ui/react-alert-dialog@1.1.6': '@radix-ui/react-alert-dialog',
        '@radix-ui/react-accordion@1.2.3': '@radix-ui/react-accordion',
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      target: 'esnext',
      outDir: 'build',
    },
  server: (() => {
      const isLocal = process.env.LOCAL_DEV === '1' || process.env.VITE_LOCAL_DEV === '1';
      return {
    port: 3002,
        strictPort: true,
    open: true,
        host: '0.0.0.0',
        allowedHosts: [
          'localhost',
          '127.0.0.1',
          'lafayette-yields-antique-tide.trycloudflare.com',
          'euros-ensure-springer-highest.trycloudflare.com',
          'burning-ultimately-leg-perry.trycloudflare.com',
        ],
        // Em ambiente local, deixa HMR padrão (localhost). Em ambiente remoto, usa WSS custom.
        ...(isLocal
          ? {}
          : {
              hmr: {
                host: 'lafayette-yields-antique-tide.trycloudflare.com',
                protocol: 'wss',
                clientPort: 443,
              },
            }),
      };
    })(),
});
