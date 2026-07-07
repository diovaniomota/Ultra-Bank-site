import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Only load the Cloudflare plugin during builds (not local dev),
// because the workerd binary can crash on some Windows configurations.
const isDev = process.env.NODE_ENV !== 'production';

// https://vite.dev/config/
export default defineConfig(async () => {
  const plugins = [react()];

  if (!isDev) {
    const { cloudflare } = await import("@cloudflare/vite-plugin");
    plugins.push(cloudflare());
  }

  return { plugins };
})