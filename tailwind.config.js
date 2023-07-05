export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
      ada:'Agdasima',
      raleway:'Raleway'
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
      },
      backgroundImage: {
        site: "url('./assets/site-bg.jpg')",
        about: "url('./assets/about.png')",
        services: "url('./assets/services.png')",
        site2: "url('https://images.pexels.com/photos/7130488/pexels-photo-7130488.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')",
      about2:"url('./assets/about2.png')"
      },
    },
  },
  plugins: [require("daisyui")],
}