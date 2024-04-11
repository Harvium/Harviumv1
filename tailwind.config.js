/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    fontFamily: {
      'nunito': ['"Nunito Sans"', 'sans-serif'],
      'arvo': ['Arvo', 'serif'],
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        'mb': '420px',
        "2xl": "1400px",
      },
    },
    extend: {
      blur:{
        '4xl': '200px',
      },
      boxShadow: {
        'md': '0px 0px 10px .1px',
        'lg': '0px 0px 20px .1px',
        'xl': '0px 0px 50px .1px',
        '3xl': '0px 0px 200px .1px',
        'inner': 'inset 0 0 10px .1px'
      },

      width: {
        'video-lg': '1120px',
        'video-sm': '360px'
      },
      height: {
        'video-lg': '630px',
        'video-sm': '300px'
      },
      backgroundImage: (theme) => ({
        'background-primary': `linear-gradient(to bottom, #020621, #0B1757, #020621)`,
      }),
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {

        "slidein" : {
          from:{
            opacity: "0",
            transform: "translateY(-10px)",
          },

          to:{
            opacity: "1",
            transform: "translateY(0px)",
          },
        },

        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slidein": "slidein 1s ease 300ms",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}