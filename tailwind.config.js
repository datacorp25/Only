module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canalviptelegramsiteblack: "var(--canalviptelegramsiteblack)",
        canalviptelegramsitecerulean: "var(--canalviptelegramsitecerulean)",
        "canalviptelegramsitecod-gray": "var(--canalviptelegramsitecod-gray)",
        canalviptelegramsitegray: "var(--canalviptelegramsitegray)",
        canalviptelegramsitewhite: "var(--canalviptelegramsitewhite)",
        "canalviptelegramsitewhite-black":
          "var(--canalviptelegramsitewhite-black)",
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
      fontFamily: {
        "canalviptelegram-site-poppins-regular":
          "var(--canalviptelegram-site-poppins-regular-font-family)",
        "canalviptelegram-site-semantic-heading-1":
          "var(--canalviptelegram-site-semantic-heading-1-font-family)",
        "canalviptelegram-site-semantic-heading-2":
          "var(--canalviptelegram-site-semantic-heading-2-font-family)",
        "canalviptelegram-site-semantic-heading-2-upper":
          "var(--canalviptelegram-site-semantic-heading-2-upper-font-family)",
        "canalviptelegram-site-semantic-heading-6":
          "var(--canalviptelegram-site-semantic-heading-6-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
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
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
