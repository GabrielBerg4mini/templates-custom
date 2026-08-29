#!/usr/bin/env node
/**
 * Cria um novo site a partir do template base.
 * Uso: npm run new-site -- nome-do-site
 */
const fs = require('fs');
const path = require('path');

const rawName = process.argv[2];

if (!rawName) {
  console.error('Uso: npm run new-site -- nome-do-site');
  process.exit(1);
}

const slug = rawName
  .trim()
  .toLowerCase()
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/(^-|-$)/g, '');

const rootDir = path.join(__dirname, '..');
const templateDir = path.join(rootDir, 'sites', '_template');
const targetDir = path.join(rootDir, 'sites', slug);

if (fs.existsSync(targetDir)) {
  console.error(`A pasta sites/${slug} já existe.`);
  process.exit(1);
}

fs.cpSync(templateDir, targetDir, { recursive: true });

console.log(`Site criado em sites/${slug}`);
console.log('Rode "npm run watch" para compilar o SCSS automaticamente.');
