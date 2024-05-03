/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ["src/components/header/Header.jsx", "src/components/SectionTitle.jsx","src/components/header/MobileHeader.jsx","src/components/header/SearchBox.jsx", "src/components/footer/Footer.jsx", "src/pages/Construction.jsx","src/components/Logo.jsx", "src/components/HomeSliderCard.jsx",  "src/pages/Login.jsx", "src/pages/Register.jsx", "src/pages/UserPage.jsx", "src/pages/UserSettingsPage.jsx", "src/components/FileInputButton.jsx" , "src/components/CategoriesCard.jsx", "src/components/Categories.jsx"],
  theme: {
    extend: {
      colors:{
        'unnamed-color-1ac54d': '#1AC54D',
        'unnamed-color-a0a0a0': '#A0A0A0',
        'unnamed-color-ffffff': '#FFFFFF',
        'unnamed-color-707070': '#707070',
        'unnamed-color-595958': '#595958',
        'unnamed-color-a7a7a7': '#A7A7A7',
        'unnamed-color-efefef': '#EFEFEF',
        'unnamed-color-1f1f1f': '#1F1F1F',
        'unnamed-color-fdc00d': '#FDC00D',
        'unnamed-color-c7c7c7': '#C7C7C7',
      },
      boxShadow: {
        'custom': '0px 3px 6px #00000029',
        'header' :' 0px 0px 6px #00000059',
        'button' : '0px 3px 6px #00000082',
        'mob_header' : '0px 0px 8px #0000007A',
      }
    },
  },
  plugins: [],
}

