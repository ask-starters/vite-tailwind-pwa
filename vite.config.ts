import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA, VitePWAOptions, ManifestOptions } from "vite-plugin-pwa";


const manifestFile: Partial<ManifestOptions> = {
  "name": "vite-tailwind-pwa",
  "short_name": "pwa",
  "theme_color": "#2196f3",
  "background_color": "#fdfdfd",
  "display": "standalone",
  "start_url": "./index.html",
  "scope": "./",
  "orientation": "portrait-primary",
  "icons": [
    {
      "src": "./icons/logo-72x72.png",
      "sizes": "72x72",
      "type": "image/png",
      "purpose": "maskable"
    },
    {
      "src": "./icons/logo-96x96.png",
      "sizes": "96x96",
      "type": "image/png",
      "purpose": "maskable"
    },
    {
      "src": "./icons/logo-128x128.png",
      "sizes": "128x128",
      "type": "image/png",
      "purpose": "maskable"
    },
    {
      "src": "./icons/logo-144x144.png",
      "sizes": "144x144",
      "type": "image/png",
      "purpose": "maskable"
    },
    {
      "src": "./icons/logo-152x152.png",
      "sizes": "152x152",
      "type": "image/png",
      "purpose": "maskable"
    },
    {
      "src": "./icons/logo-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "maskable"
    },
    {
      "src": "./icons/logo-384x384.png",
      "sizes": "284x284",
      "type": "image/png",
      "purpose": "maskable"
    },
    {
      "src": "./icons/logo-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "maskable"
    },
    {
      "src": "./icons/logo-72x72.png",
      "sizes": "72x72",
      "type": "image/png"
    },
    {
      "src": "./icons/logo-96x96.png",
      "sizes": "96x96",
      "type": "image/png"
    },
    {
      "src": "./icons/logo-128x128.png",
      "sizes": "128x128",
      "type": "image/png"
    },
    {
      "src": "./icons/logo-144x144.png",
      "sizes": "144x144",
      "type": "image/png"
    },
    {
      "src": "./icons/logo-152x152.png",
      "sizes": "152x152",
      "type": "image/png"
    },
    {
      "src": "./icons/logo-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "./icons/logo-384x384.png",
      "sizes": "284x284",
      "type": "image/png"
    },
    {
      "src": "./icons/logo-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}


const Manifest: Partial<VitePWAOptions> = {
  registerType: 'autoUpdate',
  includeAssets: [
    'logo.svg',
    '/icons/logo-72x72.png',
    '/icons/logo-96x96.png',
    '/icons/logo-128x128.png',
    '/icons/logo-144x144.png',
    '/icons/logo-152x152.png',
    '/icons/logo-192x192.png',
    '/icons/logo-384x384.png',
    '/icons/logo-512x512.png'
  ],
  manifest: manifestFile,
  devOptions: {
    enabled: true,
    /* when using generateSW the PWA plugin will switch to classic */
    type: 'module',
    navigateFallback: 'index.html',
  }
}


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA(Manifest)
  ],
})
