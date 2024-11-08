/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
     'custom-blue': '0 10px 16px rgba(000, 000, 000)',
  },
    },
  },
  plugins: [],
}

// tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       boxShadow: {
//         'custom-blue': '0 4px 6px rgba(59, 130, 246, 0.5)', // Example blue shadow
//         'custom-red': '0 4px 6px rgba(239, 68, 68, 0.5)',    // Example red shadow
//         'custom-green': '0 4px 6px rgba(16, 185, 129, 0.5)', // Example green shadow
//       },
//     },
//   },
// }

