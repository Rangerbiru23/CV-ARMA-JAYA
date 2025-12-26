import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
    darkMode: "class",
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
        extend: {
                colors: {
                        // Brand colors for CV ARMA JAYA
                        'brand-primary': 'var(--brand-primary)',
                        'brand-secondary': 'var(--brand-secondary)',
                        'brand-accent': 'var(--brand-accent)',
                        
                        // Semantic colors
                        'background': 'var(--background)',
                        'surface': 'var(--surface)',
                        'surface-subtle': 'var(--surface-subtle)',
                        'text': 'var(--text)',
                        'text-secondary': 'var(--text-secondary)',
                        'text-muted': 'var(--text-muted)',
                        'text-inverse': 'var(--text-inverse)',
                        'border': 'var(--border)',
                        'border-subtle': 'var(--border-subtle)',
                        'border-strong': 'var(--border-strong)',
                        
                        // Legacy shadcn colors (for compatibility)
                        foreground: 'var(--text)',
                        card: {
                                DEFAULT: 'var(--surface)',
                                foreground: 'var(--text)'
                        },
                        primary: {
                                DEFAULT: 'var(--brand-primary)',
                                foreground: 'var(--brand-primary-foreground)'
                        },
                        secondary: {
                                DEFAULT: 'var(--brand-secondary)',
                                foreground: 'var(--brand-secondary-foreground)'
                        },
                        muted: {
                                DEFAULT: 'var(--surface-subtle)',
                                foreground: 'var(--text-muted)'
                        },
                        accent: {
                                DEFAULT: 'var(--brand-accent)',
                                foreground: 'var(--brand-accent-foreground)'
                        },
                        destructive: {
                                DEFAULT: 'var(--danger)',
                                foreground: 'var(--danger-foreground)'
                        },
                        input: 'var(--surface)',
                        ring: 'var(--brand-primary)',
                },
                borderRadius: {
                        'xs': 'var(--radius-xs)',
                        'sm': 'var(--radius-sm)',
                        'md': 'var(--radius-md)',
                        'lg': 'var(--radius-lg)',
                        'xl': 'var(--radius-xl)',
                        '2xl': 'var(--radius-2xl)',
                        'full': 'var(--radius-full)',
                },
                boxShadow: {
                        'sm': 'var(--shadow-sm)',
                        'md': 'var(--shadow-md)',
                        'lg': 'var(--shadow-lg)',
                        'xl': 'var(--shadow-xl)',
                },
                spacing: {
                        '0': 'var(--space-0)',
                        '1': 'var(--space-1)',
                        '2': 'var(--space-2)',
                        '3': 'var(--space-3)',
                        '4': 'var(--space-4)',
                        '5': 'var(--space-5)',
                        '6': 'var(--space-6)',
                        '8': 'var(--space-8)',
                        '10': 'var(--space-10)',
                        '12': 'var(--space-12)',
                        '16': 'var(--space-16)',
                        '20': 'var(--space-20)',
                        '24': 'var(--space-24)',
                },
                fontSize: {
                        'display': 'var(--font-display)',
                        'h1': 'var(--font-h1)',
                        'h2': 'var(--font-h2)',
                        'h3': 'var(--font-h3)',
                        'h4': 'var(--font-h4)',
                        'body': 'var(--font-body)',
                        'small': 'var(--font-small)',
                        'caption': 'var(--font-caption)',
                },
                fontWeight: {
                        'light': 'var(--font-weight-light)',
                        'normal': 'var(--font-weight-normal)',
                        'medium': 'var(--font-weight-medium)',
                        'semibold': 'var(--font-weight-semibold)',
                        'bold': 'var(--font-weight-bold)',
                        'extrabold': 'var(--font-weight-extrabold)',
                },
                animation: {
                        'fade-in': 'fadeIn var(--duration-slow) var(--easing-out) backwards',
                        'shimmer': 'shimmer 2s infinite',
                        'pulse': 'pulse 2s infinite',
                },
                keyframes: {
                        fadeIn: {
                                '0%': { opacity: '0', transform: 'translateY(8px)' },
                                '100%': { opacity: '1', transform: 'translateY(0)' }
                        },
                        shimmer: {
                                '0%': { transform: 'translateX(-100%)' },
                                '100%': { transform: 'translateX(100%)' }
                        },
                        pulse: {
                                '0%, 100%': { opacity: '1' },
                                '50%': { opacity: '0.5' }
                        }
                }
        }
  },
  plugins: [tailwindcssAnimate],
};
export default config;
