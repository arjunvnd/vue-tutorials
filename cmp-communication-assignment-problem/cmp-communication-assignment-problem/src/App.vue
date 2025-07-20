<template>
  <h1>User Data</h1>
  <user-data
    v-for="user in activeUsers"
    :key="user.id"
    v-bind="user"
  ></user-data>
  <active-user @add-user="addUser"></active-user>
</template>

<script>
export default {
  data() {
    return {
      activeUsers: [],
    };
  },
  methods: {
    addUser(newUser) {
      this.activeUsers.push(newUser);
    },
  },
};
</script>
