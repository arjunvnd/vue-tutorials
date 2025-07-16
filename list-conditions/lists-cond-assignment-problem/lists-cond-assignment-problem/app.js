const app = Vue.createApp({
  data() {
    return {
      newTask: "",
      tasks: [],
      showTasks: true,
    };
  },
  methods: {
    addNewTask() {
      this.tasks.push(this.newTask);
      this.newTask = "";
    },
    toggleList() {
      this.showTasks = !this.showTasks;
    },
  },
});

app.mount("#assignment");
