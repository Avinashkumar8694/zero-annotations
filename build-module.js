import { build } from 'esbuild';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function buildModule() {
  console.log('📦 Building zero-annotation shared module...');
  
  try {
    await build({
      entryPoints: [path.join(__dirname, 'index.ts')],
      bundle: true,
      outfile: path.join(__dirname, 'dist', 'zero-annotation.js'),
      format: 'esm',
      target: 'es2022',
      minify: false, // Keep it readable for now
      external: ['lit'], // We bundle reflect-metadata but keep lit external
    });
    console.log('✅ Shared module built successfully at dist/zero-annotation.js');
  } catch (err) {
    console.error('❌ Build failed:', err);
    process.exit(1);
  }
}

buildModule();
