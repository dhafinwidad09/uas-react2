module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        "1/10": "10%",
        "2/10": "20%",
        "3/30": "30%",
        "4/40": "40%",
        "5/10": "50%",
        "6/10": "60%",
        "7/10": "70%",
        "8/10": "80%",
        "9/10": "90%",
      },
      
      fontFamily: {
        poppins: ["Poppins"],
      },
      fontWeight: {
        'extrablack' : 'bolder'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};