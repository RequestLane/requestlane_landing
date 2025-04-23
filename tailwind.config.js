/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6eeff',
          100: '#ccdeff',
          200: '#99bdff',
          300: '#669cff',
          400: '#337bff',
          500: '#005aff',
          600: '#0048cc',
          700: '#003699',
          800: '#002466',
          900: '#001233',
        },
        accent: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        success: {
          500: '#10b981',
          600: '#059669',
        },
        warning: {
          500: '#f59e0b',
          600: '#d97706',
        },
        error: {
          500: '#ef4444',
          600: '#dc2626',
        },
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 8s ease-in-out infinite',
        'subtle-float': 'subtleFloat 15s ease-in-out infinite',
        'subtle-drift': 'subtleDrift 20s ease-in-out infinite',
        'rainbow-border': 'rainbowBorder 3s linear infinite',
        'rainbow-glow': 'rainbowGlow 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-30px)' },
        },
        subtleFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        subtleDrift: {
          '0%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(5px, -5px)' },
          '50%': { transform: 'translate(0, -8px)' },
          '75%': { transform: 'translate(-5px, -2px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        rainbowBorder: {
          '0%': { borderColor: '#f87171' }, // red
          '16.67%': { borderColor: '#fb923c' }, // orange
          '33.33%': { borderColor: '#facc15' }, // yellow
          '50%': { borderColor: '#4ade80' }, // green
          '66.67%': { borderColor: '#60a5fa' }, // blue
          '83.33%': { borderColor: '#a78bfa' }, // purple
          '100%': { borderColor: '#f87171' }, // back to red
        },
        rainbowGlow: {
          '0%': { boxShadow: '0 0 0 1px rgba(248, 113, 113, 0.2)' }, // red
          '16.67%': { boxShadow: '0 0 0 1px rgba(251, 146, 60, 0.2)' }, // orange  
          '33.33%': { boxShadow: '0 0 0 1px rgba(250, 204, 21, 0.2)' }, // yellow
          '50%': { boxShadow: '0 0 0 1px rgba(74, 222, 128, 0.2)' }, // green
          '66.67%': { boxShadow: '0 0 0 1px rgba(96, 165, 250, 0.2)' }, // blue
          '83.33%': { boxShadow: '0 0 0 1px rgba(167, 139, 250, 0.2)' }, // purple
          '100%': { boxShadow: '0 0 0 1px rgba(248, 113, 113, 0.2)' }, // back to red
        },
      },
    },
  },
  plugins: [],
};