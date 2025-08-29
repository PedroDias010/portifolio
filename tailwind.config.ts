import type { Config } from 'tailwindcss';

export default {
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
        './src/app/**/*.{js,ts,jsx,tsx}',   
    ],

    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                emerald: [
                    "var(--emerald-50)",
                    "var(--emerald-100)",
                    "var(--emerald-200)",
                    "var(--emerald-300)",
                    "var(--emerald-400)",
                    "var(--emerald-500)",
                    "var(--emerald-600)",
                    "var(--emerald-700)",
                    "var(--emerald-800)",
                    "var(--emerald-900)",
                    "var(--emerald-950)",
                ]
            }
        },
    },
    plugins: [],
} satisfies Config;