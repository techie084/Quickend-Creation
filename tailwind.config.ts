import type { Config } from 'tailwindcss';

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#705d00',
				'primary-container': '#ffd700',
				'primary-fixed': '#ffe16d',
				'primary-fixed-dim': '#e9c400',
				'inverse-primary': '#e9c400',
				'on-primary': '#ffffff',
				'on-primary-container': '#705e00',
				'on-primary-fixed': '#221b00',
				'on-primary-fixed-variant': '#544600',
				secondary: '#5f5e5e',
				'secondary-container': '#e2dfde',
				'secondary-fixed': '#e5e2e1',
				'secondary-fixed-dim': '#c8c6c5',
				'on-secondary': '#ffffff',
				'on-secondary-container': '#636262',
				'on-secondary-fixed': '#1c1b1b',
				'on-secondary-fixed-variant': '#474746',
				tertiary: '#00658b',
				'tertiary-container': '#b0e0ff',
				'tertiary-fixed': '#c4e7ff',
				'tertiary-fixed-dim': '#7cd0ff',
				'on-tertiary': '#ffffff',
				'on-tertiary-container': '#00668b',
				'on-tertiary-fixed': '#001e2c',
				'on-tertiary-fixed-variant': '#004c69',
				error: '#ba1a1a',
				'error-container': '#ffdad6',
				'on-error': '#ffffff',
				'on-error-container': '#93000a',
				background: '#f9f9f9',
				'on-background': '#1a1c1c',
				surface: '#f9f9f9',
				'surface-dim': '#dadada',
				'surface-bright': '#f9f9f9',
				'surface-tint': '#705d00',
				'surface-variant': '#e2e2e2',
				'surface-container': '#eeeeee',
				'surface-container-low': '#f3f3f3',
				'surface-container-high': '#e8e8e8',
				'surface-container-lowest': '#ffffff',
				'surface-container-highest': '#e2e2e2',
				'on-surface': '#1a1c1c',
				'on-surface-variant': '#4d4732',
				'inverse-surface': '#2f3131',
				'inverse-on-surface': '#f1f1f1',
				outline: '#7e775f',
				'outline-variant': '#d0c6ab'
			},
			fontFamily: {
				headline: ['Noto Serif', 'serif'],
				body: ['Inter', 'sans-serif'],
				label: ['Inter', 'sans-serif']
			},
			borderRadius: {
				DEFAULT: '0.125rem',
				lg: '0.25rem',
				xl: '0.5rem',
				full: '0.75rem'
			}
		}
	},
	plugins: []
} satisfies Config;
