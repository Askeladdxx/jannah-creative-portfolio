import { ref } from "vue";

export default {
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true),
    };
  },
  data() {
    return {
      navbtns: ["home", "about me", "socials", "experience"],
    };
  },
  methods: {
    handleButtonClick(button) {
      console.log("Button clicked:", button);
      // Add your logic here to navigate to the desired destination based on the selected button
      if (button === "home") {
        this.$router.push("/");
      } else if (button === "about me") {
        // Navigate to the Logo and Mockup page
        this.$router.push("/about-me");
      } else if (button === "socials") {
        // Navigate to the Logo and Mockup page
        this.$router.push("/socials");
      }
    },
  },
};
