/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/_app.js',
    './pages/_document.js',
    './pages/index.jsx',
    './pages/Info.jsx',
    './pages/Themes.jsx',
    './pages/Themes/[name_theme].jsx',
    './pages/Themes/[...note_id].jsx',
    './components/MdxComponents/pre.jsx',
    './components/MdxComponents/img.jsx',
    './components/common/svg.jsx',
    './components/common/buttons.jsx',
    './components/common/cards.jsx',
    './components/layouts/terminal.jsx',
    './components/layouts/footer.jsx',
    './components/layouts/menu.jsx',
    './components/layouts/nav_bar.jsx',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
