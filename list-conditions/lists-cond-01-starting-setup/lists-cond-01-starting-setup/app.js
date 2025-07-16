const app = Vue.createApp({
  data() {
    return { goals: [], goalValue: "" };
  },
  methods: {
    onAddGoal() {
      this.goals.push(this.goalValue);
    },
    onRemoveGoal(index) {
      this.goals.splice(index, 1);
    },
  },
});

app.mount("#user-goals");
