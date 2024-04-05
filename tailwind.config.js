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
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      roboto: ['Roboto'],
      inter: ['Inter']
    },
    extend: {

      boxShadow: {
        'golden': '2px 0px 20px 12px rgba(255, 215, 0, 0.2)'
      },

      width: {
        'video-lg': '1120px',
        'video-sm': '360px'
      },
      height: {
        'video-lg': '630px',
        'video-sm': '300px'
      },
      backgroundColor: {
        darkGrey: '#1c1c1c',
      },
      backgroundImage: () => ({
        'background-primary': `linear-gradient(to bottom, #020621, #0B1757, #020621)`,
        'background-dark-blue-gradient': `linear-gradient(180deg, rgba(2, 6, 35, 0.5) 5.6%, rgba(4, 12, 55, 0.5) 11.1%, rgba(11, 23, 87, 0.5) 22.6%, rgba(17, 30, 104, 0.5) 43.1%, rgba(16, 31, 108, 0.5) 61.6%, rgba(5, 15, 66, 0.5) 84.1%, rgba(2, 6, 33, 0.5) 95.1%);`,
        'background-to-dark-gradient': `linear-gradient(180deg, rgb(3 6 28 / 50%) 5.6%, rgb(2 5 14 / 50%) 11.1%, rgb(0 0 0 / 50%) 22.6%, rgb(0 0 0) 43.1%, rgb(3 3 3) 61.6%, rgb(0 0 0) 84.1%, rgba(0, 0, 0, 1) 95.1%);`
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
