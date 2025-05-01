// tailwind.config.js
export default {
    content: [
      "./src/**/*.{astro,html,js,jsx,ts,tsx}",
      "./public/index.html"
    ],
    theme: {
      extend: {},
    },
    plugins: [
      // habilita el aspect‑ratio para usar aspect-video, aspect-w-3, aspect-h-2...
      require('@tailwindcss/aspect-ratio'),
    ],
  };
  