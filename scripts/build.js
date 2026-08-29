#!/usr/bin/env node
/**
 * Compila o SCSS de cada site em sites/<nome>/scss/main.scss
 * para sites/<nome>/css/main.css, e copia os assets do Bootstrap
 * (JS) e do Swiper (JS + CSS) de node_modules para sites/<nome>/vendor.
 *
 * Uso:
 *   node scripts/build.js build   -> compila uma vez (produção, minificado)
 *   node scripts/build.js watch   -> observa mudanças (dev, com source map)
 */
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const sitesDir = path.join(rootDir, 'sites');
const mode = process.argv[2] || 'build';

if (!fs.existsSync(sitesDir)) {
  console.error('Pasta "sites" não encontrada.');
  process.exit(1);
}

const siteDirs = fs
  .readdirSync(sitesDir, { withFileTypes: true })
  .filter((d) => d.isDirectory() && !d.name.startsWith('_'))
  .map((d) => d.name);

const VENDOR_FILES = [
  {
    src: path.join(rootDir, 'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'),
    dest: path.join('vendor', 'bootstrap', 'bootstrap.bundle.min.js'),
  },
  {
    src: path.join(rootDir, 'node_modules/swiper/swiper-bundle.min.js'),
    dest: path.join('vendor', 'swiper', 'swiper-bundle.min.js'),
  },
  {
    src: path.join(rootDir, 'node_modules/swiper/swiper-bundle.min.css'),
    dest: path.join('vendor', 'swiper', 'swiper-bundle.min.css'),
  },
  {
    src: path.join(rootDir, 'node_modules/bootstrap-icons/font/bootstrap-icons.min.css'),
    dest: path.join('vendor', 'bootstrap-icons', 'bootstrap-icons.min.css'),
  },
  {
    src: path.join(rootDir, 'node_modules/bootstrap-icons/font/fonts/bootstrap-icons.woff'),
    dest: path.join('vendor', 'bootstrap-icons', 'fonts', 'bootstrap-icons.woff'),
  },
  {
    src: path.join(rootDir, 'node_modules/bootstrap-icons/font/fonts/bootstrap-icons.woff2'),
    dest: path.join('vendor', 'bootstrap-icons', 'fonts', 'bootstrap-icons.woff2'),
  },
];

function copyVendorAssets() {
  for (const site of siteDirs) {
    for (const file of VENDOR_FILES) {
      const destPath = path.join(sitesDir, site, file.dest);
      fs.mkdirSync(path.dirname(destPath), { recursive: true });
      fs.copyFileSync(file.src, destPath);
    }
  }
  console.log(`[vendor] bootstrap.bundle.min.js + swiper-bundle + bootstrap-icons copiados para: ${siteDirs.join(', ')}`);
}

copyVendorAssets();

const pairs = [];
for (const site of siteDirs) {
  const scssEntry = path.join('sites', site, 'scss', 'main.scss');
  const cssOut = path.join('sites', site, 'css', 'main.css');
  if (fs.existsSync(path.join(rootDir, scssEntry))) {
    pairs.push(`${scssEntry}:${cssOut}`);
  }
}

if (pairs.length === 0) {
  console.log('Nenhum site com scss/main.scss encontrado em /sites.');
  process.exit(0);
}

const args = [...pairs, '--load-path=node_modules', '--quiet-deps', '--silence-deprecation=import'];

if (mode === 'watch') {
  args.push('--watch', '--style=expanded', '--source-map');
  console.log(`[sass] observando alterações em: ${siteDirs.join(', ')}`);
} else {
  args.push('--style=compressed', '--no-source-map');
  console.log(`[sass] compilando: ${siteDirs.join(', ')}`);
}

const child = spawn('npx', ['sass', ...args], {
  cwd: rootDir,
  stdio: 'inherit',
  shell: process.platform === 'win32',
});

child.on('exit', (code) => process.exit(code ?? 0));
