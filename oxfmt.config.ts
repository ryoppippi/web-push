import { defineConfig } from 'oxfmt';

export default defineConfig({
	useTabs: true,
	singleQuote: true,
	ignorePatterns: ['**/node_modules/**', '**/dist/**', '**/.git/**', '**/pnpm-lock.yaml'],
});
