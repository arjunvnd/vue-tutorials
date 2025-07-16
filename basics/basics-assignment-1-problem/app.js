const app = Vue.createApp({
  data() {
    return {
      name: "Arjun",
      age: 29,
      ageInFourYears: 34,
      favoriteRandomNumber: Math.random(),
      image:
        "https://www.shutterstock.com/shutterstock/photos/2461678603/display_1500/stock-vector-the-flag-of-india-flag-icon-standard-color-vector-illustration-2461678603.jpg",
    };
  },
  methods: {
    getRandomNumber() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
