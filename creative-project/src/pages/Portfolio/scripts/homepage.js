export default {
  data() {
    return {
      navbtns: ["about me", "socials", "experience"],
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
      // Add your logic here to navigate to the desired destination based on the selected button
      if (button === "Graphic Design") {
        this.$router.push("/graphic-design");
      } else if (button === "3D Art") {
        // Navigate to the 3D Art page
        this.$router.push("/3d-art");
      } else if (button === "2D Art") {
        // Navigate to the 2D Art page
        this.$router.push("/2d-art");
      } else if (button === "Pixel Art") {
        // Navigate to the Pixel Art page
        this.$router.push("/pixel-art");
      } else if (button === "Logo and Mockup") {
        // Navigate to the Logo and Mockup page
        this.$router.push("/logo-and-mockup");
      }
    },
  },
};
