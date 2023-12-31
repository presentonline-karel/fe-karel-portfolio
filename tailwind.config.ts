import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./utils/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			boxShadow: {
				btnPrimary: "0px 2px 4px 0px rgba(252, 172, 34, 0.24)",
				btnBlack: "0px 2px 4px 0px rgba(64, 72, 79, 0.24)",
				card: "0px 4px 16px 0px rgba(46, 51, 56, 0.08)",
				image: "0px 4px 16px 0px rgba(46, 51, 56, 0.10)",
				input: "0px 4px 8px 0px rgba(46, 51, 56, 0.04)",
			},
			colors: {
				"prim-100": "#FFF7EB",
				"prim-200": "#FFE7C2",
				"prim-300": "#FFD699",
				"prim-400": "#FFC670",
				"prim-500": "#FFB647",
				"prim-600": "#FCAC22",
				"prim-700": "#FBA40E",
				"prim-800": "#F19A04",
				"prim-900": "#DD8D03",
				"prim-1000": "#C98003",
				"neutrals-100": "#FFFFFF",
				"neutrals-200": "#F8FBFF",
				"neutrals-300": "#F4F5F6",
				"neutrals-400": "#E9EBED",
				"neutrals-500": "#DDE0E3",
				"neutrals-600": "#C7CCD1",
				"neutrals-700": "#B0B8BF",
				"neutrals-800": "#9AA4AC",
				"neutrals-900": "#84909A",
				"neutrals-1000": "#6E7C87",
				"neutrals-1100": "#5C6770",
				"neutrals-1200": "#49525A",
				"neutrals-1300": "#40484F",
				"neutrals-1400": "#2E3338",
				"neutrals-1500": "#25292D",
				"neutrals-1600": "#222222",
				"error-100": "#FCE6E6",
				"error-300": "#F08380",
				"error-500": "#E10600",
				"success-100": "#DBF0D9",
				"success-300": "#A5DAA1",
				"success-500": "#4BB543",
				"warning-100": "#FFF1E7",
				"warning-300": "#FDBA87",
				"warning-500": "#FB750E",
				"info-100": "#E7F1FB",
				"info-300": "#88BBED",
				"info-500": "#1077DA",
			},
			fontFamily: {
				kanit: ["var(--font-kanit)"],
			},
			lineHeight: {
				"11": "2.75rem",
				"12": "3rem",
				"13": "3.25rem",
				"14": "3.5rem",
				"15": "3.75rem",
				"16": "4rem",
				"17": "4.25rem",
				"18": "4.5rem",
				"14px": "14px",
				"18px": "18px",
				"21px": "21px",
				"26px": "26px",
				"30px": "30px",
				"38px": "38px",
				"76px": "76px",
			},
			maxWidth: {
				"8xl": "1440px",
			},
		},
		fontSize: {
			"12": "12px",
			"14": "14px",
			"16": "16px",
			"18": "18px",
			"20": "20px",
			"24": "24px",
			"28": "28px",
			"32": "32px",
			"36": "36px",
			"40": "40px",
			"44": "44px",
			"48": "48px",
			"56": "56px",
			"64": "64px",
			"72": "72px",
		},
		screens: {
			tall: { raw: "(min-height: 800px)" },
			sm: "640px",
			md: "1024px",
			lg: "1200px",
			xl: "1440px",
			hd: "1920px",
		},
	},
	plugins: [],
};

export default config;
