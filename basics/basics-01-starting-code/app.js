const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "Learn Vue",
      courseGoalB: "Master Vue",
      vueJsHomePage: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      }
      return this.courseGoalB;
    },
  },
});
app.mount("#user-goal");
