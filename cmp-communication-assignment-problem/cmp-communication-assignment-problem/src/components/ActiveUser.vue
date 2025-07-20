<template>
  <form @submit.prevent="addUser">
    <label for="name">Name</label>
    <input v-model="name" type="text" name="name" />
    <label for="age">Age</label>
    <input v-model="age" type="text" name="Age" />
    <button type="submit">Add User</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      age: "",
    };
  },
  emits: ["add-user"],
  methods: {
    addUser() {
      const newUser = {
        name: this.name,
        age: this.age,
        id: Date.now(),
      };
      this.$emit("add-user", newUser);
    },
  },
};
</script>
