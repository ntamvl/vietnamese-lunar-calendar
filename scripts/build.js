/**
 * Vietnamese Lunar Calendar - Build Script
 * Generates ESM (.mjs) and CommonJS (.cjs) bundles using esbuild.
 */

import { build } from 'esbuild';
import { copyFileSync, mkdirSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const packageRoot = resolve(__dirname, '..');
const distDir = resolve(packageRoot, 'dist');

if (!existsSync(distDir)) {
  mkdirSync(distDir, { recursive: true });
}

async function runBuild() {
  console.log('🚀 Building @chonoi/vietnamese-lunar-calendar...');

  const entryPoint = resolve(packageRoot, 'src/index.js');

  // 1. Build ESM Bundle
  await build({
    entryPoints: [entryPoint],
    outfile: resolve(distDir, 'index.mjs'),
    format: 'esm',
    bundle: true,
    platform: 'neutral',
    target: ['es2020'],
    sourcemap: true,
    banner: {
      js: '/**\n * @chonoi/vietnamese-lunar-calendar (ESM)\n * Copyright (c) 2026 Chonoi & Contributors\n * MIT License\n */'
    }
  });
  console.log('✅ ESM build completed: dist/index.mjs');

  // 2. Build CommonJS Bundle
  await build({
    entryPoints: [entryPoint],
    outfile: resolve(distDir, 'index.cjs'),
    format: 'cjs',
    bundle: true,
    platform: 'node',
    target: ['es2020'],
    sourcemap: true,
    banner: {
      js: '/**\n * @chonoi/vietnamese-lunar-calendar (CommonJS)\n * Copyright (c) 2026 Chonoi & Contributors\n * MIT License\n */'
    }
  });
  console.log('✅ CJS build completed: dist/index.cjs');

  // 3. Copy TypeScript definitions
  const srcDts = resolve(packageRoot, 'index.d.ts');
  const distDts = resolve(distDir, 'index.d.ts');
  if (existsSync(srcDts)) {
    copyFileSync(srcDts, distDts);
    console.log('✅ TypeScript definitions copied to dist/index.d.ts');
  }

  console.log('✨ Build finished successfully!');
}

runBuild().catch(err => {
  console.error('❌ Build failed:', err);
  process.exit(1);
});
