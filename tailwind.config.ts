import type { Config  } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
    	extend: {
    		colors: {
    			main: 'var(--main)',
    			overlay: 'var(--overlay)',
    			bg: 'var(--bg)',
    			bw: 'var(--bw)',
    			blank: 'var(--blank)',
    			text: 'var(--text)',
    			mtext: 'var(--mtext)',
    			border: 'var(--border)',
    			ring: 'var(--ring)',
    			ringOffset: 'var(--ring-offset)',
    			secondaryBlack: '#212121'
    		},
    		borderRadius: {
    			base: '5px'
    		},
    		boxShadow: {
    			shadow: 'var(--shadow)'
    		},
    		translate: {
    			boxShadowX: '4px',
    			boxShadowY: '4px',
    			reverseBoxShadowX: '-4px',
    			reverseBoxShadowY: '-4px'
    		},
    		fontWeight: {
    			base: '500',
    			heading: '800'
    		},
    		fontFamily: {
    			heading: [
    				'var(--font-geist-sans)',
    				'sans-serif'
    			],
    			body: [
    				'var(--font-public-sans)',
    				'sans-serif'
    			]
    		},
    		keyframes: {
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			},
    			grid: {
    				'0%': {
    					transform: 'translateY(-50%)'
    				},
    				'100%': {
    					transform: 'translateY(0)'
    				}
    			}
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out',
    			grid: 'grid 15s linear infinite'
    		}
    	}
    },
	plugins: [tailwindcssAnimate,],
} satisfies Config;
