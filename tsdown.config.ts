import { defineConfig } from 'tsdown';

export default defineConfig({
	entry: ['./src/index.ts'],
	outDir: 'dist',
	format: 'esm',
	clean: true,
	dts: true,
	sourcemap: true,
	publint: true,
	unused: true,
	unbundle: true,
	nodeProtocol: true,
});
