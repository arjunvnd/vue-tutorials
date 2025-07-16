const app = Vue.createApp({
  data() {
    return {
      output: "",
      outPutOnEnter: "",
    };
  },
  methods: {
    showAlert() {
      alert("I am alert");
    },
    showOnKeyDown(e) {
      this.output = e.target.value;
    },
    showOnEnter(e) {
      this.outPutOnEnter = e.target.value;
    },
  },
});

app.mount("#assignment");
