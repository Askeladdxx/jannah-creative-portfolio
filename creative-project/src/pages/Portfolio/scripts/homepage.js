export default {
  data() {
    return {
      buttons: [
        "Graphic Design",
        "3D Art",
        "2D Art",
        "Pixel Art",
        "Logo and Mockup",
      ],
    };
  },
  methods: {
    handleButtonClick(button) {
      console.log("Button clicked:", button);
      // Add your logic here to handle button click
    },
  },
};
