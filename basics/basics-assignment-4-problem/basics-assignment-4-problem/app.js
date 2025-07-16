const app = Vue.createApp({
  data() {
    return {
      userClass: "",
      showPara: true,
      inputColour: "",
    };
  },
  computed: {
    paraStyles() {
      return {
        user1: this.userClass === "user1",
        user2: this.userClass === "user2",
        hidden: !this.showPara,
        visible: this.showPara,
      };
    },
  },

  methods: {
    setUserClass(e) {
      this.userClass = e.target.value;
      console.log("class", this.userClass);
    },
    togglePara() {
      this.showPara = !this.showPara;
    },
  },
});

app.mount("#assignment");
