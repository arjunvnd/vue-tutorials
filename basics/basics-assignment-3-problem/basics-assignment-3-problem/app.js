const app = Vue.createApp({
  data() {
    return { value: 0 };
  },
  computed: {
    result() {
      if (this.value < 37) {
        return "Not there";
      } else if (this.value > 37) {
        return "Too much";
      } else {
        return this.value;
      }
    },
  },
  watch: {
    value(currentValue) {
      setTimeout(() => {
        console.log("This is executed");
        this.value = 0;
      }, 5000);
    },
  },
  methods: {
    add(addedNumber) {
      this.value += addedNumber;
    },
  },
});

app.mount("#assignment");
